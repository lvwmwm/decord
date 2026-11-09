// Module ID: 15743
// Function ID: 15744
// Name: PremiumTierCard
// Dependencies: [19, 17, 7693, 1387, 21, 5140, 575, 5715, 1092, 5842, 2171, 15744, 15745, 8606, 10052, 10705, 10706, 7040, 2]
// Exports: default

// Module 15743 (PremiumTierCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ConstantsIOS from "ConstantsIOS" /* 1092 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import PremiumUtils from "PremiumUtils" /* 2171 */;
import LinearGradientDefault from "LinearGradient" /* 5715 */;
import FastImageDefault from "FastImage" /* 5842 */;
import ColorConstants from "ColorConstants" /* 7693 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp8;
const Card_Card = tmp8(7040);
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
    tmp5Result = tmp5(15744);
  } else if (PremiumTypes.TIER_1 === premiumType) {
    tmp5Result = tmp5(15745);
  } else if (PremiumTypes.TIER_2 === premiumType) {
    tmp5Result = tmp5(8606);
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
    tmp5Result4 = tmp5(10052);
  } else if (PremiumTypes.TIER_1 === premiumType) {
    tmp5Result4 = tmp5(10705);
  } else if (PremiumTypes.TIER_2 === premiumType) {
    tmp5Result4 = tmp5(10706);
  }
  const obj5 = { children: items };
  items[1] = metroRequire(tmp5Result3, obj4);
  const obj6 = { style: tmp.body, children };
  items[2] = metroRequire(View, obj6);
  const children1 = tmp2(tmp3, obj5);
  return metroRequire(Card_Card.Card, { variant: "surface-high", style, children: children1 });
};
