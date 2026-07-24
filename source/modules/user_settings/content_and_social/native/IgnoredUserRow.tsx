// Module ID: 13763
// Function ID: 105525
// Name: handleUnignoreUser
// Dependencies: [31, 1849, 33, 8962, 5462, 5165, 1273, 1212, 8537, 4543, 566, 2]
// Exports: default

// Module 13763 (handleUnignoreUser)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
function handleUnignoreUser(id) {
  importDefault(8962).unignoreUser(id, "ignored-users-list-mobile");
}
function IgnoredUserRow(userRecord) {
  userRecord = userRecord.userRecord;
  analyticsLocations = analyticsLocations(5462)().analyticsLocations;
  let obj = { icon: null, label: null, subLabel: null, labelLineClamp: 1, subLabelLineClamp: 1, accessibilityRole: "button" };
  obj = { source: userRecord.getAvatarSource(undefined), size: userRecord(1273).AvatarSizes.REFRESH_MEDIUM_32 };
  obj.icon = jsx(userRecord(1273).Avatar, { source: userRecord.getAvatarSource(undefined), size: userRecord(1273).AvatarSizes.REFRESH_MEDIUM_32 });
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
  obj = { name: "unignore" };
  const intl = userRecord(1212).intl;
  obj.label = intl.string(userRecord(1212).t["8wXU9B"]);
  const items = [obj];
  obj.accessibilityActions = items;
  obj.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
    if ("unignore" === nativeEvent.nativeEvent.actionName) {
      outer1_5(userRecord.id);
    }
  };
  obj.onPress = function onPress() {
    return analyticsLocations(outer1_2[8])({ userId: userRecord.id, sourceAnalyticsLocations: analyticsLocations });
  };
  const obj1 = { size: "sm", variant: "secondary" };
  const intl2 = userRecord(1212).intl;
  obj1.text = intl2.string(userRecord(1212).t["3GZE6a"]);
  obj1.onPress = function onPress() {
    outer1_5(userRecord.id);
  };
  obj.trailing = jsx(userRecord(4543).Button, { size: "sm", variant: "secondary" });
  return jsx(userRecord(5165).TableRow, { name: "unignore" });
}
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/content_and_social/native/IgnoredUserRow.tsx");

export default function ConnectedIgnoredUserRow(userId) {
  userId = userId.userId;
  let obj = userId(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.getUser(userId));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { userRecord: stateFromStores };
    tmp2 = <IgnoredUserRow userRecord={stateFromStores} />;
  }
  return tmp2;
};
