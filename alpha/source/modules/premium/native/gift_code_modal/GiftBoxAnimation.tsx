// Module ID: 11923
// Function ID: 11924
// Name: GiftBoxAnimation
// Dependencies: [19, 4914, 1388, 21, 504, 6382, 11924, 11925, 11926, 9620, 9629, 9626, 9623, 9632, 9635, 9638, 9641, 5498, 2]
// Exports: default

// Module 11923 (GiftBoxAnimation)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import PremiumConstants from "PremiumConstants" /* 1388 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5498 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4914 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const merged5 = tmp(6382);
const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx");

export default function GiftBoxAnimation(giftStyle) {
  let useReducedMotion;
  const f100914 = () => require("module_9620");
  giftStyle = giftStyle.giftStyle;
  get_initialized;
  [][0] = AccessibilityStore;
  if (null == giftStyle) {
    return null;
  } else {
    const str = merged5;
    const match = str.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11924"));
    const withResult1 = withResult.with(PremiumGiftStyles.BOX, () => require("module_11925"));
    const withResult2 = withResult1.with(PremiumGiftStyles.CUP, () => require("module_11926"));
    const withResult3 = withResult2.with(PremiumGiftStyles.STANDARD_BOX, () => require("module_9620"));
    const withResult4 = withResult3.with(PremiumGiftStyles.COFFEE, () => require("module_9629"));
    const withResult5 = withResult4.with(PremiumGiftStyles.CHEST, () => require("module_9626"));
    const withResult6 = withResult5.with(PremiumGiftStyles.CAKE, () => require("module_9623"));
    const withResult7 = withResult6.with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_9632"));
    const withResult8 = withResult7.with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_9635"));
    const withResult9 = withResult8.with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_9638"));
    const withResult10 = withResult9.with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_9641"));
    withResult10.otherwise(f100914);
    return jsx(LottieAnimationViewDefault, { source: withResult10.otherwise(f100914), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};
