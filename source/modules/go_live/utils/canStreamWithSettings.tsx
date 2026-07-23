// Module ID: 10693
// Function ID: 83331
// Name: _createForOfIteratorHelperLoose
// Dependencies: [4185, 10694, 10695, 2]
// Exports: default

// Module 10693 (_createForOfIteratorHelperLoose)
import makeButton from "makeButton";

let closure_3;
let closure_4;
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
({ ApplicationStreamSettingRequirements: closure_3, ApplicationStreamPresets: closure_4 } = makeButton);
const result = require("canUseStreamSetting").fileFinishedImporting("modules/go_live/utils/canStreamWithSettings.tsx");

export default function canStreamWithSettings(arg0, arg1, arg2, arg3, arg4, arg5) {
  if (arg0 === constants.PRESET_AUTO) {
    let obj = require(10694) /* getGoLiveAutoQualityExperimentConfig */;
    obj = { location: "canStreamWithSettings" };
    return obj.getGoLiveAutoQualityExperimentConfig(obj).allowAutoQuality;
  } else {
    const tmp11 = _createForOfIteratorHelperLoose(closure_3);
    let iter2 = tmp11();
    if (!iter2.done) {
      while (true) {
        let value = iter2.value;
        if (null == value.preset) {
          if (arg1 === value.resolution) {
            if (arg2 === value.fps) {
              let tmp = importDefault;
              let tmp2 = dependencyMap;
              let tmp3 = value;
              let tmp4 = arg3;
              let tmp5 = arg4;
              let tmp6 = arg5;
              if (importDefault(10695)(value, arg3, arg4, arg5)) {
                break;
              }
            }
          }
        }
        let iter = tmp11();
        iter2 = iter;
      }
      return true;
    }
    return false;
  }
};
