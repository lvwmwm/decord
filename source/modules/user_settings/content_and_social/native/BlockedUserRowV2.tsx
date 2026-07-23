// Module ID: 13709
// Function ID: 105183
// Name: handleUnblockUser
// Dependencies: [31, 1849, 33, 8923, 5464, 5165, 1273, 1212, 8492, 4543, 566, 2]
// Exports: default

// Module 13709 (handleUnblockUser)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
function handleUnblockUser(id) {
  importDefault(8923).unblockUser(id, { location: "blocked-users-list-mobile-v2" });
}
function BlockedUserRow(userRecord) {
  userRecord = userRecord.userRecord;
  analyticsLocations = analyticsLocations(5464)().analyticsLocations;
  let obj = { icon: null, label: null, subLabel: null, labelLineClamp: 1, subLabelLineClamp: 1, accessibilityRole: "button" };
  obj = { user: userRecord, guildId: undefined, size: userRecord(1273).AvatarSizes.REFRESH_MEDIUM_32 };
  obj.icon = jsx(userRecord(1273).Avatar, { user: userRecord, guildId: undefined, size: userRecord(1273).AvatarSizes.REFRESH_MEDIUM_32 });
  let tmp2 = null != userRecord;
  if (tmp2) {
    let username = userRecord.globalName;
    if (null == username) {
      username = userRecord.username;
    }
    tmp2 = username;
  }
  obj.label = tmp2;
  let globalName;
  if (null != userRecord) {
    globalName = userRecord.globalName;
  }
  let tmp4;
  if (null != globalName) {
    username = undefined;
    if (null != userRecord) {
      username = userRecord.username;
    }
    tmp4 = username;
  }
  obj.subLabel = tmp4;
  obj = { name: "unblock" };
  const intl = userRecord(1212).intl;
  obj.label = intl.string(userRecord(1212).t.XyHpKH);
  const items = [obj];
  obj.accessibilityActions = items;
  obj.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
    if ("unblock" === nativeEvent.nativeEvent.actionName) {
      outer1_5(userRecord.id);
    }
  };
  obj.onPress = function onPress() {
    return analyticsLocations(outer1_2[8])({ userId: userRecord.id, sourceAnalyticsLocations: analyticsLocations });
  };
  const obj1 = { size: "sm", variant: "secondary" };
  const intl2 = userRecord(1212).intl;
  obj1.text = intl2.string(userRecord(1212).t["PR/xUz"]);
  obj1.onPress = function onPress() {
    outer1_5(userRecord.id);
  };
  obj.trailing = jsx(userRecord(4543).Button, { size: "sm", variant: "secondary" });
  return jsx(userRecord(5165).TableRow, { name: "unblock" });
}
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/content_and_social/native/BlockedUserRowV2.tsx");

export default function ConnectedBlockedUserRow(userId) {
  userId = userId.userId;
  let obj = userId(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.getUser(userId));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { userRecord: stateFromStores };
    tmp2 = <BlockedUserRow userRecord={stateFromStores} />;
  }
  return tmp2;
};
