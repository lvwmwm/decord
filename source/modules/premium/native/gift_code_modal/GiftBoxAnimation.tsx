// Module ID: 10432
// Function ID: 10433
// Name: GiftBoxAnimation
// Dependencies: [19, 4295, 1924, 21, 589, 4503, 10433, 10434, 10435, 9594, 9603, 9600, 9597, 9606, 9609, 9612, 9615, 5719, 2]
// Exports: default

// Module 10432 (GiftBoxAnimation)
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
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10433));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10433)).with(PremiumGiftStyles.BOX, () => callback(10434));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10433)).with(PremiumGiftStyles.BOX, () => callback(10434)).with(PremiumGiftStyles.CUP, () => callback(10435));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10433)).with(PremiumGiftStyles.BOX, () => callback(10434)).with(PremiumGiftStyles.CUP, () => callback(10435)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9594));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10433)).with(PremiumGiftStyles.BOX, () => callback(10434)).with(PremiumGiftStyles.CUP, () => callback(10435)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9594)).with(PremiumGiftStyles.COFFEE, () => callback(9603));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10433)).with(PremiumGiftStyles.BOX, () => callback(10434)).with(PremiumGiftStyles.CUP, () => callback(10435)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9594)).with(PremiumGiftStyles.COFFEE, () => callback(9603)).with(PremiumGiftStyles.CHEST, () => callback(9600));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10433)).with(PremiumGiftStyles.BOX, () => callback(10434)).with(PremiumGiftStyles.CUP, () => callback(10435)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9594)).with(PremiumGiftStyles.COFFEE, () => callback(9603)).with(PremiumGiftStyles.CHEST, () => callback(9600)).with(PremiumGiftStyles.CAKE, () => callback(9597));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10433)).with(PremiumGiftStyles.BOX, () => callback(10434)).with(PremiumGiftStyles.CUP, () => callback(10435)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9594)).with(PremiumGiftStyles.COFFEE, () => callback(9603)).with(PremiumGiftStyles.CHEST, () => callback(9600)).with(PremiumGiftStyles.CAKE, () => callback(9597)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9606));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10433)).with(PremiumGiftStyles.BOX, () => callback(10434)).with(PremiumGiftStyles.CUP, () => callback(10435)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9594)).with(PremiumGiftStyles.COFFEE, () => callback(9603)).with(PremiumGiftStyles.CHEST, () => callback(9600)).with(PremiumGiftStyles.CAKE, () => callback(9597)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9606)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9609));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10433)).with(PremiumGiftStyles.BOX, () => callback(10434)).with(PremiumGiftStyles.CUP, () => callback(10435)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9594)).with(PremiumGiftStyles.COFFEE, () => callback(9603)).with(PremiumGiftStyles.CHEST, () => callback(9600)).with(PremiumGiftStyles.CAKE, () => callback(9597)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9606)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9609)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(9612));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10433)).with(PremiumGiftStyles.BOX, () => callback(10434)).with(PremiumGiftStyles.CUP, () => callback(10435)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9594)).with(PremiumGiftStyles.COFFEE, () => callback(9603)).with(PremiumGiftStyles.CHEST, () => callback(9600)).with(PremiumGiftStyles.CAKE, () => callback(9597)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9606)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9609)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(9612)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(9615));
    const obj = { source: null, autoPlay: null, style: null };
    obj[0] = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10433)).with(PremiumGiftStyles.BOX, () => callback(10434)).with(PremiumGiftStyles.CUP, () => callback(10435)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9594)).with(PremiumGiftStyles.COFFEE, () => callback(9603)).with(PremiumGiftStyles.CHEST, () => callback(9600)).with(PremiumGiftStyles.CAKE, () => callback(9597)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9606)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9609)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(9612)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(9615)).otherwise(() => callback(9594));
    obj[1] = !tmp4;
    obj[2] = { width: 320, height: 212 };
    return jsx(importDefault(5719), { source: null, autoPlay: null, style: null });
  }
  tmp = require;
};
