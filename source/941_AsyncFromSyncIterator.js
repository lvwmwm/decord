// Module ID: 941
// Function ID: 10202
// Name: AsyncFromSyncIterator
// Dependencies: []
// Exports: instrumentStream

// Module 941 (AsyncFromSyncIterator)
function AsyncFromSyncIterator(arg0) {
  function AsyncFromSyncIteratorContinuation(done) {
    if (Object(done) !== done) {
      const _TypeError = TypeError;
      const typeError = new TypeError(done + " is not an object.");
      return Promise.reject(typeError);
    } else {
      const AsyncFromSyncIteratorContinuation = done.done;
      const resolved = Promise.resolve(done.value);
      return resolved.then((value) => ({ value, done }));
    }
  }
  class AsyncFromSyncIterator {
    constructor(arg0) {
      this.s = arg0;
      this.n = arg0.next;
      return;
    }
  }
  const obj = {
    accessibilityRole: "o",
    HermesInternal: "o",
    next() {
      const n = this.n;
      return AsyncFromSyncIteratorContinuation(n(...arguments));
    },
    return: function _return(value) {
      const _return = this.s.return;
      if (undefined === _return) {
        const obj = { value, done: true };
        let resolved = Promise.resolve(obj);
      } else {
        resolved = AsyncFromSyncIteratorContinuation(_return(...arguments));
      }
      return resolved;
    },
    throw: function _throw(arg0) {
      const _return = this.s.return;
      if (undefined === _return) {
        let rejectResult = Promise.reject(arg0);
      } else {
        rejectResult = AsyncFromSyncIteratorContinuation(_return(...arguments));
      }
      return rejectResult;
    }
  };
  AsyncFromSyncIterator.prototype = obj;
  return new AsyncFromSyncIterator(arg0);
}
function processChatCompletionToolCalls(arg0, chatCompletionToolCalls) {
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp14 = nextResult;
    let index = nextResult.index;
    let tmp15 = index;
    if (undefined !== index) {
      let tmp16 = nextResult;
      if (tmp14.function) {
        let tmp2 = index;
        let tmp3 = chatCompletionToolCalls;
        let tmp4 = chatCompletionToolCalls;
        chatCompletionToolCalls = chatCompletionToolCalls.chatCompletionToolCalls;
        let tmp5 = index;
        if (tmp15 in chatCompletionToolCalls.chatCompletionToolCalls) {
          let tmp7 = chatCompletionToolCalls[tmp15];
          let tmp8 = nextResult;
          let _arguments2 = tmp14.function.arguments;
          let tmp9 = _arguments2;
          if (_arguments2) {
            let tmp10 = tmp7;
            tmp9 = null != tmp7;
          }
          let _function = tmp9;
          if (tmp9) {
            let tmp11 = tmp7;
            _function = tmp7.function;
          }
          if (_function) {
            let tmp12 = tmp7;
            let _function2 = tmp7.function;
            let tmp13 = nextResult;
            _function2.arguments = _function2.arguments + tmp14.function.arguments;
          }
        } else {
          let tmp6 = nextResult;
          let obj = {};
          obj = { name: tmp14.function.name };
          let _arguments = tmp14.function.arguments;
          let str = _arguments;
          if (!_arguments) {
            str = "";
          }
          obj.arguments = str;
          obj.function = obj;
          chatCompletionToolCalls[tmp15] = Object.assign({}, tmp14, obj);
        }
      }
    }
    // continue
  }
}
function processChatCompletionChunk(id) {
  let responseId = id.id;
  if (null == responseId) {
    responseId = tmp.responseId;
  }
  arg1.responseId = responseId;
  let responseModel = id.model;
  if (null == responseModel) {
    responseModel = tmp.responseModel;
  }
  arg1.responseModel = responseModel;
  let responseTimestamp = id.created;
  if (null == responseTimestamp) {
    responseTimestamp = tmp.responseTimestamp;
  }
  arg1.responseTimestamp = responseTimestamp;
  if (id.usage) {
    tmp.promptTokens = id.usage.prompt_tokens;
    tmp.completionTokens = id.usage.completion_tokens;
    tmp.totalTokens = id.usage.total_tokens;
  }
  let choices = id.choices;
  if (null == choices) {
    choices = [];
  }
  for (const item10028 of choices) {
    let tmp25 = item10028;
    let tmp26 = arg2;
    if (arg2) {
      let tmp6 = item10028;
      let delta = tmp25.delta;
      let tmp8 = null != delta;
      let content = tmp8;
      if (tmp8) {
        let tmp9 = delta;
        content = tmp7.content;
      }
      if (content) {
        let tmp10 = arg1;
        let responseTexts = tmp.responseTexts;
        let tmp11 = item10028;
        let arr = responseTexts.push(tmp25.delta.content);
      }
      let tmp13 = item10028;
      let delta2 = tmp25.delta;
      let tmp15 = null != delta2;
      let tool_calls = tmp15;
      if (tmp15) {
        let tmp16 = delta2;
        tool_calls = tmp14.tool_calls;
      }
      if (tool_calls) {
        let tmp17 = closure_7;
        let tmp18 = item10028;
        let tmp19 = arg1;
        let tmp20 = closure_7(tmp25.delta.tool_calls, tmp);
      }
    }
    let tmp21 = item10028;
    if (tmp25.finish_reason) {
      let tmp22 = arg1;
      let finishReasons = tmp.finishReasons;
      let tmp23 = item10028;
      arr = finishReasons.push(tmp25.finish_reason);
    }
  }
}
function processResponsesApiEvent(type, responsesApiToolCalls, arg2, setStatus) {
  let output_text = arg2;
  if (type) {
    if ("object" === typeof type) {
      const _Error = Error;
      if (type instanceof Error) {
        let obj = { code: require(dependencyMap[4]).SPAN_STATUS_ERROR, message: "internal_error" };
        setStatus.setStatus(obj);
        obj = { mechanism: { priority: null, "Bool(false)": null } };
        require(dependencyMap[5]).captureException(type, obj);
      } else if ("type" in type) {
        const RESPONSE_EVENT_TYPES = require(dependencyMap[6]).RESPONSE_EVENT_TYPES;
        if (RESPONSE_EVENT_TYPES.includes(type.type)) {
          if (output_text) {
            let tmp6 = "response.output_item.done" === type.type;
            if (tmp6) {
              tmp6 = "item" in type;
            }
            if (tmp6) {
              const prop = responsesApiToolCalls.responsesApiToolCalls;
              prop.push(type.item);
            }
            if ("response.output_text.delta" === type.type) {
              if ("delta" in type) {
                if (type.delta) {
                  const responseTexts = responsesApiToolCalls.responseTexts;
                  responseTexts.push(type.delta);
                }
              }
            }
          }
          if ("response" in type) {
            const response = type.response;
            let responseId = response.id;
            if (null == responseId) {
              responseId = responsesApiToolCalls.responseId;
            }
            responsesApiToolCalls.responseId = responseId;
            let responseModel = response.model;
            if (null == responseModel) {
              responseModel = responsesApiToolCalls.responseModel;
            }
            responsesApiToolCalls.responseModel = responseModel;
            let responseTimestamp = response.created_at;
            if (null == responseTimestamp) {
              responseTimestamp = responsesApiToolCalls.responseTimestamp;
            }
            responsesApiToolCalls.responseTimestamp = responseTimestamp;
            if (response.usage) {
              responsesApiToolCalls.promptTokens = response.usage.input_tokens;
              responsesApiToolCalls.completionTokens = response.usage.output_tokens;
              responsesApiToolCalls.totalTokens = response.usage.total_tokens;
            }
            if (response.status) {
              const finishReasons = responsesApiToolCalls.finishReasons;
              finishReasons.push(response.status);
            }
            if (output_text) {
              output_text = response.output_text;
            }
            if (output_text) {
              const responseTexts1 = responsesApiToolCalls.responseTexts;
              responseTexts1.push(response.output_text);
            }
          }
        } else {
          const eventTypes = responsesApiToolCalls.eventTypes;
          eventTypes.push(type.type);
        }
      }
    }
  }
  const eventTypes1 = responsesApiToolCalls.eventTypes;
  eventTypes1.push("unknown:non-object");
}
async function _instrumentStream(arg0, setAttributes, arg2, arg3) {
  let obj2;
  const obj = { autoPlayReverse: "mn", for: "description", class: "Array", getHours: "isArray", useIsParentallyControlled: "key", keywordLists: "accessibilityRole", eventTypes: [], responseTexts: [], finishReasons: [], promptTokens: undefined, completionTokens: undefined, totalTokens: undefined, chatCompletionToolCalls: {}, responsesApiToolCalls: [] };
  if ("undefined" !== typeof Symbol) {
    const _Symbol = Symbol;
    let str = Symbol.asyncIterator;
    const _Symbol2 = Symbol;
    let str2 = Symbol.iterator;
  }
  let num = 1;
  while (true) {
    if (str) {
      obj2 = arg0[str];
      let tmp3 = obj2;
      if (null != obj2) {
        break;
      }
    }
    if (str2) {
      let obj3 = arg0[str2];
      let tmp4 = obj3;
      if (null != obj3) {
        let tmp10 = ctor;
        let prototype2 = ctor.prototype;
        let tmp11 = new.target;
        let tmp12 = new.target;
        let iter = new ctor(obj3.call(arg0));
      }
      let iter2 = iter;
      let tmp13 = closure_4;
      let iter3 = yield closure_4(iter.next());
      let iter4 = iter3;
      let tmp14 = !iter3.done;
      let tmp15 = tmp14;
      let num2 = 7;
      if (tmp14) {
        do {
          let tmp16 = iter4;
          let value = iter4.value;
          let tmp17 = value;
          let tmp18 = closure_0;
          let tmp19 = closure_1;
          let obj4 = closure_0(closure_1[7]);
          if (obj4.isChatCompletionChunk(value)) {
            let tmp29 = closure_8;
            let tmp30 = value;
            let tmp31 = obj;
            let tmp32 = arg2;
            let tmp33 = closure_8(tmp17, tmp2, arg2);
          } else {
            let tmp20 = closure_0;
            let tmp21 = closure_1;
            let obj5 = closure_0(closure_1[7]);
            let tmp22 = value;
            if (obj5.isResponsesApiStreamEvent(tmp17)) {
              let tmp23 = closure_9;
              let tmp24 = value;
              let tmp25 = obj;
              let tmp26 = arg2;
              let tmp27 = setAttributes;
              let tmp28 = closure_9(tmp17, tmp2, arg2, setAttributes);
            }
          }
          let tmp34 = yield value;
          let flag2 = false;
          let tmp35 = closure_4;
          let tmp36 = iter;
          let iter5 = yield closure_4(iter2.next());
          iter4 = iter5;
          let tmp37 = !iter5.done;
          tmp15 = tmp37;
        } while (tmp37);
      }
      while (true) {
        let tmp38 = tmp15;
        let tmp39 = tmp15;
        if (!tmp15) {
          break;
        } else {
          let tmp40 = iter;
          let tmp41 = null;
          tmp39 = null != iter2.return;
          // break
        }
        if (tmp39) {
          let tmp42 = closure_4;
          let tmp43 = iter;
          let tmp44 = yield closure_4(iter2.return());
        }
        let tmp45 = flag;
        if (flag) {
          let tmp86 = tmp;
          throw tmp;
        } else {
          let tmp46 = callback;
          let tmp47 = closure_1;
          let num3 = 7;
          let obj6 = callback(closure_1[7]);
          let tmp48 = setAttributes;
          let tmp49 = obj;
          let tmp50 = obj6;
          let tmp51 = setAttributes;
          let result = obj6.setCommonResponseAttributes(setAttributes, tmp2.responseId, tmp2.responseModel, tmp2.responseTimestamp);
          let obj7 = callback(closure_1[7]);
          let tmp53 = obj7;
          let tmp54 = setAttributes;
          let result1 = obj7.setTokenUsageAttributes(setAttributes, tmp2.promptTokens, tmp2.completionTokens, tmp2.totalTokens);
          let tmp56 = callback3;
          let num4 = 8;
          let flag3 = true;
          let setAttributesResult = setAttributes.setAttributes(callback3({}, callback(closure_1[8]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE, true));
          if (tmp2.finishReasons.length) {
            let tmp58 = setAttributes;
            let tmp59 = callback3;
            let tmp60 = callback;
            let tmp61 = closure_1;
            let tmp62 = globalThis;
            let _JSON = JSON;
            let tmp63 = obj;
            let setAttributesResult1 = setAttributes.setAttributes(callback3({}, callback(closure_1[8]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE, JSON.stringify(tmp2.finishReasons)));
          }
          let tmp65 = arg2;
          let length = arg2;
          if (arg2) {
            let tmp66 = obj;
            length = tmp2.responseTexts.length;
          }
          if (length) {
            let tmp67 = setAttributes;
            let tmp68 = callback3;
            let tmp69 = callback;
            let tmp70 = closure_1;
            let tmp71 = obj;
            let responseTexts = tmp2.responseTexts;
            let setAttributesResult2 = setAttributes.setAttributes(callback3({}, callback(closure_1[8]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE, responseTexts.join("")));
          }
          let tmp73 = globalThis;
          let _Object = Object;
          let tmp74 = obj;
          let items = [];
          let tmp76 = callback2;
          let values = Object.values(tmp2.chatCompletionToolCalls);
          let combined = items.concat(values, callback2(tmp2.responsesApiToolCalls));
          if (combined.length > 0) {
            let tmp78 = setAttributes;
            let tmp79 = callback3;
            let tmp80 = callback;
            let tmp81 = closure_1;
            let _JSON2 = JSON;
            let tmp82 = combined;
            let setAttributesResult3 = setAttributes.setAttributes(callback3({}, callback(closure_1[8]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE, JSON.stringify(tmp77)));
          }
          let tmp84 = setAttributes;
          let endResult = setAttributes.end();
        }
      }
    }
    let tmp5 = +num;
    num = tmp5 - 1;
    str = "@@asyncIterator";
    str2 = "@@iterator";
    if (tmp5) {
      continue;
    } else {
      let _TypeError = TypeError;
      let tmp6 = new.target;
      let str3 = "Object is not async iterable";
      let tmp7 = new.target;
      let typeError = new TypeError("Object is not async iterable");
      let tmp9 = typeError;
      throw typeError;
    }
  }
  iter = obj2.call(arg0);
}
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
let closure_4 = require(dependencyMap[2]);
let closure_5 = require(dependencyMap[3]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const instrumentStream = function instrumentStream(arg0, arg1, arg2) {
  return _instrumentStream(...arguments);
};
