// Module ID: 13269
// Function ID: 100678
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: getAssignedNotifSettingsAndMappings

// Module 13269 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
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
      arg1 = tmp;
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
let closure_2 = importDefault(dependencyMap[0]);
({ NOTIF_SETTING_MAPPING: closure_3, NOTIF_SETTINGS: closure_4 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/notifications/NotificationSettingsUtils.tsx");

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
        let tmp3 = arg1;
        let tmp4 = dependencyMap;
        obj2 = arg1(dependencyMap[2]).knownExperimentConfigs[value.experiment];
        if (obj2.definition.name !== value.experiment) {
          break;
        } else {
          let obj = { location: "getAssignedNotifSettingsAndMappings" };
          let variations = value.variations;
          let tmp2 = obj2;
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
