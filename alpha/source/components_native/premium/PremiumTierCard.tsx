// Module ID: 15451
// Function ID: 15452
// Name: PremiumTierCard
// Dependencies: [19, 17, 7617, 1385, 21, 5014, 575, 5587, 1092, 5717, 2047, 15452, 15453, 8535, 9930, 10585, 10586, 6977, 2]
// Exports: default

// Module 15451 (PremiumTierCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ConstantsIOS from "ConstantsIOS" /* 1092 */;
import PremiumConstants from "PremiumConstants" /* 1385 */;
import PremiumUtils from "PremiumUtils" /* 2047 */;
import LinearGradientDefault from "LinearGradient" /* 5587 */;
import FastImageDefault from "FastImage" /* 5717 */;
import ColorConstants from "ColorConstants" /* 7617 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp8;
const Card_Card = tmp8(6977);
const View = react_native.View;
const getPremiumGradientColor = ColorConstants.getPremiumGradientColor;
const PremiumTypes = PremiumConstants.PremiumTypes;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { header: { marginTop: 24, padding: 16 }, textLogoTier0: { width: 158, height: 32 }, textLogoTier1: { width: 185, height: 32 }, textLogoTier2: { width: 80, height: 32 }, wumpusLogo: { position: "absolute", top: 0, right: 24, zIndex: 1 }, wumpusLogoTier0: { width: 83, height: 100 }, wumpusLogoTier1: { width: 86, height: 100 }, wumpusLogoTier2: { width: 133, height: 100 }, body: obj2 };
obj2 = { padding: 16, borderBottomRightRadius: nativeDefault.radii.xs, borderBottomLeftRadius: nativeDefault.radii.xs };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("components_native/premium/PremiumTierCard.tsx");

export default function _default(premiumType) {
  let children;
  let obj2;
  let obj3;
  let style;
  let textLogoTier2;
  let tmp5Result;
  let tmp5Result4;
  let tmp9;
  let wumpusLogoTier2;
  premiumType = premiumType.premiumType;
  ({ children, style } = premiumType);
  const tmp = closure_9();
  const obj = { style: tmp.header, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: getPremiumGradientColor(premiumType), children: metroRequire(tmp9, obj2) };
  const tmp7 = LinearGradientDefault;
  obj2 = { accessible: true, accessibilityLabel: obj3.getPremiumTypeDisplayName(premiumType), accessibilityRole: "header", style: textLogoTier2, source: tmp5Result };
  tmp9 = FastImageDefault;
  obj3 = PremiumUtils;
  const tmp2 = metroImportAll;
  const tmp3 = metroImportDefault;
  if (PremiumTypes.TIER_0 === premiumType) {
    textLogoTier2 = tmp.textLogoTier0;
  } else if (PremiumTypes.TIER_1 === premiumType) {
    textLogoTier2 = tmp.textLogoTier1;
  } else if (PremiumTypes.TIER_2 === premiumType) {
    textLogoTier2 = tmp.textLogoTier2;
  }
  if (PremiumTypes.TIER_0 === premiumType) {
    tmp5Result = tmp5(15452);
  } else if (PremiumTypes.TIER_1 === premiumType) {
    tmp5Result = tmp5(15453);
  } else if (PremiumTypes.TIER_2 === premiumType) {
    tmp5Result = tmp5(8535);
  }
  const items = [metroRequire(tmp7, obj), , ];
  const items1 = [tmp.wumpusLogo, ];
  const tmp5Result3 = FastImageDefault;
  if (PremiumTypes.TIER_0 === premiumType) {
    wumpusLogoTier2 = tmp.wumpusLogoTier0;
  } else if (PremiumTypes.TIER_1 === premiumType) {
    wumpusLogoTier2 = tmp.wumpusLogoTier1;
  } else if (PremiumTypes.TIER_2 === premiumType) {
    wumpusLogoTier2 = tmp.wumpusLogoTier2;
  }
  const obj4 = { accessible: false, importantForAccessibility: "no", style: items1, source: tmp5Result4 };
  items1[1] = wumpusLogoTier2;
  if (PremiumTypes.TIER_0 === premiumType) {
    tmp5Result4 = tmp5(9930);
  } else if (PremiumTypes.TIER_1 === premiumType) {
    tmp5Result4 = tmp5(10585);
  } else if (PremiumTypes.TIER_2 === premiumType) {
    tmp5Result4 = tmp5(10586);
  }
  const obj5 = { children: items };
  items[1] = metroRequire(tmp5Result3, obj4);
  const obj6 = { style: tmp.body, children };
  items[2] = metroRequire(View, obj6);
  const children1 = tmp2(tmp3, obj5);
  return metroRequire(Card_Card.Card, { variant: "surface-high", style, children: children1 });
};
