// Module ID: 11175
// Function ID: 11176
// Name: GiftAnimationData
// Dependencies: [1374, 8426, 11176, 11177, 11178, 11179, 11180, 11181, 11182, 11183, 11184, 11185, 11186, 11187, 11188, 11189, 11190, 11191, 11192, 11193, 11194, 11195, 11196, 11197, 11198, 11199, 2]
// Exports: getGiftAnimationData, getLottieType

// Module 11175 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8426 */;
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
      return tmp17(11176);
    } else if (tmp17(8426).AnimationState.LOOP === ACTION) {
      return tmp17(11177);
    } else {
      return tmp17(11178);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp15(11179);
    } else if (tmp15(8426).AnimationState.LOOP === ACTION) {
      return tmp15(11180);
    } else {
      return tmp15(11181);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp13(11182);
    } else if (tmp13(8426).AnimationState.LOOP === ACTION) {
      return tmp13(11183);
    } else {
      return tmp13(11184);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp11(11185);
    } else if (tmp11(8426).AnimationState.LOOP === ACTION) {
      return tmp11(11186);
    } else {
      return tmp11(11187);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp9(11188);
    } else if (tmp9(8426).AnimationState.LOOP === ACTION) {
      return tmp9(11189);
    } else {
      return tmp9(11190);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp7(11191);
    } else if (tmp7(8426).AnimationState.LOOP === ACTION) {
      return tmp7(11192);
    } else {
      return tmp7(11193);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp5(11194);
    } else if (tmp5(8426).AnimationState.LOOP === ACTION) {
      return tmp5(11195);
    } else {
      return tmp5(11196);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp3(11197);
    } else if (tmp3(8426).AnimationState.LOOP === ACTION) {
      return tmp3(11198);
    } else {
      return tmp3(11199);
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
