// Module ID: 10611
// Function ID: 10612
// Name: UserProfileCustomStatusActionSheet
// Dependencies: [19, 17, 1372, 6629, 21, 4836, 576, 504, 10612, 4988, 1115, 10613, 7703, 10574, 2]
// Exports: default

// Module 10611 (UserProfileCustomStatusActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4988 */;
import HeaderAvatarDefault from "HeaderAvatar" /* 7703 */;
import UserProfileCustomStatusBubbleDefault from "UserProfileCustomStatusBubble" /* 10574 */;
import useCustomStatusActivityForUserDefault from "useCustomStatusActivityForUser" /* 10612 */;
import UserProfileStackedActionSheetDefault from "UserProfileStackedActionSheet" /* 10613 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 6629 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let AVATAR_CONTAINER_SIZE;
let AVATAR_CUSTOM_STATUS_GAP;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ AVATAR_CONTAINER_SIZE, AVATAR_CUSTOM_STATUS_GAP } = Constants);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { statusPreviewContainer: obj2, avatarContainer: { height: AVATAR_CONTAINER_SIZE, width: AVATAR_CONTAINER_SIZE, alignItems: "center", justifyContent: "center" }, avatarStatus: obj3, customStatusBubble: obj4 };
obj2 = { flexDirection: "row", columnGap: AVATAR_CUSTOM_STATUS_GAP, marginHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj4 = { marginTop: AVATAR_CONTAINER_SIZE / 2 + 10, flexShrink: 1, flexGrow: 1 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileCustomStatusActionSheet.tsx");

export default function UserProfileCustomStatusActionSheet(user) {
  let channelId;
  let guildId;
  let items2;
  let obj5;
  let obj7;
  let previewEmoji;
  let previewText;
  let stringResult;
  user = user.user;
  ({ guildId, channelId, previewEmoji, previewText } = user);
  const tmp = closure_7();
  const items = [UserStore];
  const items1 = [user];
  const obj = user(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id === user.id;
  }, items1);
  const tmp6 = useCustomStatusActivityForUserDefault(user.id);
  const obj2 = NicknameUtilsDefault;
  const name = obj2.useName(guildId, channelId, user);
  const intl = user(1115).intl;
  if (stateFromStores) {
    stringResult = intl.string(tmp2(1115).t.AHoLf4);
  } else {
    const obj3 = { username: name };
    stringResult = intl.formatToPlainString(tmp2(1115).t["pP5Aa+"], obj3);
  }
  const obj4 = { title: stringResult, children: closure_6(View, obj5) };
  obj5 = { style: tmp.statusPreviewContainer, children: items2 };
  const obj6 = { style: tmp.avatarContainer, children: closure_5(HeaderAvatarDefault, obj7) };
  obj7 = { user, statusStyle: tmp.avatarStatus };
  const tmp5Result = UserProfileStackedActionSheetDefault;
  items2 = [closure_5(View, obj6), ];
  const obj8 = { customStatusActivity: tmp6, hasCustomProfileTheme: false, showFullStatus: true, style: tmp.customStatusBubble, previewEmoji, previewText };
  items2[1] = closure_5(UserProfileCustomStatusBubbleDefault, obj8);
  return closure_5(tmp5Result, obj4);
};
