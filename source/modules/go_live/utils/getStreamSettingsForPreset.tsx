// Module ID: 10720
// Function ID: 83514
// Name: _createForOfIteratorHelperLoose
// Dependencies: [4185, 10721, 10722, 2]
// Exports: canStreamWithPreset, getMaxSettingsForPreset

// Module 10720 (_createForOfIteratorHelperLoose)
import makeButton from "makeButton";

let closure_2;
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
function getApplicationStreamPresetValues() {
  let obj = importDefault(10721);
  obj = { [closure_3.PRESET_DOCUMENTS]: items };
  obj = { resolution: closure_4.RESOLUTION_SOURCE, fps: closure_2.FPS_15 };
  items = [obj, { resolution: closure_4.RESOLUTION_SOURCE, fps: closure_2.FPS_5 }];
  const items1 = [{ resolution: obj.getConfig({ location: "getApplicationStreamPresetValues" }).videoPresetResolutionMax, fps: closure_2.FPS_60 }, { resolution: closure_4.RESOLUTION_1080, fps: closure_2.FPS_60 }, { resolution: closure_4.RESOLUTION_720, fps: closure_2.FPS_60 }, { resolution: closure_4.RESOLUTION_720, fps: closure_2.FPS_30 }];
  obj[constants.PRESET_VIDEO] = items1;
  obj[constants.PRESET_AUTO] = [];
  obj[constants.PRESET_CUSTOM] = [];
  const items2 = [{ resolution: closure_4.RESOLUTION_720, fps: closure_2.FPS_30 }];
  obj[constants.PRESET_MOBILE_DEFAULT] = items2;
  const items3 = [{ resolution: closure_4.RESOLUTION_480, fps: closure_2.FPS_30 }];
  obj[constants.PRESET_MOBILE_PERFORMANCE] = items3;
  const items4 = [{ resolution: closure_4.RESOLUTION_1080, fps: closure_2.FPS_60 }];
  obj[constants.PRESET_MOBILE_HIGH_QUALITY] = items4;
  return obj;
}
function getStreamSettingsForPreset(arg0, user, guildPremiumTier) {
  const tmp = getApplicationStreamPresetValues()[arg0];
  if (null == tmp) {
    return null;
  } else {
    const tmp8 = _createForOfIteratorHelperLoose(tmp);
    const iter3 = tmp8();
    let iter2 = iter3;
    if (!iter3.done) {
      const value = iter2.value;
      while (!importDefault(10722)(arg0, value.resolution, value.fps, user, guildPremiumTier)) {
        let iter = tmp8();
        iter2 = iter;
      }
      const items = [, ];
      ({ resolution: arr[0], fps: arr[1] } = value);
      return items;
    }
    return null;
  }
}
({ ApplicationStreamFPS: closure_2, ApplicationStreamPresets: closure_3, ApplicationStreamResolutions: closure_4 } = makeButton);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/go_live/utils/getStreamSettingsForPreset.tsx");

export default getStreamSettingsForPreset;
export { getApplicationStreamPresetValues };
export const getMaxSettingsForPreset = function getMaxSettingsForPreset(PRESET_MOBILE_DEFAULT) {
  let first;
  const tmp2 = getApplicationStreamPresetValues()[PRESET_MOBILE_DEFAULT];
  if (null != tmp2) {
    first = tmp2[0];
  }
  let tmp3 = null;
  if (null != first) {
    tmp3 = first;
  }
  return tmp3;
};
export const canStreamWithPreset = function canStreamWithPreset(arg0, user, guildPremiumTier) {
  return null != getStreamSettingsForPreset(arg0, user, guildPremiumTier);
};
