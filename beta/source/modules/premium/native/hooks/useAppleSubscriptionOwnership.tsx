// Module ID: 12925
// Function ID: 12926
// Name: useAppleSubscriptionOwnership
// Dependencies: [32, 19, 12926, 1980, 6658, 1074, 504, 1364, 12927, 2]
// Exports: useAppleSubscriptionOwnership

// Module 12925 (useAppleSubscriptionOwnership)
import Constants from "Constants" /* 1074 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ApplePurchasesStore from "ApplePurchasesStore" /* 12926 */;
import AppStateStore from "AppStateStore" /* 1980 */;
import IAPStore from "IAPStore" /* 6658 */;
import size from "module_2" /* 2 */;

let c0, closure_4;

let react = react_mod;
const AppStates = Constants.AppStates;
const result = size.fileFinishedImporting("modules/premium/native/hooks/useAppleSubscriptionOwnership.tsx");

export const useAppleSubscriptionOwnership = function useAppleSubscriptionOwnership(subscription) {
  let prop;
  let ready;
  let state;
  let stateFromStores1;
  let tmp = stateFromStores1;
  const tmp2 = prop;
  let obj = stateFromStores1(prop[6]);
  const items = [IAPStore];
  const stateFromStores = obj.useStateFromStores(items, () => ready.isReady());
  const items1 = [state];
  const obj2 = stateFromStores1(prop[6]);
  stateFromStores1 = obj2.useStateFromStores(items1, () => state.getState());
  prop = undefined;
  if (subscription != null) {
    prop = subscription.paymentGatewaySubscriptionId;
  }
  const items2 = [closure_4];
  const items3 = [prop];
  const tmpResult = tmp(tmp2[6]);
  const stateFromStores2 = tmpResult.useStateFromStores(items2, () => ApplePurchasesStore.hasOwnership(prop), items3);
  const tmpResult2 = tmp(tmp2[7]);
  let isIOSResult = tmpResult2.isIOS();
  if (isIOSResult) {
    let isPurchasedViaApple;
    if (subscription != null) {
      isPurchasedViaApple = subscription.isPurchasedViaApple;
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
          const obj = stateFromStores1(prop[8]);
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
};
