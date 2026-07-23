// Module ID: 7417
// Function ID: 59612
// Name: getBillingInformationStringNative
// Dependencies: [5, 653, 3776, 478, 1212, 7203, 2]
// Exports: getBillingInformationStringNative

// Module 7417 (getBillingInformationStringNative)
import serializePurchaseResponse from "serializePurchaseResponse";
import { SubscriptionStatusTypes } from "ME";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/billing/native/subscription/BillingInformation.tsx");

export const getBillingInformationStringNative = function getBillingInformationStringNative(subscription, first, first1, flag, fractionalPremiumInfo) {
  let tmp = first1;
  if (first1 === undefined) {
    tmp = null;
  }
  if (flag === undefined) {
    flag = false;
  }
  let _require;
  let obj = _require(3776);
  let billingInformationString = obj.getBillingInformationString(subscription, first, tmp, flag, fractionalPremiumInfo);
  let tmp3 = _require(478).isIOS() && subscription.isPurchasedViaApple;
  if (tmp3) {
    tmp3 = subscription.status === SubscriptionStatusTypes.ACTIVE;
  }
  if (tmp3) {
    const intl = _require(1212).intl;
    obj = { renewalDate: first.subscriptionPeriodStart };
    _require = callback(async () => {
      yield callback(outer2_1[5]).manageSubscription();
    });
    obj.onSubscriptionManagementClick = function() {
      return callback(...arguments);
    };
    billingInformationString = intl.format(_require(1212).t.gknRR3, obj);
  }
  return billingInformationString;
};
