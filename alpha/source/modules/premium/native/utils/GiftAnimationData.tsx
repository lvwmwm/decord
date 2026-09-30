// Module ID: 10494
// Function ID: 10495
// Name: GiftAnimationData
// Dependencies: [1374, 7720, 10495, 10496, 10497, 10498, 10499, 10500, 10501, 10502, 10503, 10504, 10505, 10506, 10507, 10508, 10509, 10510, 10511, 10512, 10513, 10514, 10515, 10516, 10517, 10518, 2]
// Exports: getGiftAnimationData, getLottieType

// Module 10494 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 7720 */;
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
      return tmp17(10495);
    } else if (tmp17(7720).AnimationState.LOOP === ACTION) {
      return tmp17(10496);
    } else {
      return tmp17(10497);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp15(10498);
    } else if (tmp15(7720).AnimationState.LOOP === ACTION) {
      return tmp15(10499);
    } else {
      return tmp15(10500);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp13(10501);
    } else if (tmp13(7720).AnimationState.LOOP === ACTION) {
      return tmp13(10502);
    } else {
      return tmp13(10503);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp11(10504);
    } else if (tmp11(7720).AnimationState.LOOP === ACTION) {
      return tmp11(10505);
    } else {
      return tmp11(10506);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp9(10507);
    } else if (tmp9(7720).AnimationState.LOOP === ACTION) {
      return tmp9(10508);
    } else {
      return tmp9(10509);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp7(10510);
    } else if (tmp7(7720).AnimationState.LOOP === ACTION) {
      return tmp7(10511);
    } else {
      return tmp7(10512);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp5(10513);
    } else if (tmp5(7720).AnimationState.LOOP === ACTION) {
      return tmp5(10514);
    } else {
      return tmp5(10515);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp3(10516);
    } else if (tmp3(7720).AnimationState.LOOP === ACTION) {
      return tmp3(10517);
    } else {
      return tmp3(10518);
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
