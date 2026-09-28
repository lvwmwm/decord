// Module ID: 7505
// Function ID: 7506
// Name: useDiscountOffer
// Dependencies: [32, 19, 1372, 6870, 1374, 504, 4488, 2040, 2]
// Exports: default

// Module 7505 (useDiscountOffer)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import UserOfferStore from "UserOfferStore" /* 6870 */;

const require = globalThis.__r;

const require = fn;
const CHURN_DISCOUNT_IDS = fn(1374).CHURN_DISCOUNT_IDS;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/hooks/useDiscountOffer.tsx");

export default function useDiscountOffer(arg0, arg1) {
  _require = arg0;
  const items = [UserOfferStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => UserOfferStore.getUserDiscountOffer(closure_0));
  let flag;
  if (stateFromStores != null) {
    flag = stateFromStores.hasExpired();
  }
  if (flag == null) {
    flag = false;
  }
  const tmp3 = first(noop.useState(flag), 2);
  first = tmp3[0];
  noop = tmp3[1];
  const obj = require("initialize");
  const obj3 = noop;
  const items1 = [UserStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => closure_0(stateFromStores[6]).isPremium(currentUser.getCurrentUser()));
  const items2 = [first, stateFromStores];
  const hasItem = CHURN_DISCOUNT_IDS.includes(arg0);
  const effect = obj3.useEffect(() => {
    let hasAcknowledgedResult;
    if (stateFromStores != null) {
      hasAcknowledgedResult = obj.hasAcknowledged();
    }
    if (hasAcknowledgedResult) {
      const timeout = new closure_0(stateFromStores[7]).Timeout();
      let hasAcknowledgedResult1;
      if (obj != null) {
        hasAcknowledgedResult1 = obj.hasAcknowledged();
      }
      if (hasAcknowledgedResult1) {
        let num = 0;
        if (null != obj.expiresAt) {
          const expiresAt = obj.expiresAt;
          const _Date = Date;
          const time = expiresAt.getTime();
          num = time - Date.now();
        }
        timeout.start(num, () => {
          if (!closure_2_2) {
            if (closure_2_1.hasExpired()) {
              closure_2_3(true);
            }
          }
          let hasAcknowledgedResult;
          if (closure_2_1 != null) {
            hasAcknowledgedResult = obj.hasAcknowledged();
          }
          if (hasAcknowledgedResult) {
            let num = 0;
            if (null != obj.expiresAt) {
              let expiresAt = obj.expiresAt;
              let _Date = Date;
              let time = expiresAt.getTime();
              num = time - Date.now();
            }
            if (closure_1_0 != null) {
              obj2.start(num, () => {
                if (!closure_2_2) {
                  if (closure_2_1.hasExpired()) {
                    closure_2_3(true);
                  }
                }
                let hasAcknowledgedResult;
                if (closure_2_1 != null) {
                  hasAcknowledgedResult = obj.hasAcknowledged();
                }
                if (hasAcknowledgedResult) {
                  let num = 0;
                  if (null != obj.expiresAt) {
                    let expiresAt = obj.expiresAt;
                    let _Date = Date;
                    let time = expiresAt.getTime();
                    num = time - Date.now();
                  }
                  if (closure_1_0 != null) {
                    obj2.start(num, () => {
                      if (!closure_2_2) {
                        if (closure_2_1.hasExpired()) {
                          closure_2_3(true);
                        }
                      }
                      let hasAcknowledgedResult;
                      if (closure_2_1 != null) {
                        hasAcknowledgedResult = obj.hasAcknowledged();
                      }
                      if (hasAcknowledgedResult) {
                        let num = 0;
                        if (null != obj.expiresAt) {
                          let expiresAt = obj.expiresAt;
                          let _Date = Date;
                          let time = expiresAt.getTime();
                          num = time - Date.now();
                        }
                        if (closure_1_0 != null) {
                          obj2.start(num, () => { ... });
                        }
                        obj2 = closure_1_0;
                      }
                    });
                  }
                  obj2 = closure_1_0;
                }
              });
            }
            obj2 = closure_1_0;
          }
        });
      }
      return () => timeout.stop();
    }
  }, items2);
  let tmp8 = null;
  if (!first) {
    if (stateFromStores1) {
      if (!arg1) {
        tmp8 = null;
      }
    }
    tmp8 = stateFromStores;
  }
  return tmp8;
};
