// Module ID: 11715
// Function ID: 11716
// Name: GiftBoxAnimation
// Dependencies: [19, 4749, 1374, 21, 504, 4942, 11716, 11717, 11718, 11102, 11111, 11108, 11105, 11114, 11117, 11120, 11123, 5748, 2]
// Exports: default

// Module 11715 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5748 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4749 */;

const require = globalThis.__r;

const _mod4942 = tmp(4942);
require = fn;
const PremiumGiftStyles = fn(1374).PremiumGiftStyles;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx");

export default function GiftBoxAnimation(giftStyle) {
  giftStyle = giftStyle.giftStyle;
  initialize;
  [][0] = AccessibilityStore;
  if (null == giftStyle) {
    return null;
  } else {
    const match = _mod4942.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11716"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11716")).with(PremiumGiftStyles.BOX, () => require("module_11717"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11716")).with(PremiumGiftStyles.BOX, () => require("module_11717")).with(PremiumGiftStyles.CUP, () => require("module_11718"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11716")).with(PremiumGiftStyles.BOX, () => require("module_11717")).with(PremiumGiftStyles.CUP, () => require("module_11718")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11102"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11716")).with(PremiumGiftStyles.BOX, () => require("module_11717")).with(PremiumGiftStyles.CUP, () => require("module_11718")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11102")).with(PremiumGiftStyles.COFFEE, () => require("module_11111"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11716")).with(PremiumGiftStyles.BOX, () => require("module_11717")).with(PremiumGiftStyles.CUP, () => require("module_11718")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11102")).with(PremiumGiftStyles.COFFEE, () => require("module_11111")).with(PremiumGiftStyles.CHEST, () => require("module_11108"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11716")).with(PremiumGiftStyles.BOX, () => require("module_11717")).with(PremiumGiftStyles.CUP, () => require("module_11718")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11102")).with(PremiumGiftStyles.COFFEE, () => require("module_11111")).with(PremiumGiftStyles.CHEST, () => require("module_11108")).with(PremiumGiftStyles.CAKE, () => require("module_11105"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11716")).with(PremiumGiftStyles.BOX, () => require("module_11717")).with(PremiumGiftStyles.CUP, () => require("module_11718")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11102")).with(PremiumGiftStyles.COFFEE, () => require("module_11111")).with(PremiumGiftStyles.CHEST, () => require("module_11108")).with(PremiumGiftStyles.CAKE, () => require("module_11105")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11114"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11716")).with(PremiumGiftStyles.BOX, () => require("module_11717")).with(PremiumGiftStyles.CUP, () => require("module_11718")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11102")).with(PremiumGiftStyles.COFFEE, () => require("module_11111")).with(PremiumGiftStyles.CHEST, () => require("module_11108")).with(PremiumGiftStyles.CAKE, () => require("module_11105")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11114")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11117"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11716")).with(PremiumGiftStyles.BOX, () => require("module_11717")).with(PremiumGiftStyles.CUP, () => require("module_11718")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11102")).with(PremiumGiftStyles.COFFEE, () => require("module_11111")).with(PremiumGiftStyles.CHEST, () => require("module_11108")).with(PremiumGiftStyles.CAKE, () => require("module_11105")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11114")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11117")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11120"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11716")).with(PremiumGiftStyles.BOX, () => require("module_11717")).with(PremiumGiftStyles.CUP, () => require("module_11718")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11102")).with(PremiumGiftStyles.COFFEE, () => require("module_11111")).with(PremiumGiftStyles.CHEST, () => require("module_11108")).with(PremiumGiftStyles.CAKE, () => require("module_11105")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11114")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11117")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11120")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11123"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11716")).with(PremiumGiftStyles.BOX, () => require("module_11717")).with(PremiumGiftStyles.CUP, () => require("module_11718")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11102")).with(PremiumGiftStyles.COFFEE, () => require("module_11111")).with(PremiumGiftStyles.CHEST, () => require("module_11108")).with(PremiumGiftStyles.CAKE, () => require("module_11105")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11114")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11117")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11120")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11123")).otherwise(() => require("module_11102")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11716")).with(PremiumGiftStyles.BOX, () => require("module_11717")).with(PremiumGiftStyles.CUP, () => require("module_11718")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11102")).with(PremiumGiftStyles.COFFEE, () => require("module_11111")).with(PremiumGiftStyles.CHEST, () => require("module_11108")).with(PremiumGiftStyles.CAKE, () => require("module_11105")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11114")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11117")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11120")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11123")).otherwise(() => require("module_11102")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};
