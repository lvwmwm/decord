// Module ID: 11895
// Function ID: 92096
// Name: UserProfileCustomStatusActionSheet
// Dependencies: [6851, 566, 2, 31, 27, 5510, 33, 4126, 1450, 2, 5, 57, 31, 7914, 653]
// Exports: default

// Module 11895 (UserProfileCustomStatusActionSheet)
import "_isNativeReflectConstruct";
import { View } from "initialize";
import result2 from "result2";
import module_31 from "module_31";
import get ActivityIndicator from "get ActivityIndicator";
import ARBITRARY_LARGE_OFFSET from "ARBITRARY_LARGE_OFFSET";
import ME from "ME";

const AVATAR_CONTAINER_SIZE = module_31.AVATAR_CONTAINER_SIZE;
({ jsx: closure_5, jsxs: closure_6 } = get_ActivityIndicator);
ARBITRARY_LARGE_OFFSET = {};
ARBITRARY_LARGE_OFFSET = { flexDirection: "row", columnGap: module_31.AVATAR_CUSTOM_STATUS_GAP, marginHorizontal: require("module_33").space.PX_16 };
ARBITRARY_LARGE_OFFSET.statusPreviewContainer = ARBITRARY_LARGE_OFFSET;
ARBITRARY_LARGE_OFFSET.avatarContainer = { height: AVATAR_CONTAINER_SIZE, width: AVATAR_CONTAINER_SIZE, alignItems: "center", justifyContent: "center" };
ARBITRARY_LARGE_OFFSET.avatarStatus = { backgroundColor: require("module_33").colors.MOBILE_ACTIONSHEET_BACKGROUND };
ARBITRARY_LARGE_OFFSET.customStatusBubble = { marginTop: AVATAR_CONTAINER_SIZE / 2 + 10 };
ARBITRARY_LARGE_OFFSET = ARBITRARY_LARGE_OFFSET.createStyles(ARBITRARY_LARGE_OFFSET);
const result = ME.fileFinishedImporting("modules/user_profile/native/UserProfileCustomStatusActionSheet.tsx");

export default function UserProfileCustomStatusActionSheet(user) {
  let channelId;
  let guildId;
  let previewEmoji;
  let previewText;
  user = user.user;
  const arg1 = user;
  ({ guildId, channelId, previewEmoji, previewText } = user);
  const tmp = ARBITRARY_LARGE_OFFSET();
  let obj = arg1(dependencyMap[7]);
  const items = [result2];
  const items1 = [user];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const currentUser = currentUser.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    return id === user.id;
  }, items1);
  let obj1 = importDefault(dependencyMap[9]);
  const name = obj1.useName(guildId, channelId, user);
  const intl = arg1(dependencyMap[10]).intl;
  if (stateFromStores) {
    let stringResult = intl.string(tmp5(tmp6[10]).t.AHoLf4);
  } else {
    obj = { username: name };
    stringResult = intl.formatToPlainString(tmp5(tmp6[10]).t.pP5Aa+, obj);
  }
  obj = { title: stringResult };
  obj1 = { style: tmp.statusPreviewContainer };
  const obj2 = { style: tmp.avatarContainer };
  const tmp3 = importDefault(dependencyMap[8])(user.id);
  obj2.children = callback(importDefault(dependencyMap[12]), { user, statusStyle: tmp.avatarStatus });
  const items2 = [callback(View, obj2), callback(importDefault(dependencyMap[13]), { customStatusActivity: tmp3, style: tmp.customStatusBubble, previewEmoji, previewText })];
  obj1.children = items2;
  obj.children = callback2(View, obj1);
  return callback(importDefault(dependencyMap[11]), obj);
};
