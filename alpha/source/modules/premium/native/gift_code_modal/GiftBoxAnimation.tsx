// Module ID: 12303
// Function ID: 12304
// Name: GiftBoxAnimation
// Dependencies: [19, 5244, 1387, 21, 504, 6725, 12304, 12305, 12306, 11695, 11704, 11701, 11698, 11707, 11710, 11713, 11716, 5860, 2]
// Exports: default

// Module 12303 (GiftBoxAnimation)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5860 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const merged5 = tmp(6725);
const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx");

export default function GiftBoxAnimation(giftStyle) {
  let useReducedMotion;
  const f103750 = () => require("module_11695");
  giftStyle = giftStyle.giftStyle;
  get_initialized;
  [][0] = AccessibilityStore;
  if (null == giftStyle) {
    return null;
  } else {
    const str = merged5;
    const match = str.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12304"));
    const withResult1 = withResult.with(PremiumGiftStyles.BOX, () => require("module_12305"));
    const withResult2 = withResult1.with(PremiumGiftStyles.CUP, () => require("module_12306"));
    const withResult3 = withResult2.with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11695"));
    const withResult4 = withResult3.with(PremiumGiftStyles.COFFEE, () => require("module_11704"));
    const withResult5 = withResult4.with(PremiumGiftStyles.CHEST, () => require("module_11701"));
    const withResult6 = withResult5.with(PremiumGiftStyles.CAKE, () => require("module_11698"));
    const withResult7 = withResult6.with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11707"));
    const withResult8 = withResult7.with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11710"));
    const withResult9 = withResult8.with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11713"));
    const withResult10 = withResult9.with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11716"));
    withResult10.otherwise(f103750);
    return jsx(LottieAnimationViewDefault, { source: withResult10.otherwise(f103750), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};
