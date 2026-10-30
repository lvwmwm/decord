// Module ID: 16771
// Function ID: 16772
// Name: FamilyCenterRequestorDetails
// Dependencies: [19, 17, 21, 5009, 1188, 575, 8361, 16741, 5619, 2]
// Exports: default

// Module 16771 (FamilyCenterRequestorDetails)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 5619 */;
import useUserLinks from "useUserLinks" /* 8361 */;
import FamilyCenterUsernameHeaderDefault from "FamilyCenterUsernameHeader" /* 16741 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { display: "flex", flexDirection: "row", flexGrow: 1, flexShrink: 1 }, avatar: obj2, detailsContainer: obj3 };
obj2 = { borderRadius: native.AVATAR_SIZE_MAP[native.AvatarSizes.NORMAL] / 2, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
obj3 = { paddingLeft: nativeDefault.space.PX_12, paddingRight: nativeDefault.space.PX_4, flexGrow: 1, flexShrink: 1 };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterRequestorDetails.tsx");

export default function FamilyCenterRequestorDetails(otherUser) {
  let items;
  let items1;
  otherUser = otherUser.otherUser;
  const status = otherUser.status;
  const tmp = closure_6();
  const obj2 = { style: tmp.container, children: items };
  const obj = useUserLinks;
  const linkTimestampText = obj.useLinkTimestampText(otherUser.id, status);
  const obj3 = { avatarStyle: tmp.avatar, user: otherUser, guildId: "HermesInternal", disablePlaceholder: null, avatarDecoration: otherUser.avatarDecoration };
  items = [React3(native.Avatar, obj3), ];
  const obj4 = { style: tmp.detailsContainer, children: items1 };
  items1 = [React3(FamilyCenterUsernameHeaderDefault, { user: otherUser }), React3(Text_Text.Text, { variant: "text-xs/semibold", color: "text-muted", children: linkTimestampText })];
  items[1] = hasOwnProperty(View, obj4);
  return hasOwnProperty(View, obj2);
};
