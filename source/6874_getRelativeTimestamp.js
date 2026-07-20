// Module ID: 6874
// Function ID: 54541
// Name: getRelativeTimestamp
// Dependencies: []
// Exports: getRelativeTimestamp, incomingFriendRequestLocalItem, incomingGameFriendRequestLocalItem, isMentionItem, isRemoteAcked, mobileNativeUpdateAvailableLocalItem

// Module 6874 (getRelativeTimestamp)
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/notification_center/NotificationCenterUtils.tsx");

export const getRelativeTimestamp = function getRelativeTimestamp(extractTimestampResult, flag) {
  if (flag === undefined) {
    flag = true;
  }
  const obj = { since: extractTimestampResult };
  const tmp2 = require(dependencyMap[0]);
  obj.getFormatter = flag ? tmp2.getAbbreviatedFormatter : tmp2.getFullFormatter;
  return importDefault(dependencyMap[0])(obj);
};
export const isRemoteAcked = function isRemoteAcked(addResult, closure_1) {
  let acked = addResult.acked;
  if (!acked) {
    let tmp3 = closure_1 !== require(dependencyMap[1]).NOTIFICATION_CENTER_ACKED_BEFORE_ID_UNSET;
    if (tmp3) {
      tmp3 = importDefault(dependencyMap[2]).compare(closure_1, addResult.id) >= 0;
      const obj = importDefault(dependencyMap[2]);
    }
    acked = tmp3;
  }
  return acked;
};
export const incomingFriendRequestLocalItem = function incomingFriendRequestLocalItem(user, since, origin_application_id) {
  let obj = importDefault(dependencyMap[2]);
  const fromTimestampResult = obj.fromTimestamp(new Date(since).getTime());
  obj = { 9223372036854775807: null, 9223372036854775807: null, 9223372036854775807: null, "Bool(true)": null, other_user: user, local_id: "incoming_friend_requests_" + user.id + "_" + fromTimestampResult, deeplink: "https://discord.com/users/" + user.id, type: require(dependencyMap[3]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS, id: fromTimestampResult, applicationId: origin_application_id };
  return obj;
};
export const incomingGameFriendRequestLocalItem = function incomingGameFriendRequestLocalItem(user, since, applicationId) {
  let obj = importDefault(dependencyMap[2]);
  const fromTimestampResult = obj.fromTimestamp(new Date(since).getTime());
  obj = { 9223372036854775807: null, 9223372036854775807: null, 9223372036854775807: null, "Bool(true)": null, other_user: user, local_id: "incoming_game_friend_requests_" + user.id + "_" + fromTimestampResult, deeplink: "https://discord.com/users/" + user.id, type: require(dependencyMap[3]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS, id: fromTimestampResult, applicationId };
  return obj;
};
export const mobileNativeUpdateAvailableLocalItem = function mobileNativeUpdateAvailableLocalItem(newBuild) {
  const obj = { "Null": null, "Null": null, "Null": null, "Null": null };
  const obj2 = importDefault(dependencyMap[2]);
  obj.id = obj2.fromTimestamp(new Date().getTime());
  obj.local_id = "mobile_update_available_" + newBuild.build;
  obj.type = require(dependencyMap[3]).NotificationCenterLocalItems.MOBILE_NATIVE_UPDATE_AVAILABLE;
  obj.deeplink = newBuild.urls.install.toString();
  return obj;
};
export const isMentionItem = function isMentionItem(addResult) {
  let tmp = addResult.type === require(dependencyMap[3]).NotificationCenterItems.RECENT_MENTION;
  if (!tmp) {
    tmp = addResult.type === require(dependencyMap[3]).NotificationCenterItems.REPLY_MENTION;
  }
  return tmp;
};
