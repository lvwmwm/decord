// Module ID: 13436
// Function ID: 103161
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 13430, 13437, 2]
// Exports: getAssignedNotifSettingsAndMappings

// Module 13436 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import items2 from "items2";

let closure_3;
let closure_4;
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
({ NOTIF_SETTING_MAPPING: closure_3, NOTIF_SETTINGS: closure_4 } = items2);
const result = require("knownExperimentConfigs").fileFinishedImporting("modules/notifications/NotificationSettingsUtils.tsx");

export const getAssignedNotifSettingsAndMappings = function getAssignedNotifSettingsAndMappings() {
  let obj2;
  let value;
  const settings = [];
  const mappings = [];
  const set = new Set();
  const tmp = _createForOfIteratorHelperLoose(closure_4);
  const iter = tmp();
  let iter2 = iter;
  if (!iter.done) {
    while (true) {
      value = iter2.value;
      if (null == value.experiment) {
        let arr = settings.push(value);
        let addResult = set.add(value.id);
        let tmp5 = tmp2;
      } else {
        let tmp3 = require;
        let tmp4 = dependencyMap;
        obj2 = require(13437) /* knownExperimentConfigs */.knownExperimentConfigs[value.experiment];
        if (obj2.definition.name !== value.experiment) {
          break;
        } else {
          let obj = { location: "getAssignedNotifSettingsAndMappings" };
          let variations = value.variations;
          tmp2 = obj2;
          tmp5 = obj2;
        }
      }
      let iter3 = tmp();
      tmp2 = tmp5;
      iter2 = iter3;
    }
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Experiment called " + obj2.definition.name + " assigned to name " + value.experiment);
    throw error;
  }
  const entries = Object.entries(closure_3);
  for (let num = 0; num < entries.length; num = num + 1) {
    let tmp12 = callback;
    let tmp13 = callback(entries[num], 2);
    let _parseInt = parseInt;
    let tmp15 = _createForOfIteratorHelperLoose;
    let parsed = parseInt(tmp13[0]);
    let tmp16 = _createForOfIteratorHelperLoose(tmp13[1]);
    let iter4 = tmp16();
    let iter5 = iter4;
    if (!iter4.done) {
      value = iter5.value;
      while (!set.has(value)) {
        let iter6 = tmp16();
        iter5 = iter6;
        let tmp17 = value;
        continue;
      }
      obj = { notifType: parsed, notifSetting: value };
      arr = mappings.push(obj);
      let tmp19 = value;
    }
  }
  return { settings, mappings };
};
