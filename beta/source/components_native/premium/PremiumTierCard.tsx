// Module ID: 13106
// Function ID: 13107
// Name: PremiumTierCard
// Dependencies: [19, 17, 6852, 1374, 21, 4836, 576, 5293, 1094, 4488, 13107, 13108, 7511, 8688, 10179, 10180, 5919, 2]
// Exports: default

// Module 13106 (PremiumTierCard)
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PremiumUtils from "PremiumUtils" /* 4488 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import ColorConstants from "ColorConstants" /* 6852 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let c9;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
let tmp8;
const Card_Card = tmp8(5919);
({ View: c3, Image: closure_4 } = react_native);
const getPremiumGradientColor = ColorConstants.getPremiumGradientColor;
const PremiumTypes = PremiumConstants.PremiumTypes;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let obj = { header: { marginTop: 24, padding: 16 }, textLogoTier0: { width: 158, height: 32 }, textLogoTier1: { width: 185, height: 32 }, textLogoTier2: { width: 80, height: 32 }, wumpusLogo: { position: "absolute", top: 0, right: 24, zIndex: 1 }, wumpusLogoTier0: { width: 83, height: 100 }, wumpusLogoTier1: { width: 86, height: 100 }, wumpusLogoTier2: { width: 133, height: 100 }, body: obj2 };
obj2 = { padding: 16, borderBottomRightRadius: nativeDefault.radii.xs, borderBottomLeftRadius: nativeDefault.radii.xs };
let closure_10 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("components_native/premium/PremiumTierCard.tsx");

export default function _default(premiumType) {
  let children;
  let obj2;
  let obj3;
  let style;
  let textLogoTier2;
  let tmp5Result;
  let tmp5Result2;
  let wumpusLogoTier2;
  premiumType = premiumType.premiumType;
  ({ children, style } = premiumType);
  const tmp = closure_10();
  const obj = { style: tmp.header, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: getPremiumGradientColor(premiumType), children: metroImportDefault(React3, obj2) };
  const tmp7 = LinearGradientDefault;
  obj2 = { accessible: true, accessibilityLabel: obj3.getPremiumTypeDisplayName(premiumType), accessibilityRole: "header", style: textLogoTier2, source: tmp5Result };
  obj3 = PremiumUtils;
  const tmp2 = React4;
  const tmp3 = metroImportAll;
  if (PremiumTypes.TIER_0 === premiumType) {
    textLogoTier2 = tmp.textLogoTier0;
  } else if (PremiumTypes.TIER_1 === premiumType) {
    textLogoTier2 = tmp.textLogoTier1;
  } else if (PremiumTypes.TIER_2 === premiumType) {
    textLogoTier2 = tmp.textLogoTier2;
  }
  if (PremiumTypes.TIER_0 === premiumType) {
    tmp5Result = tmp5(13107);
  } else if (PremiumTypes.TIER_1 === premiumType) {
    tmp5Result = tmp5(13108);
  } else if (PremiumTypes.TIER_2 === premiumType) {
    tmp5Result = tmp5(7511);
  }
  const items = [metroImportDefault(tmp7, obj), , ];
  const items1 = [tmp.wumpusLogo, ];
  if (PremiumTypes.TIER_0 === premiumType) {
    wumpusLogoTier2 = tmp.wumpusLogoTier0;
  } else if (PremiumTypes.TIER_1 === premiumType) {
    wumpusLogoTier2 = tmp.wumpusLogoTier1;
  } else if (PremiumTypes.TIER_2 === premiumType) {
    wumpusLogoTier2 = tmp.wumpusLogoTier2;
  }
  const obj4 = { accessible: false, importantForAccessibility: "no", style: items1, source: tmp5Result2 };
  items1[1] = wumpusLogoTier2;
  if (PremiumTypes.TIER_0 === premiumType) {
    tmp5Result2 = tmp5(8688);
  } else if (PremiumTypes.TIER_1 === premiumType) {
    tmp5Result2 = tmp5(10179);
  } else if (PremiumTypes.TIER_2 === premiumType) {
    tmp5Result2 = tmp5(10180);
  }
  const obj5 = { children: items };
  items[1] = metroImportDefault(React3, obj4);
  const obj6 = { style: tmp.body, children };
  items[2] = metroImportDefault(_false, obj6);
  const children1 = tmp2(tmp3, obj5);
  return metroImportDefault(Card_Card.Card, { variant: "surface-high", style, children: children1 });
};
