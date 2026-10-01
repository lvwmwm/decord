// Module ID: 13056
// Function ID: 13057
// Name: BoostingCountDownPill
// Dependencies: [17, 21, 4836, 576, 4800, 13057, 1981, 1115, 4832, 2]
// Exports: default

// Module 13056 (BoostingCountDownPill)
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
function handlePress() {
  let intl;
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  const obj = { aboutText: intl.string(intl2.t["07lzz7"]) };
  ActionSheetActionCreatorsDefault;
  const tmp2 = asyncRequire(13057, dependencyMap.paths);
  intl = intl2.intl;
  openLazy(tmp2, "NitroCreditEducationActionSheet", obj);
}
({ TouchableOpacity: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { fractionalPremiumBanner: obj2, fpDurationPill: obj3, fpDurationText: { textAlign: "center", color: "#FFEAA0" }, fpUnavailable: { flex: 1, justifyContent: "center" }, fpUnavailableTextNoCountdown: { textAlign: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flexDirection: "row", gap: 12, padding: 12, justifyContent: "center", borderColor: nativeDefault.colors.STATUS_WARNING, borderWidth: 1, borderRadius: nativeDefault.radii.lg, marginBottom: 12 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, paddingVertical: 12, paddingHorizontal: 27, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.xxl, justifyContent: "center" };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/fractional/native/BoostingCountDownPill.tsx");

export default function BoostingCountDownPill(style) {
  let Text;
  let Text2;
  let fpDurationText;
  let intl;
  let isInReverseTrial;
  let items;
  let items1;
  let obj2;
  let obj4;
  let obj6;
  let tmp5;
  ({ fpDurationText, isInReverseTrial } = style);
  style = style.style;
  const tmp = closure_7();
  let tmp4;
  const tmp3 = _false;
  if (!isInReverseTrial) {
    tmp4 = handlePress;
  }
  const obj = { activeOpacity: 0.7, onPress: tmp4, children: tmp5(React3, obj2) };
  obj2 = { style: items, children: items1 };
  items = [tmp.fractionalPremiumBanner, style];
  let tmp2Result = !isInReverseTrial;
  tmp5 = metroRequire;
  if (!isInReverseTrial) {
    const obj3 = { style: tmp.fpDurationPill, children: hasOwnProperty(Text, obj4) };
    obj4 = { variant: "text-sm/bold", style: tmp.fpDurationText, children: fpDurationText.toUpperCase() };
    Text = Text_Text.Text;
    tmp2Result = tmp2(tmp6, obj3);
  }
  items1 = [tmp2Result, ];
  let prop;
  const obj5 = { style: tmp.fpUnavailable, children: hasOwnProperty(Text2, obj6) };
  Text2 = Text_Text.Text;
  if (isInReverseTrial) {
    prop = tmp.fpUnavailableTextNoCountdown;
  }
  obj6 = { variant: "text-md/normal", color: "interactive-text-active", style: prop, children: intl.string(intl2.t["5nrJDO"]) };
  intl = tmp10(1115).intl;
  items1[1] = hasOwnProperty(React3, obj5);
  return hasOwnProperty(tmp3, obj);
};
