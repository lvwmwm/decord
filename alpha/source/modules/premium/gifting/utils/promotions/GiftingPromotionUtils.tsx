// Module ID: 11003
// Function ID: 11004
// Name: GiftingPromotionUtils
// Dependencies: [32, 19, 9021, 504, 11004, 11005, 11006, 9025, 4949, 4750, 2]
// Exports: combinePromotionStyles, createBackgroundStyle, createGradientStyle, getRewardAssetIdMap, shouldShowGiftPromotionReminderNotice, useFetchClaimableGiftingPromotionRewardSkuIds, useIsPlanEligibleForGiftingPromotion, useShouldAutoSelectGiftingPromotionReward

// Module 11003 (GiftingPromotionUtils)
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4949 */;
import MarketingSurfaceType from "MarketingSurfaceType" /* 9025 */;
import GiftingPromotionPlanEligibility from "GiftingPromotionPlanEligibility" /* 11005 */;
import GiftPromotionReminderExperiment2 from "GiftPromotionReminderExperiment" /* 11006 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import PromotionsStore from "PromotionsStore" /* 9021 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, map;

let result = size.fileFinishedImporting("modules/premium/gifting/utils/promotions/GiftingPromotionUtils.tsx");

export function useFetchClaimableGiftingPromotionRewardSkuIds() {
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
}
export function getRewardAssetIdMap(arr) {
  map = new Map();
  const item = arr.forEach((skuId) => map.set(skuId.skuId, skuId.assetId));
  return map;
}
export function useShouldAutoSelectGiftingPromotionReward(id, arg1, arg2) {
  id = undefined;
  const isPlanEligibleForGiftingPromotion = GiftingPromotionPlanEligibility.isPlanEligibleForGiftingPromotion;
  GiftingPromotionPlanEligibility;
  if (id != null) {
    id = id.id;
  }
  let tmp4 = null != arg2;
  const result = isPlanEligibleForGiftingPromotion(id);
  if (tmp4) {
    tmp4 = 1 === arg2.length;
  }
  if (tmp4) {
    tmp4 = result;
  }
  if (tmp4) {
    tmp4 = arg1;
  }
  return tmp4;
}
export function useIsPlanEligibleForGiftingPromotion(id) {
  id = undefined;
  const isPlanEligibleForGiftingPromotion = GiftingPromotionPlanEligibility.isPlanEligibleForGiftingPromotion;
  GiftingPromotionPlanEligibility;
  if (id != null) {
    id = id.id;
  }
  return isPlanEligibleForGiftingPromotion(id);
}
export function createGradientStyle(gradient, arg1) {
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
}
export function createBackgroundStyle(arg0) {
  if (null != arg0) {
    const _HermesInternal = HermesInternal;
    const obj = { backgroundImage: "url(" + arg0 + ")", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" };
    return obj;
  }
}
export function combinePromotionStyles(backgroundImage, background) {
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
}
export function shouldShowGiftPromotionReminderNotice() {
  const GiftPromotionReminderExperiment = GiftPromotionReminderExperiment2.GiftPromotionReminderExperiment;
  if (GiftPromotionReminderExperiment.getConfig({ location: "shouldShowGiftPromotionReminderNotice" }).enabled) {
    const obj = PromotionsStore;
    if (null == PromotionsStore.getMarketingComponentBySurface(MarketingSurfaceType.MarketingSurfaceType.GIFT_REMINDER_NAGBAR)) {
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
        let isDismissed = tmpResult.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(4750).DismissibleContent.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK, id).isDismissed;
        if (isDismissed) {
          const tmpResult2 = DismissibleContentUnsafeUtils;
          isDismissed = !tmpResult2.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(4750).DismissibleContent.GIFTING_PROMOTION_REMINDER, id).isDismissed;
        }
        tmp5 = isDismissed;
      }
      return tmp5;
    }
  } else {
    return false;
  }
}
