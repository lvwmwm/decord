// Module ID: 10992
// Function ID: 10993
// Name: GiftBoxAnimation
// Dependencies: [19, 4825, 1374, 21, 504, 5021, 10993, 10994, 10995, 10294, 10303, 10300, 10297, 10306, 10309, 10312, 10315, 5841, 2]
// Exports: default

// Module 10992 (GiftBoxAnimation)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5841 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const merged5 = tmp(5021);
const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx");

export default function GiftBoxAnimation(giftStyle) {
  let useReducedMotion;
  const f92493 = () => require("module_10294");
  giftStyle = giftStyle.giftStyle;
  get_initialized;
  [][0] = AccessibilityStore;
  if (null == giftStyle) {
    return null;
  } else {
    const str = merged5;
    const match = str.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_10993"));
    const withResult1 = withResult.with(PremiumGiftStyles.BOX, () => require("module_10994"));
    const withResult2 = withResult1.with(PremiumGiftStyles.CUP, () => require("module_10995"));
    const withResult3 = withResult2.with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10294"));
    const withResult4 = withResult3.with(PremiumGiftStyles.COFFEE, () => require("module_10303"));
    const withResult5 = withResult4.with(PremiumGiftStyles.CHEST, () => require("module_10300"));
    const withResult6 = withResult5.with(PremiumGiftStyles.CAKE, () => require("module_10297"));
    const withResult7 = withResult6.with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10306"));
    const withResult8 = withResult7.with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10309"));
    const withResult9 = withResult8.with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10312"));
    const withResult10 = withResult9.with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10315"));
    withResult10.otherwise(f92493);
    return jsx(LottieAnimationViewDefault, { source: withResult10.otherwise(f92493), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};
