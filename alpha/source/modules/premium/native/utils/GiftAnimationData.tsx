// Module ID: 11099
// Function ID: 11100
// Name: GiftAnimationData
// Dependencies: [1374, 8344, 11100, 11101, 11102, 11103, 11104, 11105, 11106, 11107, 11108, 11109, 11110, 11111, 11112, 11113, 11114, 11115, 11116, 11117, 11118, 11119, 11120, 11121, 11122, 11123, 2]
// Exports: getGiftAnimationData, getLottieType

// Module 11099 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8344 */;
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
      return tmp17(11100);
    } else if (tmp17(8344).AnimationState.LOOP === ACTION) {
      return tmp17(11101);
    } else {
      return tmp17(11102);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp15(11103);
    } else if (tmp15(8344).AnimationState.LOOP === ACTION) {
      return tmp15(11104);
    } else {
      return tmp15(11105);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp13(11106);
    } else if (tmp13(8344).AnimationState.LOOP === ACTION) {
      return tmp13(11107);
    } else {
      return tmp13(11108);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp11(11109);
    } else if (tmp11(8344).AnimationState.LOOP === ACTION) {
      return tmp11(11110);
    } else {
      return tmp11(11111);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp9(11112);
    } else if (tmp9(8344).AnimationState.LOOP === ACTION) {
      return tmp9(11113);
    } else {
      return tmp9(11114);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp7(11115);
    } else if (tmp7(8344).AnimationState.LOOP === ACTION) {
      return tmp7(11116);
    } else {
      return tmp7(11117);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp5(11118);
    } else if (tmp5(8344).AnimationState.LOOP === ACTION) {
      return tmp5(11119);
    } else {
      return tmp5(11120);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp3(11121);
    } else if (tmp3(8344).AnimationState.LOOP === ACTION) {
      return tmp3(11122);
    } else {
      return tmp3(11123);
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
