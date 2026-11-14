// Module ID: 12392
// Function ID: 12393
// Name: GiftBoxAnimation
// Dependencies: [19, 5307, 1390, 21, 504, 6788, 12393, 12394, 12395, 11755, 11764, 11761, 11758, 11767, 11770, 11773, 11776, 5923, 2]
// Exports: default

// Module 12392 (GiftBoxAnimation)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import PremiumConstants from "PremiumConstants" /* 1390 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5923 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const merged5 = tmp(6788);
const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx");

export default function GiftBoxAnimation(giftStyle) {
  let useReducedMotion;
  const f104959 = () => require("module_11755");
  giftStyle = giftStyle.giftStyle;
  get_initialized;
  [][0] = AccessibilityStore;
  if (null == giftStyle) {
    return null;
  } else {
    const str = merged5;
    const match = str.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12393"));
    const withResult1 = withResult.with(PremiumGiftStyles.BOX, () => require("module_12394"));
    const withResult2 = withResult1.with(PremiumGiftStyles.CUP, () => require("module_12395"));
    const withResult3 = withResult2.with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11755"));
    const withResult4 = withResult3.with(PremiumGiftStyles.COFFEE, () => require("module_11764"));
    const withResult5 = withResult4.with(PremiumGiftStyles.CHEST, () => require("module_11761"));
    const withResult6 = withResult5.with(PremiumGiftStyles.CAKE, () => require("module_11758"));
    const withResult7 = withResult6.with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11767"));
    const withResult8 = withResult7.with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11770"));
    const withResult9 = withResult8.with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11773"));
    const withResult10 = withResult9.with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11776"));
    withResult10.otherwise(f104959);
    return jsx(LottieAnimationViewDefault, { source: withResult10.otherwise(f104959), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};
