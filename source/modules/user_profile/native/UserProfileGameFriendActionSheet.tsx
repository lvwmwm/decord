// Module ID: 11985
// Function ID: 92615
// Name: GameFriendApplicationRow
// Dependencies: [5, 57, 31, 27, 3767, 653, 33, 4130, 689, 11653, 5502, 5119, 1273, 4126, 11986, 5470, 4319, 8923, 3830, 4098, 5500, 5186, 1212, 2]
// Exports: default

// Module 11985 (GameFriendApplicationRow)
import ME from "ME";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { RelationshipTypes } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_6;
let closure_7;
const require = arg1;
function GameFriendApplicationRow(application) {
  application = application.application;
  const userId = application.userId;
  const userDisplayName = application.userDisplayName;
  const tmp = _createForOfIteratorHelperLoose();
  const items = [, , , ];
  ({ id: arr[0], name: arr[1] } = application);
  items[2] = userDisplayName;
  items[3] = userId;
  const callback = React.useCallback(() => {
    let obj = application(userDisplayName[9]);
    obj = { userDisplayName, userId, applicationId: application.id, gameName: application.name };
    const result = obj.confirmRemoveGameFriend(obj);
  }, items);
  let obj = { trailing: callback3(application(userDisplayName[11]).XSmallIcon, { size: "md", color: "redesign-button-tertiary-text" }) };
  obj = { style: tmp.applicationNameWrapper };
  obj = { style: tmp.gameIcon, resizeMode: "contain" };
  const obj1 = {};
  const iconURL = application.getIconURL(32);
  let str = "";
  if (null != iconURL) {
    str = iconURL;
  }
  obj1.uri = str;
  obj.source = obj1;
  obj.disableColor = true;
  const items1 = [callback3(application(userDisplayName[12]).Icon, obj, application.id), ];
  const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: application.name };
  items1[1] = callback3(application(userDisplayName[13]).Text, obj2);
  obj.children = items1;
  obj.label = closure_11(closure_7, obj);
  obj.onPress = callback;
  return callback3(application(userDisplayName[10]).ActionSheetRow, obj, application.id);
}
({ ActivityIndicator: closure_6, View: closure_7 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = { applicationNameWrapper: { flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: 12 } };
_createForOfIteratorHelperLoose = { width: 32, height: 32, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.gameIcon = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("result").fileFinishedImporting("modules/user_profile/native/UserProfileGameFriendActionSheet.tsx");

export default function UserProfileGameFriendActionSheet(user) {
  let channelId;
  let guildId;
  user = user.user;
  ({ guildId, channelId } = user);
  let obj = user(memo[14]);
  const gameFriendsForUser = obj.useGameFriendsForUser(user.id);
  const items = [gameFriendsForUser];
  memo = React.useMemo(() => gameFriendsForUser.map((applicationId) => applicationId.applicationId), items);
  let obj1 = gameFriendsForUser(memo[16]);
  let callback = obj1.useName(guildId, channelId, user);
  let first = callback2(React.useState(() => {
    if (!outer1_8.isFriend(user.id)) {
      if (!outer1_8.isBlockedOrIgnored(user.id)) {
        const relationshipType = outer1_8.getRelationshipType(user.id);
        let tmp7 = relationshipType !== outer1_9.PENDING_OUTGOING;
        if (tmp7) {
          tmp7 = relationshipType !== outer1_9.PENDING_INCOMING;
        }
        return tmp7;
      }
    }
    return false;
  }), 1)[0];
  const tmp4 = callback2(React.useState(false), 2);
  callback2 = tmp4[1];
  const tmp5 = callback2(React.useState(false), 2);
  React = tmp6;
  // CreateGeneratorClosureLongIndex (0x67)
  const items1 = [user.id];
  const items2 = [memo];
  callback = React.useCallback(callback(tmp6), items1);
  const effect = React.useEffect(() => {
    if (0 === memo.length) {
      gameFriendsForUser(memo[19]).hideActionSheet();
      const obj = gameFriendsForUser(memo[19]);
    }
  }, items2);
  obj = {};
  obj = {};
  const intl = user(memo[22]).intl;
  obj.title = intl.string(user(memo[22]).t["Uv/eTx"]);
  obj.header = callback3(user(memo[21]).BottomSheetTitleHeader, obj);
  obj1 = {};
  const intl2 = user(memo[22]).intl;
  obj1.title = intl2.string(user(memo[22]).t.YpCiMt);
  obj1.hasIcons = false;
  obj1.children = gameFriendsForUser(memo[15])(memo).map((application) => {
    let tmp = null != application;
    if (tmp) {
      const obj = { application, userDisplayName: ME, userId: user.id };
      tmp = outer1_10(outer1_13, obj, application.id);
    }
    return tmp;
  });
  const items3 = [callback3(user(memo[10]).ActionSheetRow.Group, obj1), ];
  if (first) {
    const obj2 = {};
    const intl3 = user(memo[22]).intl;
    obj2.title = intl3.string(user(memo[22]).t.GbsGCp);
    obj2.hasIcons = false;
    const obj3 = {};
    const intl4 = user(memo[22]).intl;
    obj3.label = intl4.string(user(memo[22]).t.LAcY7m);
    const intl5 = user(memo[22]).intl;
    obj3.subLabel = intl5.string(user(memo[22]).t.YTvOUx);
    obj3.onPress = callback;
    obj3.disabled = tmp4[0];
    let tmp14 = null;
    if (tmp5[0]) {
      tmp14 = callback3(closure_6, {});
    }
    obj3.trailing = tmp14;
    obj2.children = callback3(user(memo[10]).ActionSheetRow, obj3);
    first = callback3(user(memo[10]).ActionSheetRow.Group, obj2);
    const tmp10 = callback3;
    const tmp13 = callback3;
  }
  items3[1] = first;
  obj.children = items3;
  return closure_11(user(memo[20]).ActionSheet, obj);
};
