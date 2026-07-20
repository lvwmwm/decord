// Module ID: 13582
// Function ID: 102967
// Name: handleUnignoreUser
// Dependencies: []
// Exports: default

// Module 13582 (handleUnignoreUser)
function handleUnignoreUser(closure_3) {
  importDefault(dependencyMap[3]).unignoreUser(closure_3, "ignored-users-list-mobile");
}
function IgnoredUserRow(userRecord) {
  userRecord = userRecord.userRecord;
  const arg1 = userRecord;
  const importDefault = importDefault(dependencyMap[4])().analyticsLocations;
  let obj = { soundsharing: -0.000030534500099044264, ExpressiveGradient: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000015138193252447025, handleResetDismissibilityClick: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003083525134, fromDiscoverableGuildServer: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006365987373, allowScreenCaptureKit: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000015769312288986266, GUILD_TEMPLATE: 9611942652933636000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
  obj = { source: userRecord.getAvatarSource(undefined), size: arg1(dependencyMap[6]).AvatarSizes.REFRESH_MEDIUM_32 };
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
  obj = { name: "unignore" };
  const intl = arg1(dependencyMap[7]).intl;
  obj.label = intl.string(arg1(dependencyMap[7]).t.8wXU9B);
  const items = [obj];
  obj.accessibilityActions = items;
  obj.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
    if ("unignore" === nativeEvent.nativeEvent.actionName) {
      callback(userRecord.id);
    }
  };
  obj.onPress = function onPress() {
    return analyticsLocations(closure_2[8])({ userId: userRecord.id, sourceAnalyticsLocations: analyticsLocations });
  };
  const obj1 = {};
  const intl2 = arg1(dependencyMap[7]).intl;
  obj1.text = intl2.string(arg1(dependencyMap[7]).t.3GZE6a);
  obj1.onPress = function onPress() {
    callback(userRecord.id);
  };
  obj.trailing = jsx(arg1(dependencyMap[9]).Button, obj1);
  return jsx(arg1(dependencyMap[5]).TableRow, obj);
}
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/user_settings/content_and_social/native/IgnoredUserRow.tsx");

export default function ConnectedIgnoredUserRow(userId) {
  const arg1 = userId.userId;
  let obj = arg1(dependencyMap[10]);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => user.getUser(userId));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { userRecord: stateFromStores };
    tmp2 = <IgnoredUserRow {...obj} />;
  }
  return tmp2;
};
