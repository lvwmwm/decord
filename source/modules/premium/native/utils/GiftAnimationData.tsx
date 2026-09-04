// Module ID: 10762
// Function ID: 10763
// Name: LottieType
// Dependencies: [1923, 8013, 10763, 10764, 10765, 10766, 10767, 10768, 10769, 10770, 10771, 10772, 10773, 10774, 10775, 10776, 10777, 10778, 10779, 10780, 10781, 10782, 10783, 10784, 10785, 10786, 2]
// Exports: getGiftAnimationData, getLottieType

// Module 10762 (LottieType)
import set from "set" /* 2 */;
import GuildFeatures from "GuildFeatures" /* 1923 */;
import _sendGiftMessage from "_sendGiftMessage" /* 8013 */;

const PremiumGiftStyles = GuildFeatures.PremiumGiftStyles;
const obj = { JSON: 0, [0]: "JSON", LOTTIE: 1, [1]: "LOTTIE" };
const result = set.fileFinishedImporting("modules/premium/native/utils/GiftAnimationData.tsx");

export const LottieType = obj;
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
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp17(10763);
    } else if (tmp17(8013).AnimationState.LOOP === ACTION) {
      return tmp17(10764);
    } else {
      return tmp17(10765);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp15(10766);
    } else if (tmp15(8013).AnimationState.LOOP === ACTION) {
      return tmp15(10767);
    } else {
      return tmp15(10768);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp13(10769);
    } else if (tmp13(8013).AnimationState.LOOP === ACTION) {
      return tmp13(10770);
    } else {
      return tmp13(10771);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp11(10772);
    } else if (tmp11(8013).AnimationState.LOOP === ACTION) {
      return tmp11(10773);
    } else {
      return tmp11(10774);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp9(10775);
    } else if (tmp9(8013).AnimationState.LOOP === ACTION) {
      return tmp9(10776);
    } else {
      return tmp9(10777);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp7(10778);
    } else if (tmp7(8013).AnimationState.LOOP === ACTION) {
      return tmp7(10779);
    } else {
      return tmp7(10780);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp5(10781);
    } else if (tmp5(8013).AnimationState.LOOP === ACTION) {
      return tmp5(10782);
    } else {
      return tmp5(10783);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp3(10784);
    } else if (tmp3(8013).AnimationState.LOOP === ACTION) {
      return tmp3(10785);
    } else {
      return tmp3(10786);
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
