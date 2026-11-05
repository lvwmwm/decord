// Module ID: 11705
// Function ID: 11706
// Name: GiftBoxAnimation
// Dependencies: [19, 5144, 1387, 21, 504, 6694, 11706, 11707, 11708, 10885, 10894, 10891, 10888, 10897, 10900, 10903, 10906, 5757, 2]
// Exports: default

// Module 11705 (GiftBoxAnimation)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5757 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5144 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const merged5 = tmp(6694);
const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx");

export default function GiftBoxAnimation(giftStyle) {
  let useReducedMotion;
  const f100632 = () => require("module_10885");
  giftStyle = giftStyle.giftStyle;
  get_initialized;
  [][0] = AccessibilityStore;
  if (null == giftStyle) {
    return null;
  } else {
    const str = merged5;
    const match = str.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11706"));
    const withResult1 = withResult.with(PremiumGiftStyles.BOX, () => require("module_11707"));
    const withResult2 = withResult1.with(PremiumGiftStyles.CUP, () => require("module_11708"));
    const withResult3 = withResult2.with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10885"));
    const withResult4 = withResult3.with(PremiumGiftStyles.COFFEE, () => require("module_10894"));
    const withResult5 = withResult4.with(PremiumGiftStyles.CHEST, () => require("module_10891"));
    const withResult6 = withResult5.with(PremiumGiftStyles.CAKE, () => require("module_10888"));
    const withResult7 = withResult6.with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10897"));
    const withResult8 = withResult7.with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10900"));
    const withResult9 = withResult8.with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10903"));
    const withResult10 = withResult9.with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10906"));
    withResult10.otherwise(f100632);
    return jsx(LottieAnimationViewDefault, { source: withResult10.otherwise(f100632), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};
