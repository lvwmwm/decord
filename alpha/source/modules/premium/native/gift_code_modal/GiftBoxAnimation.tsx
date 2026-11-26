// Module ID: 11947
// Function ID: 11948
// Name: GiftBoxAnimation
// Dependencies: [19, 5044, 1389, 21, 504, 5836, 11948, 11949, 11950, 11323, 11332, 11329, 11326, 11335, 11338, 11341, 11344, 5628, 2]
// Exports: default

// Module 11947 (GiftBoxAnimation)
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
  const f101165 = () => require("module_11323");
  giftStyle = giftStyle.giftStyle;
  get_initialized;
  [][0] = AccessibilityStore;
  if (null == giftStyle) {
    return null;
  } else {
    const str = merged5;
    const match = str.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11948"));
    const withResult1 = withResult.with(PremiumGiftStyles.BOX, () => require("module_11949"));
    const withResult2 = withResult1.with(PremiumGiftStyles.CUP, () => require("module_11950"));
    const withResult3 = withResult2.with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11323"));
    const withResult4 = withResult3.with(PremiumGiftStyles.COFFEE, () => require("module_11332"));
    const withResult5 = withResult4.with(PremiumGiftStyles.CHEST, () => require("module_11329"));
    const withResult6 = withResult5.with(PremiumGiftStyles.CAKE, () => require("module_11326"));
    const withResult7 = withResult6.with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11335"));
    const withResult8 = withResult7.with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11338"));
    const withResult9 = withResult8.with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11341"));
    const withResult10 = withResult9.with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11344"));
    withResult10.otherwise(f101165);
    return jsx(LottieAnimationViewDefault, { source: withResult10.otherwise(f101165), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};
