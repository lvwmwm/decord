// Module ID: 9398
// Function ID: 9399
// Name: NativePaymentHooks
// Dependencies: [5, 32, 19, 502, 7131, 3, 558, 576, 504, 12, 9399, 4784, 4782, 2]
// Exports: useNativeIAPPayments

// Module 9398 (NativePaymentHooks)
import LoggerDefault from "Logger" /* 3 */;
import react2 from "react" /* 576 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import IAPStore from "IAPStore" /* 7131 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, c5, dependencyMap, ref, set;

let tmp;
const get_initialized = tmp(504);
function notSupported() {
  const error = new Error("Native hook not supported for android");
  throw error;
}
function notSupportedReturnVoid() {
  const error = new Error("Native hook not supported for android");
  throw error;
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let tmp2 = new LoggerDefault("NativePaymentHooks.android.tsx");
let closure_8 = tmp2;
let closure_9 = { nativePaymentsConnected: true, storeFront: null, canMakePayments: true };
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGoogleSkuIds(arg0, arg1, arg2) {
  let closure_4;
  let first;
  let tmp10;
  let tmp12;
  let tmp7;
  let tmp8;
  _require = arg0;
  let closure_1 = arg1;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(13);
  const tmp4 = undefined === arg2 || arg2;
  dependencyMap = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [IAPStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4) {
    const fn = function p() {
      const isFetchingGoogleSkusResult = closure_2 && IAPStore.isFetchingGoogleSkus();
      return isFetchingGoogleSkusResult;
    };
    const items1 = [tmp4];
    cResult[1] = tmp4;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [];
    cResult[4] = items2;
    tmp10 = items2;
  } else {
    tmp10 = cResult[4];
  }
  let obj3 = react;
  _slicedToArray = react.useRef(tmp10);
  const tmp11 = _slicedToArray(react.useState(null), 2);
  [tmp12, react] = tmp11;
  if (cResult[5] === arg1) {
    if (cResult[6] === stateFromStores) {
      let tmp13;
      let tmp14;
      if (cResult[7] === arg0) {
        tmp13 = cResult[8];
        tmp14 = cResult[9];
      }
      const effect = obj3.useEffect(tmp13, tmp14);
      if (cResult[10] === tmp12) {
        let tmp16;
        if (cResult[11] === stateFromStores) {
          tmp16 = cResult[12];
        }
        return tmp16;
      }
      let obj2 = { isFetchingGoogleSkus: stateFromStores, fetchError: tmp12 };
      cResult[10] = tmp12;
      cResult[11] = stateFromStores;
      cResult[12] = obj2;
      tmp16 = obj2;
    }
  }
  const fn2 = function h() {
    let logger;
    function fetch() {
      return closure_0(...arguments);
    }
    closure_0 = stateFromStores(function*(arg0, value) {
      let obj5;
      let tmp10;
      let v3;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          let c0;
          c5 = 2;
          if (0 === ref) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              c0 = undefined;
              closure_1 = undefined;
              if (closure_1) {
                ref.current = [];
              }
              const obj4 = closure_2_1(closure_2_2[9]);
              const differenceResult = obj4.difference(tmp10, ref.current);
              c0 = differenceResult;
              const arr = tmp10;
              tmp10 = c3;
              if (!tmp10) {
                if (!closure_1) {
                  if (0 !== arr.length) {
                    if (0 !== differenceResult.length) {
                      c3 = 1;
                      ref = 2;
                      c5 = 1;
                      const obj7 = { value: obj5.loadInAppSkus(differenceResult), done: false };
                      obj5 = tmp10(closure_2_2[10]);
                      return obj7;
                    }
                  }
                }
              }
            }
          } else if (1 === tmp4) {
            c3 = 0;
            closure_1 = closure_2;
            logger.error("Unable to fetch product IDs from google play store: ", closure_1);
            c5("Unable to fetch");
            const obj3 = tmp10(closure_2_2[11]);
            const result = obj3.captureBillingException(closure_1);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            const obj = closure_2_1(closure_2_2[9]);
            ref.current = obj.union(ref.current, c0);
            c5(null);
            c3 = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: "+51" };
        } catch (tmp34) {
          closure_2 = tmp34;
          if (0 === c3) {
            c5 = 3;
            throw tmp34;
          } else {
            ref = 1;
          }
        }
      }
    });
    const tmp = fetch();
  };
  const items3 = [arg1, stateFromStores, arg0];
  cResult[5] = arg1;
  cResult[6] = stateFromStores;
  cResult[7] = arg0;
  cResult[8] = fn2;
  cResult[9] = items3;
  tmp14 = items3;
  tmp13 = fn2;
}) : (function useGoogleSkuIds(arg0, arg1) {
  let closure_4;
  let closure_5;
  let fetchError;
  _require = arg0;
  let closure_1 = arg1;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  react = undefined;
  let obj = require("get initialized");
  const items = [IAPStore];
  const items1 = [flag];
  const isFetchingGoogleSkus = obj.useStateFromStores(items, () => {
    const isFetchingGoogleSkusResult = flag && IAPStore.isFetchingGoogleSkus();
    return isFetchingGoogleSkusResult;
  }, items1);
  _slicedToArray = react.useRef([]);
  [fetchError, react] = react.useState(null);
  const items2 = [arg1, isFetchingGoogleSkus, arg0];
  const effect = react.useEffect(() => {
    function fetch() {
      return obj(...arguments);
    }
    let obj = function _fetch2() {
      let logger;
      obj = _asyncToGenerator(async (arg0, value) => {
        let obj5;
        let v3;
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: "+51" };
          }
        } else {
          try {
            let c0;
            c5 = 2;
            if (0 === ref) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                closure_1 = tmp;
                closure_0 = tmp10;
                c0 = undefined;
                if (closure_1) {
                  ref.current = [];
                }
                const obj4 = closure_2_1(flag[9]);
                const differenceResult = obj4.difference(closure_0, ref.current);
                c0 = differenceResult;
                const arr = closure_0;
                if (!c3) {
                  if (!closure_1) {
                    if (0 !== arr.length) {
                      if (0 !== differenceResult.length) {
                        c3 = 1;
                        ref = 2;
                        c5 = 1;
                        const obj7 = { value: obj5.loadInAppSkus(differenceResult), done: false };
                        obj5 = closure_2_0(flag[10]);
                        return obj7;
                      }
                    }
                  }
                }
              }
            } else if (1 === tmp4) {
              c3 = 0;
              closure_1 = closure_2;
              logger.error("Unable to fetch product IDs from google play store: ", closure_1);
              c5("Unable to fetch");
              const obj3 = closure_2_0(flag[11]);
              const result = obj3.captureBillingException(closure_1);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              obj = closure_2_1(flag[9]);
              ref.current = obj.union(ref.current, c0);
              c5(null);
              c3 = 0;
            }
            c5 = 3;
            return { value: "IconComponent", done: "+51" };
          } catch (tmp34) {
            closure_2 = tmp34;
            if (0 === c3) {
              c5 = 3;
              throw tmp34;
            } else {
              ref = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    const tmp = !fetch();
  }, items2);
  return { isFetchingGoogleSkus, fetchError };
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useLoadedGoogleSkuIds(arg0) {
  let authenticated;
  let closure_0;
  let first;
  let ready;
  let tmp13;
  let tmp7;
  let tmp8;
  let tmp9;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(15);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      set = new Set();
      return set;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  [tmp7, importDefault] = react.useState(first);
  _slicedToArray(react.useState(first), 2);
  const obj2 = react;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [IAPStore, AuthenticationStore];
    class S {
      constructor() {
        let isReadyResult;
        const obj = closure_0(dependencyMap[12]);
        if (obj.isGooglePlayBillingSupported()) {
          isReadyResult = ready.isReady();
        } else {
          isReadyResult = authenticated.isAuthenticated();
        }
        return isReadyResult;
      }
    }
    cResult[1] = items;
    cResult[2] = S;
    tmp9 = S;
    tmp8 = items;
  } else {
    tmp8 = cResult[1];
    tmp9 = cResult[2];
  }
  const tmp2Result = require("get initialized");
  const stateFromStores = tmp2Result.useStateFromStores(tmp8, tmp9);
  if (cResult[3] !== arg0) {
    const fn2 = function b() {
      let closure_1;
      let settled;
      let c0 = true;
      const obj = closure_0(dependencyMap[10]);
      ({ settled, release: closure_1 } = obj.retainInAppSkus(c0));
      obj.retainInAppSkus(c0);
      settled.then(() => {
        let args;
        const tmp = c0;
        if (tmp) {
          importDefault((arg0) => {
            const items = [...closure_1_0];
            set = new Set(items);
            return set;
          });
        }
      });
      return () => {
        c0 = false;
        closure_1();
      };
    };
    cResult[3] = arg0;
    cResult[4] = fn2;
    class S {
      constructor() {
        let isReadyResult;
        const obj = closure_0(dependencyMap[12]);
        if (obj.isGooglePlayBillingSupported()) {
          isReadyResult = ready.isReady();
        } else {
          isReadyResult = authenticated.isAuthenticated();
        }
        return isReadyResult;
      }
    }
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] === arg0) {
    let tmp14;
    let tmp16;
    let items3;
    if (cResult[6] === stateFromStores) {
      tmp14 = cResult[7];
    }
    const effect = obj2.useEffect(tmp13, tmp14);
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [IAPStore];
      cResult[8] = items1;
      class S {
        constructor() {
          let isReadyResult;
          const obj = closure_0(dependencyMap[12]);
          if (obj.isGooglePlayBillingSupported()) {
            isReadyResult = ready.isReady();
          } else {
            isReadyResult = authenticated.isAuthenticated();
          }
          return isReadyResult;
        }
      }
    } else {
      tmp16 = cResult[8];
    }
    class S {
      constructor() {
        let isReadyResult;
        const obj = closure_0(dependencyMap[12]);
        if (obj.isGooglePlayBillingSupported()) {
          isReadyResult = ready.isReady();
        } else {
          isReadyResult = authenticated.isAuthenticated();
        }
        return isReadyResult;
      }
    }
    const tmp2Result2 = require("get initialized");
    const str = tmp2Result2.useStateFromStores(tmp16, tmp18, tmp19);
    if (cResult[12] === str) {
      let tmp20;
      if (cResult[13] === tmp7) {
        tmp20 = cResult[14];
      }
      return tmp20;
    }
    const items2 = [];
    const _Set = Set;
    const arraySpreadResult = HermesBuiltin.arraySpread(items2, tmp7, 0);
    if ("" === str) {
      items3 = [];
    } else {
      items3 = str.split(",");
    }
    HermesBuiltin.arraySpread(items2, items3, arraySpreadResult);
    const self = this;
    const self2 = this;
    const _Set1 = new _Set(items2);
    cResult[12] = str;
    cResult[13] = tmp7;
    cResult[14] = _Set1;
    tmp20 = _Set1;
  }
  const items4 = [arg0, stateFromStores];
  cResult[5] = arg0;
  cResult[6] = stateFromStores;
  cResult[7] = items4;
  tmp14 = items4;
}) : (function useLoadedGoogleSkuIds(arg0) {
  let authenticated;
  let closure_0;
  let closure_2;
  let first;
  let ready;
  _require = arg0;
  [first, dependencyMap] = react.useState(() => {
    set = new Set();
    return set;
  });
  let obj = require("get initialized");
  let items = [IAPStore, AuthenticationStore];
  let items1 = [
    arg0,
    obj.useStateFromStores(items, () => {
      let isReadyResult;
      const obj = closure_0(closure_2[12]);
      if (obj.isGooglePlayBillingSupported()) {
        isReadyResult = ready.isReady();
      } else {
        isReadyResult = authenticated.isAuthenticated();
      }
      return isReadyResult;
    })
  ];
  const effect = react.useEffect(() => {
    let settled;
    let c0 = true;
    const obj = closure_0(closure_2[10]);
    ({ settled, release: first } = obj.retainInAppSkus(c0));
    obj.retainInAppSkus(c0);
    settled.then(() => {
      let args;
      const tmp = c0;
      if (tmp) {
        closure_2((arg0) => {
          const items = [...closure_1_0];
          set = new Set(items);
          return set;
        });
      }
    });
    return () => {
      c0 = false;
      first();
    };
  }, items1);
  const items2 = [IAPStore];
  const items3 = [arg0];
  const obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items2, () => {
    let product;
    const found = closure_0.filter((item) => null != product.getProduct(item));
    return found.join(",");
  }, items3);
  const items4 = [first, stateFromStores];
  return react.useMemo(() => {
    let items1;
    const items = [...first];
    const _Set = Set;
    const str = stateFromStores;
    if ("" === stateFromStores) {
      items1 = [];
    } else {
      items1 = str.split(",");
    }
    HermesBuiltin.arraySpread(items, items1, tmp2);
    const _Set1 = new _Set(items);
    return _Set1;
  }, items4);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useResubscribeSubscription(arg0) {
  let tmp2;
  const obj = react2;
  const cResult = obj.c(2);
  const nativePaymentsConnected = closure_9.nativePaymentsConnected;
  if (cResult[0] !== nativePaymentsConnected) {
    const obj2 = { resubscribeSubscription: notSupported, nativePaymentsConnected };
    cResult[0] = nativePaymentsConnected;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : (function useResubscribeSubscription(arg0) {
  return { resubscribeSubscription: notSupported, nativePaymentsConnected: closure_9.nativePaymentsConnected };
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCancelSubscription(arg0, arg1) {
  let tmp2;
  const obj = react2;
  const cResult = obj.c(2);
  const nativePaymentsConnected = closure_9.nativePaymentsConnected;
  if (cResult[0] !== nativePaymentsConnected) {
    const obj2 = { cancelSubscription: notSupported, nativePaymentsConnected };
    cResult[0] = nativePaymentsConnected;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : (function useCancelSubscription(arg0, arg1) {
  return { cancelSubscription: notSupported, nativePaymentsConnected: closure_9.nativePaymentsConnected };
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCreateSubscription(arg0) {
  let tmp2;
  const obj = react2;
  const cResult = obj.c(2);
  const nativePaymentsConnected = closure_9.nativePaymentsConnected;
  if (cResult[0] !== nativePaymentsConnected) {
    const obj2 = { createSubscription: notSupportedReturnVoid, nativePaymentsConnected };
    cResult[0] = nativePaymentsConnected;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : (function useCreateSubscription(arg0) {
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    return { createSubscription: notSupportedReturnVoid, nativePaymentsConnected: closure_9.nativePaymentsConnected };
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMobileStoreFront() {
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [IAPStore];
    const fn = function n() {
      const items = [authStore.getUserCountry(), ];
      const products = authStore.getProducts();
      let currencyCode;
      if (products != null) {
        const first = products[0];
        if (first != null) {
          currencyCode = first.currencyCode;
        }
      }
      items[1] = currencyCode;
      return items;
    };
    cResult[0] = items;
    cResult[1] = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  [tmp8, tmp9] = tmpResult.useStateFromStoresArray(tmp4, tmp5);
  let tmp10 = null;
  _slicedToArray(tmpResult.useStateFromStoresArray(tmp4, tmp5), 2);
  if (null != tmp8) {
    tmp10 = null;
    if (null != tmp9) {
      if (cResult[2] === tmp8) {
        let tmp11;
        if (cResult[3] === tmp9) {
          tmp11 = cResult[4];
        }
        tmp10 = tmp11;
      }
      const obj2 = { country: tmp8, currency: tmp9 };
      cResult[2] = tmp8;
      cResult[3] = tmp9;
      cResult[4] = obj2;
      tmp11 = obj2;
    }
  }
  return tmp10;
}) : (function useMobileStoreFront() {
  let first;
  let tmp3;
  let obj = first(504);
  let items = [IAPStore];
  [first, tmp3] = obj.useStateFromStoresArray(items, () => {
    const items = [authStore.getUserCountry(), ];
    const products = authStore.getProducts();
    let currencyCode;
    if (products != null) {
      first = products[0];
      if (first != null) {
        currencyCode = first.currencyCode;
      }
    }
    items[1] = currencyCode;
    return items;
  });
  let closure_1 = tmp3;
  const items1 = [first, tmp3];
  return react.useMemo(() => {
    let tmp2 = null;
    if (null != first) {
      tmp2 = null;
      if (null != closure_1) {
        tmp2 = { country: tmp, currency: tmp3 };
        const obj = { country: tmp, currency: tmp3 };
      }
    }
    return tmp2;
  }, items1);
});
function useNativeIAPPayments() {
  return closure_9;
}
let result = size.fileFinishedImporting("modules/payments/native/hooks/NativePaymentHooks.android.tsx");

export default { useNativeIAPPayments, useGoogleSkuIds: tmp3, useLoadedGoogleSkuIds: tmp4, useCreateSubscription: tmp7, useCancelSubscription: tmp6, useResubscribeSubscription: tmp5, useMobileStoreFront: tmp8 };
export { useNativeIAPPayments };
export const useGoogleSkuIds = tmp3;
export const useLoadedGoogleSkuIds = tmp4;
export const useResubscribeSubscription = tmp5;
export const useCancelSubscription = tmp6;
export const useCreateSubscription = tmp7;
export const useMobileStoreFront = tmp8;
