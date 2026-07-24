// Module ID: 16557
// Function ID: 129103
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 6, 7, 15, 17, 102, 18, 3823, 4143, 9168, 4342, 1352, 1348, 1906, 9527, 6651, 6941, 10499, 653, 6947, 1362, 4119, 4979, 6969, 10498, 10259, 3981, 668, 669, 4472, 6968, 3982, 5078, 2]

// Module 16557 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import MAX_BRAND_SAFETY_CONTEXT_ARRAY_LEN from "MAX_BRAND_SAFETY_CONTEXT_ARRAY_LEN";
import _get from "_get";
import ME from "ME";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import createChannelState from "createChannelState";
import withEqualityFn from "withEqualityFn";
import { isTextChannel } from "_callSuper";
import closure_16 from "_isNativeReflectConstruct";
import closure_17 from "_isNativeReflectConstruct";
import closure_18 from "_isNativeReflectConstruct";
import closure_19 from "_isNativeReflectConstruct";
import closure_20 from "_isNativeReflectConstruct";
import { MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE as closure_21 } from "MAX_BRAND_SAFETY_CONTEXT_ARRAY_LEN";
import { MessageStates } from "ME";
import tmp3 from "AutomaticLifecycleManager";

let closure_12;
let closure_13;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _superPropGet(arg0, arg1, arg2, arg3) {
  let closure_0 = arg2;
  let prototype = arg0;
  if (1) {
    prototype = arg0.prototype;
  }
  const tmpResult = _get(MAX_BRAND_SAFETY_CONTEXT_ARRAY_LEN(prototype), arg1, arg2);
  const importDefault = tmpResult;
  let fn = tmpResult;
  if (2) {
    fn = tmpResult;
    if ("function" === typeof tmpResult) {
      fn = (arg0) => tmpResult.apply(closure_0, arg0);
    }
  }
  return fn;
}
({ useChannelDetailsStore: closure_12, getIsChannelDetailsSearchActive: closure_13 } = createChannelState);
function log(arg0) {
  if (null == questLogger) {
    let obj = require(6947) /* getQuestLogger */;
    obj = { location: "QuestMobileEmbedVisibilityManager" };
    questLogger = obj.getQuestLogger(obj);
  }
}
tmp3 = new tmp3();
let result = require("_defineProperties").fileFinishedImporting("modules/quests/managers/QuestMobileEmbedVisibilityManager.native.tsx");

export default tmp3;
