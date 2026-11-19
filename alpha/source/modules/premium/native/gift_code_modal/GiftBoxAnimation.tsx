// Module ID: 11861
// Function ID: 11862
// Name: GiftBoxAnimation
// Dependencies: [19, 4793, 1390, 21, 504, 6261, 11862, 11863, 11864, 9500, 9509, 9506, 9503, 9512, 9515, 9518, 9521, 5377, 2]
// Exports: default

// Module 11861 (GiftBoxAnimation)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import PremiumConstants from "PremiumConstants" /* 1390 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5377 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4793 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const merged5 = tmp(6261);
const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx");

export default function GiftBoxAnimation(giftStyle) {
  let useReducedMotion;
  const f102253 = () => require("module_9500");
  giftStyle = giftStyle.giftStyle;
  get_initialized;
  [][0] = AccessibilityStore;
  if (null == giftStyle) {
    return null;
  } else {
    const str = merged5;
    const match = str.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11862"));
    const withResult1 = withResult.with(PremiumGiftStyles.BOX, () => require("module_11863"));
    const withResult2 = withResult1.with(PremiumGiftStyles.CUP, () => require("module_11864"));
    const withResult3 = withResult2.with(PremiumGiftStyles.STANDARD_BOX, () => require("module_9500"));
    const withResult4 = withResult3.with(PremiumGiftStyles.COFFEE, () => require("module_9509"));
    const withResult5 = withResult4.with(PremiumGiftStyles.CHEST, () => require("module_9506"));
    const withResult6 = withResult5.with(PremiumGiftStyles.CAKE, () => require("module_9503"));
    const withResult7 = withResult6.with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_9512"));
    const withResult8 = withResult7.with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_9515"));
    const withResult9 = withResult8.with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_9518"));
    const withResult10 = withResult9.with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_9521"));
    withResult10.otherwise(f102253);
    return jsx(LottieAnimationViewDefault, { source: withResult10.otherwise(f102253), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};
