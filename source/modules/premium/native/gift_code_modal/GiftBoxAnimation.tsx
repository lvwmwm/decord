// Module ID: 12326
// Function ID: 12327
// Name: GiftBoxAnimation
// Dependencies: [19, 4181, 1876, 21, 589, 4389, 12327, 12328, 12329, 8782, 8791, 8788, 8785, 8794, 8797, 8800, 8803, 5506, 2]
// Exports: default

// Module 12326 (GiftBoxAnimation)
import "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { PremiumGiftStyles } from "GuildFeatures";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("GuildFeatures").fileFinishedImporting("modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx");

export default function GiftBoxAnimation(giftStyle) {
  giftStyle = giftStyle.giftStyle;
  require(589) /* initialize */;
  [][0] = maybeApplyNoTextColorForLightCustomTheme;
  if (null == giftStyle) {
    return null;
  } else {
    const match = tmp(4389).match(giftStyle);
    const str = tmp(4389);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12327));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12327)).with(PremiumGiftStyles.BOX, () => callback(12328));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12327)).with(PremiumGiftStyles.BOX, () => callback(12328)).with(PremiumGiftStyles.CUP, () => callback(12329));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12327)).with(PremiumGiftStyles.BOX, () => callback(12328)).with(PremiumGiftStyles.CUP, () => callback(12329)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(8782));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12327)).with(PremiumGiftStyles.BOX, () => callback(12328)).with(PremiumGiftStyles.CUP, () => callback(12329)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(8782)).with(PremiumGiftStyles.COFFEE, () => callback(8791));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12327)).with(PremiumGiftStyles.BOX, () => callback(12328)).with(PremiumGiftStyles.CUP, () => callback(12329)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(8782)).with(PremiumGiftStyles.COFFEE, () => callback(8791)).with(PremiumGiftStyles.CHEST, () => callback(8788));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12327)).with(PremiumGiftStyles.BOX, () => callback(12328)).with(PremiumGiftStyles.CUP, () => callback(12329)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(8782)).with(PremiumGiftStyles.COFFEE, () => callback(8791)).with(PremiumGiftStyles.CHEST, () => callback(8788)).with(PremiumGiftStyles.CAKE, () => callback(8785));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12327)).with(PremiumGiftStyles.BOX, () => callback(12328)).with(PremiumGiftStyles.CUP, () => callback(12329)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(8782)).with(PremiumGiftStyles.COFFEE, () => callback(8791)).with(PremiumGiftStyles.CHEST, () => callback(8788)).with(PremiumGiftStyles.CAKE, () => callback(8785)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(8794));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12327)).with(PremiumGiftStyles.BOX, () => callback(12328)).with(PremiumGiftStyles.CUP, () => callback(12329)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(8782)).with(PremiumGiftStyles.COFFEE, () => callback(8791)).with(PremiumGiftStyles.CHEST, () => callback(8788)).with(PremiumGiftStyles.CAKE, () => callback(8785)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(8794)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(8797));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12327)).with(PremiumGiftStyles.BOX, () => callback(12328)).with(PremiumGiftStyles.CUP, () => callback(12329)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(8782)).with(PremiumGiftStyles.COFFEE, () => callback(8791)).with(PremiumGiftStyles.CHEST, () => callback(8788)).with(PremiumGiftStyles.CAKE, () => callback(8785)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(8794)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(8797)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(8800));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12327)).with(PremiumGiftStyles.BOX, () => callback(12328)).with(PremiumGiftStyles.CUP, () => callback(12329)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(8782)).with(PremiumGiftStyles.COFFEE, () => callback(8791)).with(PremiumGiftStyles.CHEST, () => callback(8788)).with(PremiumGiftStyles.CAKE, () => callback(8785)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(8794)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(8797)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(8800)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(8803));
    const obj = { source: null, autoPlay: null, style: null };
    obj[0] = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12327)).with(PremiumGiftStyles.BOX, () => callback(12328)).with(PremiumGiftStyles.CUP, () => callback(12329)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(8782)).with(PremiumGiftStyles.COFFEE, () => callback(8791)).with(PremiumGiftStyles.CHEST, () => callback(8788)).with(PremiumGiftStyles.CAKE, () => callback(8785)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(8794)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(8797)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(8800)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(8803)).otherwise(() => callback(8782));
    obj[1] = !tmp4;
    obj[2] = { width: 320, height: 212 };
    return jsx(importDefault(5506), { source: null, autoPlay: null, style: null });
  }
  tmp = require;
};
