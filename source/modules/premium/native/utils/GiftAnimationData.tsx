// Module ID: 8775
// Function ID: 8776
// Name: LottieType
// Dependencies: [1876, 7854, 8776, 8777, 8778, 8779, 8780, 8781, 8782, 8783, 8784, 8785, 8786, 8787, 8788, 8789, 8790, 8791, 8792, 8793, 8794, 8795, 8796, 8797, 8798, 8799, 2]
// Exports: getGiftAnimationData, getLottieType

// Module 8775 (LottieType)
import { PremiumGiftStyles } from "GuildFeatures";

const obj = { JSON: 0, [0]: "JSON", LOTTIE: 1, [1]: "LOTTIE" };
const result = require("module_8776").fileFinishedImporting("modules/premium/native/utils/GiftAnimationData.tsx");

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
    if (require(7854) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp17(8776);
    } else if (tmp17(7854).AnimationState.LOOP === ACTION) {
      return tmp17(8777);
    } else {
      return tmp17(8778);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (require(7854) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp15(8779);
    } else if (tmp15(7854).AnimationState.LOOP === ACTION) {
      return tmp15(8780);
    } else {
      return tmp15(8781);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (require(7854) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp13(8782);
    } else if (tmp13(7854).AnimationState.LOOP === ACTION) {
      return tmp13(8783);
    } else {
      return tmp13(8784);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (require(7854) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp11(8785);
    } else if (tmp11(7854).AnimationState.LOOP === ACTION) {
      return tmp11(8786);
    } else {
      return tmp11(8787);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (require(7854) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp9(8788);
    } else if (tmp9(7854).AnimationState.LOOP === ACTION) {
      return tmp9(8789);
    } else {
      return tmp9(8790);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (require(7854) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp7(8791);
    } else if (tmp7(7854).AnimationState.LOOP === ACTION) {
      return tmp7(8792);
    } else {
      return tmp7(8793);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (require(7854) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp5(8794);
    } else if (tmp5(7854).AnimationState.LOOP === ACTION) {
      return tmp5(8795);
    } else {
      return tmp5(8796);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (require(7854) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp3(8797);
    } else if (tmp3(7854).AnimationState.LOOP === ACTION) {
      return tmp3(8798);
    } else {
      return tmp3(8799);
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
