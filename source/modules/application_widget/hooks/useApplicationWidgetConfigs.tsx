// Module ID: 12123
// Function ID: 94990
// Name: _createForOfIteratorHelperLoose
// Dependencies: [31, 12124, 3803, 566, 1327, 12125, 2]
// Exports: default

// Module 12123 (_createForOfIteratorHelperLoose)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { FetchState } from "_isNativeReflectConstruct";

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
const result = require("explicitContentFromProto").fileFinishedImporting("modules/application_widget/hooks/useApplicationWidgetConfigs.tsx");

export default function useApplicationWidgetConfigs(arg0) {
  const _require = arg0;
  const DeveloperMode = _require(setting[2]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  const items = [stateFromStores1];
  const stateFromStores = _require(setting[3]).useStateFromStores(items, () => stateFromStores1.getFeaturedFetchState());
  let obj = _require(setting[3]);
  const items1 = [stateFromStores1];
  stateFromStores1 = _require(setting[3]).useStateFromStores(items1, () => stateFromStores1.getDeveloperFetchState());
  const obj2 = _require(setting[3]);
  const items2 = [stateFromStores1];
  const stateFromStoresArray = _require(setting[3]).useStateFromStoresArray(items2, () => lib.filter((arg0) => stateFromStores1.getFetchState(arg0) === stateFromStoresArray.NOT_FETCHED));
  const obj3 = _require(setting[3]);
  const items3 = [stateFromStores1];
  const stateFromStoresArray1 = _require(setting[3]).useStateFromStoresArray(items3, () => {
    const mapped = lib.map((arg0) => stateFromStores1.getConfig(arg0));
    return mapped.filter(lib(setting[4]).isNotNullish);
  });
  const effect = stateFromStores.useEffect(() => {
    const featuredWidgetConfigs = lib(setting[5]).fetchFeaturedWidgetConfigs();
    featuredWidgetConfigs.catch(() => {

    });
  }, []);
  const items4 = [setting];
  const effect1 = stateFromStores.useEffect(() => {
    if (setting) {
      const developerWidgetConfigs = lib(setting[5]).fetchDeveloperWidgetConfigs();
      developerWidgetConfigs.catch(() => {

      });
      const obj = lib(setting[5]);
    }
  }, items4);
  const items5 = [stateFromStores1, stateFromStores, stateFromStoresArray, setting];
  const effect2 = stateFromStores.useEffect(() => {
    let done;
    if (stateFromStores !== stateFromStoresArray.NOT_FETCHED) {
      if (stateFromStores !== stateFromStoresArray.FETCHING) {
        if (!setting) {
          const tmp7 = outer1_5(stateFromStoresArray);
          let iter = tmp7();
          if (!iter.done) {
            do {
              let tmp8 = lib;
              let tmp9 = setting;
              let obj = lib(setting[5]);
              let widgetConfigs = obj.fetchWidgetConfigs(iter.value);
              let catchPromise = widgetConfigs.catch(() => {

              });
              let iter2 = tmp7();
              iter = iter2;
              done = iter2.done;
            } while (!done);
          }
        }
      }
    }
  }, items5);
  return stateFromStoresArray1;
};
