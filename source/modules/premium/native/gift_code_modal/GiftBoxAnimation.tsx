// Module ID: 11380
// Function ID: 11381
// Name: GiftBoxAnimation
// Dependencies: [19, 4473, 1923, 21, 586, 4713, 11381, 11382, 11383, 10765, 10774, 10771, 10768, 10777, 10780, 10783, 10786, 5484, 2]
// Exports: default

// Module 11380 (GiftBoxAnimation)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 586 */;
import t from "t" /* 4713 */;
import playDefault from "play" /* 5484 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4473 */;
import { PremiumGiftStyles } from "GuildFeatures" /* 1923 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx");

export default function GiftBoxAnimation(giftStyle) {
  giftStyle = giftStyle.giftStyle;
  initialize;
  [][0] = closure_3;
  if (null == giftStyle) {
    return null;
  } else {
    const match = t.match(giftStyle);
    const str = t;
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(11381));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(11381)).with(PremiumGiftStyles.BOX, () => callback(11382));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(11381)).with(PremiumGiftStyles.BOX, () => callback(11382)).with(PremiumGiftStyles.CUP, () => callback(11383));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(11381)).with(PremiumGiftStyles.BOX, () => callback(11382)).with(PremiumGiftStyles.CUP, () => callback(11383)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10765));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(11381)).with(PremiumGiftStyles.BOX, () => callback(11382)).with(PremiumGiftStyles.CUP, () => callback(11383)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10765)).with(PremiumGiftStyles.COFFEE, () => callback(10774));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(11381)).with(PremiumGiftStyles.BOX, () => callback(11382)).with(PremiumGiftStyles.CUP, () => callback(11383)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10765)).with(PremiumGiftStyles.COFFEE, () => callback(10774)).with(PremiumGiftStyles.CHEST, () => callback(10771));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(11381)).with(PremiumGiftStyles.BOX, () => callback(11382)).with(PremiumGiftStyles.CUP, () => callback(11383)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10765)).with(PremiumGiftStyles.COFFEE, () => callback(10774)).with(PremiumGiftStyles.CHEST, () => callback(10771)).with(PremiumGiftStyles.CAKE, () => callback(10768));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(11381)).with(PremiumGiftStyles.BOX, () => callback(11382)).with(PremiumGiftStyles.CUP, () => callback(11383)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10765)).with(PremiumGiftStyles.COFFEE, () => callback(10774)).with(PremiumGiftStyles.CHEST, () => callback(10771)).with(PremiumGiftStyles.CAKE, () => callback(10768)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10777));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(11381)).with(PremiumGiftStyles.BOX, () => callback(11382)).with(PremiumGiftStyles.CUP, () => callback(11383)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10765)).with(PremiumGiftStyles.COFFEE, () => callback(10774)).with(PremiumGiftStyles.CHEST, () => callback(10771)).with(PremiumGiftStyles.CAKE, () => callback(10768)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10777)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(10780));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(11381)).with(PremiumGiftStyles.BOX, () => callback(11382)).with(PremiumGiftStyles.CUP, () => callback(11383)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10765)).with(PremiumGiftStyles.COFFEE, () => callback(10774)).with(PremiumGiftStyles.CHEST, () => callback(10771)).with(PremiumGiftStyles.CAKE, () => callback(10768)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10777)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(10780)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(10783));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(11381)).with(PremiumGiftStyles.BOX, () => callback(11382)).with(PremiumGiftStyles.CUP, () => callback(11383)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10765)).with(PremiumGiftStyles.COFFEE, () => callback(10774)).with(PremiumGiftStyles.CHEST, () => callback(10771)).with(PremiumGiftStyles.CAKE, () => callback(10768)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10777)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(10780)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(10783)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(10786));
    const obj = { source: null, autoPlay: null, style: null };
    obj[0] = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(11381)).with(PremiumGiftStyles.BOX, () => callback(11382)).with(PremiumGiftStyles.CUP, () => callback(11383)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10765)).with(PremiumGiftStyles.COFFEE, () => callback(10774)).with(PremiumGiftStyles.CHEST, () => callback(10771)).with(PremiumGiftStyles.CAKE, () => callback(10768)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10777)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(10780)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(10783)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(10786)).otherwise(() => callback(10765));
    obj[1] = !tmp4;
    obj[2] = { width: 320, height: 212 };
    return jsx(playDefault, { source: null, autoPlay: null, style: null });
  }
  const tmp = require;
};
