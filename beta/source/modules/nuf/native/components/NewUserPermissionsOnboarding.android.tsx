// Module ID: 12185
// Function ID: 12186
// Name: NewUserPermissionsOnboarding
// Dependencies: [19, 17, 21, 4836, 5994, 576, 4832, 5281, 1115, 2]
// Exports: default

// Module 12185 (NewUserPermissionsOnboarding)
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import NavigatorConstants from "NavigatorConstants" /* 5994 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
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
({ View: c2, ScrollView: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { scrollContainer: { minHeight: "100%" }, container: { flexGrow: 1, alignItems: "center", justifyContent: "center" }, alertContainer: obj2, alert: obj3, alertContent: { paddingVertical: 24, paddingHorizontal: 24, alignItems: "center" }, alertTitle: { paddingBottom: 8, textAlign: "center" }, alertSubtitle: obj4, buttonWrapper: { flexDirection: "row" }, primaryButtonContainer: obj5, trailing: obj6 };
obj2 = { paddingTop: 80 + NavigatorConstants.NAV_BAR_HEIGHT };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.xl, borderWidth: 1, borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE, alignItems: "center", maxWidth: 290 };
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj4 = { paddingBottom: nativeDefault.space.PX_16, textAlign: "center" };
obj5 = { marginBottom: nativeDefault.space.PX_12 };
obj6 = { flexGrow: 0, padding: nativeDefault.space.PX_16 };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/nuf/native/components/NewUserPermissionsOnboarding.android.tsx");

export default function NewUserPermissionsOnboarding(showSkip) {
  let Button;
  let Button2;
  let header;
  let intl;
  let intl2;
  let items1;
  let items3;
  let loading;
  let obj11;
  let obj12;
  let obj3;
  let obj5;
  let obj9;
  let onAllow;
  let onDontAllow;
  let subtitle;
  let title;
  let trailing;
  let flag = showSkip.showSkip;
  ({ title, subtitle, header, trailing, loading } = showSkip);
  if (flag === undefined) {
    flag = true;
  }
  ({ onAllow, onDontAllow } = showSkip);
  const tmp = closure_6();
  const obj = { contentContainerStyle: tmp.scrollContainer, children: items3 };
  const obj2 = { style: tmp.container, children: React3(React2, obj3) };
  const items = [header, ];
  obj3 = { style: tmp.alertContainer, children: hasOwnProperty(React2, obj12) };
  const obj4 = { style: tmp.alert, children: hasOwnProperty(React2, obj5) };
  obj5 = { style: tmp.alertContent, children: items1 };
  items1 = [, , , ];
  const obj6 = { style: tmp.alertTitle, variant: "heading-lg/bold", color: "text-default", children: title };
  items1[0] = React3(Text_Text.Text, obj6);
  const obj7 = { style: tmp.alertSubtitle, variant: "text-sm/medium", color: "text-default", children: subtitle };
  items1[1] = React3(Text_Text.Text, obj7);
  const items2 = [tmp.buttonWrapper, ];
  const tmp8 = flag && tmp.primaryButtonContainer;
  items2[1] = tmp8;
  const obj8 = { style: items2, children: React3(Button, obj9) };
  obj9 = { variant: "primary", size: "md", text: intl.string(intl3.t["2nYlT2"]), onPress: onAllow, loading, grow: true };
  Button = tmp6(5281).Button;
  intl = tmp6(1115).intl;
  items1[2] = React3(React2, obj8);
  const tmp3 = _false;
  if (flag) {
    const obj10 = { style: tmp.buttonWrapper, children: React3(Button2, obj11) };
    obj11 = { variant: "secondary", text: intl2.string(intl3.t["5Wxrcd"]), onPress: onDontAllow, grow: true };
    Button2 = tmp6(5281).Button;
    intl2 = tmp6(1115).intl;
    flag = tmp4(tmp5, obj10);
  }
  obj12 = { children: items };
  items1[3] = flag;
  items[1] = React3(React2, obj4);
  items3 = [React3(React2, obj2), ];
  const obj13 = { style: tmp.trailing, children: trailing };
  items3[1] = React3(React2, obj13);
  return hasOwnProperty(tmp3, obj);
};
