// Module ID: 16509
// Function ID: 16510
// Name: UserProfileWidgetsEmptyState
// Dependencies: [19, 17, 21, 5009, 575, 5619, 1114, 5629, 2]
// Exports: default

// Module 16509 (UserProfileWidgetsEmptyState)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1114 */;
import Text_Text from "Text/Text" /* 5619 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, textContainer: obj3, centeredText: { textAlign: "center" } };
obj2 = { paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_24, alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { alignSelf: "stretch", gap: nativeDefault.space.PX_8 };
let closure_5 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetsEmptyState.tsx");

export default function UserProfileWidgetsEmptyState() {
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  const tmp = closure_5();
  const obj = { style: tmp.container, children: items1 };
  const obj2 = { style: tmp.textContainer, children: items };
  const obj3 = { variant: "heading-md/semibold", color: "text-strong", style: tmp.centeredText, children: intl.string(intl4.t["oqalC+"]) };
  const Heading = Text_Text.Heading;
  intl = intl4.intl;
  items = [_false(Heading, obj3), ];
  const obj4 = { variant: "text-sm/normal", color: "text-default", style: tmp.centeredText, children: intl2.string(intl4.t.O9SQ1c) };
  const Text = Text_Text.Text;
  intl2 = intl4.intl;
  items[1] = _false(Text, obj4);
  items1 = [React3(View, obj2), ];
  const obj5 = {
    variant: "secondary",
    text: intl3.string(intl4.t["/NKLK5"]),
    onPress() {

    }
  };
  const Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items1[1] = _false(Button, obj5);
  return React3(View, obj);
};
