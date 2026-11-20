// Module ID: 7446
// Function ID: 7447
// Name: UserProfileCardTitle
// Dependencies: [19, 17, 21, 4794, 575, 5385, 2]
// Exports: default

// Module 7446 (UserProfileCardTitle)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5385 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4794 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
({ Pressable: c2, View: c3 } = react_native);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { title: obj2, text: { flexShrink: 1, minWidth: 0 } };
obj2 = { flexDirection: "row", alignItems: "center", flexShrink: 1, minWidth: 0, gap: nativeDefault.space.PX_4 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileCardTitle.tsx");

export default function UserProfileCardTitle(arg0) {
  let leadingIcon;
  let onPress;
  let str;
  let title;
  let tmp4Result;
  let trailingIcon;
  ({ title, onPress } = arg0);
  ({ leadingIcon, trailingIcon } = arg0);
  const tmp = closure_7();
  const items = [leadingIcon, , ];
  const obj = { style: tmp.text, accessibilityRole: str, variant: "body-sm/medium", color: "text-strong", lineClamp: 1, children: title };
  str = undefined;
  const Text = Text_Text.Text;
  const tmp2 = metroRequire;
  const tmp3 = hasOwnProperty;
  if (null == onPress) {
    str = "header";
  }
  const obj2 = { children: items };
  items[1] = React3(Text, obj);
  items[2] = trailingIcon;
  const tmp2Result = tmp2(tmp3, obj2);
  if (null != onPress) {
    const obj3 = { style: tmp.title, onPress, accessibilityRole: "button", accessibilityLabel: title, children: tmp2Result };
    tmp4Result = tmp4(React2, obj3);
  } else {
    const obj4 = { style: tmp.title, children: tmp2Result };
    tmp4Result = tmp4(_false, obj4);
  }
  return tmp4Result;
};
