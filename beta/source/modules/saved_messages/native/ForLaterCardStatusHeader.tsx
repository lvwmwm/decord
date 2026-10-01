// Module ID: 11699
// Function ID: 11700
// Name: ForLaterCardStatusHeader
// Dependencies: [17, 21, 4836, 576, 4832, 2]
// Exports: ForLaterCardStatusHeader

// Module 11699 (ForLaterCardStatusHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, icon: obj3, label: { flexShrink: 1 }, actionsContainer: { marginVertical: -4, marginLeft: "auto" } };
obj2 = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg, overflow: "hidden", gap: 8, marginHorizontal: -16, marginTop: -16, paddingHorizontal: 16, paddingVertical: 12 };
createStyles = createStyles.createStyles;
obj3 = { padding: 6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterCardStatusHeader.tsx");

export const ForLaterCardStatusHeader = function ForLaterCardStatusHeader(isCritical) {
  let INTERACTIVE_TEXT_DEFAULT;
  let IconComponent;
  let actions;
  let items;
  let label;
  let lineClamp;
  let flag = isCritical.isCritical;
  ({ IconComponent, label } = isCritical);
  if (flag === undefined) {
    flag = false;
  }
  ({ lineClamp, actions } = isCritical);
  const tmp = closure_6();
  const obj = { style: tmp.container, children: items };
  const obj2 = { style: tmp.icon, children: React3(IconComponent, { size: "xxs", color: INTERACTIVE_TEXT_DEFAULT }) };
  const colors = nativeDefault.colors;
  const tmp2 = hasOwnProperty;
  if (flag) {
    INTERACTIVE_TEXT_DEFAULT = colors.TEXT_FEEDBACK_CRITICAL;
  } else {
    INTERACTIVE_TEXT_DEFAULT = colors.INTERACTIVE_TEXT_DEFAULT;
  }
  items = [React3(View, obj2), , ];
  let str = "mobile-text-heading-primary";
  const Text = Text_Text.Text;
  if (flag) {
    str = "text-feedback-critical";
  }
  const obj3 = { variant: "text-md/semibold", color: str, style: tmp.label, lineClamp, children: label };
  items[1] = React3(Text, obj3);
  const obj4 = { style: tmp.actionsContainer, children: actions };
  items[2] = React3(View, obj4);
  return tmp2(View, obj);
};
