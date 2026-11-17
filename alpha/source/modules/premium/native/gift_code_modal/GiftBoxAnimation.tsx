// Module ID: 12598
// Function ID: 12599
// Name: GiftBoxAnimation
// Dependencies: [19, 5311, 1390, 21, 504, 6786, 12599, 12600, 12601, 10240, 10249, 10246, 10243, 10252, 10255, 10258, 10261, 5917, 2]
// Exports: default

// Module 12598 (GiftBoxAnimation)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import PremiumConstants from "PremiumConstants" /* 1390 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5917 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5311 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const merged5 = tmp(6786);
const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx");

export default function GiftBoxAnimation(giftStyle) {
  let useReducedMotion;
  const f105577 = () => require("module_10240");
  giftStyle = giftStyle.giftStyle;
  get_initialized;
  [][0] = AccessibilityStore;
  if (null == giftStyle) {
    return null;
  } else {
    const str = merged5;
    const match = str.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12599"));
    const withResult1 = withResult.with(PremiumGiftStyles.BOX, () => require("module_12600"));
    const withResult2 = withResult1.with(PremiumGiftStyles.CUP, () => require("module_12601"));
    const withResult3 = withResult2.with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10240"));
    const withResult4 = withResult3.with(PremiumGiftStyles.COFFEE, () => require("module_10249"));
    const withResult5 = withResult4.with(PremiumGiftStyles.CHEST, () => require("module_10246"));
    const withResult6 = withResult5.with(PremiumGiftStyles.CAKE, () => require("module_10243"));
    const withResult7 = withResult6.with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10252"));
    const withResult8 = withResult7.with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10255"));
    const withResult9 = withResult8.with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10258"));
    const withResult10 = withResult9.with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10261"));
    withResult10.otherwise(f105577);
    return jsx(LottieAnimationViewDefault, { source: withResult10.otherwise(f105577), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};
