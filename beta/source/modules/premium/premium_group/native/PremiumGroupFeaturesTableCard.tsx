// Module ID: 13024
// Function ID: 13025
// Name: PremiumGroupFeaturesTableCard
// Dependencies: [17, 6852, 21, 4836, 576, 4832, 1115, 13025, 1177, 5293, 4683, 8684, 2]
// Exports: default

// Module 13024 (PremiumGroupFeaturesTableCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import ColorUtils from "ColorUtils" /* 4683 */;
import Text_Text from "Text/Text" /* 4832 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import ColorConstants from "ColorConstants" /* 6852 */;
import PremiumGroupWordmarkDefault from "PremiumGroupWordmark" /* 8684 */;
import usePremiumGroupFeaturesTableCardTextDefault from "usePremiumGroupFeaturesTableCardText" /* 13025 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
class BetaPill {
  constructor() {
    let Text;
    let intl;
    let obj2;
    const tmp = closure_7();
    const obj = { style: tmp.betaPill, children: hasOwnProperty(Text, obj2) };
    obj2 = { variant: "text-xs/bold", style: tmp.betaText, children: intl.string(intl2.t.oW0eUd) };
    Text = Text_Text.Text;
    intl = intl2.intl;
    return hasOwnProperty(View, obj);
  }
}
const View = react_native.View;
const Gradients = ColorConstants.Gradients;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { premiumGroupCard: obj2, headerContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 4 }, betaPill: obj3, betaText: obj4, title: obj5, description: obj6 };
obj2 = { padding: 16, borderRadius: nativeDefault.radii.sm - 2, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, display: "flex", alignItems: "flex-start" };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", paddingHorizontal: 8, paddingBottom: 2 };
obj4 = { color: nativeDefault.colors.BLACK, textAlign: "center", textTransform: "uppercase" };
obj5 = { color: nativeDefault.colors.TEXT_DEFAULT, marginBottom: 16 };
obj6 = { color: nativeDefault.colors.TEXT_DEFAULT };
const metroImportDefault = createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/premium_group/native/PremiumGroupFeaturesTableCard.tsx");

export default function PremiumGroupFeaturesTableCard(arg0) {
  let bodyString;
  let items;
  let items1;
  let items2;
  let obj2;
  let premiumGroupRole;
  let style;
  let subheaderString;
  let tmp2Result;
  ({ style, premiumGroupRole } = arg0);
  const tmp = closure_7();
  const tmp4 = usePremiumGroupFeaturesTableCardTextDefault(premiumGroupRole, false);
  if (null == tmp4) {
    return null;
  } else {
    ({ subheaderString, bodyString } = tmp4);
    const obj = { borderWidth: 2, direction: native.GradientBorder.Direction.HORIZONTAL, colors: Gradients.PREMIUM_TIER_2, borderRadius: nativeDefault.radii.sm, style, children: metroRequire(tmp2Result, obj2) };
    const GradientBorder = native.GradientBorder;
    obj2 = { start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, colors: items, locations: [0, 0.4996, 0.9593], style: tmp.premiumGroupCard, children: items2 };
    items = [, , ];
    tmp2Result = LinearGradientDefault;
    const obj3 = ColorUtils;
    items[0] = obj3.hexWithOpacity("#8547C6", 0.15);
    const obj4 = ColorUtils;
    items[1] = obj4.hexWithOpacity("#B845C1", 0.15);
    const obj5 = ColorUtils;
    items[2] = obj5.hexWithOpacity("#AB5D8A", 0.15);
    const obj6 = { style: tmp.headerContainer, children: items1 };
    items1 = [hasOwnProperty(PremiumGroupWordmarkDefault, { width: 181, height: 16 }), hasOwnProperty(BetaPill, {})];
    items2 = [metroRequire(View, obj6), , ];
    const obj7 = { variant: "text-sm/normal", style: tmp.title, children: subheaderString };
    items2[1] = hasOwnProperty(Text_Text.Text, obj7);
    const obj8 = { variant: "text-sm/normal", style: tmp.description, children: bodyString };
    items2[2] = hasOwnProperty(Text_Text.Text, obj8);
    return hasOwnProperty(GradientBorder, obj);
  }
};
export { BetaPill };
