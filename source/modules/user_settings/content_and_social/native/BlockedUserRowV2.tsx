// Module ID: 13588
// Function ID: 102994
// Name: handleUnblockUser
// Dependencies: []
// Exports: default

// Module 13588 (handleUnblockUser)
function handleUnblockUser(id) {
  importDefault(dependencyMap[3]).unblockUser(id, { location: "blocked-users-list-mobile-v2" });
}
function BlockedUserRow(userRecord) {
  userRecord = userRecord.userRecord;
  const arg1 = userRecord;
  const importDefault = importDefault(dependencyMap[4])().analyticsLocations;
  let obj = { 9223372036854775807: "REMOTE_AUTH_CANCEL", -9223372036854775808: "SOLID", -9223372036854775808: "isUnicodeVariantSubtag", 0: "r", 9223372036854775807: "DEFAULT_PROFILE_EFFECT_WH_RATIO", 0: "y" };
  obj = { user: userRecord, guildId: undefined, size: arg1(dependencyMap[6]).AvatarSizes.REFRESH_MEDIUM_32 };
  obj.icon = jsx(arg1(dependencyMap[6]).Avatar, obj);
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
  const intl = arg1(dependencyMap[7]).intl;
  obj.label = intl.string(arg1(dependencyMap[7]).t.XyHpKH);
  const items = [obj];
  obj.accessibilityActions = items;
  obj.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
    if ("unblock" === nativeEvent.nativeEvent.actionName) {
      callback(userRecord.id);
    }
  };
  obj.onPress = function onPress() {
    return analyticsLocations(closure_2[8])({ userId: userRecord.id, sourceAnalyticsLocations: analyticsLocations });
  };
  const obj1 = {};
  const intl2 = arg1(dependencyMap[7]).intl;
  obj1.text = intl2.string(arg1(dependencyMap[7]).t.PR/xUz);
  obj1.onPress = function onPress() {
    callback(userRecord.id);
  };
  obj.trailing = jsx(arg1(dependencyMap[9]).Button, obj1);
  return jsx(arg1(dependencyMap[5]).TableRow, obj);
}
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/user_settings/content_and_social/native/BlockedUserRowV2.tsx");

export default function ConnectedBlockedUserRow(userId) {
  const arg1 = userId.userId;
  let obj = arg1(dependencyMap[10]);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => user.getUser(userId));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { userRecord: stateFromStores };
    tmp2 = <BlockedUserRow {...obj} />;
  }
  return tmp2;
};
