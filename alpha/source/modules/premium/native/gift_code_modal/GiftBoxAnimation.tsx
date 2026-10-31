// Module ID: 11507
// Function ID: 11508
// Name: GiftBoxAnimation
// Dependencies: [19, 5015, 1385, 21, 504, 6556, 11508, 11509, 11510, 10701, 10710, 10707, 10704, 10713, 10716, 10719, 10722, 5618, 2]
// Exports: default

// Module 11507 (GiftBoxAnimation)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import PremiumConstants from "PremiumConstants" /* 1385 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5618 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const merged5 = tmp(6556);
const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx");

export default function GiftBoxAnimation(giftStyle) {
  let useReducedMotion;
  const f99454 = () => require("module_10701");
  giftStyle = giftStyle.giftStyle;
  get_initialized;
  [][0] = AccessibilityStore;
  if (null == giftStyle) {
    return null;
  } else {
    const str = merged5;
    const match = str.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11508"));
    const withResult1 = withResult.with(PremiumGiftStyles.BOX, () => require("module_11509"));
    const withResult2 = withResult1.with(PremiumGiftStyles.CUP, () => require("module_11510"));
    const withResult3 = withResult2.with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10701"));
    const withResult4 = withResult3.with(PremiumGiftStyles.COFFEE, () => require("module_10710"));
    const withResult5 = withResult4.with(PremiumGiftStyles.CHEST, () => require("module_10707"));
    const withResult6 = withResult5.with(PremiumGiftStyles.CAKE, () => require("module_10704"));
    const withResult7 = withResult6.with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10713"));
    const withResult8 = withResult7.with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10716"));
    const withResult9 = withResult8.with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10719"));
    const withResult10 = withResult9.with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10722"));
    withResult10.otherwise(f99454);
    return jsx(LottieAnimationViewDefault, { source: withResult10.otherwise(f99454), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};
