// Module ID: 11181
// Function ID: 11182
// Name: GiftAnimationData
// Dependencies: [1374, 8430, 11182, 11183, 11184, 11185, 11186, 11187, 11188, 11189, 11190, 11191, 11192, 11193, 11194, 11195, 11196, 11197, 11198, 11199, 11200, 11201, 11202, 11203, 11204, 11205, 2]
// Exports: getGiftAnimationData, getLottieType

// Module 11181 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8430 */;
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
      return tmp17(11182);
    } else if (tmp17(8430).AnimationState.LOOP === ACTION) {
      return tmp17(11183);
    } else {
      return tmp17(11184);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp15(11185);
    } else if (tmp15(8430).AnimationState.LOOP === ACTION) {
      return tmp15(11186);
    } else {
      return tmp15(11187);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp13(11188);
    } else if (tmp13(8430).AnimationState.LOOP === ACTION) {
      return tmp13(11189);
    } else {
      return tmp13(11190);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp11(11191);
    } else if (tmp11(8430).AnimationState.LOOP === ACTION) {
      return tmp11(11192);
    } else {
      return tmp11(11193);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp9(11194);
    } else if (tmp9(8430).AnimationState.LOOP === ACTION) {
      return tmp9(11195);
    } else {
      return tmp9(11196);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp7(11197);
    } else if (tmp7(8430).AnimationState.LOOP === ACTION) {
      return tmp7(11198);
    } else {
      return tmp7(11199);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp5(11200);
    } else if (tmp5(8430).AnimationState.LOOP === ACTION) {
      return tmp5(11201);
    } else {
      return tmp5(11202);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp3(11203);
    } else if (tmp3(8430).AnimationState.LOOP === ACTION) {
      return tmp3(11204);
    } else {
      return tmp3(11205);
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
