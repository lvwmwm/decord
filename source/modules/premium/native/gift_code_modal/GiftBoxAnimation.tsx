// Module ID: 12260
// Function ID: 95756
// Name: GiftBoxAnimation
// Dependencies: [31, 4123, 1852, 33, 566, 4330, 12261, 12262, 12263, 8714, 8723, 8720, 8717, 8726, 8729, 8732, 8735, 5453, 2]
// Exports: default

// Module 12260 (GiftBoxAnimation)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { PremiumGiftStyles } from "GuildFeatures";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("GuildFeatures").fileFinishedImporting("modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx");

export default function GiftBoxAnimation(giftStyle) {
  giftStyle = giftStyle.giftStyle;
  require(566) /* initialize */;
  [][0] = _isNativeReflectConstruct;
  if (null == giftStyle) {
    return null;
  } else {
    const match = require(4330) /* n */.match(giftStyle);
    const str = require(4330) /* n */;
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => outer1_0(outer1_2[6]));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => outer1_0(outer1_2[6])).with(PremiumGiftStyles.BOX, () => outer1_0(outer1_2[7]));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => outer1_0(outer1_2[6])).with(PremiumGiftStyles.BOX, () => outer1_0(outer1_2[7])).with(PremiumGiftStyles.CUP, () => outer1_0(outer1_2[8]));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => outer1_0(outer1_2[6])).with(PremiumGiftStyles.BOX, () => outer1_0(outer1_2[7])).with(PremiumGiftStyles.CUP, () => outer1_0(outer1_2[8])).with(PremiumGiftStyles.STANDARD_BOX, () => outer1_0(outer1_2[9]));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => outer1_0(outer1_2[6])).with(PremiumGiftStyles.BOX, () => outer1_0(outer1_2[7])).with(PremiumGiftStyles.CUP, () => outer1_0(outer1_2[8])).with(PremiumGiftStyles.STANDARD_BOX, () => outer1_0(outer1_2[9])).with(PremiumGiftStyles.COFFEE, () => outer1_0(outer1_2[10]));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => outer1_0(outer1_2[6])).with(PremiumGiftStyles.BOX, () => outer1_0(outer1_2[7])).with(PremiumGiftStyles.CUP, () => outer1_0(outer1_2[8])).with(PremiumGiftStyles.STANDARD_BOX, () => outer1_0(outer1_2[9])).with(PremiumGiftStyles.COFFEE, () => outer1_0(outer1_2[10])).with(PremiumGiftStyles.CHEST, () => outer1_0(outer1_2[11]));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => outer1_0(outer1_2[6])).with(PremiumGiftStyles.BOX, () => outer1_0(outer1_2[7])).with(PremiumGiftStyles.CUP, () => outer1_0(outer1_2[8])).with(PremiumGiftStyles.STANDARD_BOX, () => outer1_0(outer1_2[9])).with(PremiumGiftStyles.COFFEE, () => outer1_0(outer1_2[10])).with(PremiumGiftStyles.CHEST, () => outer1_0(outer1_2[11])).with(PremiumGiftStyles.CAKE, () => outer1_0(outer1_2[12]));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => outer1_0(outer1_2[6])).with(PremiumGiftStyles.BOX, () => outer1_0(outer1_2[7])).with(PremiumGiftStyles.CUP, () => outer1_0(outer1_2[8])).with(PremiumGiftStyles.STANDARD_BOX, () => outer1_0(outer1_2[9])).with(PremiumGiftStyles.COFFEE, () => outer1_0(outer1_2[10])).with(PremiumGiftStyles.CHEST, () => outer1_0(outer1_2[11])).with(PremiumGiftStyles.CAKE, () => outer1_0(outer1_2[12])).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => outer1_0(outer1_2[13]));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => outer1_0(outer1_2[6])).with(PremiumGiftStyles.BOX, () => outer1_0(outer1_2[7])).with(PremiumGiftStyles.CUP, () => outer1_0(outer1_2[8])).with(PremiumGiftStyles.STANDARD_BOX, () => outer1_0(outer1_2[9])).with(PremiumGiftStyles.COFFEE, () => outer1_0(outer1_2[10])).with(PremiumGiftStyles.CHEST, () => outer1_0(outer1_2[11])).with(PremiumGiftStyles.CAKE, () => outer1_0(outer1_2[12])).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => outer1_0(outer1_2[13])).with(PremiumGiftStyles.SEASONAL_CAKE, () => outer1_0(outer1_2[14]));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => outer1_0(outer1_2[6])).with(PremiumGiftStyles.BOX, () => outer1_0(outer1_2[7])).with(PremiumGiftStyles.CUP, () => outer1_0(outer1_2[8])).with(PremiumGiftStyles.STANDARD_BOX, () => outer1_0(outer1_2[9])).with(PremiumGiftStyles.COFFEE, () => outer1_0(outer1_2[10])).with(PremiumGiftStyles.CHEST, () => outer1_0(outer1_2[11])).with(PremiumGiftStyles.CAKE, () => outer1_0(outer1_2[12])).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => outer1_0(outer1_2[13])).with(PremiumGiftStyles.SEASONAL_CAKE, () => outer1_0(outer1_2[14])).with(PremiumGiftStyles.SEASONAL_CHEST, () => outer1_0(outer1_2[15]));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => outer1_0(outer1_2[6])).with(PremiumGiftStyles.BOX, () => outer1_0(outer1_2[7])).with(PremiumGiftStyles.CUP, () => outer1_0(outer1_2[8])).with(PremiumGiftStyles.STANDARD_BOX, () => outer1_0(outer1_2[9])).with(PremiumGiftStyles.COFFEE, () => outer1_0(outer1_2[10])).with(PremiumGiftStyles.CHEST, () => outer1_0(outer1_2[11])).with(PremiumGiftStyles.CAKE, () => outer1_0(outer1_2[12])).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => outer1_0(outer1_2[13])).with(PremiumGiftStyles.SEASONAL_CAKE, () => outer1_0(outer1_2[14])).with(PremiumGiftStyles.SEASONAL_CHEST, () => outer1_0(outer1_2[15])).with(PremiumGiftStyles.SEASONAL_COFFEE, () => outer1_0(outer1_2[16]));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => outer1_0(outer1_2[6])).with(PremiumGiftStyles.BOX, () => outer1_0(outer1_2[7])).with(PremiumGiftStyles.CUP, () => outer1_0(outer1_2[8])).with(PremiumGiftStyles.STANDARD_BOX, () => outer1_0(outer1_2[9])).with(PremiumGiftStyles.COFFEE, () => outer1_0(outer1_2[10])).with(PremiumGiftStyles.CHEST, () => outer1_0(outer1_2[11])).with(PremiumGiftStyles.CAKE, () => outer1_0(outer1_2[12])).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => outer1_0(outer1_2[13])).with(PremiumGiftStyles.SEASONAL_CAKE, () => outer1_0(outer1_2[14])).with(PremiumGiftStyles.SEASONAL_CHEST, () => outer1_0(outer1_2[15])).with(PremiumGiftStyles.SEASONAL_COFFEE, () => outer1_0(outer1_2[16])).otherwise(() => outer1_0(outer1_2[9])), autoPlay: !tmp2, style: { width: 320, height: 212 } };
    return jsx(importDefault(5453), { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => outer1_0(outer1_2[6])).with(PremiumGiftStyles.BOX, () => outer1_0(outer1_2[7])).with(PremiumGiftStyles.CUP, () => outer1_0(outer1_2[8])).with(PremiumGiftStyles.STANDARD_BOX, () => outer1_0(outer1_2[9])).with(PremiumGiftStyles.COFFEE, () => outer1_0(outer1_2[10])).with(PremiumGiftStyles.CHEST, () => outer1_0(outer1_2[11])).with(PremiumGiftStyles.CAKE, () => outer1_0(outer1_2[12])).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => outer1_0(outer1_2[13])).with(PremiumGiftStyles.SEASONAL_CAKE, () => outer1_0(outer1_2[14])).with(PremiumGiftStyles.SEASONAL_CHEST, () => outer1_0(outer1_2[15])).with(PremiumGiftStyles.SEASONAL_COFFEE, () => outer1_0(outer1_2[16])).otherwise(() => outer1_0(outer1_2[9])), autoPlay: !tmp2, style: { width: 320, height: 212 } });
  }
};
