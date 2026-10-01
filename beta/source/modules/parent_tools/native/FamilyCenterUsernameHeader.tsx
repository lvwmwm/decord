// Module ID: 14428
// Function ID: 14429
// Name: FamilyCenterUsernameHeader
// Dependencies: [19, 17, 21, 4836, 4678, 4832, 2]
// Exports: default

// Module 14428 (FamilyCenterUsernameHeader)
import react_native from "react-native" /* 17 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import Text_Text from "Text/Text" /* 4832 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ container: { justifyContent: "center" } });
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterUsernameHeader.tsx");

export default function FamilyCenterUsernameHeader(user) {
  let Text;
  let items;
  let obj4;
  user = user.user;
  const tmp = closure_6();
  const obj = UserUtilsDefault;
  const name = obj.useName(user);
  const obj3 = { style: tmp.container, children: hasOwnProperty(Text, obj4) };
  const obj2 = UserUtilsDefault;
  const combined = " (@" + obj2.getUserTag(user, { decoration: "never" }) + ")";
  obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: items };
  items = [name, ];
  Text = Text_Text.Text;
  items[1] = React3(Text_Text.Text, { variant: "text-md/medium", color: "text-muted", lineClamp: 1, children: combined });
  return React3(View, obj3);
};
