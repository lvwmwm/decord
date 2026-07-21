// Module ID: 7411
// Function ID: 59555
// Name: getBillingInformationStringNative
// Dependencies: []
// Exports: getBillingInformationStringNative

// Module 7411 (getBillingInformationStringNative)
let closure_2 = importDefault(dependencyMap[0]);
const SubscriptionStatusTypes = arg1(dependencyMap[1]).SubscriptionStatusTypes;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/billing/native/subscription/BillingInformation.tsx");

export const getBillingInformationStringNative = function getBillingInformationStringNative(subscription, first, first1, flag, fractionalPremiumInfo) {
  let tmp = first1;
  if (first1 === undefined) {
    tmp = null;
  }
  if (flag === undefined) {
    flag = false;
  }
  let callback;
  let obj = callback(dependencyMap[2]);
  let billingInformationString = obj.getBillingInformationString(subscription, first, tmp, flag, fractionalPremiumInfo);
  let tmp3 = callback(dependencyMap[3]).isIOS() && subscription.isPurchasedViaApple;
  if (tmp3) {
    tmp3 = subscription.status === SubscriptionStatusTypes.ACTIVE;
  }
  if (tmp3) {
    const intl = callback(dependencyMap[4]).intl;
    obj = { renewalDate: first.subscriptionPeriodStart };
    callback = callback2(async () => {
      yield callback(closure_1[5]).manageSubscription();
    });
    obj.onSubscriptionManagementClick = function() {
      return callback(...arguments);
    };
    billingInformationString = intl.format(callback(dependencyMap[4]).t.gknRR3, obj);
  }
  return billingInformationString;
};
