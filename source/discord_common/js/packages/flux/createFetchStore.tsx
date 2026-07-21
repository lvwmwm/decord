// Module ID: 619
// Function ID: 7066
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: createFetchStore

// Module 619 (_isNativeReflectConstruct)
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
      let result = arg1(dependencyMap[9]).areArraysShallowEqual(arg0, arg1);
      const obj = arg1(dependencyMap[9]);
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
  let tmp = importDefault(dependencyMap[10]);
  tmp = new tmp();
  return tmp;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const importDefaultResult = importDefault(dependencyMap[7]);
({ useCallback: closure_10, useEffect: closure_11, useState: closure_12 } = arg1(dependencyMap[8]));
const SymbolResult = Symbol("NO_DATA");
let closure_14 = (arg0) => {
  class HTTPResponseError {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_5(this, HTTPResponseError);
      items1 = [...items];
      obj = closure_8(HTTPResponseError);
      tmp2 = closure_7;
      if (closure_16()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_8;
        constructResult = Reflect.construct(obj, items1, closure_8(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.name = "HTTPResponseError";
      tmp2Result.status = 0;
      return tmp2Result;
    }
  }
  const arg1 = HTTPResponseError;
  callback3(HTTPResponseError, arg0);
  let obj = {
    key: "setStatus",
    value(status) {
      this.status = status;
    }
  };
  const items = [obj, ];
  obj = {
    key: "setRetryAfter",
    value(retryAfter) {
      this.retryAfter = retryAfter;
    }
  };
  items[1] = obj;
  return callback2(HTTPResponseError, items);
}(importDefaultResult(Error));
const tmp3 = arg1(dependencyMap[8]);
let closure_15 = arg1(dependencyMap[11]).create(() => {
  const obj = { 0: "T", 9223372036854775807: "r", 13021: "isArray", 9223372036854775807: "paddingHorizontal", 0: "color" };
  let tmp = importDefault(dependencyMap[10]);
  tmp = new tmp();
  obj.backoff = tmp;
  return obj;
});
const obj = arg1(dependencyMap[11]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("../discord_common/js/packages/flux/createFetchStore.tsx");

export const NO_DATA = SymbolResult;
export const createFetchStore = function createFetchStore(importDefaultResult, arg1) {
  let retryConfig;
  arg1 = importDefaultResult;
  ({ getQueryId: closure_1, get: closure_2, load: closure_3, getIsLoading: closure_4, getError: closure_5, retryConfig } = arg1);
  if (retryConfig === undefined) {
    retryConfig = {};
  }
  let num = retryConfig.maxRetries;
  if (num === undefined) {
    num = 5;
  }
  let closure_6 = num;
  let backoff = retryConfig.backoff;
  if (backoff === undefined) {
    backoff = defaultBackoff;
  }
  let closure_7 = backoff;
  let retryableErrors = retryConfig.retryableErrors;
  if (retryableErrors === undefined) {
    retryableErrors = defaultRetryableErrors;
  }
  let closure_8 = retryableErrors;
  ({ staleAfter: closure_9, failureStaleAfter: closure_10 } = arg1);
  let map;
  function getUseStoreState(items) {
    if (null == items) {
      return closure_15;
    } else {
      let value = map.get(items);
      if (null == value) {
        let obj = items(closure_2[11]);
        obj = obj.create(() => {
          const obj = { 0: "T", 9223372036854775807: "r", 13021: "isArray", 9223372036854775807: "paddingHorizontal", 0: "color", backoff: callback() };
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
    const fn = function*(queryId) {
      queryId = queryId.queryId;
      const args = queryId.args;
      let flag = queryId.refetch;
      if (flag === undefined) {
        flag = false;
      }
      let useStoreState = queryId.useStoreState;
      if (useStoreState === undefined) {
        useStoreState = callback(queryId);
      }
      let obj = useStoreState;
      let backoff;
      let closure_5;
      yield undefined;
      backoff = obj.getState().backoff;
      let applyResult;
      if (null != backoff) {
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
            if (applyResult1 !== closure_13) {
              if (null != applyResult1) {
                let flag2 = false;
                if (null != closure_9) {
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
          obj = { "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, "Bool(true)": true };
          const _Date3 = Date;
          obj.lastSuccessAt = Date.now();
          obj.setState(obj);
        }
      }
    };
    fn.next();
    return fn;
  }
  function useCfsHook(arg0) {
    const items = [...arguments];
    let tmp8;
    let tmp9;
    const tmp = callback2(getUseStoreState(items), 2);
    const first = tmp[0];
    let result = items === first;
    if (!result) {
      let obj = arg0(tmp9[9]);
      result = obj.areArraysShallowEqual(items, first);
    }
    if (!result) {
      tmp[1](items);
    }
    arg0 = first;
    if (Array.isArray(arg0)) {
      let items1 = tmp7;
    } else {
      items1 = [tmp7];
    }
    tmp8 = tmp8(...first);
    tmp9 = getUseStoreState(tmp8);
    const items2 = [first];
    const stateFromStores = arg0(tmp9[12]).useStateFromStores(items1, () => {
      let applyResult;
      if (null != closure_4) {
        const items = [];
        HermesBuiltin.arraySpread(first, 0);
        applyResult = HermesBuiltin.apply(items, undefined);
      }
      return applyResult;
    }, items2);
    let tmp9Result = tmp9((isLoading) => {
      isLoading = null == closure_4;
      if (isLoading) {
        isLoading = isLoading.isLoading;
      }
      return isLoading;
    });
    if (null != stateFromStores) {
      tmp9Result = stateFromStores;
    }
    const obj2 = arg0(tmp9[12]);
    const tmp12 = items1;
    const items3 = [first];
    const stateFromStores1 = arg0(tmp9[12]).useStateFromStores(items1, () => {
      let applyResult;
      if (null != closure_5) {
        const items = [];
        HermesBuiltin.arraySpread(first, 0);
        applyResult = HermesBuiltin.apply(items, undefined);
      }
      return applyResult;
    }, items3);
    tmp9Result = tmp9((error) => {
      error = null;
      if (null == closure_5) {
        error = error.error;
      }
      return error;
    });
    if (null != stateFromStores1) {
      tmp9Result = stateFromStores1;
    }
    const obj3 = arg0(tmp9[12]);
    const items4 = [first];
    const stateFromStores2 = arg0(tmp9[12]).useStateFromStores(tmp12, () => tmp9(...closure_0), items4, closure_18);
    const items5 = [tmp8, first, tmp9];
    map(() => {
      callback({ queryId: tmp8, args: first, useStoreState: tmp9 });
    }, items5);
    const items6 = [tmp8, first, tmp9];
    obj = {};
    let tmp18 = null;
    const obj4 = arg0(tmp9[12]);
    if (stateFromStores2 !== loader) {
      tmp18 = stateFromStores2;
    }
    obj.data = tmp18;
    obj.error = tmp9Result;
    obj.isLoading = tmp9Result;
    obj.refetch = callback3(() => {
      callback({ queryId: tmp8, args: first, useStoreState: tmp9, refetch: true });
    }, items6);
    return obj;
  }
  map = new Map();
  useCfsHook.refetch = callback(async (arg0) => {
    const fn = function*(arg0) {
      const items = [...arguments];
      yield undefined;
      const tmp2 = callback(...items);
      const obj = callback2(tmp2);
      const backoff = obj.getState().backoff;
      backoff.succeed();
      obj.setState({ failureLockedUntil: null });
      yield closure_13({ queryId: tmp2, args: items, useStoreState: obj, refetch: true });
    };
    fn.next();
    return fn;
  });
  useCfsHook.fetchMany = callback(async (arg0) => {
    const fn = function*(arg0) {
      const items = [...arguments];
      yield undefined;
      yield Promise.all(items.map((args) => {
        const tmp = callback(...args);
        return callback3({ queryId: tmp, args, useStoreState: callback2(tmp) });
      }));
    };
    fn.next();
    return fn;
  });
  useCfsHook.refetchMany = callback(async (arg0) => {
    const fn = function*(arg0) {
      const items = [...arguments];
      yield undefined;
      yield Promise.all(items.map((args) => {
        const tmp = callback(...args);
        let obj = callback2(tmp);
        const backoff = obj.getState().backoff;
        backoff.succeed();
        obj.setState({ failureLockedUntil: null });
        obj = { queryId: tmp, args, useStoreState: obj, refetch: true };
        return callback3(obj);
      }));
    };
    fn.next();
    return fn;
  });
  return useCfsHook;
};
