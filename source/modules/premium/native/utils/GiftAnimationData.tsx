// Module ID: 9635
// Function ID: 9636
// Name: LottieType
// Dependencies: [1924, 8227, 9636, 9637, 9638, 9639, 9640, 9641, 9642, 9643, 9644, 9645, 9646, 9647, 9648, 9649, 9650, 9651, 9652, 9653, 9654, 9655, 9656, 9657, 9658, 9659, 2]
// Exports: getGiftAnimationData, getLottieType

// Module 9635 (LottieType)
import { PremiumGiftStyles } from "GuildFeatures";

const obj = { JSON: 0, [0]: "JSON", LOTTIE: 1, [1]: "LOTTIE" };
const result = require("module_9636").fileFinishedImporting("modules/premium/native/utils/GiftAnimationData.tsx");

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
    if (require(8227) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp17(9636);
    } else if (tmp17(8227).AnimationState.LOOP === ACTION) {
      return tmp17(9637);
    } else {
      return tmp17(9638);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (require(8227) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp15(9639);
    } else if (tmp15(8227).AnimationState.LOOP === ACTION) {
      return tmp15(9640);
    } else {
      return tmp15(9641);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (require(8227) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp13(9642);
    } else if (tmp13(8227).AnimationState.LOOP === ACTION) {
      return tmp13(9643);
    } else {
      return tmp13(9644);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (require(8227) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp11(9645);
    } else if (tmp11(8227).AnimationState.LOOP === ACTION) {
      return tmp11(9646);
    } else {
      return tmp11(9647);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (require(8227) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp9(9648);
    } else if (tmp9(8227).AnimationState.LOOP === ACTION) {
      return tmp9(9649);
    } else {
      return tmp9(9650);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (require(8227) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp7(9651);
    } else if (tmp7(8227).AnimationState.LOOP === ACTION) {
      return tmp7(9652);
    } else {
      return tmp7(9653);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (require(8227) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp5(9654);
    } else if (tmp5(8227).AnimationState.LOOP === ACTION) {
      return tmp5(9655);
    } else {
      return tmp5(9656);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (require(8227) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp3(9657);
    } else if (tmp3(8227).AnimationState.LOOP === ACTION) {
      return tmp3(9658);
    } else {
      return tmp3(9659);
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
