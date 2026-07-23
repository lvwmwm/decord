// Module ID: 8784
// Function ID: 69398
// Name: LottieType
// Dependencies: [1851, 7758, 8785, 8786, 8787, 8788, 8789, 8790, 8791, 8792, 8793, 8794, 8795, 8796, 8797, 8798, 8799, 8800, 8801, 8802, 8803, 8804, 8805, 8806, 8807, 8808, 2]
// Exports: getGiftAnimationData, getLottieType

// Module 8784 (LottieType)
import { PremiumGiftStyles } from "GuildFeatures";

const obj = { JSON: 0, [0]: "JSON", LOTTIE: 1, [1]: "LOTTIE" };
const result = require("items1").fileFinishedImporting("modules/premium/native/utils/GiftAnimationData.tsx");

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
    if (require(7758) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return require(8785) /* items1 */;
    } else if (require(7758) /* _sendGiftMessage */.AnimationState.LOOP === ACTION) {
      return require(8786) /* items1 */;
    } else {
      return require(8787) /* items1 */;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (require(7758) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return require(8788) /* items1 */;
    } else if (require(7758) /* _sendGiftMessage */.AnimationState.LOOP === ACTION) {
      return require(8789) /* items1 */;
    } else {
      return require(8790) /* items1 */;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (require(7758) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return require(8791) /* items1 */;
    } else if (require(7758) /* _sendGiftMessage */.AnimationState.LOOP === ACTION) {
      return require(8792) /* items1 */;
    } else {
      return require(8793) /* items1 */;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (require(7758) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return require(8794) /* items1 */;
    } else if (require(7758) /* _sendGiftMessage */.AnimationState.LOOP === ACTION) {
      return require(8795) /* items1 */;
    } else {
      return require(8796) /* items1 */;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (require(7758) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return require(8797) /* items */;
    } else if (require(7758) /* _sendGiftMessage */.AnimationState.LOOP === ACTION) {
      return require(8798) /* items */;
    } else {
      return require(8799) /* items1 */;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (require(7758) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return require(8800) /* items2 */;
    } else if (require(7758) /* _sendGiftMessage */.AnimationState.LOOP === ACTION) {
      return require(8801) /* items2 */;
    } else {
      return require(8802) /* items */;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (require(7758) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return require(8803) /* items */;
    } else if (require(7758) /* _sendGiftMessage */.AnimationState.LOOP === ACTION) {
      return require(8804) /* items */;
    } else {
      return require(8805) /* items */;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (require(7758) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return require(8806) /* items */;
    } else if (require(7758) /* _sendGiftMessage */.AnimationState.LOOP === ACTION) {
      return require(8807) /* items */;
    } else {
      return require(8808) /* items2 */;
    }
  } else {
    if (PremiumGiftStyles.SNOWGLOBE !== giftStyle) {
      if (PremiumGiftStyles.BOX !== giftStyle) {
        const CUP = PremiumGiftStyles.CUP;
      }
    }
    const _Error = Error;
    throw Error();
  }
};
