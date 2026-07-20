// Module ID: 8800
// Function ID: 69387
// Name: useIsPlanEligibleForGiftingPromotion
// Dependencies: []
// Exports: combinePromotionStyles, createBackgroundStyle, createGradientStyle, getRewardAssetIdMap, shouldShowGiftPromotionReminderNotice, useFetchClaimableGiftingPromotionRewardSkuIds, useShouldAutoSelectGiftingPromotionReward, useShouldShowSelectFreeSkuStep

// Module 8800 (useIsPlanEligibleForGiftingPromotion)
function useIsPlanEligibleForGiftingPromotion(id) {
  const items = [SubscriptionPlans.PREMIUM_YEAR_TIER_2, SubscriptionPlans.PREMIUM_MONTH_TIER_2];
  id = undefined;
  if (null != id) {
    id = id.id;
  }
  return items.includes(id);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const SubscriptionPlans = arg1(dependencyMap[3]).SubscriptionPlans;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/premium/gifting/utils/promotions/GiftingPromotionUtils.tsx");

export const useFetchClaimableGiftingPromotionRewardSkuIds = function useFetchClaimableGiftingPromotionRewardSkuIds() {
  const tmp = callback2(React.useState(), 2);
  const callback = tmp[1];
  const items = [closure_4];
  const stateFromStoresArray = callback(dependencyMap[4]).useStateFromStoresArray(items, () => fetchPurchasesError.getGiftPromotionRewardSkuIds());
  const dependencyMap = stateFromStoresArray;
  const obj = callback(dependencyMap[4]);
  const fetchPurchases = callback(dependencyMap[5]).useFetchPurchases();
  const purchases = fetchPurchases.purchases;
  const callback2 = purchases;
  const hasPreviouslyFetched = fetchPurchases.hasPreviouslyFetched;
  const React = hasPreviouslyFetched;
  const fetchPurchasesError = fetchPurchases.fetchPurchasesError;
  closure_4 = fetchPurchasesError;
  let closure_5 = React.useRef(false);
  const items1 = [stateFromStoresArray, purchases, hasPreviouslyFetched, fetchPurchasesError];
  const effect = React.useEffect(() => {
    if (hasPreviouslyFetched) {
      if (!ref.current) {
        if (stateFromStoresArray.length > 0) {
          if (null == fetchPurchasesError) {
            let found = stateFromStoresArray.filter((arg0) => null == closure_2.get(arg0));
          } else {
            found = [];
          }
          callback(found);
          ref.current = true;
        }
      }
    }
  }, items1);
  return tmp[0];
};
export const getRewardAssetIdMap = function getRewardAssetIdMap(arr) {
  const map = new Map();
  const arg1 = map;
  const item = arr.forEach((skuId) => map.set(skuId.skuId, skuId.assetId));
  return map;
};
export const useShouldShowSelectFreeSkuStep = function useShouldShowSelectFreeSkuStep(id) {
  let tmp = arg1;
  let tmp3 = null != arg2;
  if (tmp3) {
    tmp3 = arg2.length >= 1;
  }
  if (tmp) {
    tmp = tmp2;
  }
  if (tmp) {
    tmp = tmp3;
  }
  return tmp;
};
export const useShouldAutoSelectGiftingPromotionReward = function useShouldAutoSelectGiftingPromotionReward(id) {
  let tmp2 = null != arg2;
  if (tmp2) {
    tmp2 = 1 === arg2.length;
  }
  if (tmp2) {
    tmp2 = tmp;
  }
  if (tmp2) {
    tmp2 = arg1;
  }
  return tmp2;
};
export { useIsPlanEligibleForGiftingPromotion };
export const createGradientStyle = function createGradientStyle(gradient) {
  let obj = arg1;
  if (null != gradient) {
    if (null == obj) {
      obj = {};
    }
    const reverse = obj.reverse;
    const colorStops = obj.colorStops;
    const arg1 = colorStops;
    const defaultAngle = obj.defaultAngle;
    let num = 78.98;
    if (undefined !== defaultAngle) {
      num = defaultAngle;
    }
    const _Array = Array;
    if (!Array.isArray(gradient)) {
      gradient = gradient.gradient;
    }
    const _Array2 = Array;
    let angle = num;
    if (!Array.isArray(gradient)) {
      angle = num;
      if (null != gradient.angle) {
        angle = gradient.angle;
      }
    }
    let result = angle;
    if (tmp) {
      result = (angle + 180) % 360;
    }
    obj = {};
    if (null != colorStops) {
      const mapped = gradient.map((arg0, arg1) => "" + arg0 + " " + colorStops[arg1] + "%");
      let joined = mapped.join(", ");
    } else {
      joined = gradient.join(", ");
    }
    const _HermesInternal = HermesInternal;
    obj.background = "linear-gradient(" + result + "deg, " + joined + ")";
    return obj;
  }
};
export const createBackgroundStyle = function createBackgroundStyle(arg0) {
  if (null != arg0) {
    const obj = {};
    const _HermesInternal = HermesInternal;
    obj.backgroundImage = "url(" + arg0 + ")";
    return obj;
  }
};
export const combinePromotionStyles = function combinePromotionStyles(backgroundImage, background) {
  if (null != backgroundImage) {
    if (null != background) {
      const _HermesInternal = HermesInternal;
      backgroundImage.backgroundImage = "" + backgroundImage.backgroundImage + ", " + background.background;
      backgroundImage.backgroundColor = "lightgray";
      backgroundImage.backgroundRepeat = "no-repeat, no-repeat";
      if (null == backgroundImage.backgroundSize) {
        backgroundImage.backgroundSize = "auto 110%, auto";
      }
      if (null == backgroundImage.backgroundPosition) {
        backgroundImage.backgroundPosition = "right 90% center, 0% 0%";
      }
      return backgroundImage;
    }
  }
  let tmp = backgroundImage;
  if (null == backgroundImage) {
    let obj = background;
    if (null == background) {
      obj = {};
    }
    tmp = obj;
  }
  return tmp;
};
export const shouldShowGiftPromotionReminderNotice = function shouldShowGiftPromotionReminderNotice() {
  const GiftPromotionReminderExperiment = arg1(dependencyMap[6]).GiftPromotionReminderExperiment;
  if (GiftPromotionReminderExperiment.getConfig({ location: "shouldShowGiftPromotionReminderNotice" }).enabled) {
    if (null == store.getMarketingComponentByType(arg1(dependencyMap[7]).MarketingComponentType.GIFT_REMINDER_NAGBAR)) {
      return false;
    } else {
      const giftPromotion = store.getGiftPromotion();
      let id;
      if (null != giftPromotion) {
        id = giftPromotion.id;
      }
      let tmp6 = null != id;
      if (tmp6) {
        const tmp9 = !arg1(dependencyMap[8]).UNSAFE_isSnowflakeBoundDismissibleContentDismissed(arg1(dependencyMap[9]).DismissibleContent.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK, id).isDismissed;
        let tmp10 = !tmp9;
        if (!tmp9) {
          tmp10 = !arg1(dependencyMap[8]).UNSAFE_isSnowflakeBoundDismissibleContentDismissed(arg1(dependencyMap[9]).DismissibleContent.GIFTING_PROMOTION_REMINDER, id).isDismissed;
          const obj2 = arg1(dependencyMap[8]);
        }
        tmp6 = tmp10;
        const obj = arg1(dependencyMap[8]);
      }
      return tmp6;
    }
  } else {
    return false;
  }
};
