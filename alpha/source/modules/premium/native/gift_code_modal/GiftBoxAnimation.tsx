// Module ID: 11645
// Function ID: 11646
// Name: GiftBoxAnimation
// Dependencies: [19, 5142, 1387, 21, 504, 6676, 11646, 11647, 11648, 10831, 10840, 10837, 10834, 10843, 10846, 10849, 10852, 5741, 2]
// Exports: default

// Module 11645 (GiftBoxAnimation)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5741 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const merged5 = tmp(6676);
const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx");

export default function GiftBoxAnimation(giftStyle) {
  let useReducedMotion;
  const f99693 = () => require("module_10831");
  giftStyle = giftStyle.giftStyle;
  get_initialized;
  [][0] = AccessibilityStore;
  if (null == giftStyle) {
    return null;
  } else {
    const str = merged5;
    const match = str.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11646"));
    const withResult1 = withResult.with(PremiumGiftStyles.BOX, () => require("module_11647"));
    const withResult2 = withResult1.with(PremiumGiftStyles.CUP, () => require("module_11648"));
    const withResult3 = withResult2.with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10831"));
    const withResult4 = withResult3.with(PremiumGiftStyles.COFFEE, () => require("module_10840"));
    const withResult5 = withResult4.with(PremiumGiftStyles.CHEST, () => require("module_10837"));
    const withResult6 = withResult5.with(PremiumGiftStyles.CAKE, () => require("module_10834"));
    const withResult7 = withResult6.with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10843"));
    const withResult8 = withResult7.with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10846"));
    const withResult9 = withResult8.with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10849"));
    const withResult10 = withResult9.with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10852"));
    withResult10.otherwise(f99693);
    return jsx(LottieAnimationViewDefault, { source: withResult10.otherwise(f99693), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};
