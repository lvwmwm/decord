// Module ID: 18198
// Function ID: 18199
// Name: SubscriptionManager
// Dependencies: [5, 1390, 4771, 4775, 7109, 1392, 6807, 1989, 5724, 7115, 2]

// Module 18198 (SubscriptionManager)
import PremiumTypeUtils from "PremiumTypeUtils" /* 1989 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserStore from "UserStore" /* 1390 */;
import BillingInfoStore from "BillingInfoStore" /* 4771 */;
import SubscriptionStore from "SubscriptionStore" /* 4775 */;
import EntitlementStore from "EntitlementStore" /* 7109 */;
import PremiumConstants from "PremiumConstants" /* 1392 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6807 */;
import size from "module_2" /* 2 */;

let c1, c2, currentUser, isFetchingMostRecentSubscription;

let metroImportAll;
let metroImportDefault;
({ PREMIUM_SUBSCRIPTION_APPLICATION: metroImportDefault, PremiumTypes: metroImportAll } = PremiumConstants);
class SubscriptionManager extends AutomaticLifecycleManager {
  constructor() {
    let TIER_1;
    let applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN() {
        const result = require.maybeFetchSubscriptions();
        const result1 = require.maybeFetchCountryCode();
        const result2 = require.maybeFetchMostRecentSubscription();
      }
    };
    applyArgumentsResult.maybeFetchSubscriptions = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let obj3;
      let obj5;
      if (currentUser === 2) {
        currentUser = 3;
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
          let closure_1;
          let tmp;
          currentUser = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              currentUser = 3;
              throw value;
            } else if (arg0 === 2) {
              currentUser = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_1 = tmp4;
              tmp = undefined;
              currentUser = currentUser.getCurrentUser();
              const isSubscriptionFetching = BillingInfoStore.isSubscriptionFetching;
              const obj9 = tmp(closure_1[7]);
              if (obj9.isPremium(currentUser)) {
                const result = isFetchingMostRecentSubscription.hasFetchedSubscriptions() || isSubscriptionFetching;
                if (!result) {
                  c2 = 1;
                  currentUser = 1;
                  const obj6 = { value: obj3.fetchSubscriptions(), done: false };
                  obj3 = tmp(closure_1[8]);
                  return obj6;
                }
              }
              currentUser = 3;
              return { value: "IconComponent", done: "+51" };
            }
          } else if (1 === c2) {
            if (arg0 === 1) {
              currentUser = 3;
              throw value;
            } else if (arg0 === 2) {
              currentUser = 3;
              const obj7 = { value, done: true };
              return obj7;
            }
          } else if (arg0 === 1) {
            currentUser = 3;
            throw value;
          } else if (arg0 === 2) {
            currentUser = 3;
            const obj = { value, done: true };
            return obj;
          }
          tmp = isFetchingMostRecentSubscription.getPremiumSubscription();
          let paymentSourceId;
          if (tmp != null) {
            paymentSourceId = tmp.paymentSourceId;
          }
          let hasItem = null != paymentSourceId;
          if (!hasItem) {
            const applicationIdsFetched = EntitlementStore.applicationIdsFetched;
            hasItem = applicationIdsFetched.has(closure_1_7);
          }
          if (!hasItem) {
            c2 = 2;
            currentUser = 1;
            const obj8 = { value: obj5.fetchUserEntitlementsForApplication(closure_1_7), done: false };
            obj5 = tmp(closure_1[9]);
            return obj8;
          }
        } catch (tmp22) {
          currentUser = 3;
          throw tmp22;
        }
      }
    });
    applyArgumentsResult.maybeFetchMostRecentSubscription = function maybeFetchMostRecentSubscription() {
      currentUser = currentUser.getCurrentUser();
      let premiumType;
      const isPremiumAtMost = PremiumTypeUtils.isPremiumAtMost;
      PremiumTypeUtils;
      const tmp = require;
      const tmp2 = dependencyMap;
      if (currentUser != null) {
        premiumType = currentUser.premiumType;
      }
      if (premiumType == null) {
        premiumType = null;
      }
      let hasHadPremiumResult = null != currentUser;
      const isPremiumAtMostResult = isPremiumAtMost(premiumType, TIER_1.TIER_1);
      isFetchingMostRecentSubscription = isFetchingMostRecentSubscription.getIsFetchingMostRecentSubscription();
      if (hasHadPremiumResult) {
        hasHadPremiumResult = isPremiumAtMostResult;
      }
      if (hasHadPremiumResult) {
        hasHadPremiumResult = currentUser.hasHadPremium();
      }
      if (hasHadPremiumResult) {
        hasHadPremiumResult = !isFetchingMostRecentSubscription;
      }
      if (hasHadPremiumResult) {
        const tmpResult = tmp(tmp2[8]);
        const mostRecentSubscription = tmpResult.fetchMostRecentSubscription();
      }
    };
    applyArgumentsResult.maybeFetchCountryCode = _asyncToGenerator(async (arg0, value) => {
      let v3;
      if (applyArgumentsResult === 2) {
        applyArgumentsResult = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
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
          applyArgumentsResult = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              applyArgumentsResult = 3;
              throw value;
            } else if (arg0 === 2) {
              applyArgumentsResult = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              currentUser = currentUser.getCurrentUser();
              const obj5 = applyArgumentsResult(c1[7]);
              const isPremiumResult = obj5.isPremium(currentUser) && !ipCountryCodeLoaded.ipCountryCodeLoaded;
              if (isPremiumResult) {
                c1 = 1;
                applyArgumentsResult = 1;
                const obj4 = { value: applyArgumentsResult.fetchCountryCode(), done: false };
                return obj4;
              }
            }
          } else if (arg0 === 1) {
            applyArgumentsResult = 3;
            throw value;
          } else if (arg0 === 2) {
            applyArgumentsResult = 3;
            const obj = { value, done: true };
            return obj;
          }
          applyArgumentsResult = 3;
          return { value: "IconComponent", done: "+51" };
        } catch (tmp7) {
          applyArgumentsResult = 3;
          throw tmp7;
        }
      }
    });
    applyArgumentsResult.fetchCountryCode = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              applyArgumentsResult = tmp3;
              const obj5 = applyArgumentsResult(c1[8]);
              c1 = 1;
              c2 = 1;
              const obj6 = { value: obj5.fetchIpCountryCode(), done: false };
              return obj6;
            }
          } else {
            if (1 === c1) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj7 = { value, done: true };
                return obj7;
              } else if (null != ipCountryCode.ipCountryCode) {
                const obj2 = applyArgumentsResult(c1[8]);
                c1 = 2;
                c2 = 1;
                const obj8 = { value: obj2.fetchPaymentSources(), done: false };
                return obj8;
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj = { value, done: true };
              return obj;
            }
            c2 = 3;
            return { value: "IconComponent", done: "+51" };
          }
        } catch (tmp12) {
          c2 = 3;
          throw tmp12;
        }
      }
    });
    return applyArgumentsResult;
  }
}
const subscriptionManager = new SubscriptionManager();
let result = size.fileFinishedImporting("modules/premium/SubscriptionManager.tsx");

export default subscriptionManager;
