// Module ID: 10674
// Function ID: 83226
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: canStreamWithPreset, getMaxSettingsForPreset

// Module 10674 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let importDefault = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      importDefault = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  let obj = importDefault(dependencyMap[1]);
  obj = { [closure_3.PRESET_DOCUMENTS]: items };
  obj = { resolution: closure_4.RESOLUTION_SOURCE, fps: closure_2.FPS_15 };
  const items = [obj, { resolution: closure_4.RESOLUTION_SOURCE, fps: closure_2.FPS_5 }];
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
      while (!importDefault(dependencyMap[2])(arg0, value.resolution, value.fps, user, guildPremiumTier)) {
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
const _module = require(dependencyMap[0]);
({ ApplicationStreamFPS: closure_2, ApplicationStreamPresets: closure_3, ApplicationStreamResolutions: closure_4 } = _module);
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("modules/go_live/utils/getStreamSettingsForPreset.tsx");

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
