// Module ID: 11740
// Function ID: 11741
// Name: GiftBoxAnimation
// Dependencies: [19, 4780, 1374, 21, 504, 4973, 11741, 11742, 11743, 11125, 11134, 11131, 11128, 11137, 11140, 11143, 11146, 5778, 2]
// Exports: default

// Module 11740 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5778 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4780 */;

const require = globalThis.__r;

const _mod4973 = tmp(4973);
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
    const match = _mod4973.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11741"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11741")).with(PremiumGiftStyles.BOX, () => require("module_11742"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11741")).with(PremiumGiftStyles.BOX, () => require("module_11742")).with(PremiumGiftStyles.CUP, () => require("module_11743"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11741")).with(PremiumGiftStyles.BOX, () => require("module_11742")).with(PremiumGiftStyles.CUP, () => require("module_11743")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11125"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11741")).with(PremiumGiftStyles.BOX, () => require("module_11742")).with(PremiumGiftStyles.CUP, () => require("module_11743")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11125")).with(PremiumGiftStyles.COFFEE, () => require("module_11134"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11741")).with(PremiumGiftStyles.BOX, () => require("module_11742")).with(PremiumGiftStyles.CUP, () => require("module_11743")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11125")).with(PremiumGiftStyles.COFFEE, () => require("module_11134")).with(PremiumGiftStyles.CHEST, () => require("module_11131"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11741")).with(PremiumGiftStyles.BOX, () => require("module_11742")).with(PremiumGiftStyles.CUP, () => require("module_11743")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11125")).with(PremiumGiftStyles.COFFEE, () => require("module_11134")).with(PremiumGiftStyles.CHEST, () => require("module_11131")).with(PremiumGiftStyles.CAKE, () => require("module_11128"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11741")).with(PremiumGiftStyles.BOX, () => require("module_11742")).with(PremiumGiftStyles.CUP, () => require("module_11743")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11125")).with(PremiumGiftStyles.COFFEE, () => require("module_11134")).with(PremiumGiftStyles.CHEST, () => require("module_11131")).with(PremiumGiftStyles.CAKE, () => require("module_11128")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11137"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11741")).with(PremiumGiftStyles.BOX, () => require("module_11742")).with(PremiumGiftStyles.CUP, () => require("module_11743")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11125")).with(PremiumGiftStyles.COFFEE, () => require("module_11134")).with(PremiumGiftStyles.CHEST, () => require("module_11131")).with(PremiumGiftStyles.CAKE, () => require("module_11128")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11137")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11140"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11741")).with(PremiumGiftStyles.BOX, () => require("module_11742")).with(PremiumGiftStyles.CUP, () => require("module_11743")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11125")).with(PremiumGiftStyles.COFFEE, () => require("module_11134")).with(PremiumGiftStyles.CHEST, () => require("module_11131")).with(PremiumGiftStyles.CAKE, () => require("module_11128")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11137")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11140")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11143"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11741")).with(PremiumGiftStyles.BOX, () => require("module_11742")).with(PremiumGiftStyles.CUP, () => require("module_11743")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11125")).with(PremiumGiftStyles.COFFEE, () => require("module_11134")).with(PremiumGiftStyles.CHEST, () => require("module_11131")).with(PremiumGiftStyles.CAKE, () => require("module_11128")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11137")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11140")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11143")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11146"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11741")).with(PremiumGiftStyles.BOX, () => require("module_11742")).with(PremiumGiftStyles.CUP, () => require("module_11743")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11125")).with(PremiumGiftStyles.COFFEE, () => require("module_11134")).with(PremiumGiftStyles.CHEST, () => require("module_11131")).with(PremiumGiftStyles.CAKE, () => require("module_11128")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11137")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11140")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11143")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11146")).otherwise(() => require("module_11125")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11741")).with(PremiumGiftStyles.BOX, () => require("module_11742")).with(PremiumGiftStyles.CUP, () => require("module_11743")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11125")).with(PremiumGiftStyles.COFFEE, () => require("module_11134")).with(PremiumGiftStyles.CHEST, () => require("module_11131")).with(PremiumGiftStyles.CAKE, () => require("module_11128")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11137")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11140")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11143")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11146")).otherwise(() => require("module_11125")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};
