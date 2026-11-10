// Module ID: 11662
// Function ID: 11663
// Name: GiftBoxAnimation
// Dependencies: [19, 5143, 1387, 21, 504, 6613, 11663, 11664, 11665, 10829, 10838, 10835, 10832, 10841, 10844, 10847, 10850, 5747, 2]
// Exports: default

// Module 11662 (GiftBoxAnimation)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5747 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5143 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const merged5 = tmp(6613);
const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx");

export default function GiftBoxAnimation(giftStyle) {
  let useReducedMotion;
  const f101317 = () => require("module_10829");
  giftStyle = giftStyle.giftStyle;
  get_initialized;
  [][0] = AccessibilityStore;
  if (null == giftStyle) {
    return null;
  } else {
    const str = merged5;
    const match = str.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11663"));
    const withResult1 = withResult.with(PremiumGiftStyles.BOX, () => require("module_11664"));
    const withResult2 = withResult1.with(PremiumGiftStyles.CUP, () => require("module_11665"));
    const withResult3 = withResult2.with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10829"));
    const withResult4 = withResult3.with(PremiumGiftStyles.COFFEE, () => require("module_10838"));
    const withResult5 = withResult4.with(PremiumGiftStyles.CHEST, () => require("module_10835"));
    const withResult6 = withResult5.with(PremiumGiftStyles.CAKE, () => require("module_10832"));
    const withResult7 = withResult6.with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10841"));
    const withResult8 = withResult7.with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10844"));
    const withResult9 = withResult8.with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10847"));
    const withResult10 = withResult9.with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10850"));
    withResult10.otherwise(f101317);
    return jsx(LottieAnimationViewDefault, { source: withResult10.otherwise(f101317), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};
