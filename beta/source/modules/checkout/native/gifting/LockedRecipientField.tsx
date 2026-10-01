// Module ID: 10316
// Function ID: 10317
// Name: LockedRecipientField
// Dependencies: [19, 17, 21, 4836, 576, 1177, 4832, 4678, 2]
// Exports: default

// Module 10316 (LockedRecipientField)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import Text_Text from "Text/Text" /* 4832 */;
import react from "react" /* 19 */;
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
let obj = { container: obj2, avatar: obj3 };
obj2 = { flexDirection: "row", alignItems: "center", marginLeft: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginEnd: nativeDefault.space.PX_8 };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkout/native/gifting/LockedRecipientField.tsx");

export default function LockedRecipientField(user) {
  let items;
  let obj4;
  user = user.user;
  const tmp = closure_6();
  const obj = { style: tmp.container, children: items };
  const obj2 = { style: tmp.avatar, user, guildId: "Array", size: native.AvatarSizes.NORMAL };
  const Avatar = native.Avatar;
  items = [React3(Avatar, obj2), ];
  const obj3 = { variant: "text-md/semibold", children: obj4.getName(user) };
  const Text = Text_Text.Text;
  obj4 = UserUtilsDefault;
  items[1] = React3(Text, obj3);
  return hasOwnProperty(View, obj);
};
