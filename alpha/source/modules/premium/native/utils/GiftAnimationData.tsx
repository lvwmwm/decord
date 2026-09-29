// Module ID: 10460
// Function ID: 10461
// Name: GiftAnimationData
// Dependencies: [1374, 7690, 10461, 10462, 10463, 10464, 10465, 10466, 10467, 10468, 10469, 10470, 10471, 10472, 10473, 10474, 10475, 10476, 10477, 10478, 10479, 10480, 10481, 10482, 10483, 10484, 2]
// Exports: getGiftAnimationData, getLottieType

// Module 10460 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 7690 */;
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
      return tmp17(10461);
    } else if (tmp17(7690).AnimationState.LOOP === ACTION) {
      return tmp17(10462);
    } else {
      return tmp17(10463);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp15(10464);
    } else if (tmp15(7690).AnimationState.LOOP === ACTION) {
      return tmp15(10465);
    } else {
      return tmp15(10466);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp13(10467);
    } else if (tmp13(7690).AnimationState.LOOP === ACTION) {
      return tmp13(10468);
    } else {
      return tmp13(10469);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp11(10470);
    } else if (tmp11(7690).AnimationState.LOOP === ACTION) {
      return tmp11(10471);
    } else {
      return tmp11(10472);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp9(10473);
    } else if (tmp9(7690).AnimationState.LOOP === ACTION) {
      return tmp9(10474);
    } else {
      return tmp9(10475);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp7(10476);
    } else if (tmp7(7690).AnimationState.LOOP === ACTION) {
      return tmp7(10477);
    } else {
      return tmp7(10478);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp5(10479);
    } else if (tmp5(7690).AnimationState.LOOP === ACTION) {
      return tmp5(10480);
    } else {
      return tmp5(10481);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp3(10482);
    } else if (tmp3(7690).AnimationState.LOOP === ACTION) {
      return tmp3(10483);
    } else {
      return tmp3(10484);
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
