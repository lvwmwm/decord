// Module ID: 11585
// Function ID: 11586
// Name: GiftBoxAnimation
// Dependencies: [19, 4628, 1373, 21, 504, 4821, 11586, 11587, 11588, 10966, 10975, 10972, 10969, 10978, 10981, 10984, 10987, 5610, 2]
// Exports: default

// Module 11585 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5610 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4628 */;

const require = globalThis.__r;

const _mod4821 = tmp(4821);
require = fn;
const PremiumGiftStyles = fn(1373).PremiumGiftStyles;
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
    const match = _mod4821.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11586"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11586")).with(PremiumGiftStyles.BOX, () => require("module_11587"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11586")).with(PremiumGiftStyles.BOX, () => require("module_11587")).with(PremiumGiftStyles.CUP, () => require("module_11588"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11586")).with(PremiumGiftStyles.BOX, () => require("module_11587")).with(PremiumGiftStyles.CUP, () => require("module_11588")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10966"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11586")).with(PremiumGiftStyles.BOX, () => require("module_11587")).with(PremiumGiftStyles.CUP, () => require("module_11588")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10966")).with(PremiumGiftStyles.COFFEE, () => require("module_10975"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11586")).with(PremiumGiftStyles.BOX, () => require("module_11587")).with(PremiumGiftStyles.CUP, () => require("module_11588")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10966")).with(PremiumGiftStyles.COFFEE, () => require("module_10975")).with(PremiumGiftStyles.CHEST, () => require("module_10972"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11586")).with(PremiumGiftStyles.BOX, () => require("module_11587")).with(PremiumGiftStyles.CUP, () => require("module_11588")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10966")).with(PremiumGiftStyles.COFFEE, () => require("module_10975")).with(PremiumGiftStyles.CHEST, () => require("module_10972")).with(PremiumGiftStyles.CAKE, () => require("module_10969"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11586")).with(PremiumGiftStyles.BOX, () => require("module_11587")).with(PremiumGiftStyles.CUP, () => require("module_11588")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10966")).with(PremiumGiftStyles.COFFEE, () => require("module_10975")).with(PremiumGiftStyles.CHEST, () => require("module_10972")).with(PremiumGiftStyles.CAKE, () => require("module_10969")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10978"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11586")).with(PremiumGiftStyles.BOX, () => require("module_11587")).with(PremiumGiftStyles.CUP, () => require("module_11588")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10966")).with(PremiumGiftStyles.COFFEE, () => require("module_10975")).with(PremiumGiftStyles.CHEST, () => require("module_10972")).with(PremiumGiftStyles.CAKE, () => require("module_10969")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10978")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10981"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11586")).with(PremiumGiftStyles.BOX, () => require("module_11587")).with(PremiumGiftStyles.CUP, () => require("module_11588")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10966")).with(PremiumGiftStyles.COFFEE, () => require("module_10975")).with(PremiumGiftStyles.CHEST, () => require("module_10972")).with(PremiumGiftStyles.CAKE, () => require("module_10969")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10978")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10981")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10984"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11586")).with(PremiumGiftStyles.BOX, () => require("module_11587")).with(PremiumGiftStyles.CUP, () => require("module_11588")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10966")).with(PremiumGiftStyles.COFFEE, () => require("module_10975")).with(PremiumGiftStyles.CHEST, () => require("module_10972")).with(PremiumGiftStyles.CAKE, () => require("module_10969")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10978")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10981")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10984")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10987"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11586")).with(PremiumGiftStyles.BOX, () => require("module_11587")).with(PremiumGiftStyles.CUP, () => require("module_11588")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10966")).with(PremiumGiftStyles.COFFEE, () => require("module_10975")).with(PremiumGiftStyles.CHEST, () => require("module_10972")).with(PremiumGiftStyles.CAKE, () => require("module_10969")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10978")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10981")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10984")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10987")).otherwise(() => require("module_10966")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11586")).with(PremiumGiftStyles.BOX, () => require("module_11587")).with(PremiumGiftStyles.CUP, () => require("module_11588")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10966")).with(PremiumGiftStyles.COFFEE, () => require("module_10975")).with(PremiumGiftStyles.CHEST, () => require("module_10972")).with(PremiumGiftStyles.CAKE, () => require("module_10969")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10978")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10981")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10984")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10987")).otherwise(() => require("module_10966")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};
