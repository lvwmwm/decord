// Module ID: 10197
// Function ID: 10198
// Name: GiftingPromotionUtils
// Dependencies: [32, 19, 10128, 1374, 504, 10198, 10202, 10203, 4654, 2029, 2]
// Exports: combinePromotionStyles, createBackgroundStyle, createGradientStyle, getRewardAssetIdMap, shouldShowGiftPromotionReminderNotice, useFetchClaimableGiftingPromotionRewardSkuIds, useIsPlanEligibleForGiftingPromotion, useShouldAutoSelectGiftingPromotionReward, useShouldShowSelectFreeSkuStep

// Module 10197 (GiftingPromotionUtils)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4654 */;
import GiftPromotionReminderExperiment2 from "GiftPromotionReminderExperiment" /* 10202 */;
import MarketingComponentType from "MarketingComponentType" /* 10203 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import PromotionsStore from "PromotionsStore" /* 10128 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, map;

const SubscriptionPlans = PremiumConstants.SubscriptionPlans;
let result = size.fileFinishedImporting("modules/premium/gifting/utils/promotions/GiftingPromotionUtils.tsx");

export const useFetchClaimableGiftingPromotionRewardSkuIds = function useFetchClaimableGiftingPromotionRewardSkuIds() {
  let closure_0;
  let fetchPurchasesError;
  let hasPreviouslyFetched;
  let purchases;
  let stateFromStoresArray;
  let tmp = purchases(hasPreviouslyFetched.useState(), 2);
  _require = tmp[1];
  const first = tmp[0];
  const items = [fetchPurchasesError];
  const obj = require("get initialized");
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => fetchPurchasesError.getGiftPromotionRewardSkuIds());
  const obj2 = require("useFetchCollectiblesCategoriesAndPurchases");
  const fetchPurchases = obj2.useFetchPurchases();
  purchases = fetchPurchases.purchases;
  hasPreviouslyFetched = fetchPurchases.hasPreviouslyFetched;
  fetchPurchasesError = fetchPurchases.fetchPurchasesError;
  const ref = hasPreviouslyFetched.useRef(false);
  const items1 = [stateFromStoresArray, purchases, hasPreviouslyFetched, fetchPurchasesError];
  const effect = hasPreviouslyFetched.useEffect(() => {
    const tmp = hasPreviouslyFetched;
    if (tmp) {
      if (!ref.current) {
        const arr = stateFromStoresArray;
        if (stateFromStoresArray.length > 0) {
          let found;
          if (null == fetchPurchasesError) {
            found = arr.filter((item) => null == purchases.get(item));
          } else {
            found = [];
          }
          closure_0(found);
          tmp2.current = true;
        }
      }
    }
  }, items1);
  return first;
};
export const getRewardAssetIdMap = function getRewardAssetIdMap(arr) {
  map = new Map();
  const item = arr.forEach((skuId) => map.set(skuId.skuId, skuId.assetId));
  return map;
};
export const useShouldShowSelectFreeSkuStep = function useShouldShowSelectFreeSkuStep(id, arg1, arg2) {
  const items = [, ];
  ({ PREMIUM_YEAR_TIER_2: arr[0], PREMIUM_MONTH_TIER_2: arr[1] } = SubscriptionPlans);
  id = undefined;
  const includes = items.includes;
  if (id != null) {
    id = id.id;
  }
  let tmp3 = null != arg2;
  const hasItem = includes(id);
  if (tmp3) {
    tmp3 = arg2.length >= 1;
  }
  return arg1 && hasItem && tmp3;
};
export const useShouldAutoSelectGiftingPromotionReward = function useShouldAutoSelectGiftingPromotionReward(id, arg1, arg2) {
  const items = [, ];
  ({ PREMIUM_YEAR_TIER_2: arr[0], PREMIUM_MONTH_TIER_2: arr[1] } = SubscriptionPlans);
  id = undefined;
  const includes = items.includes;
  if (id != null) {
    id = id.id;
  }
  let tmp3 = null != arg2;
  const hasItem = includes(id);
  if (tmp3) {
    tmp3 = 1 === arg2.length;
  }
  if (tmp3) {
    tmp3 = hasItem;
  }
  if (tmp3) {
    tmp3 = arg1;
  }
  return tmp3;
};
export const useIsPlanEligibleForGiftingPromotion = function useIsPlanEligibleForGiftingPromotion(id) {
  const items = [, ];
  ({ PREMIUM_YEAR_TIER_2: arr[0], PREMIUM_MONTH_TIER_2: arr[1] } = SubscriptionPlans);
  id = undefined;
  const includes = items.includes;
  if (id != null) {
    id = id.id;
  }
  return includes(id);
};
export const createGradientStyle = function createGradientStyle(gradient, arg1) {
  if (null != gradient) {
    let joined;
    let obj = arg1;
    if (arg1 == null) {
      obj = {};
    }
    const reverse = obj.reverse;
    const colorStops = obj.colorStops;
    const defaultAngle = obj.defaultAngle;
    let num = 78.98;
    const tmp = undefined !== reverse && reverse;
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
    if (null != colorStops) {
      const mapped = gradient.map((item, index) => "" + item + " " + colorStops[index] + "%");
      joined = mapped.join(", ");
    } else {
      joined = gradient.join(", ");
    }
    const _HermesInternal = HermesInternal;
    const obj2 = { background: "linear-gradient(" + result + "deg, " + joined + ")" };
    return obj2;
  }
};
export const createBackgroundStyle = function createBackgroundStyle(arg0) {
  if (null != arg0) {
    const _HermesInternal = HermesInternal;
    const obj = { backgroundImage: "url(" + arg0 + ")", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" };
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
  const GiftPromotionReminderExperiment = GiftPromotionReminderExperiment2.GiftPromotionReminderExperiment;
  if (GiftPromotionReminderExperiment.getConfig({ location: "shouldShowGiftPromotionReminderNotice" }).enabled) {
    const obj = PromotionsStore;
    if (null == PromotionsStore.getMarketingComponentByType(MarketingComponentType.MarketingComponentType.GIFT_REMINDER_NAGBAR)) {
      return false;
    } else {
      const giftPromotion = obj.getGiftPromotion();
      let id;
      if (giftPromotion != null) {
        id = giftPromotion.id;
      }
      let tmp5 = null != id;
      if (tmp5) {
        const tmpResult = DismissibleContentUnsafeUtils;
        let isDismissed = tmpResult.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(2029).DismissibleContent.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK, id).isDismissed;
        if (isDismissed) {
          const tmpResult2 = DismissibleContentUnsafeUtils;
          isDismissed = !tmpResult2.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(2029).DismissibleContent.GIFTING_PROMOTION_REMINDER, id).isDismissed;
        }
        tmp5 = isDismissed;
      }
      return tmp5;
    }
  } else {
    return false;
  }
};
