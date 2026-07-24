// Module ID: 952
// Function ID: 10314
// Name: AsyncFromSyncIterator
// Dependencies: [77, 65, 942, 944, 817, 845, 934]
// Exports: instrumentStream

// Module 952 (AsyncFromSyncIterator)
import _defineProperty from "_defineProperty";
import _toConsumableArray from "_toConsumableArray";
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
function processChunk(promptFeedback, arg1, arg2, setStatus) {
  let tmp = promptFeedback;
  if (promptFeedback) {
    promptFeedback = undefined;
    if (null != promptFeedback) {
      promptFeedback = promptFeedback.promptFeedback;
    }
    let flag = false;
    if (null != promptFeedback) {
      flag = false;
      if (promptFeedback.blockReason) {
        let blockReason = promptFeedback.blockReasonMessage;
        if (null == blockReason) {
          blockReason = promptFeedback.blockReason;
        }
        let obj = { code: require(817) /* getSpanStatusFromHttpCode */.SPAN_STATUS_ERROR };
        const _HermesInternal = HermesInternal;
        obj.message = "Content blocked: " + blockReason;
        setStatus.setStatus(obj);
        const _HermesInternal2 = HermesInternal;
        obj = { mechanism: { handled: false, type: "auto.ai.google_genai" } };
        require(845) /* captureCheckIn */.captureException("Content blocked: " + blockReason, obj);
        flag = true;
        const obj2 = require(845) /* captureCheckIn */;
      }
    }
    tmp = !flag;
  }
  if (tmp) {
    if ("string" === typeof promptFeedback.responseId) {
      arg1.responseId = promptFeedback.responseId;
    }
    if ("string" === typeof promptFeedback.modelVersion) {
      arg1.responseModel = promptFeedback.modelVersion;
    }
    const usageMetadata = promptFeedback.usageMetadata;
    if (usageMetadata) {
      if ("number" === typeof usageMetadata.promptTokenCount) {
        arg1.promptTokens = usageMetadata.promptTokenCount;
      }
      if ("number" === typeof usageMetadata.candidatesTokenCount) {
        arg1.completionTokens = usageMetadata.candidatesTokenCount;
      }
      if ("number" === typeof usageMetadata.totalTokenCount) {
        arg1.totalTokens = usageMetadata.totalTokenCount;
      }
    }
    const _Array = Array;
    if (Array.isArray(promptFeedback.functionCalls)) {
      const toolCalls = tmp9.toolCalls;
      const push = toolCalls.push;
      push.apply(toolCalls, _toConsumableArray(promptFeedback.functionCalls));
    }
    let candidates = promptFeedback.candidates;
    if (null == candidates) {
      candidates = [];
    }
    const iter = candidates[Symbol.iterator]();
    while (true) {
      let nextResult = iter.next();
      let tmp18 = iter;
      if (iter === undefined) {
        break;
      } else {
        let tmp35 = nextResult;
        let tmp36 = null != nextResult;
        let finishReason = tmp36;
        if (tmp36) {
          let tmp19 = nextResult;
          finishReason = tmp35.finishReason;
        }
        let tmp20 = finishReason;
        if (finishReason) {
          let tmp21 = arg1;
          let finishReasons = tmp9.finishReasons;
          let tmp22 = nextResult;
          tmp20 = !finishReasons.includes(tmp35.finishReason);
        }
        if (tmp20) {
          let tmp23 = arg1;
          finishReasons = tmp9.finishReasons;
          let tmp24 = nextResult;
          let arr = finishReasons.push(tmp35.finishReason);
        }
        let tmp26 = nextResult;
        let parts;
        if (null != tmp35) {
          let tmp28 = nextResult;
          let content = tmp35.content;
          if (null != content) {
            let tmp30 = content;
            parts = tmp29.parts;
          }
        }
        let tmp31 = parts;
        let tmp32 = null != parts ? parts : [];
        let tmp33 = tmp32;
        let tmp34 = tmp32[Symbol.iterator]();
      }
    }
  }
}
async function _instrumentStream(arg0, arg1, arg2, arg3) {
  let obj2;
  const obj = { responseTexts: [], finishReasons: [], toolCalls: [] };
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
        let tmp10 = outer2_6;
        let prototype2 = outer2_6.prototype;
        let tmp11 = new.target;
        let tmp12 = new.target;
        let iter = new outer2_6(obj3.call(arg0));
      }
      let iter2 = iter;
      let tmp13 = outer2_4;
      let iter3 = yield outer2_4(iter.next());
      let iter4 = iter3;
      let tmp14 = !iter3.done;
      let tmp15 = tmp14;
      if (tmp14) {
        let tmp16 = iter4;
        let value = iter4.value;
        let tmp17 = outer2_7;
        let tmp18 = obj;
        let tmp19 = arg2;
        let tmp20 = arg1;
        let tmp21 = value;
        let tmp22 = outer2_7(value, tmp2, arg2, arg1);
        let tmp23 = yield value;
        do {
          let flag2 = false;
          let tmp24 = outer2_4;
          let tmp25 = iter;
          let iter5 = yield outer2_4(iter2.next());
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
          let tmp31 = outer2_4;
          let tmp32 = iter;
          let tmp33 = yield outer2_4(iter2.return());
        }
        let tmp34 = flag;
        if (flag) {
          let tmp87 = tmp;
          throw tmp;
        } else {
          let tmp35 = outer2_2;
          let tmp36 = outer2_0;
          let tmp37 = outer2_1;
          let num2 = 6;
          let flag3 = true;
          let tmp38 = outer2_2({}, outer2_0(outer2_1[6]).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE, true);
          let tmp39 = obj;
          if (tmp2.responseId) {
            let tmp40 = tmp38;
            let tmp41 = outer2_0;
            let tmp42 = outer2_1;
            let tmp43 = obj;
            tmp38[outer2_0(outer2_1[6]).GEN_AI_RESPONSE_ID_ATTRIBUTE] = tmp2.responseId;
          }
          let tmp44 = obj;
          if (tmp2.responseModel) {
            let tmp45 = tmp38;
            let tmp46 = outer2_0;
            let tmp47 = outer2_1;
            let tmp48 = obj;
            tmp38[outer2_0(outer2_1[6]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = tmp2.responseModel;
          }
          let tmp49 = obj;
          if (undefined !== tmp2.promptTokens) {
            let tmp50 = tmp38;
            let tmp51 = outer2_0;
            let tmp52 = outer2_1;
            let tmp53 = obj;
            tmp38[outer2_0(outer2_1[6]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = tmp2.promptTokens;
          }
          let tmp54 = obj;
          if (undefined !== tmp2.completionTokens) {
            let tmp55 = tmp38;
            let tmp56 = outer2_0;
            let tmp57 = outer2_1;
            let tmp58 = obj;
            tmp38[outer2_0(outer2_1[6]).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = tmp2.completionTokens;
          }
          let tmp59 = obj;
          if (undefined !== tmp2.totalTokens) {
            let tmp60 = tmp38;
            let tmp61 = outer2_0;
            let tmp62 = outer2_1;
            let tmp63 = obj;
            tmp38[outer2_0(outer2_1[6]).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = tmp2.totalTokens;
          }
          let tmp64 = obj;
          if (tmp2.finishReasons.length) {
            let tmp65 = tmp38;
            let tmp66 = outer2_0;
            let tmp67 = outer2_1;
            let tmp68 = globalThis;
            let _JSON = JSON;
            let tmp69 = obj;
            tmp38[outer2_0(outer2_1[6]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(tmp2.finishReasons);
          }
          let tmp70 = arg2;
          let length = arg2;
          if (arg2) {
            let tmp71 = obj;
            length = tmp2.responseTexts.length;
          }
          if (length) {
            let tmp72 = tmp38;
            let tmp73 = outer2_0;
            let tmp74 = outer2_1;
            let tmp75 = obj;
            let responseTexts = tmp2.responseTexts;
            let str4 = "";
            tmp38[outer2_0(outer2_1[6]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts.join("");
          }
          let tmp76 = arg2;
          let length2 = arg2;
          if (arg2) {
            let tmp77 = obj;
            length2 = tmp2.toolCalls.length;
          }
          if (length2) {
            let tmp78 = tmp38;
            let tmp79 = outer2_0;
            let tmp80 = outer2_1;
            let tmp81 = globalThis;
            let _JSON2 = JSON;
            let tmp82 = obj;
            tmp38[outer2_0(outer2_1[6]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(tmp2.toolCalls);
          }
          let tmp83 = arg1;
          let tmp84 = tmp38;
          let setAttributesResult = arg1.setAttributes(tmp38);
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

export const instrumentStream = function instrumentStream(arg0, arg1, arg2) {
  return _instrumentStream(...arguments);
};
