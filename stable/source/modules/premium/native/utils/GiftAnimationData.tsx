// Module ID: 11122
// Function ID: 11123
// Name: GiftAnimationData
// Dependencies: [1374, 8372, 11123, 11124, 11125, 11126, 11127, 11128, 11129, 11130, 11131, 11132, 11133, 11134, 11135, 11136, 11137, 11138, 11139, 11140, 11141, 11142, 11143, 11144, 11145, 11146, 2]
// Exports: getGiftAnimationData, getLottieType

// Module 11122 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8372 */;
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
      return tmp17(11123);
    } else if (tmp17(8372).AnimationState.LOOP === ACTION) {
      return tmp17(11124);
    } else {
      return tmp17(11125);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp15(11126);
    } else if (tmp15(8372).AnimationState.LOOP === ACTION) {
      return tmp15(11127);
    } else {
      return tmp15(11128);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp13(11129);
    } else if (tmp13(8372).AnimationState.LOOP === ACTION) {
      return tmp13(11130);
    } else {
      return tmp13(11131);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp11(11132);
    } else if (tmp11(8372).AnimationState.LOOP === ACTION) {
      return tmp11(11133);
    } else {
      return tmp11(11134);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp9(11135);
    } else if (tmp9(8372).AnimationState.LOOP === ACTION) {
      return tmp9(11136);
    } else {
      return tmp9(11137);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp7(11138);
    } else if (tmp7(8372).AnimationState.LOOP === ACTION) {
      return tmp7(11139);
    } else {
      return tmp7(11140);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp5(11141);
    } else if (tmp5(8372).AnimationState.LOOP === ACTION) {
      return tmp5(11142);
    } else {
      return tmp5(11143);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp3(11144);
    } else if (tmp3(8372).AnimationState.LOOP === ACTION) {
      return tmp3(11145);
    } else {
      return tmp3(11146);
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
