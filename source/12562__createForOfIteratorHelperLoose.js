// Module ID: 12562
// Function ID: 96676
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 12562 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let require = Symbol_iterator;
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
      require = tmp;
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
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/presence/splitAgeRestrictedActivities.tsx");

export default function splitAgeRestrictedActivities(activities, hiddenActivities) {
  let iter2;
  const ContentClassificationPresenceFilterExperiment = require(dependencyMap[0]).ContentClassificationPresenceFilterExperiment;
  if (ContentClassificationPresenceFilterExperiment.getConfig({ location: "presence_filtering" }).enabled) {
    const items = [];
    const items1 = [];
    const tmp2 = _createForOfIteratorHelperLoose(activities);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp3 = closure_0;
        let tmp4 = closure_1;
        let obj2 = closure_0(closure_1[1]);
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
