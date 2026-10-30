// Module ID: 11473
// Function ID: 11474
// Name: GiftBoxAnimation
// Dependencies: [19, 5010, 1386, 21, 504, 6550, 11474, 11475, 11476, 10681, 10690, 10687, 10684, 10693, 10696, 10699, 10702, 5613, 2]
// Exports: default

// Module 11473 (GiftBoxAnimation)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import PremiumConstants from "PremiumConstants" /* 1386 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5613 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const merged5 = tmp(6550);
const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx");

export default function GiftBoxAnimation(giftStyle) {
  let useReducedMotion;
  const f99202 = () => require("module_10681");
  giftStyle = giftStyle.giftStyle;
  get_initialized;
  [][0] = AccessibilityStore;
  if (null == giftStyle) {
    return null;
  } else {
    const str = merged5;
    const match = str.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11474"));
    const withResult1 = withResult.with(PremiumGiftStyles.BOX, () => require("module_11475"));
    const withResult2 = withResult1.with(PremiumGiftStyles.CUP, () => require("module_11476"));
    const withResult3 = withResult2.with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10681"));
    const withResult4 = withResult3.with(PremiumGiftStyles.COFFEE, () => require("module_10690"));
    const withResult5 = withResult4.with(PremiumGiftStyles.CHEST, () => require("module_10687"));
    const withResult6 = withResult5.with(PremiumGiftStyles.CAKE, () => require("module_10684"));
    const withResult7 = withResult6.with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10693"));
    const withResult8 = withResult7.with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10696"));
    const withResult9 = withResult8.with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10699"));
    const withResult10 = withResult9.with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10702"));
    withResult10.otherwise(f99202);
    return jsx(LottieAnimationViewDefault, { source: withResult10.otherwise(f99202), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};
