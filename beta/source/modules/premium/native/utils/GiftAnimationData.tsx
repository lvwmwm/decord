// Module ID: 11169
// Function ID: 11170
// Name: GiftAnimationData
// Dependencies: [1378, 8377, 11170, 11171, 11172, 11173, 11174, 11175, 11176, 11177, 11178, 11179, 11180, 11181, 11182, 11183, 11184, 11185, 11186, 11187, 11188, 11189, 11190, 11191, 11192, 11193, 2]
// Exports: getGiftAnimationData, getLottieType

// Module 11169 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1378 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8377 */;
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
      return tmp17(11170);
    } else if (tmp17(8377).AnimationState.LOOP === ACTION) {
      return tmp17(11171);
    } else {
      return tmp17(11172);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp15(11173);
    } else if (tmp15(8377).AnimationState.LOOP === ACTION) {
      return tmp15(11174);
    } else {
      return tmp15(11175);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp13(11176);
    } else if (tmp13(8377).AnimationState.LOOP === ACTION) {
      return tmp13(11177);
    } else {
      return tmp13(11178);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp11(11179);
    } else if (tmp11(8377).AnimationState.LOOP === ACTION) {
      return tmp11(11180);
    } else {
      return tmp11(11181);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp9(11182);
    } else if (tmp9(8377).AnimationState.LOOP === ACTION) {
      return tmp9(11183);
    } else {
      return tmp9(11184);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp7(11185);
    } else if (tmp7(8377).AnimationState.LOOP === ACTION) {
      return tmp7(11186);
    } else {
      return tmp7(11187);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp5(11188);
    } else if (tmp5(8377).AnimationState.LOOP === ACTION) {
      return tmp5(11189);
    } else {
      return tmp5(11190);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp3(11191);
    } else if (tmp3(8377).AnimationState.LOOP === ACTION) {
      return tmp3(11192);
    } else {
      return tmp3(11193);
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
