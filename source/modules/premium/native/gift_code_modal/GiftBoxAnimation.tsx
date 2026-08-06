// Module ID: 10344
// Function ID: 10345
// Name: GiftBoxAnimation
// Dependencies: [19, 4277, 1905, 21, 589, 4484, 10345, 10346, 10347, 9507, 9516, 9513, 9510, 9519, 9522, 9525, 9528, 5640, 2]
// Exports: default

// Module 10344 (GiftBoxAnimation)
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
    const match = tmp(4484).match(giftStyle);
    const str = tmp(4484);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10345));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10345)).with(PremiumGiftStyles.BOX, () => callback(10346));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10345)).with(PremiumGiftStyles.BOX, () => callback(10346)).with(PremiumGiftStyles.CUP, () => callback(10347));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10345)).with(PremiumGiftStyles.BOX, () => callback(10346)).with(PremiumGiftStyles.CUP, () => callback(10347)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9507));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10345)).with(PremiumGiftStyles.BOX, () => callback(10346)).with(PremiumGiftStyles.CUP, () => callback(10347)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9507)).with(PremiumGiftStyles.COFFEE, () => callback(9516));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10345)).with(PremiumGiftStyles.BOX, () => callback(10346)).with(PremiumGiftStyles.CUP, () => callback(10347)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9507)).with(PremiumGiftStyles.COFFEE, () => callback(9516)).with(PremiumGiftStyles.CHEST, () => callback(9513));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10345)).with(PremiumGiftStyles.BOX, () => callback(10346)).with(PremiumGiftStyles.CUP, () => callback(10347)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9507)).with(PremiumGiftStyles.COFFEE, () => callback(9516)).with(PremiumGiftStyles.CHEST, () => callback(9513)).with(PremiumGiftStyles.CAKE, () => callback(9510));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10345)).with(PremiumGiftStyles.BOX, () => callback(10346)).with(PremiumGiftStyles.CUP, () => callback(10347)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9507)).with(PremiumGiftStyles.COFFEE, () => callback(9516)).with(PremiumGiftStyles.CHEST, () => callback(9513)).with(PremiumGiftStyles.CAKE, () => callback(9510)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9519));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10345)).with(PremiumGiftStyles.BOX, () => callback(10346)).with(PremiumGiftStyles.CUP, () => callback(10347)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9507)).with(PremiumGiftStyles.COFFEE, () => callback(9516)).with(PremiumGiftStyles.CHEST, () => callback(9513)).with(PremiumGiftStyles.CAKE, () => callback(9510)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9519)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9522));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10345)).with(PremiumGiftStyles.BOX, () => callback(10346)).with(PremiumGiftStyles.CUP, () => callback(10347)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9507)).with(PremiumGiftStyles.COFFEE, () => callback(9516)).with(PremiumGiftStyles.CHEST, () => callback(9513)).with(PremiumGiftStyles.CAKE, () => callback(9510)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9519)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9522)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(9525));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10345)).with(PremiumGiftStyles.BOX, () => callback(10346)).with(PremiumGiftStyles.CUP, () => callback(10347)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9507)).with(PremiumGiftStyles.COFFEE, () => callback(9516)).with(PremiumGiftStyles.CHEST, () => callback(9513)).with(PremiumGiftStyles.CAKE, () => callback(9510)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9519)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9522)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(9525)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(9528));
    const obj = { source: null, autoPlay: null, style: null };
    obj[0] = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10345)).with(PremiumGiftStyles.BOX, () => callback(10346)).with(PremiumGiftStyles.CUP, () => callback(10347)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9507)).with(PremiumGiftStyles.COFFEE, () => callback(9516)).with(PremiumGiftStyles.CHEST, () => callback(9513)).with(PremiumGiftStyles.CAKE, () => callback(9510)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9519)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9522)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(9525)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(9528)).otherwise(() => callback(9507));
    obj[1] = !tmp4;
    obj[2] = { width: 320, height: 212 };
    return jsx(importDefault(5640), { source: null, autoPlay: null, style: null });
  }
  tmp = require;
};
