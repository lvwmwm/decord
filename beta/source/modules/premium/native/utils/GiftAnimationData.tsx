// Module ID: 11133
// Function ID: 11134
// Name: GiftAnimationData
// Dependencies: [1378, 8345, 11134, 11135, 11136, 11137, 11138, 11139, 11140, 11141, 11142, 11143, 11144, 11145, 11146, 11147, 11148, 11149, 11150, 11151, 11152, 11153, 11154, 11155, 11156, 11157, 2]
// Exports: getGiftAnimationData, getLottieType

// Module 11133 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1378 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8345 */;
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
      return tmp17(11134);
    } else if (tmp17(8345).AnimationState.LOOP === ACTION) {
      return tmp17(11135);
    } else {
      return tmp17(11136);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp15(11137);
    } else if (tmp15(8345).AnimationState.LOOP === ACTION) {
      return tmp15(11138);
    } else {
      return tmp15(11139);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp13(11140);
    } else if (tmp13(8345).AnimationState.LOOP === ACTION) {
      return tmp13(11141);
    } else {
      return tmp13(11142);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp11(11143);
    } else if (tmp11(8345).AnimationState.LOOP === ACTION) {
      return tmp11(11144);
    } else {
      return tmp11(11145);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp9(11146);
    } else if (tmp9(8345).AnimationState.LOOP === ACTION) {
      return tmp9(11147);
    } else {
      return tmp9(11148);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp7(11149);
    } else if (tmp7(8345).AnimationState.LOOP === ACTION) {
      return tmp7(11150);
    } else {
      return tmp7(11151);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp5(11152);
    } else if (tmp5(8345).AnimationState.LOOP === ACTION) {
      return tmp5(11153);
    } else {
      return tmp5(11154);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp3(11155);
    } else if (tmp3(8345).AnimationState.LOOP === ACTION) {
      return tmp3(11156);
    } else {
      return tmp3(11157);
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
