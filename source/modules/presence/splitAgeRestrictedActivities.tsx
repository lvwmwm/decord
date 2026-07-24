// Module ID: 12741
// Function ID: 99226
// Name: _createForOfIteratorHelperLoose
// Dependencies: [12742, 10565, 2]
// Exports: default

// Module 12741 (_createForOfIteratorHelperLoose)
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
const result = require("set").fileFinishedImporting("modules/presence/splitAgeRestrictedActivities.tsx");

export default function splitAgeRestrictedActivities(activities, hiddenActivities) {
  let iter2;
  const ContentClassificationPresenceFilterExperiment = require(12742) /* apexExperiment */.ContentClassificationPresenceFilterExperiment;
  if (ContentClassificationPresenceFilterExperiment.getConfig({ location: "presence_filtering" }).enabled) {
    const items = [];
    const items1 = [];
    const tmp2 = _createForOfIteratorHelperLoose(activities);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp3 = require;
        let tmp4 = dependencyMap;
        let obj2 = require(10565) /* isAgeRestrictedClassificationReference */;
        if (obj2.isAgeRestrictedClassificationReference(value.content_classification)) {
          let arr = items1.push(value);
        } else {
          arr = items.push(value);
        }
        iter2 = tmp2();
        iter = iter2;
      } while (!iter2.done);
    }
    if (0 === items1.length) {
      let obj = { activities, hiddenActivities };
    } else {
      obj = { activities: items };
      const items2 = [];
      HermesBuiltin.arraySpread(items1, HermesBuiltin.arraySpread(hiddenActivities, 0));
      obj.hiddenActivities = items2;
    }
    return obj;
  } else {
    obj = { activities, hiddenActivities };
    return obj;
  }
};
