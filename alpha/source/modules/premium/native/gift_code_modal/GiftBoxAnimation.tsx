// Module ID: 11697
// Function ID: 11698
// Name: GiftBoxAnimation
// Dependencies: [19, 5142, 1387, 21, 504, 6691, 11698, 11699, 11700, 10879, 10888, 10885, 10882, 10891, 10894, 10897, 10900, 5755, 2]
// Exports: default

// Module 11697 (GiftBoxAnimation)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5755 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const merged5 = tmp(6691);
const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx");

export default function GiftBoxAnimation(giftStyle) {
  let useReducedMotion;
  const f100463 = () => require("module_10879");
  giftStyle = giftStyle.giftStyle;
  get_initialized;
  [][0] = AccessibilityStore;
  if (null == giftStyle) {
    return null;
  } else {
    const str = merged5;
    const match = str.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11698"));
    const withResult1 = withResult.with(PremiumGiftStyles.BOX, () => require("module_11699"));
    const withResult2 = withResult1.with(PremiumGiftStyles.CUP, () => require("module_11700"));
    const withResult3 = withResult2.with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10879"));
    const withResult4 = withResult3.with(PremiumGiftStyles.COFFEE, () => require("module_10888"));
    const withResult5 = withResult4.with(PremiumGiftStyles.CHEST, () => require("module_10885"));
    const withResult6 = withResult5.with(PremiumGiftStyles.CAKE, () => require("module_10882"));
    const withResult7 = withResult6.with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10891"));
    const withResult8 = withResult7.with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10894"));
    const withResult9 = withResult8.with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10897"));
    const withResult10 = withResult9.with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10900"));
    withResult10.otherwise(f100463);
    return jsx(LottieAnimationViewDefault, { source: withResult10.otherwise(f100463), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};
