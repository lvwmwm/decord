// Module ID: 12273
// Function ID: 94069
// Name: isUserEligibleBasedOnCurrentOrPreviousSubs
// Dependencies: []
// Exports: maybeFetchActiveBogoPromotion, useIsEligibleForBogoPromotion

// Module 12273 (isUserEligibleBasedOnCurrentOrPreviousSubs)
function isUserEligibleBasedOnCurrentOrPreviousSubs(experimentEnabled) {
  let mostRecentSubscription;
  let premiumSubscription;
  let previousPremiumSubscription;
  ({ premiumSubscription, mostRecentSubscription, previousPremiumSubscription } = experimentEnabled);
  if (experimentEnabled.experimentEnabled) {
    if (null != mostRecentSubscription) {
      if (mostRecentSubscription.status === constants2.ENDED) {
        const endedAt = mostRecentSubscription.endedAt;
        if (null != endedAt) {
          if (mostRecentSubscription.hasPremiumAtLeast(closure_10.TIER_2)) {
            const obj = importDefault(dependencyMap[8])();
            if (subtractResult.isBefore(endedAt)) {
              return false;
            }
            const subtractResult = importDefault(dependencyMap[8])().subtract(10, "days");
          }
        }
      }
    }
    if (null != previousPremiumSubscription) {
      if (previousPremiumSubscription.status === constants2.ENDED) {
        const endedAt2 = previousPremiumSubscription.endedAt;
        if (null != endedAt2) {
          if (previousPremiumSubscription.hasPremiumAtLeast(closure_10.TIER_2)) {
            const obj3 = importDefault(dependencyMap[8])();
            if (subtractResult1.isBefore(endedAt2)) {
              return false;
            }
            const subtractResult1 = importDefault(dependencyMap[8])().subtract(10, "days");
          }
        }
      }
    }
    if (null != premiumSubscription) {
      let tmp10 = null == premiumSubscription;
      const currentUser = currentUser.getCurrentUser();
      if (!tmp10) {
        tmp10 = !premiumSubscription.hasActiveTrial;
      }
      let isPremiumExactlyResult = !tmp10;
      if (!tmp10) {
        isPremiumExactlyResult = importDefault(dependencyMap[9]).isPremiumExactly(currentUser, closure_10.TIER_0);
        const obj5 = importDefault(dependencyMap[9]);
      }
      const hasPremiumAtLeastResult = premiumSubscription.hasPremiumAtLeast(closure_10.TIER_2);
      let isAndroidResult = arg1(dependencyMap[10]).isAndroid();
      if (isAndroidResult) {
        isAndroidResult = premiumSubscription.paymentGateway !== constants.GOOGLE;
      }
      return false;
    }
    let tmp21 = !arg1(dependencyMap[11]).isMobile;
    if (!tmp21) {
      tmp21 = !fractionalPremiumActive.isFractionalPremiumActive();
    }
    return tmp21;
  } else {
    return false;
  }
}
function isEligibleForBOGOPromotion() {
  return _isEligibleForBOGOPromotion(...arguments);
}
function _isEligibleForBOGOPromotion() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _isEligibleForBOGOPromotion = obj;
  return obj(...arguments);
}
function _maybeFetchActiveBogoPromotion() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _maybeFetchActiveBogoPromotion = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ PurchasedFlags: closure_9, PremiumTypes: closure_10 } = arg1(dependencyMap[6]));
const tmp2 = arg1(dependencyMap[6]);
({ PaymentGateways: closure_11, SubscriptionStatusTypes: closure_12 } = arg1(dependencyMap[7]));
const tmp3 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/premium/PremiumBogoPromotionUtilsCommon.tsx");

export { isUserEligibleBasedOnCurrentOrPreviousSubs };
export const useIsEligibleForBogoPromotion = function useIsEligibleForBogoPromotion() {
  let mostRecentSubscription;
  let premiumSubscription;
  let previousPremiumSubscription;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  let obj = arg1(dependencyMap[12]);
  const isPaymentsBlocked = obj.useIsPaymentsBlocked();
  const promotion = arg1(dependencyMap[13]).useBogoPromotion().promotion;
  const obj2 = arg1(dependencyMap[13]);
  const bogoPromotionGateEnabled = arg1(dependencyMap[14]).useBogoPromotionGateEnabled("bogo eligibility hook");
  const obj3 = arg1(dependencyMap[14]);
  const items = [closure_5];
  const stateFromStoresObject = arg1(dependencyMap[15]).useStateFromStoresObject(items, () => ({ mostRecentSubscription: store.getMostRecentPremiumTypeSubscription(), premiumSubscription: store.getPremiumTypeSubscription(), previousPremiumSubscription: store.getPreviousPremiumTypeSubscription() }));
  ({ mostRecentSubscription, premiumSubscription, previousPremiumSubscription } = stateFromStoresObject);
  const obj4 = arg1(dependencyMap[15]);
  const premiumTrialOffer = arg1(dependencyMap[16]).usePremiumTrialOffer();
  const obj5 = arg1(dependencyMap[16]);
  let endDate;
  const premiumDiscountOffer = arg1(dependencyMap[17]).usePremiumDiscountOffer();
  if (null != promotion) {
    endDate = promotion.endDate;
  }
  let num = 0;
  if (null != endDate) {
    num = endDate;
  }
  const obj6 = arg1(dependencyMap[17]);
  const valueOfResult = new Date(num).valueOf();
  const timestamp = Date.now();
  obj = {};
  let num2 = -1;
  const date = new Date(num);
  if (timestamp <= valueOfResult) {
    num2 = valueOfResult - timestamp;
  }
  obj.delay = num2;
  importDefault(dependencyMap[18])(obj);
  let isAndroidResult = !arg1(dependencyMap[11]).isMobile;
  if (!isAndroidResult) {
    isAndroidResult = arg1(dependencyMap[10]).isAndroid();
    const obj9 = arg1(dependencyMap[10]);
  }
  const tmp10 = importDefault(dependencyMap[18]);
  const tmp15 = isUserEligibleBasedOnCurrentOrPreviousSubs({ experimentEnabled: bogoPromotionGateEnabled, premiumSubscription, mostRecentSubscription, previousPremiumSubscription });
  let bogoMarketingMaterialsEnabled = arg1(dependencyMap[19]).useBogoMarketingMaterialsEnabled("bogo marketing eligibility hook");
  let tmp17 = !tmp9;
  if (timestamp <= valueOfResult) {
    if (!flag) {
      if (isAndroidResult) {
        isAndroidResult = tmp15;
      }
      if (isAndroidResult) {
        isAndroidResult = null == premiumTrialOffer;
      }
      if (isAndroidResult) {
        isAndroidResult = null != promotion;
      }
      if (isAndroidResult) {
        isAndroidResult = !isPaymentsBlocked;
      }
      if (isAndroidResult) {
        isAndroidResult = null == premiumDiscountOffer;
      }
      bogoMarketingMaterialsEnabled = isAndroidResult;
    }
    tmp17 = bogoMarketingMaterialsEnabled;
  }
  return tmp17;
};
export { isEligibleForBOGOPromotion };
export const maybeFetchActiveBogoPromotion = function maybeFetchActiveBogoPromotion() {
  return _maybeFetchActiveBogoPromotion(...arguments);
};
