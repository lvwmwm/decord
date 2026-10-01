// Module ID: 7505
// Function ID: 7506
// Name: useDiscountOffer
// Dependencies: [32, 19, 1372, 6870, 1374, 504, 4488, 2040, 2]
// Exports: default

// Module 7505 (useDiscountOffer)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import UserOfferStore from "UserOfferStore" /* 6870 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let react = react_mod;
const CHURN_DISCOUNT_IDS = PremiumConstants.CHURN_DISCOUNT_IDS;
const result = size.fileFinishedImporting("modules/premium/hooks/useDiscountOffer.tsx");

export default function useDiscountOffer(arg0, arg1) {
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
  stateFromStores = obj.useStateFromStores(items, () => UserOfferStore.getUserDiscountOffer(closure_0));
  let flag;
  const useState = react.useState;
  const obj3 = react;
  if (stateFromStores != null) {
    flag = stateFromStores.hasExpired();
  }
  if (flag == null) {
    flag = false;
  }
  const tmp3 = first(useState(flag), 2);
  first = tmp3[0];
  react = tmp3[1];
  const items1 = [UserStore];
  const tmpResult = tmp(tmp2[5]);
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => {
    const obj = closure_0(stateFromStores[6]);
    return obj.isPremium(currentUser.getCurrentUser());
  });
  const items2 = [first, stateFromStores];
  const hasItem = CHURN_DISCOUNT_IDS.includes(arg0);
  const effect = obj3.useEffect(function() {
    const f124102 = () => {
      const tmp = first;
      if (!tmp) {
        if (stateFromStores.hasExpired()) {
          closure_3(true);
        }
      }
      let hasAcknowledgedResult;
      if (stateFromStores != null) {
        hasAcknowledgedResult = obj.hasAcknowledged();
      }
      if (hasAcknowledgedResult) {
        let num = 0;
        if (null != stateFromStores.expiresAt) {
          const expiresAt = obj.expiresAt;
          const _Date = Date;
          const time = expiresAt.getTime();
          num = time - Date.now();
        }
        const obj2 = timeout;
        if (timeout != null) {
          obj2.start(num, f124102);
        }
      }
    };
    const obj = stateFromStores;
    let hasAcknowledgedResult;
    if (stateFromStores != null) {
      hasAcknowledgedResult = obj.hasAcknowledged();
    }
    if (hasAcknowledgedResult) {
      const self = this;
      const self2 = this;
      const timeout = new closure_0(stateFromStores[7]).Timeout();
      let hasAcknowledgedResult1;
      if (obj != null) {
        hasAcknowledgedResult1 = obj.hasAcknowledged();
      }
      if (hasAcknowledgedResult1) {
        let num = 0;
        if (null != obj.expiresAt) {
          let expiresAt = obj.expiresAt;
          let _Date = Date;
          let time = expiresAt.getTime();
          num = time - Date.now();
        }
        timeout.start(num, f124102);
      }
      return () => timeout.stop();
    }
  }, items2);
  let tmp8 = null;
  if (!first) {
    if (stateFromStores1) {
      const tmp9 = arg1;
      if (!tmp9) {
        tmp8 = null;
      }
    }
    tmp8 = stateFromStores;
  }
  return tmp8;
};
