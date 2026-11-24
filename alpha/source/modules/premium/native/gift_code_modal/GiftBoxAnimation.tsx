// Module ID: 11800
// Function ID: 11801
// Name: GiftBoxAnimation
// Dependencies: [19, 4918, 1388, 21, 504, 5710, 11801, 11802, 11803, 11178, 11187, 11184, 11181, 11190, 11193, 11196, 11199, 5502, 2]
// Exports: default

// Module 11800 (GiftBoxAnimation)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import PremiumConstants from "PremiumConstants" /* 1388 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5502 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4918 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const merged5 = tmp(5710);
const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx");

export default function GiftBoxAnimation(giftStyle) {
  let useReducedMotion;
  const f100506 = () => require("module_11178");
  giftStyle = giftStyle.giftStyle;
  get_initialized;
  [][0] = AccessibilityStore;
  if (null == giftStyle) {
    return null;
  } else {
    const str = merged5;
    const match = str.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11801"));
    const withResult1 = withResult.with(PremiumGiftStyles.BOX, () => require("module_11802"));
    const withResult2 = withResult1.with(PremiumGiftStyles.CUP, () => require("module_11803"));
    const withResult3 = withResult2.with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11178"));
    const withResult4 = withResult3.with(PremiumGiftStyles.COFFEE, () => require("module_11187"));
    const withResult5 = withResult4.with(PremiumGiftStyles.CHEST, () => require("module_11184"));
    const withResult6 = withResult5.with(PremiumGiftStyles.CAKE, () => require("module_11181"));
    const withResult7 = withResult6.with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11190"));
    const withResult8 = withResult7.with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11193"));
    const withResult9 = withResult8.with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11196"));
    const withResult10 = withResult9.with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11199"));
    withResult10.otherwise(f100506);
    return jsx(LottieAnimationViewDefault, { source: withResult10.otherwise(f100506), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};
