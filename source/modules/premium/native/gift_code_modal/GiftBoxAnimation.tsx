// Module ID: 10360
// Function ID: 10361
// Name: GiftBoxAnimation
// Dependencies: [19, 4294, 1905, 21, 589, 4501, 10361, 10362, 10363, 9524, 9533, 9530, 9527, 9536, 9539, 9542, 9545, 5659, 2]
// Exports: default

// Module 10360 (GiftBoxAnimation)
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
    const match = tmp(4501).match(giftStyle);
    const str = tmp(4501);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10361));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10361)).with(PremiumGiftStyles.BOX, () => callback(10362));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10361)).with(PremiumGiftStyles.BOX, () => callback(10362)).with(PremiumGiftStyles.CUP, () => callback(10363));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10361)).with(PremiumGiftStyles.BOX, () => callback(10362)).with(PremiumGiftStyles.CUP, () => callback(10363)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9524));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10361)).with(PremiumGiftStyles.BOX, () => callback(10362)).with(PremiumGiftStyles.CUP, () => callback(10363)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9524)).with(PremiumGiftStyles.COFFEE, () => callback(9533));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10361)).with(PremiumGiftStyles.BOX, () => callback(10362)).with(PremiumGiftStyles.CUP, () => callback(10363)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9524)).with(PremiumGiftStyles.COFFEE, () => callback(9533)).with(PremiumGiftStyles.CHEST, () => callback(9530));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10361)).with(PremiumGiftStyles.BOX, () => callback(10362)).with(PremiumGiftStyles.CUP, () => callback(10363)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9524)).with(PremiumGiftStyles.COFFEE, () => callback(9533)).with(PremiumGiftStyles.CHEST, () => callback(9530)).with(PremiumGiftStyles.CAKE, () => callback(9527));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10361)).with(PremiumGiftStyles.BOX, () => callback(10362)).with(PremiumGiftStyles.CUP, () => callback(10363)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9524)).with(PremiumGiftStyles.COFFEE, () => callback(9533)).with(PremiumGiftStyles.CHEST, () => callback(9530)).with(PremiumGiftStyles.CAKE, () => callback(9527)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9536));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10361)).with(PremiumGiftStyles.BOX, () => callback(10362)).with(PremiumGiftStyles.CUP, () => callback(10363)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9524)).with(PremiumGiftStyles.COFFEE, () => callback(9533)).with(PremiumGiftStyles.CHEST, () => callback(9530)).with(PremiumGiftStyles.CAKE, () => callback(9527)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9536)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9539));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10361)).with(PremiumGiftStyles.BOX, () => callback(10362)).with(PremiumGiftStyles.CUP, () => callback(10363)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9524)).with(PremiumGiftStyles.COFFEE, () => callback(9533)).with(PremiumGiftStyles.CHEST, () => callback(9530)).with(PremiumGiftStyles.CAKE, () => callback(9527)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9536)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9539)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(9542));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10361)).with(PremiumGiftStyles.BOX, () => callback(10362)).with(PremiumGiftStyles.CUP, () => callback(10363)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9524)).with(PremiumGiftStyles.COFFEE, () => callback(9533)).with(PremiumGiftStyles.CHEST, () => callback(9530)).with(PremiumGiftStyles.CAKE, () => callback(9527)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9536)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9539)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(9542)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(9545));
    const obj = { source: null, autoPlay: null, style: null };
    obj[0] = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10361)).with(PremiumGiftStyles.BOX, () => callback(10362)).with(PremiumGiftStyles.CUP, () => callback(10363)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9524)).with(PremiumGiftStyles.COFFEE, () => callback(9533)).with(PremiumGiftStyles.CHEST, () => callback(9530)).with(PremiumGiftStyles.CAKE, () => callback(9527)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9536)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9539)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(9542)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(9545)).otherwise(() => callback(9524));
    obj[1] = !tmp4;
    obj[2] = { width: 320, height: 212 };
    return jsx(importDefault(5659), { source: null, autoPlay: null, style: null });
  }
  tmp = require;
};
