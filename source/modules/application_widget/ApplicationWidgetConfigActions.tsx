// Module ID: 12125
// Function ID: 95036
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 12124, 653, 686, 507, 1184, 10880, 2]
// Exports: fetchDeveloperWidgetConfigs, fetchFeaturedWidgetConfigs, fetchWidgetConfigs

// Module 12125 (_createForOfIteratorHelperLoose)
import isNonEmptyString from "isNonEmptyString";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { FetchState } from "_isNativeReflectConstruct";
import { Endpoints } from "ME";

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
function getApplicationsFromConfigs(arg0) {
  let iter2;
  const map = new Map();
  const tmp = _createForOfIteratorHelperLoose(arg0);
  let iter = tmp();
  if (!iter.done) {
    do {
      let value = iter.value;
      if (null != value.application) {
        let result = map.set(value.application.id, value.application);
      }
      iter2 = tmp();
      iter = iter2;
    } while (!iter2.done);
  }
  return Array.from(map.values());
}
function fetchFeaturedWidgetConfigsFromApi() {
  return _fetchFeaturedWidgetConfigsFromApi(...arguments);
}
function _fetchFeaturedWidgetConfigsFromApi() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function fetchDeveloperWidgetConfigsFromApi() {
  return _fetchDeveloperWidgetConfigsFromApi(...arguments);
}
function _fetchDeveloperWidgetConfigsFromApi() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchWidgetConfigsFromApi() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
let promiseDeduper = new require("_createForOfIteratorHelperLoose").PromiseDeduper();
promiseDeduper = new require("_createForOfIteratorHelperLoose").PromiseDeduper();
const promiseDeduper1 = new require("_createForOfIteratorHelperLoose").PromiseDeduper();
let result = require("ME").fileFinishedImporting("modules/application_widget/ApplicationWidgetConfigActions.tsx");

export const fetchFeaturedWidgetConfigs = function fetchFeaturedWidgetConfigs() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.force;
  if (flag === undefined) {
    flag = false;
  }
  if (!flag) {
    if (store.getFeaturedFetchState() === FetchState.SUCCESS) {
      let resolved = Promise.resolve();
    }
    return resolved;
  }
  obj = { force: flag };
  resolved = promiseDeduper.one(undefined, fetchFeaturedWidgetConfigsFromApi, obj);
};
export const fetchDeveloperWidgetConfigs = function fetchDeveloperWidgetConfigs() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.force;
  if (flag === undefined) {
    flag = false;
  }
  if (!flag) {
    if (store.getDeveloperFetchState() === FetchState.SUCCESS) {
      let resolved = Promise.resolve();
    }
    return resolved;
  }
  obj = { force: flag };
  resolved = promiseDeduper.one(undefined, fetchDeveloperWidgetConfigsFromApi, obj);
};
export const fetchWidgetConfigs = function fetchWidgetConfigs(value) {
  let obj = arg1;
  let closure_0 = value;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.force;
  if (flag === undefined) {
    flag = false;
  }
  if (!flag) {
    if (tmp === FetchState.SUCCESS) {
      let resolved = Promise.resolve();
    }
    return resolved;
  }
  obj = { force: flag };
  resolved = promiseDeduper1.one(value, () => (function fetchWidgetConfigsFromApi(closure_0) {
    return outer2_17(...arguments);
  })(closure_0), obj);
};
