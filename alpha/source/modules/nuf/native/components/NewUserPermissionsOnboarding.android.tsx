// Module ID: 14206
// Function ID: 14207
// Name: NewUserPermissionsOnboarding
// Dependencies: [19, 17, 21, 5009, 5581, 575, 5619, 5629, 1114, 2]
// Exports: default

// Module 14206 (NewUserPermissionsOnboarding)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1114 */;
import NavigatorConstants from "NavigatorConstants" /* 5581 */;
import Text_Text from "Text/Text" /* 5619 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
({ View: c2, ScrollView: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { scrollContainer: { minHeight: "100%" }, container: { flexGrow: 1, alignItems: "center", justifyContent: "center" }, alertContainer: obj2, alertContainerInsideCard: obj3, alert: obj4, alertInsideCard: { width: "100%", maxWidth: 320, alignSelf: "center" }, alertContent: { paddingVertical: 24, paddingHorizontal: 24, alignItems: "center" }, alertContentInsideCard: { width: "100%" }, header: obj5, alertTitle: { paddingBottom: 8, textAlign: "center" }, alertSubtitle: obj6, buttonWrapper: { flexDirection: "row" }, primaryButtonContainer: obj7, trailing: obj8 };
obj2 = { paddingTop: 80 + NavigatorConstants.NAV_BAR_HEIGHT };
createStyles = createStyles.createStyles;
obj3 = { width: "100%", paddingHorizontal: nativeDefault.space.PX_16, paddingTop: 0 };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.xl, borderWidth: 1, borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE, alignItems: "center", maxWidth: 290 };
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj5 = { alignItems: "center", marginBottom: nativeDefault.space.PX_8 };
obj6 = { paddingBottom: nativeDefault.space.PX_16, textAlign: "center" };
obj7 = { marginBottom: nativeDefault.space.PX_12 };
obj8 = { flexGrow: 0, padding: nativeDefault.space.PX_16 };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/nuf/native/components/NewUserPermissionsOnboarding.android.tsx");

export default function NewUserPermissionsOnboarding(arg0) {
  let Button;
  let Button2;
  let header;
  let headerInsideCard;
  let intl;
  let intl2;
  let items4;
  let items6;
  let loading;
  let obj10;
  let obj12;
  let obj13;
  let obj3;
  let obj5;
  let onAllow;
  let onDontAllow;
  let showSkip;
  let subtitle;
  let title;
  let trailing;
  ({ header, headerInsideCard } = arg0);
  ({ title, subtitle } = arg0);
  if (headerInsideCard === undefined) {
    headerInsideCard = false;
  }
  ({ showSkip, trailing, loading } = arg0);
  if (showSkip === undefined) {
    showSkip = true;
  }
  ({ onAllow, onDontAllow } = arg0);
  const tmp = closure_6();
  const obj = { contentContainerStyle: tmp.scrollContainer, children: items6 };
  const items = [tmp.alertContainer, ];
  let alertContainerInsideCard = headerInsideCard;
  const obj2 = { style: tmp.container, children: React3(React2, obj3) };
  const tmp3 = _false;
  if (headerInsideCard) {
    alertContainerInsideCard = tmp.alertContainerInsideCard;
  }
  items[1] = alertContainerInsideCard;
  const items1 = [, ];
  const tmp6 = !headerInsideCard && header;
  items1[0] = tmp6;
  const items2 = [tmp.alert, ];
  obj3 = { style: items, children: hasOwnProperty(React2, obj13) };
  const tmp7 = headerInsideCard && tmp.alertInsideCard;
  items2[1] = tmp7;
  const items3 = [tmp.alertContent, ];
  const obj4 = { style: items2, children: hasOwnProperty(React2, obj5) };
  obj5 = { style: items3, children: items4 };
  const tmp8 = headerInsideCard && tmp.alertContentInsideCard;
  items3[1] = tmp8;
  if (headerInsideCard) {
    headerInsideCard = null != header;
  }
  if (headerInsideCard) {
    const obj6 = { style: tmp.header, children: header };
    headerInsideCard = tmp4(tmp5, obj6);
  }
  items4 = [headerInsideCard, , , , ];
  const obj7 = { style: tmp.alertTitle, variant: "heading-lg/bold", color: "text-default", children: title };
  items4[1] = React3(Text_Text.Text, obj7);
  const obj8 = { style: tmp.alertSubtitle, variant: "text-sm/medium", color: "text-default", children: subtitle };
  items4[2] = React3(Text_Text.Text, obj8);
  const items5 = [tmp.buttonWrapper, ];
  const tmp12 = showSkip && tmp.primaryButtonContainer;
  items5[1] = tmp12;
  const obj9 = { style: items5, children: React3(Button, obj10) };
  obj10 = { variant: "primary", size: "md", text: intl.string(intl3.t["2nYlT2"]), onPress: onAllow, loading, grow: true };
  Button = tmp10(5629).Button;
  intl = tmp10(1114).intl;
  items4[3] = React3(React2, obj9);
  if (showSkip) {
    const obj11 = { style: tmp.buttonWrapper, children: React3(Button2, obj12) };
    obj12 = { variant: "secondary", text: intl2.string(intl3.t["5Wxrcd"]), onPress: onDontAllow, grow: true };
    Button2 = tmp10(5629).Button;
    intl2 = tmp10(1114).intl;
    showSkip = tmp4(tmp5, obj11);
  }
  obj13 = { children: items1 };
  items4[4] = showSkip;
  items1[1] = React3(React2, obj4);
  items6 = [React3(React2, obj2), ];
  const obj14 = { style: tmp.trailing, children: trailing };
  items6[1] = React3(React2, obj14);
  return hasOwnProperty(tmp3, obj);
};
