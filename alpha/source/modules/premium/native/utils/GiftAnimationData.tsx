// Module ID: 10279
// Function ID: 10280
// Name: GiftAnimationData
// Dependencies: [1374, 7519, 10280, 10281, 10282, 10283, 10284, 10285, 10286, 10287, 10288, 10289, 10290, 10291, 10292, 10293, 10294, 10295, 10296, 10297, 10298, 10299, 10300, 10301, 10302, 10303, 2]
// Exports: getGiftAnimationData, getLottieType

// Module 10279 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 7519 */;
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
      return tmp17(10280);
    } else if (tmp17(7519).AnimationState.LOOP === ACTION) {
      return tmp17(10281);
    } else {
      return tmp17(10282);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp15(10283);
    } else if (tmp15(7519).AnimationState.LOOP === ACTION) {
      return tmp15(10284);
    } else {
      return tmp15(10285);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp13(10286);
    } else if (tmp13(7519).AnimationState.LOOP === ACTION) {
      return tmp13(10287);
    } else {
      return tmp13(10288);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp11(10289);
    } else if (tmp11(7519).AnimationState.LOOP === ACTION) {
      return tmp11(10290);
    } else {
      return tmp11(10291);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp9(10292);
    } else if (tmp9(7519).AnimationState.LOOP === ACTION) {
      return tmp9(10293);
    } else {
      return tmp9(10294);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp7(10295);
    } else if (tmp7(7519).AnimationState.LOOP === ACTION) {
      return tmp7(10296);
    } else {
      return tmp7(10297);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp5(10298);
    } else if (tmp5(7519).AnimationState.LOOP === ACTION) {
      return tmp5(10299);
    } else {
      return tmp5(10300);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp3(10301);
    } else if (tmp3(7519).AnimationState.LOOP === ACTION) {
      return tmp3(10302);
    } else {
      return tmp3(10303);
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
