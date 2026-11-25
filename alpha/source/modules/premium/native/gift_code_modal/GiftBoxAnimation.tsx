// Module ID: 11899
// Function ID: 11900
// Name: GiftBoxAnimation
// Dependencies: [19, 5013, 1388, 21, 504, 5805, 11900, 11901, 11902, 11277, 11286, 11283, 11280, 11289, 11292, 11295, 11298, 5597, 2]
// Exports: default

// Module 11899 (GiftBoxAnimation)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import PremiumConstants from "PremiumConstants" /* 1388 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5597 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5013 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const merged5 = tmp(5805);
const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx");

export default function GiftBoxAnimation(giftStyle) {
  let useReducedMotion;
  const f100850 = () => require("module_11277");
  giftStyle = giftStyle.giftStyle;
  get_initialized;
  [][0] = AccessibilityStore;
  if (null == giftStyle) {
    return null;
  } else {
    const str = merged5;
    const match = str.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11900"));
    const withResult1 = withResult.with(PremiumGiftStyles.BOX, () => require("module_11901"));
    const withResult2 = withResult1.with(PremiumGiftStyles.CUP, () => require("module_11902"));
    const withResult3 = withResult2.with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11277"));
    const withResult4 = withResult3.with(PremiumGiftStyles.COFFEE, () => require("module_11286"));
    const withResult5 = withResult4.with(PremiumGiftStyles.CHEST, () => require("module_11283"));
    const withResult6 = withResult5.with(PremiumGiftStyles.CAKE, () => require("module_11280"));
    const withResult7 = withResult6.with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11289"));
    const withResult8 = withResult7.with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11292"));
    const withResult9 = withResult8.with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11295"));
    const withResult10 = withResult9.with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11298"));
    withResult10.otherwise(f100850);
    return jsx(LottieAnimationViewDefault, { source: withResult10.otherwise(f100850), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};
