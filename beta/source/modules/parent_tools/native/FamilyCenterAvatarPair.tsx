// Module ID: 14458
// Function ID: 14459
// Name: FamilyCenterAvatarPair
// Dependencies: [19, 17, 1372, 21, 4836, 576, 563, 1177, 2]
// Exports: default

// Module 14458 (FamilyCenterAvatarPair)
import react_native from "react-native" /* 17 */;
import useStateFromStores from "useStateFromStores" /* 563 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { avatars: obj2, icon: { height: 24, width: 24, marginHorizontal: 16 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 8 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterAvatarPair.tsx");

export default function FamilyCenterAvatarPair(otherUser) {
  let currentUser;
  let iconSrc;
  let iconStyles;
  let items1;
  let items2;
  otherUser = otherUser.otherUser;
  ({ iconSrc, iconStyles } = otherUser);
  const tmp = closure_6();
  const items = [UserStore];
  const obj = useStateFromStores;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let tmp5 = null;
  if (undefined !== stateFromStores) {
    tmp5 = null;
    if (undefined !== otherUser) {
      const obj2 = { style: tmp.avatars, children: items1 };
      const obj3 = { size: native.AvatarSizes.LARGE_48, user: stateFromStores, guildId: "Array", avatarDecoration: stateFromStores.avatarDecoration };
      const Avatar = tmp2(1177).Avatar;
      items1 = [React3(Avatar, obj3), , ];
      const obj4 = { style: items2, size: native.Icon.Sizes.EXTRA_SMALL, source: iconSrc };
      items2 = [tmp.icon, iconStyles];
      const Icon = tmp2(1177).Icon;
      items1[1] = React3(Icon, obj4);
      const obj5 = { size: native.AvatarSizes.LARGE_48, user: otherUser, guildId: "Array", avatarDecoration: otherUser.avatarDecoration };
      const Avatar2 = tmp2(1177).Avatar;
      items1[2] = React3(Avatar2, obj5);
      tmp5 = hasOwnProperty(View, obj2);
    }
  }
  return tmp5;
};
