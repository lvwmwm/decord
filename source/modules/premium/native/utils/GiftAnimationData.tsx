// Module ID: 8755
// Function ID: 69244
// Name: LottieType
// Dependencies: [1852, 7834, 8756, 8757, 8758, 8759, 8760, 8761, 8762, 8763, 8764, 8765, 8766, 8767, 8768, 8769, 8770, 8771, 8772, 8773, 8774, 8775, 8776, 8777, 8778, 8779, 2]
// Exports: getGiftAnimationData, getLottieType

// Module 8755 (LottieType)
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
    if (require(7834) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return require(8756) /* items1 */;
    } else if (require(7834) /* _sendGiftMessage */.AnimationState.LOOP === ACTION) {
      return require(8757) /* items1 */;
    } else {
      return require(8758) /* items1 */;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (require(7834) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return require(8759) /* items1 */;
    } else if (require(7834) /* _sendGiftMessage */.AnimationState.LOOP === ACTION) {
      return require(8760) /* items1 */;
    } else {
      return require(8761) /* items1 */;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (require(7834) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return require(8762) /* items1 */;
    } else if (require(7834) /* _sendGiftMessage */.AnimationState.LOOP === ACTION) {
      return require(8763) /* items1 */;
    } else {
      return require(8764) /* items1 */;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (require(7834) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return require(8765) /* items1 */;
    } else if (require(7834) /* _sendGiftMessage */.AnimationState.LOOP === ACTION) {
      return require(8766) /* items1 */;
    } else {
      return require(8767) /* items1 */;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (require(7834) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return require(8768) /* items */;
    } else if (require(7834) /* _sendGiftMessage */.AnimationState.LOOP === ACTION) {
      return require(8769) /* items */;
    } else {
      return require(8770) /* items1 */;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (require(7834) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return require(8771) /* items2 */;
    } else if (require(7834) /* _sendGiftMessage */.AnimationState.LOOP === ACTION) {
      return require(8772) /* items2 */;
    } else {
      return require(8773) /* items */;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (require(7834) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return require(8774) /* items */;
    } else if (require(7834) /* _sendGiftMessage */.AnimationState.LOOP === ACTION) {
      return require(8775) /* items */;
    } else {
      return require(8776) /* items */;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (require(7834) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return require(8777) /* items */;
    } else if (require(7834) /* _sendGiftMessage */.AnimationState.LOOP === ACTION) {
      return require(8778) /* items */;
    } else {
      return require(8779) /* items2 */;
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
