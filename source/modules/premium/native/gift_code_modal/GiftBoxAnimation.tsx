// Module ID: 12320
// Function ID: 12321
// Name: GiftBoxAnimation
// Dependencies: [19, 4181, 1876, 21, 589, 4389, 12321, 12322, 12323, 8778, 8787, 8784, 8781, 8790, 8793, 8796, 8799, 5506, 2]
// Exports: default

// Module 12320 (GiftBoxAnimation)
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
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12321));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12321)).with(PremiumGiftStyles.BOX, () => callback(12322));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12321)).with(PremiumGiftStyles.BOX, () => callback(12322)).with(PremiumGiftStyles.CUP, () => callback(12323));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12321)).with(PremiumGiftStyles.BOX, () => callback(12322)).with(PremiumGiftStyles.CUP, () => callback(12323)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(8778));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12321)).with(PremiumGiftStyles.BOX, () => callback(12322)).with(PremiumGiftStyles.CUP, () => callback(12323)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(8778)).with(PremiumGiftStyles.COFFEE, () => callback(8787));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12321)).with(PremiumGiftStyles.BOX, () => callback(12322)).with(PremiumGiftStyles.CUP, () => callback(12323)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(8778)).with(PremiumGiftStyles.COFFEE, () => callback(8787)).with(PremiumGiftStyles.CHEST, () => callback(8784));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12321)).with(PremiumGiftStyles.BOX, () => callback(12322)).with(PremiumGiftStyles.CUP, () => callback(12323)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(8778)).with(PremiumGiftStyles.COFFEE, () => callback(8787)).with(PremiumGiftStyles.CHEST, () => callback(8784)).with(PremiumGiftStyles.CAKE, () => callback(8781));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12321)).with(PremiumGiftStyles.BOX, () => callback(12322)).with(PremiumGiftStyles.CUP, () => callback(12323)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(8778)).with(PremiumGiftStyles.COFFEE, () => callback(8787)).with(PremiumGiftStyles.CHEST, () => callback(8784)).with(PremiumGiftStyles.CAKE, () => callback(8781)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(8790));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12321)).with(PremiumGiftStyles.BOX, () => callback(12322)).with(PremiumGiftStyles.CUP, () => callback(12323)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(8778)).with(PremiumGiftStyles.COFFEE, () => callback(8787)).with(PremiumGiftStyles.CHEST, () => callback(8784)).with(PremiumGiftStyles.CAKE, () => callback(8781)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(8790)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(8793));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12321)).with(PremiumGiftStyles.BOX, () => callback(12322)).with(PremiumGiftStyles.CUP, () => callback(12323)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(8778)).with(PremiumGiftStyles.COFFEE, () => callback(8787)).with(PremiumGiftStyles.CHEST, () => callback(8784)).with(PremiumGiftStyles.CAKE, () => callback(8781)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(8790)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(8793)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(8796));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12321)).with(PremiumGiftStyles.BOX, () => callback(12322)).with(PremiumGiftStyles.CUP, () => callback(12323)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(8778)).with(PremiumGiftStyles.COFFEE, () => callback(8787)).with(PremiumGiftStyles.CHEST, () => callback(8784)).with(PremiumGiftStyles.CAKE, () => callback(8781)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(8790)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(8793)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(8796)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(8799));
    const obj = { source: null, autoPlay: null, style: null };
    obj[0] = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12321)).with(PremiumGiftStyles.BOX, () => callback(12322)).with(PremiumGiftStyles.CUP, () => callback(12323)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(8778)).with(PremiumGiftStyles.COFFEE, () => callback(8787)).with(PremiumGiftStyles.CHEST, () => callback(8784)).with(PremiumGiftStyles.CAKE, () => callback(8781)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(8790)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(8793)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(8796)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(8799)).otherwise(() => callback(8778));
    obj[1] = !tmp4;
    obj[2] = { width: 320, height: 212 };
    return jsx(importDefault(5506), { source: null, autoPlay: null, style: null });
  }
  tmp = require;
};
