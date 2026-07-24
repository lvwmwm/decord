// Module ID: 948
// Function ID: 10266
// Name: AsyncFromSyncIterator
// Dependencies: [77, 942, 944, 817, 845, 934, 936]
// Exports: instrumentAsyncIterableStream, instrumentMessageStream

// Module 948 (AsyncFromSyncIterator)
import _defineProperty from "_defineProperty";
import _awaitAsyncGenerator from "_awaitAsyncGenerator";
import AsyncGenerator from "AsyncGenerator";

function AsyncFromSyncIterator(arg0) {
  function AsyncFromSyncIteratorContinuation(done) {
    if (Object(done) !== done) {
      const _TypeError = TypeError;
      const typeError = new TypeError(done + " is not an object.");
      return Promise.reject(typeError);
    } else {
      done = done.done;
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
  let obj = {
    s: null,
    n: null,
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
function processEvent(type, finishReasons, arg2, setStatus) {
  let name;
  let tmp3 = arg2;
  if (type) {
    if ("object" === typeof type) {
      let flag = "type" in type;
      if (flag) {
        flag = "string" === typeof type.type;
      }
      if (flag) {
        flag = "error" === type.type;
      }
      if (flag) {
        let obj = { code: require(817) /* getSpanStatusFromHttpCode */.SPAN_STATUS_ERROR };
        const error = type.error;
        type = undefined;
        if (null != error) {
          type = error.type;
        }
        let str4 = "internal_error";
        if (null != type) {
          str4 = type;
        }
        obj.message = str4;
        setStatus.setStatus(obj);
        let obj1 = require(845) /* captureCheckIn */;
        obj = { mechanism: { handled: false, type: "auto.ai.anthropic.anthropic_error" } };
        obj1.captureException(type.error, obj);
        flag = true;
      }
      if (!flag) {
        let tmp12 = "message_delta" === type.type && type.usage;
        if (tmp12) {
          tmp12 = "output_tokens" in type.usage;
        }
        if (tmp12) {
          tmp12 = "number" === typeof type.usage.output_tokens;
        }
        if (tmp12) {
          finishReasons.completionTokens = type.usage.output_tokens;
        }
        if (type.message) {
          const message = type.message;
          if (message.id) {
            finishReasons.responseId = message.id;
          }
          if (message.model) {
            finishReasons.responseModel = message.model;
          }
          if (message.stop_reason) {
            finishReasons = finishReasons.finishReasons;
            finishReasons.push(message.stop_reason);
          }
          if (message.usage) {
            if ("number" === typeof message.usage.input_tokens) {
              finishReasons.promptTokens = message.usage.input_tokens;
            }
            if ("number" === typeof message.usage.cache_creation_input_tokens) {
              finishReasons.cacheCreationInputTokens = message.usage.cache_creation_input_tokens;
            }
            if ("number" === typeof message.usage.cache_read_input_tokens) {
              finishReasons.cacheReadInputTokens = message.usage.cache_read_input_tokens;
            }
          }
        }
        let content_block = "content_block_start" === type.type;
        if (content_block) {
          content_block = "number" === typeof type.index;
        }
        if (content_block) {
          content_block = type.content_block;
        }
        if (content_block) {
          let tmp14 = "tool_use" !== type.content_block.type;
          if (tmp14) {
            tmp14 = "server_tool_use" !== type.content_block.type;
          }
          if (!tmp14) {
            obj = { id: type.content_block.id, name: type.content_block.name, inputJsonParts: [] };
            finishReasons.activeToolBlocks[type.index] = obj;
          }
        }
        if ("content_block_delta" === type.type) {
          if (type.delta) {
            if ("number" === typeof type.index) {
              if ("partial_json" in type.delta) {
                if ("string" === typeof type.delta.partial_json) {
                  if (finishReasons.activeToolBlocks[type.index]) {
                    let inputJsonParts = tmp15.inputJsonParts;
                    inputJsonParts.push(type.delta.partial_json);
                  }
                }
              }
            }
            if (tmp3) {
              tmp3 = "string" === typeof type.delta.text;
            }
            if (tmp3) {
              const responseTexts = finishReasons.responseTexts;
              responseTexts.push(type.delta.text);
            }
          }
        }
        let activeToolBlocks = finishReasons;
        if ("content_block_stop" === type.type) {
          if ("number" === typeof tmp18.index) {
            name = tmp30;
            if (activeToolBlocks.activeToolBlocks[tmp18.index]) {
              inputJsonParts = name.inputJsonParts;
              const joined = inputJsonParts.join("");
              if (joined) {
                const _JSON = JSON;
                let parsed = JSON.parse(joined);
              } else {
                parsed = {};
              }
              let tmp24 = parsed;
              const toolCalls = activeToolBlocks.toolCalls;
              const push = toolCalls.push;
              obj1 = { type: "tool_use" };
              ({ id: obj7.id, name } = name);
              obj1.name = name;
              obj1.input = tmp24;
              push(obj1);
              activeToolBlocks = activeToolBlocks.activeToolBlocks;
              delete tmp2[tmp];
              while (true) {
                let tmp25 = __exception;
                let obj2 = { __unparsed: push };
                tmp24 = obj2;
                continue;
              }
            }
          }
        }
      }
    }
  }
}
async function _instrumentAsyncIterableStream(arg0, arg1, arg2, arg3) {
  let obj2;
  const obj = { responseTexts: [], finishReasons: [], responseId: "", responseModel: "", promptTokens: undefined, completionTokens: undefined, cacheCreationInputTokens: undefined, cacheReadInputTokens: undefined, toolCalls: [], activeToolBlocks: {} };
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
        let tmp10 = outer2_5;
        let prototype2 = outer2_5.prototype;
        let tmp11 = new.target;
        let tmp12 = new.target;
        let iter = new outer2_5(obj3.call(arg0));
      }
      let iter2 = iter;
      let tmp13 = outer2_3;
      let iter3 = yield outer2_3(iter.next());
      let iter4 = iter3;
      let tmp14 = !iter3.done;
      let tmp15 = tmp14;
      if (tmp14) {
        let tmp16 = iter4;
        let value = iter4.value;
        let tmp17 = outer2_6;
        let tmp18 = obj;
        let tmp19 = arg2;
        let tmp20 = arg1;
        let tmp21 = value;
        let tmp22 = outer2_6(value, tmp2, arg2, arg1);
        let tmp23 = yield value;
        do {
          let flag2 = false;
          let tmp24 = outer2_3;
          let tmp25 = iter;
          let iter5 = yield outer2_3(iter2.next());
          iter4 = iter5;
          tmp26 = !iter5.done;
          tmp15 = tmp26;
        } while (tmp26);
      }
      while (true) {
        let tmp27 = tmp15;
        let tmp28 = tmp15;
        if (!tmp15) {
          break;
        } else {
          let tmp29 = iter;
          let tmp30 = null;
          tmp28 = null != iter2.return;
          break;
        }
        if (tmp28) {
          let tmp31 = outer2_3;
          let tmp32 = iter;
          let tmp33 = yield outer2_3(iter2.return());
        }
        let tmp34 = flag;
        if (flag) {
          let tmp86 = tmp;
          throw tmp;
        } else {
          let tmp35 = obj;
          if (tmp2.responseId) {
            let tmp36 = arg1;
            let tmp37 = outer2_2;
            let tmp38 = outer2_0;
            let tmp39 = outer2_1;
            let num2 = 5;
            let tmp40 = obj;
            let setAttributesResult = arg1.setAttributes(outer2_2({}, outer2_0(outer2_1[5]).GEN_AI_RESPONSE_ID_ATTRIBUTE, tmp2.responseId));
          }
          let tmp42 = obj;
          if (tmp2.responseModel) {
            let tmp43 = arg1;
            let tmp44 = outer2_2;
            let tmp45 = outer2_0;
            let tmp46 = outer2_1;
            let num3 = 5;
            let tmp47 = obj;
            let setAttributesResult1 = arg1.setAttributes(outer2_2({}, outer2_0(outer2_1[5]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE, tmp2.responseModel));
          }
          let tmp49 = outer2_0;
          let tmp50 = outer2_1;
          let num4 = 6;
          let obj4 = outer2_0(outer2_1[6]);
          let tmp51 = arg1;
          let tmp52 = obj;
          let tmp53 = obj4;
          let tmp54 = arg1;
          let result = obj4.setTokenUsageAttributes(arg1, tmp2.promptTokens, tmp2.completionTokens, tmp2.cacheCreationInputTokens, tmp2.cacheReadInputTokens);
          let tmp56 = outer2_2;
          let num5 = 5;
          let flag3 = true;
          let setAttributesResult2 = arg1.setAttributes(outer2_2({}, outer2_0(outer2_1[5]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE, true));
          let num6 = 0;
          if (tmp2.finishReasons.length > 0) {
            let tmp58 = arg1;
            let tmp59 = outer2_2;
            let tmp60 = outer2_0;
            let tmp61 = outer2_1;
            let tmp62 = globalThis;
            let _JSON = JSON;
            let tmp63 = obj;
            let setAttributesResult3 = arg1.setAttributes(outer2_2({}, outer2_0(outer2_1[5]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE, JSON.stringify(tmp2.finishReasons)));
          }
          let tmp65 = arg2;
          let tmp66 = arg2;
          if (arg2) {
            let tmp67 = obj;
            tmp66 = tmp2.responseTexts.length > 0;
          }
          if (tmp66) {
            let tmp68 = arg1;
            let tmp69 = outer2_2;
            let tmp70 = outer2_0;
            let tmp71 = outer2_1;
            let tmp72 = obj;
            let responseTexts = tmp2.responseTexts;
            let setAttributesResult4 = arg1.setAttributes(outer2_2({}, outer2_0(outer2_1[5]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE, responseTexts.join("")));
          }
          let tmp74 = arg2;
          let tmp75 = arg2;
          if (arg2) {
            let tmp76 = obj;
            tmp75 = tmp2.toolCalls.length > 0;
          }
          if (tmp75) {
            let tmp77 = arg1;
            let tmp78 = outer2_2;
            let tmp79 = outer2_0;
            let tmp80 = outer2_1;
            let tmp81 = globalThis;
            let _JSON2 = JSON;
            let tmp82 = obj;
            let setAttributesResult5 = arg1.setAttributes(outer2_2({}, outer2_0(outer2_1[5]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE, JSON.stringify(tmp2.toolCalls)));
          }
          let tmp84 = arg1;
          let endResult = arg1.end();
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
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const instrumentAsyncIterableStream = function instrumentAsyncIterableStream(arg0, arg1, arg2) {
  return _instrumentAsyncIterableStream(...arguments);
};
export const instrumentMessageStream = function instrumentMessageStream(applyResult, arg1, arg2) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  let closure_2 = { responseTexts: [], finishReasons: [], responseId: "", responseModel: "", promptTokens: undefined, completionTokens: undefined, cacheCreationInputTokens: undefined, cacheReadInputTokens: undefined, toolCalls: [], activeToolBlocks: {} };
  applyResult.on("streamEvent", (arg0) => {
    outer1_6(arg0, closure_2, closure_1, closure_0);
  });
  applyResult.on("message", () => {
    let tmp2 = dependencyMap;
    if (lib.isRecording()) {
      if (tmp.responseId) {
        obj.setAttributes(callback({}, lib(934).GEN_AI_RESPONSE_ID_ATTRIBUTE, tmp.responseId));
      }
      if (tmp.responseModel) {
        obj.setAttributes(callback({}, lib(934).GEN_AI_RESPONSE_MODEL_ATTRIBUTE, tmp.responseModel));
      }
      const obj2 = lib(936);
      const result = obj2.setTokenUsageAttributes(obj, tmp.promptTokens, tmp.completionTokens, tmp.cacheCreationInputTokens, tmp.cacheReadInputTokens);
      obj.setAttributes(callback({}, lib(934).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE, true));
      if (tmp.finishReasons.length > 0) {
        const _JSON = JSON;
        obj.setAttributes(callback({}, lib(934).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE, JSON.stringify(tmp.finishReasons)));
      }
      let tmp23 = tmp2;
      if (tmp2) {
        tmp23 = tmp.responseTexts.length > 0;
      }
      if (tmp23) {
        const responseTexts = tmp.responseTexts;
        obj.setAttributes(callback({}, lib(934).GEN_AI_RESPONSE_TEXT_ATTRIBUTE, responseTexts.join("")));
      }
      if (tmp2) {
        tmp2 = tmp.toolCalls.length > 0;
      }
      if (tmp2) {
        const _JSON2 = JSON;
        obj.setAttributes(callback({}, lib(934).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE, JSON.stringify(tmp.toolCalls)));
      }
      obj.end();
    }
  });
  applyResult.on("error", (arg0) => {
    let obj = lib(845);
    obj.captureException(arg0, { mechanism: { handled: false, type: "auto.ai.anthropic.stream_error" } });
    if (lib.isRecording()) {
      obj = { code: lib(817).SPAN_STATUS_ERROR, message: "stream_error" };
      lib.setStatus(obj);
      lib.end();
    }
  });
  return applyResult;
};
