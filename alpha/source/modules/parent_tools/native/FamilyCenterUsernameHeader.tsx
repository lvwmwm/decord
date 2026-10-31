// Module ID: 16783
// Function ID: 16784
// Name: FamilyCenterUsernameHeader
// Dependencies: [19, 17, 21, 5014, 5068, 5624, 2]
// Exports: default

// Module 16783 (FamilyCenterUsernameHeader)
import react_native from "react-native" /* 17 */;
import UserUtilsDefault from "UserUtils" /* 5068 */;
import Text_Text from "Text/Text" /* 5624 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
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
