// Module ID: 13510
// Function ID: 13511
// Name: useAppleSubscriptionOwnership
// Dependencies: [32, 19, 13511, 1998, 7120, 1085, 558, 576, 504, 1381, 13512, 2]

// Module 13510 (useAppleSubscriptionOwnership)
import Constants from "Constants" /* 1085 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ApplePurchasesStore from "ApplePurchasesStore" /* 13511 */;
import AppStateStore_mod from "AppStateStore" /* 1998 */;
import IAPStore from "IAPStore" /* 7120 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c0, closure_4, flag, nextPromise, tmp3, tmp6, tmp7;

let react = react_mod;
let AppStateStore = AppStateStore_mod;
const AppStates = Constants.AppStates;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAppleSubscriptionOwnership(paymentGatewaySubscriptionId) {
  let closure_3;
  let prop;
  let ready;
  let state;
  let stateFromStores1;
  let tmp13;
  let tmp15;
  let tmp16;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let tmp = stateFromStores1;
  const tmp2 = prop;
  let obj = stateFromStores1(prop[7]);
  const cResult = obj.c(21);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [IAPStore];
    class S {
      constructor() {
        return ready.isReady();
      }
    }
    cResult[0] = items;
    cResult[1] = S;
    tmp4 = items;
    tmp5 = S;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(tmp2[8]);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AppStateStore];
    class A {
      constructor() {
        return state.getState();
      }
    }
    cResult[2] = items1;
    cResult[3] = A;
    tmp9 = A;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult4 = tmp(tmp2[8]);
  stateFromStores1 = tmpResult4.useStateFromStores(tmp8, tmp9);
  prop = undefined;
  if (paymentGatewaySubscriptionId != null) {
    prop = paymentGatewaySubscriptionId.paymentGatewaySubscriptionId;
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [closure_4];
    class A {
      constructor() {
        return state.getState();
      }
    }
    cResult[4] = items2;
    tmp13 = items2;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] !== prop) {
    const fn = function y() {
      return ApplePurchasesStore.hasOwnership(prop);
    };
    const items3 = [prop];
    class A {
      constructor() {
        return state.getState();
      }
    }
    cResult[5] = prop;
    cResult[6] = fn;
    cResult[7] = items3;
    tmp16 = items3;
    tmp15 = fn;
  } else {
    tmp15 = cResult[6];
    tmp16 = cResult[7];
  }
  const tmpResult5 = tmp(tmp2[8]);
  const stateFromStores2 = tmpResult5.useStateFromStores(tmp13, tmp15, tmp16);
  if (cResult[8] === prop) {
    if (cResult[9] === stateFromStores) {
      if (paymentGatewaySubscriptionId != null) {
        const isPurchasedViaApple = paymentGatewaySubscriptionId.isPurchasedViaApple;
      }
      class A {
        constructor() {
          return state.getState();
        }
      }
      react = tmp19;
      const tmp23 = stateFromStores2(react.useState(null), 2);
      closure_4 = tmp23[1];
      AppStateStore = tmp24;
      const obj6 = react;
      if (cResult[12] === stateFromStores1) {
        if (cResult[13] === prop) {
          let tmp25;
          let tmp26;
          if (cResult[14] === tmp19) {
            tmp25 = cResult[15];
            tmp26 = cResult[16];
          }
          const effect = obj6.useEffect(tmp25, tmp26);
          if (cResult[17] === (null != prop && tmp23[0] === prop)) {
            if (cResult[18] === stateFromStores2) {
              let tmp28;
              if (cResult[19] === tmp19) {
                tmp28 = cResult[20];
              }
              return tmp28;
            }
          }
          class A {
            constructor() {
              return state.getState();
            }
          }
          tmp29[0] = function isMismatch() {
            return state && react && !stateFromStores2;
          };
          cResult[17] = null != prop && tmp23[0] === prop;
          cResult[18] = stateFromStores2;
          cResult[19] = tmp19;
          cResult[20] = tmp29;
          class P {
            constructor() {
              tmp = closure_3;
              if (tmp) {
                tmp2 = closure_1;
                tmp3 = null;
                if (null != closure_1) {
                  tmp4 = c0;
                  tmp5 = closure_1_7;
                  if (c0 === closure_1_7.ACTIVE) {
                    flag = false;
                    c0 = false;
                    tmp6 = closure_0;
                    tmp7 = closure_1;
                    obj = closure_0(closure_1[10]);
                    applePurchases = obj.fetchApplePurchases();
                    nextPromise = applePurchases.then((result) => {
                      const tmp = !c0 && result;
                      if (tmp) {
                        closure_4(prop);
                      }
                    });
                    return () => {
                      c0 = true;
                    };
                  }
                }
              }
              return;
            }
          }
        }
      }
      class P {
        constructor() {
          tmp = closure_3;
          if (tmp) {
            tmp2 = closure_1;
            tmp3 = null;
            if (null != closure_1) {
              tmp4 = c0;
              tmp5 = closure_1_7;
              if (c0 === closure_1_7.ACTIVE) {
                flag = false;
                c0 = false;
                tmp6 = closure_0;
                tmp7 = closure_1;
                obj = closure_0(closure_1[10]);
                applePurchases = obj.fetchApplePurchases();
                nextPromise = applePurchases.then((result) => {
                  const tmp = !c0 && result;
                  if (tmp) {
                    closure_4(prop);
                  }
                });
                return () => {
                  c0 = true;
                };
              }
            }
          }
          return;
        }
      }
      const items4 = [tmp19, prop, stateFromStores1];
      cResult[12] = stateFromStores1;
      cResult[13] = prop;
      cResult[14] = tmp19;
      cResult[15] = P;
      cResult[16] = items4;
      tmp26 = items4;
      tmp25 = P;
    }
  }
  const tmpResult6 = tmp(tmp2[9]);
  let isIOSResult = tmpResult6.isIOS();
  if (isIOSResult) {
    if (paymentGatewaySubscriptionId != null) {
      const isPurchasedViaApple2 = paymentGatewaySubscriptionId.isPurchasedViaApple;
    }
    class A {
      constructor() {
        return state.getState();
      }
    }
  }
  if (isIOSResult) {
    isIOSResult = null != prop;
  }
  if (isIOSResult) {
    isIOSResult = "" !== prop;
  }
  if (isIOSResult) {
    isIOSResult = stateFromStores;
  }
  cResult[8] = prop;
  cResult[9] = stateFromStores;
  let isPurchasedViaApple1;
  if (paymentGatewaySubscriptionId != null) {
    isPurchasedViaApple1 = paymentGatewaySubscriptionId.isPurchasedViaApple;
  }
  cResult[10] = isPurchasedViaApple1;
  cResult[11] = isIOSResult;
}) : (function useAppleSubscriptionOwnership(paymentGatewaySubscriptionId) {
  let prop;
  let ready;
  let state;
  let stateFromStores1;
  let tmp = stateFromStores1;
  const tmp2 = prop;
  let obj = stateFromStores1(prop[8]);
  const items = [IAPStore];
  const stateFromStores = obj.useStateFromStores(items, () => ready.isReady());
  const items1 = [state];
  const obj2 = stateFromStores1(prop[8]);
  stateFromStores1 = obj2.useStateFromStores(items1, () => state.getState());
  prop = undefined;
  if (paymentGatewaySubscriptionId != null) {
    prop = paymentGatewaySubscriptionId.paymentGatewaySubscriptionId;
  }
  const items2 = [closure_4];
  const items3 = [prop];
  const tmpResult = tmp(tmp2[8]);
  const stateFromStores2 = tmpResult.useStateFromStores(items2, () => ApplePurchasesStore.hasOwnership(prop), items3);
  const tmpResult2 = tmp(tmp2[9]);
  let isIOSResult = tmpResult2.isIOS();
  if (isIOSResult) {
    let isPurchasedViaApple;
    if (paymentGatewaySubscriptionId != null) {
      isPurchasedViaApple = paymentGatewaySubscriptionId.isPurchasedViaApple;
    }
    isIOSResult = true === isPurchasedViaApple;
  }
  if (isIOSResult) {
    isIOSResult = null != prop;
  }
  if (isIOSResult) {
    isIOSResult = "" !== prop;
  }
  if (isIOSResult) {
    isIOSResult = stateFromStores;
  }
  react = isIOSResult;
  const tmp9 = stateFromStores2(react.useState(null), 2);
  closure_4 = tmp9[1];
  state = tmp10;
  const items4 = [isIOSResult, prop, stateFromStores1];
  const effect = obj5.useEffect(() => {
    let tmp = closure_3;
    if (tmp) {
      if (null != prop) {
        if (c0 === constants.ACTIVE) {
          c0 = false;
          const obj = stateFromStores1(prop[10]);
          const applePurchases = obj.fetchApplePurchases();
          applePurchases.then((result) => {
            const tmp = !c0 && result;
            if (tmp) {
              closure_4(prop);
            }
          });
          return () => {
            c0 = true;
          };
        }
      }
    }
  }, items4);
  const items5 = [null != prop && tmp9[0] === prop, isIOSResult, stateFromStores2];
  return react.useMemo(() => ({
    isMismatch() {
      return state && closure_1_3 && !stateFromStores2;
    }
  }), items5);
});
const result = size.fileFinishedImporting("modules/premium/native/hooks/useAppleSubscriptionOwnership.tsx");

export const useAppleSubscriptionOwnership = tmp2;
