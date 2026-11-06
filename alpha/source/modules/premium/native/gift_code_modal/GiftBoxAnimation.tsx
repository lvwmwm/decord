// Module ID: 11671
// Function ID: 11672
// Name: GiftBoxAnimation
// Dependencies: [19, 5171, 1387, 21, 504, 6636, 11672, 11673, 11674, 10837, 10846, 10843, 10840, 10849, 10852, 10855, 10858, 5775, 2]
// Exports: default

// Module 11671 (GiftBoxAnimation)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5775 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const merged5 = tmp(6636);
const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx");

export default function GiftBoxAnimation(giftStyle) {
  let useReducedMotion;
  const f100790 = () => require("module_10837");
  giftStyle = giftStyle.giftStyle;
  get_initialized;
  [][0] = AccessibilityStore;
  if (null == giftStyle) {
    return null;
  } else {
    const str = merged5;
    const match = str.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11672"));
    const withResult1 = withResult.with(PremiumGiftStyles.BOX, () => require("module_11673"));
    const withResult2 = withResult1.with(PremiumGiftStyles.CUP, () => require("module_11674"));
    const withResult3 = withResult2.with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10837"));
    const withResult4 = withResult3.with(PremiumGiftStyles.COFFEE, () => require("module_10846"));
    const withResult5 = withResult4.with(PremiumGiftStyles.CHEST, () => require("module_10843"));
    const withResult6 = withResult5.with(PremiumGiftStyles.CAKE, () => require("module_10840"));
    const withResult7 = withResult6.with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10849"));
    const withResult8 = withResult7.with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10852"));
    const withResult9 = withResult8.with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10855"));
    const withResult10 = withResult9.with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10858"));
    withResult10.otherwise(f100790);
    return jsx(LottieAnimationViewDefault, { source: withResult10.otherwise(f100790), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};
