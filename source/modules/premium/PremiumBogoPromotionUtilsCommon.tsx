// Module ID: 12392
// Function ID: 96260
// Name: isUserEligibleBasedOnCurrentOrPreviousSubs
// Dependencies: [5, 1849, 3782, 6688, 6637, 7130, 1851, 653, 3712, 3776, 477, 4368, 6656, 12393, 12394, 624, 6686, 7127, 12395, 12396, 4451, 7450, 2]
// Exports: maybeFetchActiveBogoPromotion, useIsEligibleForBogoPromotion

// Module 12392 (isUserEligibleBasedOnCurrentOrPreviousSubs)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import GuildFeatures from "GuildFeatures";
import ME from "ME";

let closure_10;
let closure_11;
let closure_12;
let closure_9;
const require = arg1;
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
            const obj = importDefault(3712)();
            if (subtractResult.isBefore(endedAt)) {
              return false;
            }
            subtractResult = importDefault(3712)().subtract(10, "days");
          }
        }
      }
    }
    if (null != previousPremiumSubscription) {
      if (previousPremiumSubscription.status === constants2.ENDED) {
        const endedAt2 = previousPremiumSubscription.endedAt;
        if (null != endedAt2) {
          if (previousPremiumSubscription.hasPremiumAtLeast(closure_10.TIER_2)) {
            const obj3 = importDefault(3712)();
            if (subtractResult1.isBefore(endedAt2)) {
              return false;
            }
            subtractResult1 = importDefault(3712)().subtract(10, "days");
          }
        }
      }
    }
    if (null != premiumSubscription) {
      let tmp10 = null == premiumSubscription;
      currentUser = currentUser.getCurrentUser();
      if (!tmp10) {
        tmp10 = !premiumSubscription.hasActiveTrial;
      }
      let isPremiumExactlyResult = !tmp10;
      if (!tmp10) {
        isPremiumExactlyResult = importDefault(3776).isPremiumExactly(currentUser, closure_10.TIER_0);
        const obj5 = importDefault(3776);
      }
      const hasPremiumAtLeastResult = premiumSubscription.hasPremiumAtLeast(closure_10.TIER_2);
      let isAndroidResult = require(477) /* set */.isAndroid();
      if (isAndroidResult) {
        isAndroidResult = premiumSubscription.paymentGateway !== constants.GOOGLE;
      }
      return false;
    }
    let tmp21 = !require(4368) /* isTablet */.isMobile;
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
  return obj(...arguments);
}
function _maybeFetchActiveBogoPromotion() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ PurchasedFlags: closure_9, PremiumTypes: closure_10 } = GuildFeatures);
({ PaymentGateways: closure_11, SubscriptionStatusTypes: closure_12 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/PremiumBogoPromotionUtilsCommon.tsx");

export { isUserEligibleBasedOnCurrentOrPreviousSubs };
export const useIsEligibleForBogoPromotion = function useIsEligibleForBogoPromotion() {
  let mostRecentSubscription;
  let premiumSubscription;
  let previousPremiumSubscription;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  let obj = require(6656) /* items */;
  const isPaymentsBlocked = obj.useIsPaymentsBlocked();
  const promotion = require(12393) /* useEligibleActiveOutboundPromotions */.useBogoPromotion().promotion;
  const obj2 = require(12393) /* useEligibleActiveOutboundPromotions */;
  const bogoPromotionGateEnabled = require(12394) /* apexExperiment */.useBogoPromotionGateEnabled("bogo eligibility hook");
  const obj3 = require(12394) /* apexExperiment */;
  const items = [closure_5];
  const stateFromStoresObject = require(624) /* defaultAreStatesEqual */.useStateFromStoresObject(items, () => ({ mostRecentSubscription: outer1_5.getMostRecentPremiumTypeSubscription(), premiumSubscription: outer1_5.getPremiumTypeSubscription(), previousPremiumSubscription: outer1_5.getPreviousPremiumTypeSubscription() }));
  ({ mostRecentSubscription, premiumSubscription, previousPremiumSubscription } = stateFromStoresObject);
  const obj4 = require(624) /* defaultAreStatesEqual */;
  const premiumTrialOffer = require(6686) /* useGetTrialOffer */.usePremiumTrialOffer();
  const obj5 = require(6686) /* useGetTrialOffer */;
  let endDate;
  const premiumDiscountOffer = require(7127) /* useGetDiscountOffer */.usePremiumDiscountOffer();
  if (null != promotion) {
    endDate = promotion.endDate;
  }
  let num = 0;
  if (null != endDate) {
    num = endDate;
  }
  const obj6 = require(7127) /* useGetDiscountOffer */;
  const valueOfResult = new Date(num).valueOf();
  const timestamp = Date.now();
  obj = {};
  let num2 = -1;
  const date = new Date(num);
  if (timestamp <= valueOfResult) {
    num2 = valueOfResult - timestamp;
  }
  obj.delay = num2;
  importDefault(12395)(obj);
  let isAndroidResult = !require(4368) /* isTablet */.isMobile;
  if (!isAndroidResult) {
    isAndroidResult = require(477) /* set */.isAndroid();
    const obj9 = require(477) /* set */;
  }
  const tmp10 = importDefault(12395);
  const tmp15 = isUserEligibleBasedOnCurrentOrPreviousSubs({ experimentEnabled: bogoPromotionGateEnabled, premiumSubscription, mostRecentSubscription, previousPremiumSubscription });
  let bogoMarketingMaterialsEnabled = require(12396) /* apexExperiment */.useBogoMarketingMaterialsEnabled("bogo marketing eligibility hook");
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
