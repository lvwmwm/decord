// Module ID: 8776
// Function ID: 69345
// Name: LottieType
// Dependencies: []
// Exports: getGiftAnimationData, getLottieType

// Module 8776 (LottieType)
const PremiumGiftStyles = require(dependencyMap[0]).PremiumGiftStyles;
const obj = { JSON: 0, [0]: "JSON", LOTTIE: 1, [1]: "LOTTIE" };
const _module = require(dependencyMap[26]);
const result = _module.fileFinishedImporting("modules/premium/native/utils/GiftAnimationData.tsx");

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
    if (require(dependencyMap[1]).AnimationState.IDLE === ACTION) {
      return require(dependencyMap[2]);
    } else if (require(dependencyMap[1]).AnimationState.LOOP === ACTION) {
      return require(dependencyMap[3]);
    } else {
      return require(dependencyMap[4]);
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (require(dependencyMap[1]).AnimationState.IDLE === ACTION) {
      return require(dependencyMap[5]);
    } else if (require(dependencyMap[1]).AnimationState.LOOP === ACTION) {
      return require(dependencyMap[6]);
    } else {
      return require(dependencyMap[7]);
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (require(dependencyMap[1]).AnimationState.IDLE === ACTION) {
      return require(dependencyMap[8]);
    } else if (require(dependencyMap[1]).AnimationState.LOOP === ACTION) {
      return require(dependencyMap[9]);
    } else {
      return require(dependencyMap[10]);
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (require(dependencyMap[1]).AnimationState.IDLE === ACTION) {
      return require(dependencyMap[11]);
    } else if (require(dependencyMap[1]).AnimationState.LOOP === ACTION) {
      return require(dependencyMap[12]);
    } else {
      return require(dependencyMap[13]);
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (require(dependencyMap[1]).AnimationState.IDLE === ACTION) {
      return require(dependencyMap[14]);
    } else if (require(dependencyMap[1]).AnimationState.LOOP === ACTION) {
      return require(dependencyMap[15]);
    } else {
      return require(dependencyMap[16]);
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (require(dependencyMap[1]).AnimationState.IDLE === ACTION) {
      return require(dependencyMap[17]);
    } else if (require(dependencyMap[1]).AnimationState.LOOP === ACTION) {
      return require(dependencyMap[18]);
    } else {
      return require(dependencyMap[19]);
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (require(dependencyMap[1]).AnimationState.IDLE === ACTION) {
      return require(dependencyMap[20]);
    } else if (require(dependencyMap[1]).AnimationState.LOOP === ACTION) {
      return require(dependencyMap[21]);
    } else {
      return require(dependencyMap[22]);
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (require(dependencyMap[1]).AnimationState.IDLE === ACTION) {
      return require(dependencyMap[23]);
    } else if (require(dependencyMap[1]).AnimationState.LOOP === ACTION) {
      return require(dependencyMap[24]);
    } else {
      return require(dependencyMap[25]);
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
