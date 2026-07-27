// Module ID: 8711
// Function ID: 69093
// Name: LottieType
// Dependencies: [1852, 7798, 8712, 8713, 8714, 8715, 8716, 8717, 8718, 8719, 8720, 8721, 8722, 8723, 8724, 8725, 8726, 8727, 8728, 8729, 8730, 8731, 8732, 8733, 8734, 8735, 2]
// Exports: getGiftAnimationData, getLottieType

// Module 8711 (LottieType)
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
    if (require(7798) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return require(8712) /* items1 */;
    } else if (require(7798) /* _sendGiftMessage */.AnimationState.LOOP === ACTION) {
      return require(8713) /* items1 */;
    } else {
      return require(8714) /* items1 */;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (require(7798) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return require(8715) /* items1 */;
    } else if (require(7798) /* _sendGiftMessage */.AnimationState.LOOP === ACTION) {
      return require(8716) /* items1 */;
    } else {
      return require(8717) /* items1 */;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (require(7798) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return require(8718) /* items1 */;
    } else if (require(7798) /* _sendGiftMessage */.AnimationState.LOOP === ACTION) {
      return require(8719) /* items1 */;
    } else {
      return require(8720) /* items1 */;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (require(7798) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return require(8721) /* items1 */;
    } else if (require(7798) /* _sendGiftMessage */.AnimationState.LOOP === ACTION) {
      return require(8722) /* items1 */;
    } else {
      return require(8723) /* items1 */;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (require(7798) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return require(8724) /* items */;
    } else if (require(7798) /* _sendGiftMessage */.AnimationState.LOOP === ACTION) {
      return require(8725) /* items */;
    } else {
      return require(8726) /* items1 */;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (require(7798) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return require(8727) /* items2 */;
    } else if (require(7798) /* _sendGiftMessage */.AnimationState.LOOP === ACTION) {
      return require(8728) /* items2 */;
    } else {
      return require(8729) /* items */;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (require(7798) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return require(8730) /* items */;
    } else if (require(7798) /* _sendGiftMessage */.AnimationState.LOOP === ACTION) {
      return require(8731) /* items */;
    } else {
      return require(8732) /* items */;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (require(7798) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return require(8733) /* items */;
    } else if (require(7798) /* _sendGiftMessage */.AnimationState.LOOP === ACTION) {
      return require(8734) /* items */;
    } else {
      return require(8735) /* items2 */;
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
