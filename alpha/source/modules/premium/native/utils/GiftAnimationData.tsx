// Module ID: 10486
// Function ID: 10487
// Name: GiftAnimationData
// Dependencies: [1374, 7707, 10487, 10488, 10489, 10490, 10491, 10492, 10493, 10494, 10495, 10496, 10497, 10498, 10499, 10500, 10501, 10502, 10503, 10504, 10505, 10506, 10507, 10508, 10509, 10510, 2]
// Exports: getGiftAnimationData, getLottieType

// Module 10486 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 7707 */;
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
      return tmp17(10487);
    } else if (tmp17(7707).AnimationState.LOOP === ACTION) {
      return tmp17(10488);
    } else {
      return tmp17(10489);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp15(10490);
    } else if (tmp15(7707).AnimationState.LOOP === ACTION) {
      return tmp15(10491);
    } else {
      return tmp15(10492);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp13(10493);
    } else if (tmp13(7707).AnimationState.LOOP === ACTION) {
      return tmp13(10494);
    } else {
      return tmp13(10495);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp11(10496);
    } else if (tmp11(7707).AnimationState.LOOP === ACTION) {
      return tmp11(10497);
    } else {
      return tmp11(10498);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp9(10499);
    } else if (tmp9(7707).AnimationState.LOOP === ACTION) {
      return tmp9(10500);
    } else {
      return tmp9(10501);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp7(10502);
    } else if (tmp7(7707).AnimationState.LOOP === ACTION) {
      return tmp7(10503);
    } else {
      return tmp7(10504);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp5(10505);
    } else if (tmp5(7707).AnimationState.LOOP === ACTION) {
      return tmp5(10506);
    } else {
      return tmp5(10507);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp3(10508);
    } else if (tmp3(7707).AnimationState.LOOP === ACTION) {
      return tmp3(10509);
    } else {
      return tmp3(10510);
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
