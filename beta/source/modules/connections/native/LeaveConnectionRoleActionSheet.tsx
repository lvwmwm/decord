// Module ID: 11067
// Function ID: 11068
// Name: LeaveConnectionRoleActionSheet
// Dependencies: [19, 17, 21, 4836, 6571, 4832, 1115, 5281, 2]
// Exports: default

// Module 11067 (LeaveConnectionRoleActionSheet)
import react_native from "react-native" /* 17 */;
import intl4 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6571 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let c3;
let closure_4;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles({ container: { padding: 12 }, marginTop: { marginTop: 8 }, button: { marginTop: 8, marginBottom: 16 } });
const result = size.fileFinishedImporting("modules/connections/native/LeaveConnectionRoleActionSheet.tsx");

export default function LeaveConnectionRoleActionSheet(onLeaveRolePressed) {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj2;
  let obj6;
  onLeaveRolePressed = onLeaveRolePressed.onLeaveRolePressed;
  const tmp = closure_5();
  const obj = { children: React3(View, obj2) };
  obj2 = { style: tmp.container, children: items };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  const obj3 = { variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl4.t.vytvJF) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items = [_false(Text, obj3), , ];
  const obj4 = { style: tmp.marginTop, variant: "text-md/normal", color: "text-default", children: intl2.string(intl4.t.caJwb5) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items[1] = _false(Text2, obj4);
  const obj5 = { style: tmp.button, children: _false(Button, obj6) };
  obj6 = { variant: "destructive", onPress: onLeaveRolePressed, text: intl3.string(intl4.t["+Oi4XF"]), grow: true };
  Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items[2] = _false(View, obj5);
  return _false(BottomSheet, obj);
};
