// Module ID: 17604
// Function ID: 17605
// Name: ActionableNotice
// Dependencies: [19, 17, 21, 4836, 4832, 5281, 2]
// Exports: default

// Module 17604 (ActionableNotice)
import react_native from "react-native" /* 17 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles({ container: { flexDirection: "row", paddingVertical: 12, alignItems: "center" }, message: { marginEnd: 27, flex: 3 }, actionButton: { flexGrow: 0, alignSelf: "center" } });
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/ActionableNotice.tsx");

export default function ActionableNotice(arg0) {
  let Button;
  let ctaMessage;
  let disabled;
  let items;
  let items1;
  let message;
  let obj4;
  let onClick;
  let style;
  let submitting;
  ({ submitting, disabled } = arg0);
  ({ style, message, ctaMessage, onClick } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = closure_5();
  const obj = { style: items, children: items1 };
  items = [style, tmp.container];
  items1 = [, ];
  const obj2 = { style: tmp.message, variant: "text-sm/medium", color: "text-default", children: message };
  items1[0] = _false(Text_Text.Text, obj2);
  const obj3 = { style: tmp.actionButton, children: _false(Button, obj4) };
  obj4 = { size: "sm", onPress: onClick, disabled: submitting, text: ctaMessage };
  Button = components_Button_Button.Button;
  const tmp2 = React3;
  if (!submitting) {
    submitting = disabled;
  }
  items1[1] = _false(View, obj3);
  return tmp2(View, obj);
};
