// Module ID: 8779
// Function ID: 8780
// Name: LottieType
// Dependencies: [1876, 7857, 8780, 8781, 8782, 8783, 8784, 8785, 8786, 8787, 8788, 8789, 8790, 8791, 8792, 8793, 8794, 8795, 8796, 8797, 8798, 8799, 8800, 8801, 8802, 8803, 2]
// Exports: getGiftAnimationData, getLottieType

// Module 8779 (LottieType)
import { PremiumGiftStyles } from "GuildFeatures";

const obj = { JSON: 0, [0]: "JSON", LOTTIE: 1, [1]: "LOTTIE" };
const result = require("module_8780").fileFinishedImporting("modules/premium/native/utils/GiftAnimationData.tsx");

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
    if (require(7857) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp17(8780);
    } else if (tmp17(7857).AnimationState.LOOP === ACTION) {
      return tmp17(8781);
    } else {
      return tmp17(8782);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (require(7857) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp15(8783);
    } else if (tmp15(7857).AnimationState.LOOP === ACTION) {
      return tmp15(8784);
    } else {
      return tmp15(8785);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (require(7857) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp13(8786);
    } else if (tmp13(7857).AnimationState.LOOP === ACTION) {
      return tmp13(8787);
    } else {
      return tmp13(8788);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (require(7857) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp11(8789);
    } else if (tmp11(7857).AnimationState.LOOP === ACTION) {
      return tmp11(8790);
    } else {
      return tmp11(8791);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (require(7857) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp9(8792);
    } else if (tmp9(7857).AnimationState.LOOP === ACTION) {
      return tmp9(8793);
    } else {
      return tmp9(8794);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (require(7857) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp7(8795);
    } else if (tmp7(7857).AnimationState.LOOP === ACTION) {
      return tmp7(8796);
    } else {
      return tmp7(8797);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (require(7857) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp5(8798);
    } else if (tmp5(7857).AnimationState.LOOP === ACTION) {
      return tmp5(8799);
    } else {
      return tmp5(8800);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (require(7857) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp3(8801);
    } else if (tmp3(7857).AnimationState.LOOP === ACTION) {
      return tmp3(8802);
    } else {
      return tmp3(8803);
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
