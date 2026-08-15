// Module ID: 9600
// Function ID: 9601
// Name: LottieType
// Dependencies: [1924, 8294, 9601, 9602, 9603, 9604, 9605, 9606, 9607, 9608, 9609, 9610, 9611, 9612, 9613, 9614, 9615, 9616, 9617, 9618, 9619, 9620, 9621, 9622, 9623, 9624, 2]
// Exports: getGiftAnimationData, getLottieType

// Module 9600 (LottieType)
import { PremiumGiftStyles } from "GuildFeatures";

const obj = { JSON: 0, [0]: "JSON", LOTTIE: 1, [1]: "LOTTIE" };
const result = require("module_9601").fileFinishedImporting("modules/premium/native/utils/GiftAnimationData.tsx");

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
    if (require(8294) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp17(9601);
    } else if (tmp17(8294).AnimationState.LOOP === ACTION) {
      return tmp17(9602);
    } else {
      return tmp17(9603);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (require(8294) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp15(9604);
    } else if (tmp15(8294).AnimationState.LOOP === ACTION) {
      return tmp15(9605);
    } else {
      return tmp15(9606);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (require(8294) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp13(9607);
    } else if (tmp13(8294).AnimationState.LOOP === ACTION) {
      return tmp13(9608);
    } else {
      return tmp13(9609);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (require(8294) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp11(9610);
    } else if (tmp11(8294).AnimationState.LOOP === ACTION) {
      return tmp11(9611);
    } else {
      return tmp11(9612);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (require(8294) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp9(9613);
    } else if (tmp9(8294).AnimationState.LOOP === ACTION) {
      return tmp9(9614);
    } else {
      return tmp9(9615);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (require(8294) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp7(9616);
    } else if (tmp7(8294).AnimationState.LOOP === ACTION) {
      return tmp7(9617);
    } else {
      return tmp7(9618);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (require(8294) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp5(9619);
    } else if (tmp5(8294).AnimationState.LOOP === ACTION) {
      return tmp5(9620);
    } else {
      return tmp5(9621);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (require(8294) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return tmp3(9622);
    } else if (tmp3(8294).AnimationState.LOOP === ACTION) {
      return tmp3(9623);
    } else {
      return tmp3(9624);
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
