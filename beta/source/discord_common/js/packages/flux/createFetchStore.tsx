// Module ID: 557
// Function ID: 558
// Name: createFetchStore
// Dependencies: [5, 32, 19, 558, 559, 560, 563, 2]
// Exports: createFetchStore

// Module 557 (createFetchStore)
import shallowEqual from "shallowEqual" /* 558 */;
import BackoffDefault from "Backoff" /* 559 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

let error, isLoading, map;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function areStatesEqual(items1, current) {
  if (Array.isArray(items1)) {
    let result;
    const _Array = Array;
    if (Array.isArray(current)) {
      const obj = shallowEqual;
      result = obj.areArraysShallowEqual(items1, current);
    }
    return result;
  }
  result = Object.is(items1, current);
}
function defaultRetryableErrors(status) {
  let tmp = status instanceof HTTPResponseError;
  if (tmp) {
    tmp = status.status >= 500 || 429 === status.status;
    const tmp2 = status.status >= 500 || 429 === status.status;
  }
  return tmp;
}
function defaultBackoff() {
  const tmp = new BackoffDefault();
  return tmp;
}
({ useCallback: hasOwnProperty, useEffect: metroRequire, useState: metroImportDefault } = react);
const SymbolResult = Symbol("NO_DATA");
const metroImportAll = SymbolResult;
class HTTPResponseError extends Error {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.name = "HTTPResponseError";
    applyArgumentsResult.status = 0;
    return applyArgumentsResult;
  }
  setStatus(status) {
    this.status = status;
  }
  setRetryAfter(retryAfter) {
    this.retryAfter = retryAfter;
  }
}
const prototype = HTTPResponseError.prototype;
let closure_13 = module_560.create(() => {
  const obj = { isLoading: false, error: null, backoff: new BackoffDefault(), lastSuccessAt: null, failureLockedUntil: null };
  new BackoffDefault();
  return obj;
});
let result = size.fileFinishedImporting("../discord_common/js/packages/flux/createFetchStore.tsx");

export const NO_DATA = SymbolResult;
export const createFetchStore = function createFetchStore(ApplicationStore, arg1) {
  let closure_5;
  let getUseStoreState;
  let retryConfig;
  const f109633 = () => {
    obj = { isLoading: false, error: null, backoff: closure_1_7(), lastSuccessAt: null, failureLockedUntil: null };
    return obj;
  };
  ({ getQueryId: importDefault, get: dependencyMap, load: _asyncToGenerator, getIsLoading: _slicedToArray, getError: closure_5, retryConfig } = arg1);
  if (retryConfig === undefined) {
    retryConfig = {};
  }
  let num = retryConfig.maxRetries;
  if (num === undefined) {
    num = 5;
  }
  let backoff = retryConfig.backoff;
  if (backoff === undefined) {
    backoff = getUseStoreState;
  }
  let retryableErrors = retryConfig.retryableErrors;
  if (retryableErrors === undefined) {
    retryableErrors = map;
  }
  ({ staleAfter: HTTPResponseError, failureStaleAfter: areStatesEqual } = arg1);
  getUseStoreState = function getUseStoreState(arg0) {
    if (null == arg0) {
      return closure_13;
    } else {
      let value = map.get(arg0);
      obj = map;
      if (null == value) {
        const obj2 = module_560;
        const obj3 = obj2.create(f109633);
        const result = obj.set(arg0, obj3);
        value = obj3;
      }
      return value;
    }
  };
  function loader() {
    return obj(...arguments);
  }
  let obj = function _loader() {
    obj = _asyncToGenerator(async (arg0) => {
      let closure_2;
      let closure_3;
      let closure_4;
      let queryId = arg0;
      let c6 = 0;
      let c7 = 0;
      let c5 = 0;
      const iter = (async function(arg0, value) {
        let args;
        let c1;
        let fail;
        let refetch;
        let useStoreState;
        function isCachedDataStale(useStoreState, arg1) {
          if (null == arg1) {
            return false;
          } else {
            const lastSuccessAt = useStoreState.getState().lastSuccessAt;
            let tmp2 = null == lastSuccessAt;
            if (!tmp2) {
              const _Date = Date;
              tmp2 = Date.now() - lastSuccessAt > 1000 * arg1;
            }
            return tmp2;
          }
        }
        function makeError(status) {
          if (status instanceof Error) {
            return status;
          } else {
            if (typeof status === "object") {
              if (null != status) {
                if ("status" in status) {
                  if (typeof status.status === "number") {
                    retryAfter = status.retryAfter;
                    let tmp3;
                    if (typeof retryAfter === "number") {
                      const _Number = Number;
                      if (Number.isFinite(retryAfter)) {
                        if (retryAfter > 0) {
                          tmp3 = retryAfter;
                        }
                      }
                    }
                    if ("body" in status) {
                      if (null != status.body) {
                        if (typeof status.body === "object") {
                          if ("message" in status.body) {
                            const _String2 = String;
                            const self4 = this;
                            const obj3 = new closure_1_9(String(status.body.message));
                            obj3.setStatus(status.status);
                            obj3.setRetryAfter(tmp3);
                            return obj3;
                          }
                        }
                      }
                    }
                    const _Object = Object;
                    const entries = Object.entries(status);
                    const mapped = entries.map((item) => {
                      let tmp;
                      let tmp2;
                      [tmp, tmp2] = item;
                      return "" + tmp + ": [" + String(tmp2) + "]";
                    });
                    const self3 = this;
                    const obj2 = new closure_1_9(mapped.join(","));
                    obj2.setStatus(status.status);
                    obj2.setRetryAfter(tmp3);
                    return obj2;
                  }
                }
              }
            }
            const _Error = Error;
            const _String = String;
            const self = this;
            const self2 = this;
            error = new Error(String(status));
            const tmp2 = error;
            return error;
          }
        }
        if (1 === tmp4) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            return { value, done: true };
          } else {
            backoff = useStoreState.getState().backoff;
            let applyResult;
            if (closure_131_4 != null) {
              const items = [];
              HermesBuiltin.arraySpread(items, c1, 0);
              applyResult = HermesBuiltin.apply(tmp86, items, undefined);
            }
            isLoading = applyResult;
            if (applyResult == null) {
              isLoading = useStoreState.getState().isLoading;
            }
            let closure_5 = isLoading;
            if (null != queryId) {
              const tmp88 = closure_5;
              if (!tmp88) {
                const tmp40 = refetch;
                if (!tmp40) {
                  const items1 = [];
                  HermesBuiltin.arraySpread(items1, c1, 0);
                  let closure_6 = HermesBuiltin.apply(closure_131_2, items1, undefined);
                  if (closure_6 === closure_1_8) {
                    c7 = 3;
                    return { value: "HermesInternal", done: null };
                  } else {
                    if (null != closure_6) {
                      if (!isCachedDataStale(useStoreState, closure_131_9)) {
                        c7 = 3;
                        return { value: "HermesInternal", done: null };
                      }
                    }
                    const failureLockedUntil = useStoreState.getState().failureLockedUntil;
                    if (null != failureLockedUntil) {
                      const _Date2 = Date;
                      if (Date.now() < failureLockedUntil) {
                        c7 = 3;
                        return { value: "HermesInternal", done: null };
                      }
                    }
                  }
                }
                c5 = 1;
                useStoreState.setState({ isLoading: true });
                const items2 = [];
                HermesBuiltin.arraySpread(items2, c1, 0);
                c6 = 3;
                c7 = 1;
                const obj5 = { value: HermesBuiltin.apply(closure_131_3, items2, undefined), done: false };
                return obj5;
              }
            }
          }
        } else if (2 === tmp4) {
          c5 = 0;
          error = makeError(fail);
          const obj6 = { error, isLoading: false };
          useStoreState.setState(obj6);
          if (closure_131_8(error)) {
            if (closure_131_6 > backoff.fails) {
              let self = this;
              let self2 = this;
              let promise = new Promise((arg0, arg1) => {
                let closure_0 = arg0;
                let closure_1 = arg1;
                retryAfter = retryAfter.retryAfter;
                let tmp2;
                fail = fail.fail;
                if (typeof retryAfter === "number") {
                  const _Number = Number;
                  if (Number.isFinite(retryAfter)) {
                    if (retryAfter > 0) {
                      tmp2 = retryAfter;
                    }
                  }
                }
                let num2 = 0;
                if (null != tmp2) {
                  num2 = 1000 * tmp2;
                }
                fail(() => {
                  obj = { queryId, args, useStoreState, refetch };
                  const promise = closure_3_13(obj);
                  promise.then(closure_0, closure_1);
                }, num2);
              });
              c6 = 4;
              c7 = 1;
              return { value: promise, done: false };
            }
          }
          if (null != closure_131_10) {
            const _Date3 = Date;
            const setState2 = useStoreState.setState;
            const obj8 = { failureLockedUntil: Date.now() + 1000 * closure_131_10 };
            setState2(obj8);
          }
        } else if (3 === tmp4) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            backoff.succeed();
            let _Date = Date;
            const setState = useStoreState.setState;
            const obj10 = { error: null, isLoading: false, lastSuccessAt: Date.now(), failureLockedUntil: null };
            setState(obj10);
            c5 = 0;
          }
        } else if (arg0 === 1) {
          let num2 = 3;
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        }
        await "HermesInternal";
        useStoreState = tmp;
        queryId = queryId.queryId;
        ({ args: c1, refetch } = queryId);
        const tmp91 = queryId;
        if (refetch === undefined) {
          refetch = false;
        }
        useStoreState = tmp91.useStoreState ?? getUseStoreState(queryId);
        return "flex";
      })();
      iter.next();
      return iter;
    });
    return obj(...arguments);
  };
  function useCfsHook() {
    let args;
    let tmp3;
    let useStoreState;
    let value;
    let items = [...arguments];
    args = undefined;
    let queryId;
    let c2;
    [args, tmp3] = backoff(items);
    let result = items === args;
    if (!result) {
      obj = ApplicationStore(dependencyMap[3]);
      result = obj.areArraysShallowEqual(items, args);
    }
    if (!result) {
      tmp3(items);
    }
    let tmp9 = args;
    const tmp8 = args;
    if (!Array.isArray(args)) {
      const items1 = [tmp8];
      tmp9 = items1;
    }
    const tmp10 = queryId(...first);
    queryId = tmp10;
    if (null == tmp10) {
      value = loader;
    } else {
      value = map.get(tmp10);
      const obj2 = map;
      if (null == value) {
        const obj3 = ApplicationStore(dependencyMap[5]);
        const obj7 = obj3.create(f109633);
        const result1 = obj2.set(tmp10, obj7);
        value = obj7;
      }
    }
    c2 = value;
    const items2 = [args];
    const obj4 = ApplicationStore(dependencyMap[6]);
    let stateFromStores = obj4.useStateFromStores(tmp9, () => {
      let applyResult;
      if (_slicedToArray != null) {
        const items = [];
        HermesBuiltin.arraySpread(items, first, 0);
        applyResult = HermesBuiltin.apply(tmp2, items, undefined);
      }
      return applyResult;
    }, items2);
    const items3 = [args];
    const valueResult = value((isLoading) => {
      isLoading = null == closure_1_4 && isLoading.isLoading;
      return isLoading;
    });
    const obj5 = ApplicationStore(dependencyMap[6]);
    let stateFromStores1 = obj5.useStateFromStores(tmp9, () => {
      let applyResult;
      if (closure_5 != null) {
        const items = [];
        HermesBuiltin.arraySpread(items, first, 0);
        applyResult = HermesBuiltin.apply(tmp2, items, undefined);
      }
      return applyResult;
    }, items3);
    const items4 = [args];
    const valueResult1 = value((error) => {
      error = null;
      if (null == closure_1_5) {
        error = error.error;
      }
      return error;
    });
    const obj6 = ApplicationStore(dependencyMap[6]);
    const stateFromStores2 = obj6.useStateFromStores(tmp9, () => dependencyMap(...first), items4, areStatesEqual);
    const items5 = [tmp10, args, value];
    num(() => {
      obj = { queryId, args, useStoreState };
      loader(obj);
    }, items5);
    const items6 = [tmp10, args, value];
    let tmp23 = null;
    const tmp22 = closure_5(() => {
      obj = { queryId, args, useStoreState, refetch: true };
      loader(obj);
    }, items6);
    if (stateFromStores2 !== retryableErrors) {
      tmp23 = stateFromStores2;
    }
    const obj9 = { data: tmp23, error: stateFromStores1, isLoading: stateFromStores, refetch: tmp22 };
    if (stateFromStores1 == null) {
      stateFromStores1 = valueResult1;
    }
    if (stateFromStores == null) {
      stateFromStores = valueResult;
    }
    return obj9;
  }
  map = new Map();
  useCfsHook.refetch = _asyncToGenerator(async () => {
    const args = [...arguments];
    let c3 = 0;
    let c4 = 0;
    const iter = (async () => {
      const items = [];
      HermesBuiltin.arraySpread(items, args, 0);
      queryId = HermesBuiltin.apply(closure_130_1, items, undefined);
      useStoreState = closure_130_12(queryId);
      backoff = useStoreState.getState().backoff;
      backoff.succeed();
      useStoreState.setState({ failureLockedUntil: null });
      const obj5 = { queryId, args, useStoreState, refetch: true };
      await closure_130_13(obj5);
      await "HermesInternal";
      useStoreState = tmp5;
      queryId = tmp;
      return "flex";
    })();
    iter.next();
    return iter;
  });
  useCfsHook.fetchMany = _asyncToGenerator(async () => {
    let closure_1;
    let closure_0 = [...arguments];
    let c2 = 0;
    let c3 = 0;
    const iter = (async () => {
      await Promise.all(closure_0.map((args) => {
        let value;
        const tmp = closure_1_1(...args);
        obj = { queryId: tmp, args, useStoreState: value };
        const tmp2 = closure_1_13;
        if (null == tmp) {
          value = loader;
        } else {
          value = closure_1_11.get(tmp);
          const obj2 = closure_1_11;
          if (null == value) {
            const obj3 = closure_0(c2[5]);
            const obj4 = obj3.create(f109633);
            const result = obj2.set(tmp, obj4);
            value = obj4;
          }
        }
        return tmp2(obj);
      }));
      await "HermesInternal";
      return "flex";
    })();
    iter.next();
    return iter;
  });
  useCfsHook.refetchMany = _asyncToGenerator(async () => {
    let closure_1;
    let closure_0 = [...arguments];
    let c2 = 0;
    let c3 = 0;
    const iter = (async () => {
      await Promise.all(closure_0.map((args) => {
        let value;
        const tmp = closure_1_1(...args);
        if (null == tmp) {
          value = loader;
        } else {
          obj = closure_1_11;
          value = closure_1_11.get(tmp);
          if (null == value) {
            const obj3 = closure_0(c2[5]);
            const obj2 = obj3.create(f109633);
            const result = obj.set(tmp, obj2);
            value = obj2;
          }
        }
        backoff = value.getState().backoff;
        backoff.succeed();
        value.setState({ failureLockedUntil: null });
        const obj4 = { queryId: tmp, args, useStoreState: value, refetch: true };
        return closure_1_13(obj4);
      }));
      await "HermesInternal";
      return "flex";
    })();
    iter.next();
    return iter;
  });
  return useCfsHook;
};
