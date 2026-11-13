// Module ID: 11685
// Function ID: 11686
// Name: GiftBoxAnimation
// Dependencies: [19, 5171, 1387, 21, 504, 6643, 11686, 11687, 11688, 10852, 10861, 10858, 10855, 10864, 10867, 10870, 10873, 5777, 2]
// Exports: default

// Module 11685 (GiftBoxAnimation)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5777 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const merged5 = tmp(6643);
const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx");

export default function GiftBoxAnimation(giftStyle) {
  let useReducedMotion;
  const f101306 = () => require("module_10852");
  giftStyle = giftStyle.giftStyle;
  get_initialized;
  [][0] = AccessibilityStore;
  if (null == giftStyle) {
    return null;
  } else {
    const str = merged5;
    const match = str.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11686"));
    const withResult1 = withResult.with(PremiumGiftStyles.BOX, () => require("module_11687"));
    const withResult2 = withResult1.with(PremiumGiftStyles.CUP, () => require("module_11688"));
    const withResult3 = withResult2.with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10852"));
    const withResult4 = withResult3.with(PremiumGiftStyles.COFFEE, () => require("module_10861"));
    const withResult5 = withResult4.with(PremiumGiftStyles.CHEST, () => require("module_10858"));
    const withResult6 = withResult5.with(PremiumGiftStyles.CAKE, () => require("module_10855"));
    const withResult7 = withResult6.with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10864"));
    const withResult8 = withResult7.with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10867"));
    const withResult9 = withResult8.with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10870"));
    const withResult10 = withResult9.with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10873"));
    withResult10.otherwise(f101306);
    return jsx(LottieAnimationViewDefault, { source: withResult10.otherwise(f101306), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};
