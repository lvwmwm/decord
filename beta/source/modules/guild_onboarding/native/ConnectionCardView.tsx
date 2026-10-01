// Module ID: 6598
// Function ID: 6599
// Name: ConnectionCardView
// Dependencies: [19, 17, 21, 4836, 576, 4832, 1115, 4792, 5281, 2]
// Exports: default

// Module 6598 (ConnectionCardView)
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import CircleCheckIcon from "CircleCheckIcon" /* 4792 */;
import Text_Text from "Text/Text" /* 4832 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let size;
({ View: c2, ActivityIndicator: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, leftContent: obj3, icon: size, textContent: { flex: 1 }, connectedStatus: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, padding: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", flex: 1, marginRight: nativeDefault.space.PX_12 };
size = { width: 32, height: 32, marginRight: nativeDefault.space.PX_12, justifyContent: "center", alignItems: "center" };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_6 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_onboarding/native/ConnectionCardView.tsx");

export default function ConnectionCardView(description) {
  let canConnect;
  let displayName;
  let icon;
  let intl;
  let intl2;
  let isConnected;
  let isLoading;
  let items;
  let items1;
  let items2;
  let items3;
  let onConnect;
  let tmp4Result2;
  description = description.description;
  ({ displayName, icon, isLoading, isConnected, canConnect, onConnect } = description);
  const tmp = closure_6();
  const obj2 = { style: tmp.leftContent, children: items };
  items = [, ];
  const obj = { style: tmp.card, children: items2 };
  const obj3 = { style: tmp.icon, children: icon };
  items[0] = React3(React2, obj3);
  const obj4 = { style: tmp.textContent, children: items1 };
  items1 = [React3(Text_Text.Text, { variant: "text-md/medium", color: "text-strong", children: displayName }), ];
  let tmp4Result = null != description && description.length > 0;
  if (tmp4Result) {
    const obj5 = { variant: "text-sm/normal", color: "text-subtle", children: description };
    tmp4Result = tmp4(tmp5(4832).Text, obj5);
  }
  items1[1] = tmp4Result;
  items[1] = hasOwnProperty(React2, obj4);
  items2 = [hasOwnProperty(React2, obj2), ];
  if (isLoading) {
    tmp4Result2 = tmp4(_false, { size: "small" });
  } else if (isConnected) {
    const obj6 = { style: tmp.connectedStatus, children: items3 };
    const obj7 = { variant: "text-sm/medium", color: "text-feedback-positive", children: intl2.string(intl3.t["LV+CXH"]) };
    const Text = tmp5(4832).Text;
    intl2 = tmp5(1115).intl;
    items3 = [React3(Text, obj7), React3(CircleCheckIcon.CircleCheckIcon, { size: "sm", color: "status-positive" })];
    tmp4Result2 = tmp2(tmp3, obj6);
  } else {
    const obj8 = { variant: "primary", size: "sm", onPress: onConnect, text: intl.string(intl3.t.S0W8Z5), disabled: !canConnect };
    const Button = tmp5(5281).Button;
    intl = tmp5(1115).intl;
    tmp4Result2 = tmp4(Button, obj8);
  }
  items2[1] = tmp4Result2;
  return hasOwnProperty(React2, obj);
};
