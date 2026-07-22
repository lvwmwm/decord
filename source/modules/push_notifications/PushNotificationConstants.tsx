// Module ID: 5590
// Function ID: 47491
// Name: str2
// Dependencies: []
// Exports: getDevicePushProvider

// Module 5590 (str2)
const _module = require(dependencyMap[0]);
const constants = _module.getConstants();
let Identifier;
if (null != constants) {
  Identifier = constants.Identifier;
}
let str = "";
if (null != Identifier) {
  str = Identifier;
}
const _module1 = require(dependencyMap[1]);
const isQuestReleaseResult = _module1.isQuestRelease();
const startsWithResult = str.startsWith("com.discord.kodiak");
const startsWithResult1 = str.startsWith("com.hammerandchisel.discord.local");
let closure_3 = "meta_horizon";
let str2 = "apns_internal";
if (!startsWithResult) {
  let str3 = "apns";
  if (startsWithResult1) {
    str3 = "apns_local";
  }
  str2 = str3;
}
let str4 = "apns_internal_voip";
if (!startsWithResult) {
  let str5 = "apns_voip";
  if (startsWithResult1) {
    str5 = "apns_local_voip";
  }
  str4 = str5;
}
const _module2 = require(dependencyMap[3]);
const result = _module2.fileFinishedImporting("modules/push_notifications/PushNotificationConstants.tsx");

export const BUNDLE_ID = str;
export const IS_QUEST_RELEASE = isQuestReleaseResult;
export const DEVICE_PUSH_PROVIDER_ANDROID = "gcm";
export const DEVICE_PUSH_PROVIDER_META_HORIZON = "meta_horizon";
export const DEVICE_PUSH_PROVIDER_IOS = str2;
export const DEVICE_PUSH_VOIP_PROVIDER = str4;
export const getDevicePushProvider = function getDevicePushProvider() {
  if (isQuestReleaseResult) {
    let str = closure_3;
  } else {
    str = "gcm";
    if (!obj.isAndroid()) {
      str = str2;
    }
    const obj = require(dependencyMap[2]);
  }
  return str;
};
export const NotificationTypes = { REMINDER: "reminder", TOP_MESSAGE_PUSH: "top_messages_push", TRENDING_CONTENT_PUSH: "trending_content_push" };
