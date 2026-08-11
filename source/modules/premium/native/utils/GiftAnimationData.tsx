// Module ID: 9591
// Function ID: 9592
// Name: LottieType
// Dependencies: [1924, 8184, 9592, 9593, 9594, 9595, 9596, 9597, 9598, 9599, 9600, 9601, 9602, 9603, 9604, 9605, 9606, 9607, 9608, 9609, 9610, 9611, 9612, 9613, 9614, 9615, 2]
// Exports: getGiftAnimationData, getLottieType

// Module 9591 (LottieType)
import { PremiumGiftStyles } from "GuildFeatures";

const obj = { JSON: 0, [0]: "JSON", LOTTIE: 1, [1]: "LOTTIE" };
const result = require("module_9592").fileFinishedImporting("modules/premium/native/utils/GiftAnimationData.tsx");

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
    if (require(8184) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp17(9592);
    } else if (tmp17(8184).AnimationState.LOOP === ACTION) {
      return tmp17(9593);
    } else {
      return tmp17(9594);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (require(8184) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp15(9595);
    } else if (tmp15(8184).AnimationState.LOOP === ACTION) {
      return tmp15(9596);
    } else {
      return tmp15(9597);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (require(8184) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp13(9598);
    } else if (tmp13(8184).AnimationState.LOOP === ACTION) {
      return tmp13(9599);
    } else {
      return tmp13(9600);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (require(8184) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp11(9601);
    } else if (tmp11(8184).AnimationState.LOOP === ACTION) {
      return tmp11(9602);
    } else {
      return tmp11(9603);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (require(8184) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp9(9604);
    } else if (tmp9(8184).AnimationState.LOOP === ACTION) {
      return tmp9(9605);
    } else {
      return tmp9(9606);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (require(8184) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp7(9607);
    } else if (tmp7(8184).AnimationState.LOOP === ACTION) {
      return tmp7(9608);
    } else {
      return tmp7(9609);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (require(8184) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp5(9610);
    } else if (tmp5(8184).AnimationState.LOOP === ACTION) {
      return tmp5(9611);
    } else {
      return tmp5(9612);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (require(8184) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp3(9613);
    } else if (tmp3(8184).AnimationState.LOOP === ACTION) {
      return tmp3(9614);
    } else {
      return tmp3(9615);
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
