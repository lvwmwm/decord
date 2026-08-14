// Module ID: 10401
// Function ID: 10402
// Name: GiftBoxAnimation
// Dependencies: [19, 4334, 1924, 21, 589, 4554, 10402, 10403, 10404, 9649, 9658, 9655, 9652, 9661, 9664, 9667, 9670, 5780, 2]
// Exports: default

// Module 10401 (GiftBoxAnimation)
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
    const match = tmp(4554).match(giftStyle);
    const str = tmp(4554);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10402));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10402)).with(PremiumGiftStyles.BOX, () => callback(10403));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10402)).with(PremiumGiftStyles.BOX, () => callback(10403)).with(PremiumGiftStyles.CUP, () => callback(10404));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10402)).with(PremiumGiftStyles.BOX, () => callback(10403)).with(PremiumGiftStyles.CUP, () => callback(10404)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9649));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10402)).with(PremiumGiftStyles.BOX, () => callback(10403)).with(PremiumGiftStyles.CUP, () => callback(10404)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9649)).with(PremiumGiftStyles.COFFEE, () => callback(9658));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10402)).with(PremiumGiftStyles.BOX, () => callback(10403)).with(PremiumGiftStyles.CUP, () => callback(10404)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9649)).with(PremiumGiftStyles.COFFEE, () => callback(9658)).with(PremiumGiftStyles.CHEST, () => callback(9655));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10402)).with(PremiumGiftStyles.BOX, () => callback(10403)).with(PremiumGiftStyles.CUP, () => callback(10404)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9649)).with(PremiumGiftStyles.COFFEE, () => callback(9658)).with(PremiumGiftStyles.CHEST, () => callback(9655)).with(PremiumGiftStyles.CAKE, () => callback(9652));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10402)).with(PremiumGiftStyles.BOX, () => callback(10403)).with(PremiumGiftStyles.CUP, () => callback(10404)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9649)).with(PremiumGiftStyles.COFFEE, () => callback(9658)).with(PremiumGiftStyles.CHEST, () => callback(9655)).with(PremiumGiftStyles.CAKE, () => callback(9652)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9661));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10402)).with(PremiumGiftStyles.BOX, () => callback(10403)).with(PremiumGiftStyles.CUP, () => callback(10404)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9649)).with(PremiumGiftStyles.COFFEE, () => callback(9658)).with(PremiumGiftStyles.CHEST, () => callback(9655)).with(PremiumGiftStyles.CAKE, () => callback(9652)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9661)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9664));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10402)).with(PremiumGiftStyles.BOX, () => callback(10403)).with(PremiumGiftStyles.CUP, () => callback(10404)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9649)).with(PremiumGiftStyles.COFFEE, () => callback(9658)).with(PremiumGiftStyles.CHEST, () => callback(9655)).with(PremiumGiftStyles.CAKE, () => callback(9652)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9661)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9664)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(9667));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10402)).with(PremiumGiftStyles.BOX, () => callback(10403)).with(PremiumGiftStyles.CUP, () => callback(10404)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9649)).with(PremiumGiftStyles.COFFEE, () => callback(9658)).with(PremiumGiftStyles.CHEST, () => callback(9655)).with(PremiumGiftStyles.CAKE, () => callback(9652)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9661)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9664)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(9667)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(9670));
    const obj = { source: null, autoPlay: null, style: null };
    obj[0] = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10402)).with(PremiumGiftStyles.BOX, () => callback(10403)).with(PremiumGiftStyles.CUP, () => callback(10404)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9649)).with(PremiumGiftStyles.COFFEE, () => callback(9658)).with(PremiumGiftStyles.CHEST, () => callback(9655)).with(PremiumGiftStyles.CAKE, () => callback(9652)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9661)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9664)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(9667)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(9670)).otherwise(() => callback(9649));
    obj[1] = !tmp4;
    obj[2] = { width: 320, height: 212 };
    return jsx(importDefault(5780), { source: null, autoPlay: null, style: null });
  }
  tmp = require;
};
