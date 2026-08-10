// Module ID: 10427
// Function ID: 10428
// Name: GiftBoxAnimation
// Dependencies: [19, 4295, 1905, 21, 589, 4503, 10428, 10429, 10430, 9589, 9598, 9595, 9592, 9601, 9604, 9607, 9610, 5719, 2]
// Exports: default

// Module 10427 (GiftBoxAnimation)
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
    const match = tmp(4503).match(giftStyle);
    const str = tmp(4503);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10428));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10428)).with(PremiumGiftStyles.BOX, () => callback(10429));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10428)).with(PremiumGiftStyles.BOX, () => callback(10429)).with(PremiumGiftStyles.CUP, () => callback(10430));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10428)).with(PremiumGiftStyles.BOX, () => callback(10429)).with(PremiumGiftStyles.CUP, () => callback(10430)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9589));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10428)).with(PremiumGiftStyles.BOX, () => callback(10429)).with(PremiumGiftStyles.CUP, () => callback(10430)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9589)).with(PremiumGiftStyles.COFFEE, () => callback(9598));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10428)).with(PremiumGiftStyles.BOX, () => callback(10429)).with(PremiumGiftStyles.CUP, () => callback(10430)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9589)).with(PremiumGiftStyles.COFFEE, () => callback(9598)).with(PremiumGiftStyles.CHEST, () => callback(9595));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10428)).with(PremiumGiftStyles.BOX, () => callback(10429)).with(PremiumGiftStyles.CUP, () => callback(10430)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9589)).with(PremiumGiftStyles.COFFEE, () => callback(9598)).with(PremiumGiftStyles.CHEST, () => callback(9595)).with(PremiumGiftStyles.CAKE, () => callback(9592));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10428)).with(PremiumGiftStyles.BOX, () => callback(10429)).with(PremiumGiftStyles.CUP, () => callback(10430)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9589)).with(PremiumGiftStyles.COFFEE, () => callback(9598)).with(PremiumGiftStyles.CHEST, () => callback(9595)).with(PremiumGiftStyles.CAKE, () => callback(9592)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9601));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10428)).with(PremiumGiftStyles.BOX, () => callback(10429)).with(PremiumGiftStyles.CUP, () => callback(10430)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9589)).with(PremiumGiftStyles.COFFEE, () => callback(9598)).with(PremiumGiftStyles.CHEST, () => callback(9595)).with(PremiumGiftStyles.CAKE, () => callback(9592)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9601)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9604));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10428)).with(PremiumGiftStyles.BOX, () => callback(10429)).with(PremiumGiftStyles.CUP, () => callback(10430)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9589)).with(PremiumGiftStyles.COFFEE, () => callback(9598)).with(PremiumGiftStyles.CHEST, () => callback(9595)).with(PremiumGiftStyles.CAKE, () => callback(9592)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9601)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9604)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(9607));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10428)).with(PremiumGiftStyles.BOX, () => callback(10429)).with(PremiumGiftStyles.CUP, () => callback(10430)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9589)).with(PremiumGiftStyles.COFFEE, () => callback(9598)).with(PremiumGiftStyles.CHEST, () => callback(9595)).with(PremiumGiftStyles.CAKE, () => callback(9592)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9601)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9604)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(9607)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(9610));
    const obj = { source: null, autoPlay: null, style: null };
    obj[0] = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10428)).with(PremiumGiftStyles.BOX, () => callback(10429)).with(PremiumGiftStyles.CUP, () => callback(10430)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9589)).with(PremiumGiftStyles.COFFEE, () => callback(9598)).with(PremiumGiftStyles.CHEST, () => callback(9595)).with(PremiumGiftStyles.CAKE, () => callback(9592)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9601)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9604)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(9607)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(9610)).otherwise(() => callback(9589));
    obj[1] = !tmp4;
    obj[2] = { width: 320, height: 212 };
    return jsx(importDefault(5719), { source: null, autoPlay: null, style: null });
  }
  tmp = require;
};
