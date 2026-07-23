// Module ID: 8812
// Function ID: 69463
// Name: useIsPlanEligibleForGiftingPromotion
// Dependencies: [57, 31, 7130, 1851, 566, 7859, 8813, 7453, 3946, 1334, 2]
// Exports: combinePromotionStyles, createBackgroundStyle, createGradientStyle, getRewardAssetIdMap, shouldShowGiftPromotionReminderNotice, useFetchClaimableGiftingPromotionRewardSkuIds, useShouldAutoSelectGiftingPromotionReward, useShouldShowSelectFreeSkuStep

// Module 8812 (useIsPlanEligibleForGiftingPromotion)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SubscriptionPlans } from "GuildFeatures";

const require = arg1;
function useIsPlanEligibleForGiftingPromotion(id) {
  const items = [SubscriptionPlans.PREMIUM_YEAR_TIER_2, SubscriptionPlans.PREMIUM_MONTH_TIER_2];
  id = undefined;
  if (null != id) {
    id = id.id;
  }
  return items.includes(id);
}
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/gifting/utils/promotions/GiftingPromotionUtils.tsx");

export const useFetchClaimableGiftingPromotionRewardSkuIds = function useFetchClaimableGiftingPromotionRewardSkuIds() {
  const tmp = purchases(hasPreviouslyFetched.useState(), 2);
  const _require = tmp[1];
  const items = [fetchPurchasesError];
  stateFromStoresArray = _require(stateFromStoresArray[4]).useStateFromStoresArray(items, () => fetchPurchasesError.getGiftPromotionRewardSkuIds());
  const obj = _require(stateFromStoresArray[4]);
  const fetchPurchases = _require(stateFromStoresArray[5]).useFetchPurchases();
  purchases = fetchPurchases.purchases;
  hasPreviouslyFetched = fetchPurchases.hasPreviouslyFetched;
  fetchPurchasesError = fetchPurchases.fetchPurchasesError;
  let closure_5 = hasPreviouslyFetched.useRef(false);
  const items1 = [stateFromStoresArray, purchases, hasPreviouslyFetched, fetchPurchasesError];
  const effect = hasPreviouslyFetched.useEffect(() => {
    if (hasPreviouslyFetched) {
      if (!ref.current) {
        if (stateFromStoresArray.length > 0) {
          if (null == fetchPurchasesError) {
            let found = stateFromStoresArray.filter((arg0) => null == outer1_2.get(arg0));
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
    const obj = { backgroundImage: null, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" };
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
  const GiftPromotionReminderExperiment = require(8813) /* apexExperiment */.GiftPromotionReminderExperiment;
  if (GiftPromotionReminderExperiment.getConfig({ location: "shouldShowGiftPromotionReminderNotice" }).enabled) {
    if (null == store.getMarketingComponentByType(require(7453) /* MarketingComponentType */.MarketingComponentType.GIFT_REMINDER_NAGBAR)) {
      return false;
    } else {
      const giftPromotion = store.getGiftPromotion();
      let id;
      if (null != giftPromotion) {
        id = giftPromotion.id;
      }
      let tmp6 = null != id;
      if (tmp6) {
        const tmp9 = !require(3946) /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(require(1334) /* DismissibleContent */.DismissibleContent.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK, id).isDismissed;
        let tmp10 = !tmp9;
        if (!tmp9) {
          tmp10 = !require(3946) /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(require(1334) /* DismissibleContent */.DismissibleContent.GIFTING_PROMOTION_REMINDER, id).isDismissed;
          const obj2 = require(3946) /* UNSAFE_isDismissibleContentDismissed */;
        }
        tmp6 = tmp10;
        const obj = require(3946) /* UNSAFE_isDismissibleContentDismissed */;
      }
      return tmp6;
    }
  } else {
    return false;
  }
};
