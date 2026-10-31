// Module ID: 15277
// Function ID: 15278
// Name: BillingInformation
// Dependencies: [5, 1072, 15269, 2047, 1376, 1113, 14451, 2]
// Exports: useBillingInformationNative

// Module 15277 (BillingInformation)
import Constants from "Constants" /* 1072 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0, c1;

const SubscriptionStatusTypes = Constants.SubscriptionStatusTypes;
const result = size.fileFinishedImporting("modules/billing/native/subscription/BillingInformation.tsx");

export function useBillingInformationNative(subscription, subscriptionPeriodStart, first1, flag, arg4) {
  let closure_0;
  let tmp = first1;
  if (first1 === undefined) {
    tmp = null;
  }
  if (flag === undefined) {
    flag = false;
  }
  let obj = arg4;
  if (arg4 === undefined) {
    obj = {};
  }
  const fractionalPremiumInfo = obj.fractionalPremiumInfo;
  _require = undefined;
  const tmp2 = _require;
  let obj2 = require("useAppleSubscriptionOwnership");
  const appleSubscriptionOwnership = obj2.useAppleSubscriptionOwnership(subscription);
  if (null == subscriptionPeriodStart) {
    return null;
  } else {
    const tmp2Result = tmp2(2047);
    const billingInformationString = tmp2Result.getBillingInformationString(subscription, subscriptionPeriodStart, tmp, flag, fractionalPremiumInfo);
    let formatResult = billingInformationString;
    const tmp2Result2 = tmp2(1376);
    if (tmp2Result2.isIOS()) {
      formatResult = billingInformationString;
      if (subscription.isPurchasedViaApple) {
        formatResult = billingInformationString;
        if (subscription.status === SubscriptionStatusTypes.ACTIVE) {
          formatResult = billingInformationString;
          if (!appleSubscriptionOwnership.isMismatch()) {
            const intl = tmp2(1113).intl;
            const format = intl.format;
            let obj3 = {
              renewalDate: subscriptionPeriodStart.subscriptionPeriodStart,
              onSubscriptionManagementClick() {
                          return closure_0(...arguments);
                        }
            };
            const tmp6 = _asyncToGenerator;
            const gknRR3 = tmp2(1113).t.gknRR3;
            _require = _asyncToGenerator(async (arg0, value) => {
              let v3;
              if (c0 === 2) {
                c0 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp2 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  return { value: "HermesInternal", done: "HermesInternal" };
                }
              } else {
                try {
                  c0 = 2;
                  if (0 === c1) {
                    if (arg0 === 1) {
                      c0 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c0 = 3;
                      const obj4 = { value, done: true };
                      return obj4;
                    } else {
                      const obj2 = c0(c1[6]);
                      c1 = 1;
                      c0 = 1;
                      const obj5 = { value: obj2.manageSubscription(), done: false };
                      return obj5;
                    }
                  } else if (arg0 === 1) {
                    c0 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c0 = 3;
                    const obj = { value, done: true };
                    return obj;
                  } else {
                    c0 = 3;
                    return { value: "HermesInternal", done: "HermesInternal" };
                  }
                } catch (tmp6) {
                  c0 = 3;
                  throw tmp6;
                }
              }
            });
            formatResult = format(gknRR3, obj3);
          }
        }
      }
    }
    return formatResult;
  }
}
