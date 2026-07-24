// Module ID: 8823
// Function ID: 69613
// Name: LottieType
// Dependencies: [1851, 7851, 8824, 8825, 8826, 8827, 8828, 8829, 8830, 8831, 8832, 8833, 8834, 8835, 8836, 8837, 8838, 8839, 8840, 8841, 8842, 8843, 8844, 8845, 8846, 8847, 2]
// Exports: getGiftAnimationData, getLottieType

// Module 8823 (LottieType)
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
    if (require(7851) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return require(8824) /* items1 */;
    } else if (require(7851) /* _sendGiftMessage */.AnimationState.LOOP === ACTION) {
      return require(8825) /* items1 */;
    } else {
      return require(8826) /* items1 */;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (require(7851) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return require(8827) /* items1 */;
    } else if (require(7851) /* _sendGiftMessage */.AnimationState.LOOP === ACTION) {
      return require(8828) /* items1 */;
    } else {
      return require(8829) /* items1 */;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (require(7851) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return require(8830) /* items1 */;
    } else if (require(7851) /* _sendGiftMessage */.AnimationState.LOOP === ACTION) {
      return require(8831) /* items1 */;
    } else {
      return require(8832) /* items1 */;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (require(7851) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return require(8833) /* items1 */;
    } else if (require(7851) /* _sendGiftMessage */.AnimationState.LOOP === ACTION) {
      return require(8834) /* items1 */;
    } else {
      return require(8835) /* items1 */;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (require(7851) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return require(8836) /* items */;
    } else if (require(7851) /* _sendGiftMessage */.AnimationState.LOOP === ACTION) {
      return require(8837) /* items */;
    } else {
      return require(8838) /* items1 */;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (require(7851) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return require(8839) /* items2 */;
    } else if (require(7851) /* _sendGiftMessage */.AnimationState.LOOP === ACTION) {
      return require(8840) /* items2 */;
    } else {
      return require(8841) /* items */;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (require(7851) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return require(8842) /* items */;
    } else if (require(7851) /* _sendGiftMessage */.AnimationState.LOOP === ACTION) {
      return require(8843) /* items */;
    } else {
      return require(8844) /* items */;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (require(7851) /* _sendGiftMessage */.AnimationState.IDLE === ACTION) {
      return require(8845) /* items */;
    } else if (require(7851) /* _sendGiftMessage */.AnimationState.LOOP === ACTION) {
      return require(8846) /* items */;
    } else {
      return require(8847) /* items2 */;
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
