// Module ID: 11653
// Function ID: 11654
// Name: GiftBoxAnimation
// Dependencies: [19, 5141, 1387, 21, 504, 6611, 11654, 11655, 11656, 10820, 10829, 10826, 10823, 10832, 10835, 10838, 10841, 5745, 2]
// Exports: default

// Module 11653 (GiftBoxAnimation)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5745 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const merged5 = tmp(6611);
const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx");

export default function GiftBoxAnimation(giftStyle) {
  let useReducedMotion;
  const f101180 = () => require("module_10820");
  giftStyle = giftStyle.giftStyle;
  get_initialized;
  [][0] = AccessibilityStore;
  if (null == giftStyle) {
    return null;
  } else {
    const str = merged5;
    const match = str.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11654"));
    const withResult1 = withResult.with(PremiumGiftStyles.BOX, () => require("module_11655"));
    const withResult2 = withResult1.with(PremiumGiftStyles.CUP, () => require("module_11656"));
    const withResult3 = withResult2.with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10820"));
    const withResult4 = withResult3.with(PremiumGiftStyles.COFFEE, () => require("module_10829"));
    const withResult5 = withResult4.with(PremiumGiftStyles.CHEST, () => require("module_10826"));
    const withResult6 = withResult5.with(PremiumGiftStyles.CAKE, () => require("module_10823"));
    const withResult7 = withResult6.with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10832"));
    const withResult8 = withResult7.with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10835"));
    const withResult9 = withResult8.with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10838"));
    const withResult10 = withResult9.with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10841"));
    withResult10.otherwise(f101180);
    return jsx(LottieAnimationViewDefault, { source: withResult10.otherwise(f101180), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};
