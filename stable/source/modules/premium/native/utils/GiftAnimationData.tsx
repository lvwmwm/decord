// Module ID: 10849
// Function ID: 10850
// Name: GiftAnimationData
// Dependencies: [1387, 8652, 10850, 10851, 10852, 10853, 10854, 10855, 10856, 10857, 10858, 10859, 10860, 10861, 10862, 10863, 10864, 10865, 10866, 10867, 10868, 10869, 10870, 10871, 10872, 10873, 2]
// Exports: getGiftAnimationData, getLottieType

// Module 10849 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1387 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8652 */;
import _mod10850 from "module_10850" /* 10850 */;
import _mod10851 from "module_10851" /* 10851 */;
import _mod10852 from "module_10852" /* 10852 */;
import _mod10853 from "module_10853" /* 10853 */;
import _mod10854 from "module_10854" /* 10854 */;
import _mod10855 from "module_10855" /* 10855 */;
import _mod10856 from "module_10856" /* 10856 */;
import _mod10857 from "module_10857" /* 10857 */;
import _mod10858 from "module_10858" /* 10858 */;
import _mod10859 from "module_10859" /* 10859 */;
import _mod10860 from "module_10860" /* 10860 */;
import _mod10861 from "module_10861" /* 10861 */;
import _mod10862 from "module_10862" /* 10862 */;
import _mod10863 from "module_10863" /* 10863 */;
import _mod10864 from "module_10864" /* 10864 */;
import _mod10865 from "module_10865" /* 10865 */;
import _mod10866 from "module_10866" /* 10866 */;
import _mod10867 from "module_10867" /* 10867 */;
import _mod10868 from "module_10868" /* 10868 */;
import _mod10869 from "module_10869" /* 10869 */;
import _mod10870 from "module_10870" /* 10870 */;
import _mod10871 from "module_10871" /* 10871 */;
import _mod10872 from "module_10872" /* 10872 */;
import _mod10873 from "module_10873" /* 10873 */;
import size from "module_2" /* 2 */;

const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const LottieType = { JSON: 0, [0]: "JSON", LOTTIE: 1, [1]: "LOTTIE" };
const result = size.fileFinishedImporting("modules/premium/native/utils/GiftAnimationData.tsx");

export { LottieType };
export function getLottieType(giftStyle) {
  let _JSON;
  if (giftStyle === PremiumGiftStyles.NITROWEEN_STANDARD) {
    _JSON = obj.LOTTIE;
  } else {
    _JSON = obj.JSON;
  }
  return _JSON;
}
export function getGiftAnimationData(giftStyle, ACTION) {
  if (PremiumGiftStyles.STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10850;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10851;
    } else {
      return _mod10852;
    }
  } else if (PremiumGiftStyles.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10853;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10854;
    } else {
      return _mod10855;
    }
  } else if (PremiumGiftStyles.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10856;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10857;
    } else {
      return _mod10858;
    }
  } else if (PremiumGiftStyles.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10859;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10860;
    } else {
      return _mod10861;
    }
  } else if (PremiumGiftStyles.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10862;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10863;
    } else {
      return _mod10864;
    }
  } else if (PremiumGiftStyles.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10865;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10866;
    } else {
      return _mod10867;
    }
  } else if (PremiumGiftStyles.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10868;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10869;
    } else {
      return _mod10870;
    }
  } else if (PremiumGiftStyles.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return _mod10871;
    } else if (PremiumGiftingUtils.AnimationState.LOOP === ACTION) {
      return _mod10872;
    } else {
      return _mod10873;
    }
  } else {
    if (PremiumGiftStyles.SNOWGLOBE !== giftStyle) {
      if (PremiumGiftStyles.BOX !== giftStyle) {
        const CUP = tmp.CUP;
      }
    }
    const _Error = Error;
    throw Error();
  }
}
