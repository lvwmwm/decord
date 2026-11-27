// Module ID: 11955
// Function ID: 11956
// Name: GiftBoxAnimation
// Dependencies: [19, 5044, 1389, 21, 504, 5836, 11956, 11957, 11958, 11324, 11333, 11330, 11327, 11336, 11339, 11342, 11345, 5628, 2]
// Exports: default

// Module 11955 (GiftBoxAnimation)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import PremiumConstants from "PremiumConstants" /* 1389 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5628 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5044 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const merged5 = tmp(5836);
const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx");

export default function GiftBoxAnimation(giftStyle) {
  let useReducedMotion;
  const f101406 = () => require("module_11324");
  giftStyle = giftStyle.giftStyle;
  get_initialized;
  [][0] = AccessibilityStore;
  if (null == giftStyle) {
    return null;
  } else {
    const str = merged5;
    const match = str.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11956"));
    const withResult1 = withResult.with(PremiumGiftStyles.BOX, () => require("module_11957"));
    const withResult2 = withResult1.with(PremiumGiftStyles.CUP, () => require("module_11958"));
    const withResult3 = withResult2.with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11324"));
    const withResult4 = withResult3.with(PremiumGiftStyles.COFFEE, () => require("module_11333"));
    const withResult5 = withResult4.with(PremiumGiftStyles.CHEST, () => require("module_11330"));
    const withResult6 = withResult5.with(PremiumGiftStyles.CAKE, () => require("module_11327"));
    const withResult7 = withResult6.with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11336"));
    const withResult8 = withResult7.with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11339"));
    const withResult9 = withResult8.with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11342"));
    const withResult10 = withResult9.with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11345"));
    withResult10.otherwise(f101406);
    return jsx(LottieAnimationViewDefault, { source: withResult10.otherwise(f101406), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};
