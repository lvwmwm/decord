// Module ID: 11935
// Function ID: 92401
// Name: UserProfileCustomStatusActionSheet
// Dependencies: [31, 27, 1849, 5510, 33, 4130, 689, 566, 11920, 4319, 1212, 11664, 7967, 11925, 2]
// Exports: default

// Module 11935 (UserProfileCustomStatusActionSheet)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ARBITRARY_LARGE_OFFSET from "ARBITRARY_LARGE_OFFSET";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
const AVATAR_CONTAINER_SIZE = ARBITRARY_LARGE_OFFSET.AVATAR_CONTAINER_SIZE;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "row", columnGap: ARBITRARY_LARGE_OFFSET.AVATAR_CUSTOM_STATUS_GAP, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.statusPreviewContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.avatarContainer = { height: AVATAR_CONTAINER_SIZE, width: AVATAR_CONTAINER_SIZE, alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.avatarStatus = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
let obj2 = { marginTop: AVATAR_CONTAINER_SIZE / 2 + 10, flexShrink: 1, flexGrow: 1 };
_createForOfIteratorHelperLoose.customStatusBubble = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_profile/native/UserProfileCustomStatusActionSheet.tsx");

export default function UserProfileCustomStatusActionSheet(user) {
  let channelId;
  let guildId;
  let previewEmoji;
  let previewText;
  user = user.user;
  ({ guildId, channelId, previewEmoji, previewText } = user);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = user(566);
  const items = [_isNativeReflectConstruct];
  const items1 = [user];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const currentUser = outer1_4.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    return id === user.id;
  }, items1);
  let obj1 = importDefault(4319);
  const name = obj1.useName(guildId, channelId, user);
  const intl = user(1212).intl;
  if (stateFromStores) {
    let stringResult = intl.string(tmp5(1212).t.AHoLf4);
  } else {
    obj = { username: name };
    stringResult = intl.formatToPlainString(tmp5(1212).t["pP5Aa+"], obj);
  }
  obj = { title: stringResult };
  obj1 = { style: tmp.statusPreviewContainer };
  const obj2 = { style: tmp.avatarContainer };
  const tmp3 = importDefault(11920)(user.id);
  obj2.children = callback(importDefault(7967), { user, statusStyle: tmp.avatarStatus });
  const items2 = [callback(View, obj2), ];
  const obj4 = { customStatusActivity: tmp3, hasCustomProfileTheme: false, showFullStatus: true, style: tmp.customStatusBubble, previewEmoji, previewText };
  items2[1] = callback(importDefault(11925), obj4);
  obj1.children = items2;
  obj.children = callback2(View, obj1);
  return callback(importDefault(11664), obj);
};
