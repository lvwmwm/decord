// Module ID: 619
// Function ID: 7066
// Name: _isNativeReflectConstruct
// Dependencies: [5, 57, 6, 7, 15, 17, 18, 162, 31, 620, 561, 621, 624, 2]
// Exports: createFetchStore

// Module 619 (_isNativeReflectConstruct)
import _getPrototypeOf from "_getPrototypeOf";
import _slicedToArray from "_slicedToArray";
import _inherits from "_inherits";
import _wrapNativeSuper from "_wrapNativeSuper";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import closure_8 from "_getPrototypeOf";
import closure_9 from "_inherits";
import result from "result";
import keys from "keys";
import importDefaultResult from "_wrapNativeSuper";

let closure_10;
let closure_11;
let closure_12;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function coerceRetryAfterSecs(arg0) {
  if ("number" === typeof arg0) {
    const _Number = Number;
    if (Number.isFinite(arg0)) {
      if (arg0 > 0) {
        return arg0;
      }
    }
  }
}
function areStatesEqual(arg0, arg1) {
  if (Array.isArray(arg0)) {
    const _Array = Array;
    if (Array.isArray(arg1)) {
      let result = require(620) /* shallowEqual */.areArraysShallowEqual(arg0, arg1);
      const obj = require(620) /* shallowEqual */;
    }
    return result;
  }
  result = Object.is(arg0, arg1);
}
function defaultRetryableErrors(status) {
  let tmp = status instanceof closure_14;
  if (tmp) {
    let tmp2 = status.status >= 500;
    if (!tmp2) {
      tmp2 = 429 === status.status;
    }
    tmp = tmp2;
  }
  return tmp;
}
function defaultBackoff() {
  let tmp = importDefault(561);
  tmp = new tmp();
  return tmp;
}
({ useCallback: closure_10, useEffect: closure_11, useState: closure_12 } = result);
const SymbolResult = Symbol("NO_DATA");
let closure_14 = ((arg0) => {
  class HTTPResponseError {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_5(this, HTTPResponseError);
      items1 = [...items];
      obj = outer1_8(HTTPResponseError);
      tmp2 = outer1_7;
      if (outer1_16()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_8;
        constructResult = Reflect.construct(obj, items1, outer1_8(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.name = "HTTPResponseError";
      tmp2Result.status = 0;
      return tmp2Result;
    }
  }
  callback3(HTTPResponseError, arg0);
  let obj = {
    key: "setStatus",
    value(status) {
      this.status = status;
    }
  };
  let items = [obj, ];
  obj = {
    key: "setRetryAfter",
    value(retryAfter) {
      this.retryAfter = retryAfter;
    }
  };
  items[1] = obj;
  return callback2(HTTPResponseError, items);
})(require("_wrapNativeSuper")(Error));
let closure_15 = keys.create(() => {
  const obj = { isLoading: false, error: null, backoff: null, lastSuccessAt: null, failureLockedUntil: null };
  let tmp = importDefault(561);
  tmp = new tmp();
  obj.backoff = tmp;
  return obj;
});
result = require("_classCallCheck").fileFinishedImporting("../discord_common/js/packages/flux/createFetchStore.tsx");

export const NO_DATA = SymbolResult;
export const createFetchStore = function createFetchStore(importDefaultResult, initialize) {
  let closure_10;
  let _getPrototypeOf;
  let _slicedToArray;
  let _inherits;
  let closure_9;
  let dependencyMap;
  let importDefault;
  let retryConfig;
  let closure_0 = importDefaultResult;
  ({ getQueryId: importDefault, get: dependencyMap, load: _getPrototypeOf, getIsLoading: _slicedToArray, getError: _inherits, retryConfig } = initialize);
  if (retryConfig === undefined) {
    retryConfig = {};
  }
  let num = retryConfig.maxRetries;
  if (num === undefined) {
    num = 5;
  }
  let backoff = retryConfig.backoff;
  if (backoff === undefined) {
    backoff = defaultBackoff;
  }
  let retryableErrors = retryConfig.retryableErrors;
  if (retryableErrors === undefined) {
    retryableErrors = defaultRetryableErrors;
  }
  ({ staleAfter: closure_9, failureStaleAfter: closure_10 } = initialize);
  let map;
  function getUseStoreState(items) {
    if (null == items) {
      return outer1_15;
    } else {
      let value = map.get(items);
      if (null == value) {
        let obj = importDefaultResult(outer1_2[11]);
        obj = obj.create(() => {
          const obj = { isLoading: false, error: null, backoff: outer1_7(), lastSuccessAt: null, failureLockedUntil: null };
          return obj;
        });
        const result = map.set(items, obj);
        value = obj;
      }
      return value;
    }
  }
  function loader(param) {
    return _loader(...arguments);
  }
  async function _loader(arg0, arg1) {
    let iter = (function*(queryId) {
      queryId = queryId.queryId;
      const args = queryId.args;
      let flag = queryId.refetch;
      if (flag === undefined) {
        flag = false;
      }
      let useStoreState = queryId.useStoreState;
      if (useStoreState === undefined) {
        useStoreState = outer2_12(queryId);
      }
      let obj = useStoreState;
      let backoff;
      let c5;
      yield undefined;
      backoff = obj.getState().backoff;
      let applyResult;
      if (null != outer2_4) {
        const items = [];
        HermesBuiltin.arraySpread(tmp, 0);
        applyResult = HermesBuiltin.apply(items, undefined);
      }
      if (null == applyResult) {
        applyResult = obj.getState().isLoading;
      }
      if (null != queryId) {
        if (!applyResult) {
          if (!flag) {
            const items1 = [];
            HermesBuiltin.arraySpread(tmp, 0);
            const applyResult1 = HermesBuiltin.apply(items1, undefined);
            if (applyResult1 !== loader) {
              if (null != applyResult1) {
                let flag2 = false;
                if (null != outer2_9) {
                  const lastSuccessAt = obj.getState().lastSuccessAt;
                  let tmp22 = null == lastSuccessAt;
                  if (!tmp22) {
                    const _Date = Date;
                    tmp22 = Date.now() - lastSuccessAt > 1000 * tmp21;
                  }
                  flag2 = tmp22;
                }
              }
              const failureLockedUntil = obj.getState().failureLockedUntil;
              if (null != failureLockedUntil) {
                const _Date2 = Date;
              }
            }
          }
          obj = { isLoading: true };
          obj.setState(obj);
          const items2 = [];
          HermesBuiltin.arraySpread(tmp, 0);
          yield HermesBuiltin.apply(items2, undefined);
          backoff.succeed();
          obj = { error: null, isLoading: false, lastSuccessAt: null, failureLockedUntil: null };
          const _Date3 = Date;
          obj.lastSuccessAt = Date.now();
          obj.setState(obj);
        }
      }
    })();
    iter.next();
    return iter;
  }
  function useCfsHook(arg0) {
    let items = [...arguments];
    let callback;
    let c2;
    const tmp = outer1_4(getUseStoreState(items), 2);
    const first = tmp[0];
    let result = items === first;
    if (!result) {
      let obj = importDefaultResult(outer1_2[9]);
      result = obj.areArraysShallowEqual(items, first);
    }
    if (!result) {
      tmp[1](items);
    }
    if (Array.isArray(first)) {
      let items1 = tmp7;
    } else {
      items1 = [tmp7];
    }
    const tmp8 = callback(...first);
    callback = tmp8;
    const tmp9 = getUseStoreState(tmp8);
    c2 = tmp9;
    const items2 = [first];
    const stateFromStores = importDefaultResult(outer1_2[12]).useStateFromStores(items1, () => {
      let applyResult;
      if (null != outer1_4) {
        const items = [];
        HermesBuiltin.arraySpread(first, 0);
        applyResult = HermesBuiltin.apply(items, undefined);
      }
      return applyResult;
    }, items2);
    let tmp9Result = tmp9((isLoading) => {
      isLoading = null == outer1_4;
      if (isLoading) {
        isLoading = isLoading.isLoading;
      }
      return isLoading;
    });
    if (null != stateFromStores) {
      tmp9Result = stateFromStores;
    }
    const obj2 = importDefaultResult(outer1_2[12]);
    const tmp12 = items1;
    const items3 = [first];
    const stateFromStores1 = importDefaultResult(outer1_2[12]).useStateFromStores(items1, () => {
      let applyResult;
      if (null != outer1_5) {
        const items = [];
        HermesBuiltin.arraySpread(first, 0);
        applyResult = HermesBuiltin.apply(items, undefined);
      }
      return applyResult;
    }, items3);
    tmp9Result = tmp9((error) => {
      error = null;
      if (null == outer1_5) {
        error = error.error;
      }
      return error;
    });
    if (null != stateFromStores1) {
      tmp9Result = stateFromStores1;
    }
    const obj3 = importDefaultResult(outer1_2[12]);
    const items4 = [first];
    const stateFromStores2 = importDefaultResult(outer1_2[12]).useStateFromStores(tmp12, () => _undefined(...first), items4, outer1_18);
    const items5 = [tmp8, first, tmp9];
    map(() => {
      outer1_13({ queryId: c1, args: first, useStoreState: c2 });
    }, items5);
    const items6 = [tmp8, first, tmp9];
    obj = {};
    let tmp18 = null;
    const obj4 = importDefaultResult(outer1_2[12]);
    if (stateFromStores2 !== loader) {
      tmp18 = stateFromStores2;
    }
    obj.data = tmp18;
    obj.error = tmp9Result;
    obj.isLoading = tmp9Result;
    obj.refetch = outer1_10(() => {
      outer1_13({ queryId: c1, args: first, useStoreState: c2, refetch: true });
    }, items6);
    return obj;
  }
  map = new Map();
  useCfsHook.refetch = callback(async (arg0) => {
    const iter = (function*(arg0) {
      const items = [...arguments];
      yield undefined;
      const tmp2 = outer1_1(...items);
      const obj = outer1_12(tmp2);
      const backoff = obj.getState().backoff;
      backoff.succeed();
      obj.setState({ failureLockedUntil: null });
      yield outer1_13({ queryId: tmp2, args: items, useStoreState: obj, refetch: true });
    })();
    iter.next();
    return iter;
  });
  useCfsHook.fetchMany = callback(async (arg0) => {
    const iter = (function*(arg0) {
      const items = [...arguments];
      yield undefined;
      yield Promise.all(items.map((args) => {
        const tmp = outer2_1(...args);
        return outer2_13({ queryId: tmp, args, useStoreState: outer2_12(tmp) });
      }));
    })();
    iter.next();
    return iter;
  });
  useCfsHook.refetchMany = callback(async (arg0) => {
    const iter = (function*(arg0) {
      const items = [...arguments];
      yield undefined;
      yield Promise.all(items.map((args) => {
        const tmp = outer2_1(...args);
        let obj = outer2_12(tmp);
        const backoff = obj.getState().backoff;
        backoff.succeed();
        obj.setState({ failureLockedUntil: null });
        obj = { queryId: tmp, args, useStoreState: obj, refetch: true };
        return outer2_13(obj);
      }));
    })();
    iter.next();
    return iter;
  });
  return useCfsHook;
};
