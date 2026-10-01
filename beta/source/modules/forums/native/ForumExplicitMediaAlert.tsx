// Module ID: 8698
// Function ID: 8699
// Name: ForumExplicitMediaAlert
// Dependencies: [19, 17, 21, 4836, 576, 5300, 4832, 1115, 5281, 8699, 2]
// Exports: default

// Module 8698 (ForumExplicitMediaAlert)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ExplicitMediaActionCreators from "ExplicitMediaActionCreators" /* 8699 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, title: obj3, body: obj4, buttonContainer: obj5, text: { textAlign: "center" } };
obj2 = { padding: nativeDefault.space.PX_16, alignItems: "stretch" };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_16 };
obj4 = { marginTop: nativeDefault.space.PX_16 };
obj5 = { marginVertical: nativeDefault.space.PX_16 };
let closure_6 = createStyles(obj);
let result = size.fileFinishedImporting("modules/forums/native/ForumExplicitMediaAlert.tsx");

export default function ForumExplicitMediaAlert(arg0) {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items1;
  let items2;
  let obj5;
  let obj7;
  let onClose;
  ({ channelId: require, messageId: importDefault, onClose } = arg0);
  const tmp = closure_6();
  let obj = { noDefaultButtons: true, style: tmp.container, onClose, children: items1 };
  const obj2 = { accessibilityRole: "header", variant: "heading-md/extrabold", color: "text-default", style: items, children: intl.string(require("intl").t.B3vFdU) };
  items = [, ];
  ({ title: arr[0], text: arr[1] } = tmp);
  const tmp2 = require("Alert");
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  items1 = [closure_4(Text, obj2), , , ];
  const obj3 = { style: items2, maxFontSizeMultiplier: 1, variant: "text-md/normal", children: intl2.string(require("intl").t.i4AbAS) };
  items2 = [, ];
  ({ body: arr3[0], text: arr3[1] } = tmp);
  const Text2 = require("Text/Text").Text;
  intl2 = require("intl").intl;
  items1[1] = closure_4(Text2, obj3);
  const obj4 = { style: tmp.buttonContainer, children: closure_4(Button, obj5) };
  obj5 = { variant: "primary", size: "md", text: intl3.string(require("intl").t.WAI6xu), onPress: onClose };
  Button = require("components/Button/Button").Button;
  intl3 = require("intl").intl;
  items1[2] = closure_4(View, obj4);
  const obj6 = { style: tmp.text, variant: "text-sm/medium", color: "text-muted", children: intl4.format(require("intl").t["APQGZ+"], obj7) };
  const Text3 = require("Text/Text").Text;
  intl4 = require("intl").intl;
  obj7 = {
    handleFalsePositiveHook() {
      onClose();
      const obj = ExplicitMediaActionCreators;
      const result = obj.handleSenderFalsePositiveFlow(require, importDefault);
    }
  };
  items1[3] = closure_4(Text3, obj6);
  return closure_5(tmp2, obj);
};
