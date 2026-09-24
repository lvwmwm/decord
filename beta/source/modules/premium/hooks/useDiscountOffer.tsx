// Module ID: 8357
// Function ID: 8358
// Name: useDiscountOffer
// Dependencies: [32, 19, 1376, 7729, 1378, 558, 568, 504, 4450, 2040, 2]

// Module 8357 (useDiscountOffer)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1376 */;
import UserOfferStore from "UserOfferStore" /* 7729 */;

const require = globalThis.__r;

const require = fn;
const PremiumConstants = fn(1378);
({ PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID: metroRequire, PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID: closure_7 } = PremiumConstants);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/hooks/useDiscountOffer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  const cResult = require("c").c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserOfferStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function p() {
      return UserOfferStore.getUserDiscountOffer(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (cResult[3] !== stateFromStores) {
    let flag;
    if (stateFromStores != null) {
      flag = stateFromStores.hasExpired();
    }
    if (flag == null) {
      flag = false;
    }
    cResult[3] = stateFromStores;
    cResult[4] = flag;
    let tmp7 = flag;
  } else {
    tmp7 = cResult[4];
  }
  const tmp9 = first1(noop.useState(tmp7), 2);
  first1 = tmp9[0];
  noop = tmp9[1];
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    class E {
      constructor() {
        obj = closure_0(closure_1[8]);
        return obj.isPremium(closure_1_4.getCurrentUser());
      }
    }
    cResult[5] = items1;
    cResult[6] = E;
  }
  require("initialize");
  if (cResult[7] === first1) {
    if (cResult[8] === stateFromStores) {
      let tmp15 = cResult[9];
      let tmp16 = cResult[10];
    }
    const effect = noop.useEffect(tmp15, tmp16);
    class E {
      constructor() {
        obj = closure_0(closure_1[8]);
        return obj.isPremium(closure_1_4.getCurrentUser());
      }
    }
    return null;
  }
  const fn2 = function w() {
    let hasAcknowledgedResult;
    if (stateFromStores != null) {
      hasAcknowledgedResult = obj.hasAcknowledged();
    }
    if (hasAcknowledgedResult) {
      const timeout = new closure_0(stateFromStores[9]).Timeout();
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
  };
  const items2 = [first1, stateFromStores];
  cResult[7] = first1;
  cResult[8] = stateFromStores;
  cResult[9] = fn2;
  cResult[10] = items2;
  tmp16 = items2;
  tmp15 = fn2;
}) : ((arg0, arg1) => {
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
  const items2 = [first, stateFromStores];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => closure_0(stateFromStores[8]).isPremium(currentUser.getCurrentUser()));
  const effect = obj3.useEffect(() => {
    let hasAcknowledgedResult;
    if (stateFromStores != null) {
      hasAcknowledgedResult = obj.hasAcknowledged();
    }
    if (hasAcknowledgedResult) {
      const timeout = new closure_0(stateFromStores[9]).Timeout();
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
  let tmp7 = null;
  if (!first) {
    if (stateFromStores1) {
      if (!arg1) {
        if (arg0 !== closure_6) {
          tmp7 = null;
        }
      }
    }
    tmp7 = stateFromStores;
  }
  return tmp7;
});
