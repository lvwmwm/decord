// Module ID: 10291
// Function ID: 10292
// Name: GiftAnimationData
// Dependencies: [1374, 7525, 10292, 10293, 10294, 10295, 10296, 10297, 10298, 10299, 10300, 10301, 10302, 10303, 10304, 10305, 10306, 10307, 10308, 10309, 10310, 10311, 10312, 10313, 10314, 10315, 2]
// Exports: getGiftAnimationData, getLottieType

// Module 10291 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 7525 */;
import size from "module_2" /* 2 */;

const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const LottieType = { JSON: 0, [0]: "JSON", LOTTIE: 1, [1]: "LOTTIE" };
const result = size.fileFinishedImporting("modules/premium/native/utils/GiftAnimationData.tsx");

export { LottieType };
export const getLottieType = function getLottieType(giftStyle) {
  if (giftStyle === PremiumGiftStyles.NITROWEEN_STANDARD) {
    let _JSON = obj.LOTTIE;
  } else {
    _JSON = obj.JSON;
  }
  return _JSON;
};
export const getGiftAnimationData = function getGiftAnimationData(giftStyle, ACTION) {
  if (PremiumGiftStyles.STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp17(10292);
    } else if (tmp17(7525).AnimationState.LOOP === ACTION) {
      return tmp17(10293);
    } else {
      return tmp17(10294);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp15(10295);
    } else if (tmp15(7525).AnimationState.LOOP === ACTION) {
      return tmp15(10296);
    } else {
      return tmp15(10297);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp13(10298);
    } else if (tmp13(7525).AnimationState.LOOP === ACTION) {
      return tmp13(10299);
    } else {
      return tmp13(10300);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp11(10301);
    } else if (tmp11(7525).AnimationState.LOOP === ACTION) {
      return tmp11(10302);
    } else {
      return tmp11(10303);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp9(10304);
    } else if (tmp9(7525).AnimationState.LOOP === ACTION) {
      return tmp9(10305);
    } else {
      return tmp9(10306);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp7(10307);
    } else if (tmp7(7525).AnimationState.LOOP === ACTION) {
      return tmp7(10308);
    } else {
      return tmp7(10309);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp5(10310);
    } else if (tmp5(7525).AnimationState.LOOP === ACTION) {
      return tmp5(10311);
    } else {
      return tmp5(10312);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp3(10313);
    } else if (tmp3(7525).AnimationState.LOOP === ACTION) {
      return tmp3(10314);
    } else {
      return tmp3(10315);
    }
  } else {
    if (tmp.SNOWGLOBE !== giftStyle) {
      if (tmp.BOX !== giftStyle) {
        const CUP = tmp.CUP;
      }
    }
    const _Error = Error;
    throw Error();
  }
};
