// Module ID: 6884
// Function ID: 54608
// Name: getRelativeTimestamp
// Dependencies: [6885, 3803, 21, 6883, 2]
// Exports: getRelativeTimestamp, incomingFriendRequestLocalItem, incomingGameFriendRequestLocalItem, isMentionItem, isRemoteAcked, mobileNativeUpdateAvailableLocalItem

// Module 6884 (getRelativeTimestamp)
const result = require("DISCORD_EPOCH").fileFinishedImporting("modules/notification_center/NotificationCenterUtils.tsx");

export const getRelativeTimestamp = function getRelativeTimestamp(extractTimestampResult, flag) {
  if (flag === undefined) {
    flag = true;
  }
  const obj = { since: extractTimestampResult };
  const tmp2 = require(6885) /* getDurationString */;
  obj.getFormatter = flag ? tmp2.getAbbreviatedFormatter : tmp2.getFullFormatter;
  return importDefault(6885)(obj);
};
export const isRemoteAcked = function isRemoteAcked(addResult, items2) {
  let acked = addResult.acked;
  if (!acked) {
    let tmp3 = items2 !== require(3803) /* explicitContentFromProto */.NOTIFICATION_CENTER_ACKED_BEFORE_ID_UNSET;
    if (tmp3) {
      tmp3 = importDefault(21).compare(items2, addResult.id) >= 0;
      const obj = importDefault(21);
    }
    acked = tmp3;
  }
  return acked;
};
export const incomingFriendRequestLocalItem = function incomingFriendRequestLocalItem(user, since, origin_application_id) {
  let obj = importDefault(21);
  const fromTimestampResult = obj.fromTimestamp(new Date(since).getTime());
  obj = { acked: false, forceUnacked: true, other_user: user, kind: "notification-center-item", local_id: "incoming_friend_requests_" + user.id + "_" + fromTimestampResult, deeplink: "https://discord.com/users/" + user.id, type: require(6883) /* NotificationCenterScenes */.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS, id: fromTimestampResult, applicationId: origin_application_id };
  return obj;
};
export const incomingGameFriendRequestLocalItem = function incomingGameFriendRequestLocalItem(user, since, applicationId) {
  let obj = importDefault(21);
  const fromTimestampResult = obj.fromTimestamp(new Date(since).getTime());
  obj = { acked: false, forceUnacked: true, other_user: user, kind: "notification-center-item", local_id: "incoming_game_friend_requests_" + user.id + "_" + fromTimestampResult, deeplink: "https://discord.com/users/" + user.id, type: require(6883) /* NotificationCenterScenes */.NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS, id: fromTimestampResult, applicationId };
  return obj;
};
export const mobileNativeUpdateAvailableLocalItem = function mobileNativeUpdateAvailableLocalItem(newBuild) {
  const obj = { acked: false, enableBadge: true, id: null, kind: "notification-center-item" };
  const obj2 = importDefault(21);
  obj.id = obj2.fromTimestamp(new Date().getTime());
  obj.local_id = "mobile_update_available_" + newBuild.build;
  obj.type = require(6883) /* NotificationCenterScenes */.NotificationCenterLocalItems.MOBILE_NATIVE_UPDATE_AVAILABLE;
  obj.deeplink = newBuild.urls.install.toString();
  return obj;
};
export const isMentionItem = function isMentionItem(addResult) {
  let tmp = addResult.type === require(6883) /* NotificationCenterScenes */.NotificationCenterItems.RECENT_MENTION;
  if (!tmp) {
    tmp = addResult.type === require(6883) /* NotificationCenterScenes */.NotificationCenterItems.REPLY_MENTION;
  }
  return tmp;
};
