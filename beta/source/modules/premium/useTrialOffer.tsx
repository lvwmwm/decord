// Module ID: 6869
// Function ID: 6870
// Name: useTrialOffer
// Dependencies: [32, 19, 1372, 6870, 504, 4488, 2040, 2]
// Exports: hasUserTrialOfferExpired, useTrialOffer

// Module 6869 (useTrialOffer)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import UserOfferStore from "UserOfferStore" /* 6870 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let react = react_mod;
let result = size.fileFinishedImporting("modules/premium/useTrialOffer.tsx");

export const hasUserTrialOfferExpired = function hasUserTrialOfferExpired(hasExpired) {
  let flag;
  if (hasExpired != null) {
    flag = hasExpired.hasExpired;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
export const useTrialOffer = function useTrialOffer(arg0) {
  let closure_0;
  let closure_3;
  let currentUser;
  let first;
  let stateFromStores;
  _require = arg0;
  let tmp = _require;
  const tmp2 = stateFromStores;
  let obj = require("get initialized");
  const items = [UserOfferStore];
  stateFromStores = obj.useStateFromStores(items, () => UserOfferStore.getUserTrialOffer(closure_0));
  let flag;
  const useState = react.useState;
  const obj2 = UserOfferStore;
  const obj3 = react;
  if (stateFromStores != null) {
    flag = stateFromStores.hasExpired;
  }
  if (flag == null) {
    flag = false;
  }
  const tmp4 = first(useState(flag), 2);
  first = tmp4[0];
  react = tmp4[1];
  const items1 = [UserStore];
  const tmpResult = tmp(tmp2[4]);
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => {
    const obj = closure_0(stateFromStores[5]);
    return obj.isPremium(currentUser.getCurrentUser());
  });
  let result = !stateFromStores1;
  if (stateFromStores1) {
    result = obj2.canFractionalPremiumUserUseOffer();
  }
  const items2 = [first, stateFromStores];
  const effect = obj3.useEffect(function() {
    const f123985 = () => {
      const tmp = first;
      if (!tmp) {
        if (stateFromStores.hasExpired) {
          closure_3(true);
        }
      }
      if (null != stateFromStores) {
        let num = 0;
        if (null != stateFromStores.expiresAt) {
          const expiresAt = tmp5.expiresAt;
          const _Date = Date;
          const time = expiresAt.getTime();
          num = time - Date.now();
        }
        const obj = timeout;
        if (timeout != null) {
          obj.start(num, f123985);
        }
      }
    };
    let tmp = stateFromStores;
    if (null != stateFromStores) {
      if (tmp.hasAcknowledged) {
        const self = this;
        const self2 = this;
        const timeout = new closure_0(stateFromStores[6]).Timeout();
        if (null != tmp) {
          let num = 0;
          if (null != tmp.expiresAt) {
            let expiresAt = tmp.expiresAt;
            let _Date = Date;
            let time = expiresAt.getTime();
            num = time - Date.now();
          }
          timeout.start(num, f123985);
        }
        return () => timeout.stop();
      }
    }
  }, items2);
  let tmp9 = null;
  if (!first) {
    tmp9 = null;
    if (result) {
      tmp9 = stateFromStores;
    }
  }
  return tmp9;
};
