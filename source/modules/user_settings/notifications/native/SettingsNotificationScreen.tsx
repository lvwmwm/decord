// Module ID: 14311
// Function ID: 109592
// Name: SystemNotificationsSubLabel
// Dependencies: [31, 27, 14312, 7662, 33, 4130, 689, 11450, 14313, 14314, 4126, 1212, 5167, 7507, 6829, 10095, 14315, 14316, 13550, 2]

// Module 14311 (SystemNotificationsSubLabel)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import { initializeAndroidNotificationSettingsStore as closure_5 } from "_initializeAndroidNotificationSettingsStore";
import { MobileSetting } from "MobileSetting";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function SystemNotificationsSubLabel() {
  const tmp = callback3();
  let obj = require(11450) /* _requestPushNotificationPermission */;
  let showReactivationPrompt = obj.useShowReactivationPrompt();
  let obj1 = importDefault(14313);
  let obj2 = require(14314) /* hasAndroidNotificationChannels */;
  let result = obj2.hasAndroidNotificationChannels();
  obj = {};
  if (result) {
    obj = { variant: "text-sm/medium", color: "text-muted" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.children = intl.string(require(1212) /* getSystemLocale */.t["/TZX1J"]);
    result = callback(require(4126) /* Text */.Text, obj);
  }
  const items = [result, ];
  if (showReactivationPrompt) {
    showReactivationPrompt = obj1.useConfig({ location: "SystemNotificationsSubLabel" }).inHoldout;
  }
  if (showReactivationPrompt) {
    obj1 = { style: tmp.card };
    obj2 = { border: "none", shadow: "none" };
    const obj3 = { style: tmp.cardContent };
    const obj4 = { color: importDefault(689).unsafe_rawColors.YELLOW_300 };
    const items1 = [callback(require(7507) /* CircleErrorIcon */.CircleErrorIcon, obj4), ];
    const obj5 = { style: tmp.text };
    const obj6 = { color: "text-default", variant: "text-sm/medium" };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj6.children = intl2.string(require(1212) /* getSystemLocale */.t.TAuasM);
    obj5.children = callback(require(4126) /* Text */.Text, obj6);
    items1[1] = callback(View, obj5);
    obj3.children = items1;
    obj2.children = callback2(View, obj3);
    obj1.children = callback(require(5167) /* getCardBackgroundToken */.Card, obj2);
    showReactivationPrompt = callback(View, obj1);
  }
  items[1] = showReactivationPrompt;
  obj.children = items;
  return callback2(closure_9, obj);
}
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let obj = {};
obj = { marginBottom: 8, borderColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.YELLOW_300, borderWidth: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
obj.card = obj;
obj.cardContent = { flexDirection: "row", alignItems: "center", gap: 8 };
obj.text = { flex: 1 };
let closure_10 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(() => {
  isFamilyCenterV3Enabled = isFamilyCenterV3Enabled(6829).useIsFamilyCenterV3Enabled({ location: "SettingsNotificationsScreen" });
  let obj = isFamilyCenterV3Enabled(6829);
  const tmp2 = !importDefault(14313).useConfig({ location: "SettingsNotificationsScreen" }).inHoldout;
  importDefault = tmp2;
  let items = [tmp2];
  const node = importAllResult.useMemo(() => {
    let obj = isFamilyCenterV3Enabled(outer1_2[15]);
    obj = {};
    obj = {};
    const intl = isFamilyCenterV3Enabled(outer1_2[11]).intl;
    obj.label = intl.string(isFamilyCenterV3Enabled(outer1_2[11]).t.clE4PU);
    const items = [, ];
    ({ IN_APP_NOTIFICATIONS: arr[0], IN_APP_MESSAGE_SOUNDS: arr[1] } = outer1_6);
    obj.settings = items;
    const items1 = [obj, , , , , , , , , , , , , , , , , , ];
    const obj1 = {};
    const intl2 = isFamilyCenterV3Enabled(outer1_2[11]).intl;
    obj1.label = intl2.string(isFamilyCenterV3Enabled(outer1_2[11]).t["jcHF+3"]);
    const items2 = [outer1_6.SYSTEM_NOTIFICATIONS];
    obj1.settings = items2;
    obj1.subLabel = outer1_7(outer1_11, {});
    items1[1] = obj1;
    const items3 = [outer1_6.ANDROID_MESSAGE_NOTIFICATIONS];
    items1[2] = { settings: items3 };
    const items4 = [outer1_6.IOS_NATIVE_PHONE_INTEGRATION];
    items1[3] = { settings: items4 };
    const obj2 = {};
    const intl3 = isFamilyCenterV3Enabled(outer1_2[11]).intl;
    obj2.label = intl3.string(isFamilyCenterV3Enabled(outer1_2[11]).t.a2O7oY);
    const items5 = [, , ];
    ({ ANDROID_NOTIFICATION_LIGHTS: arr6[0], ANDROID_NOTIFICATION_VIBRATIONS: arr6[1], ANDROID_NOTIFICATION_SOUNDS: arr6[2] } = outer1_6);
    obj2.settings = items5;
    items1[4] = obj2;
    const obj3 = { settings: items6 };
    items6 = [outer1_6.REACTION_NOTIFICATIONS];
    const intl4 = isFamilyCenterV3Enabled(outer1_2[11]).intl;
    obj3.subLabel = intl4.string(isFamilyCenterV3Enabled(outer1_2[11]).t.oWF6eQ);
    items1[5] = obj3;
    const obj4 = {};
    const intl5 = isFamilyCenterV3Enabled(outer1_2[11]).intl;
    obj4.label = intl5.string(isFamilyCenterV3Enabled(outer1_2[11]).t.EZorjX);
    const items7 = [outer1_6.COMMUNITY_ACTIVITY_ALERTS];
    obj4.settings = items7;
    items1[6] = obj4;
    const items8 = [outer1_6.HIGHLIGHT_NOTIFICATIONS];
    items1[7] = { settings: items8 };
    const items9 = [outer1_6.FRIEND_STREAM_NOTIFICATIONS];
    items1[8] = { settings: items9 };
    const items10 = [outer1_6.FRIEND_ANNIVERSARY_NOTIFICATIONS];
    items1[9] = { settings: items10 };
    const items11 = [outer1_6.VOICE_ACTIVITY_NOTIFICATIONS];
    items1[10] = { settings: items11 };
    const items12 = [outer1_6.FRIEND_ONLINE_NOTIFICATIONS];
    items1[11] = { settings: items12 };
    const items13 = [outer1_6.CUSTOM_STATUS_NOTIFICATIONS];
    items1[12] = { settings: items13 };
    const items14 = [outer1_6.FRIEND_GAMING_ACTIVITY_NOTIFICATIONS];
    items1[13] = { settings: items14 };
    const items15 = [outer1_6.PROFILE_UPDATES_NOTIFICATIONS];
    items1[14] = { settings: items15 };
    const items16 = [outer1_6.SERVER_TRENDING_NOTIFICATIONS];
    items1[15] = { settings: items16 };
    const items17 = [outer1_6.UPCOMING_SERVER_EVENT_NOTIFICATIONS];
    items1[16] = { settings: items17 };
    const items18 = [outer1_6.SUMMARY_REMINDER_NOTIFICATIONS];
    items1[17] = { settings: items18 };
    const obj5 = {};
    const intl6 = isFamilyCenterV3Enabled(outer1_2[11]).intl;
    obj5.label = intl6.string(isFamilyCenterV3Enabled(outer1_2[11]).t["0YtG+k"]);
    const items19 = [, ];
    ({ SCREEN_DOWNTIME_SCHEDULE_NOTIFICATIONS: arr20[0], SCREEN_DOWNTIME_REMINDER_NOTIFICATIONS: arr20[1] } = outer1_6);
    obj5.settings = items19;
    items1[18] = obj5;
    obj.sections = items1;
    let tmp;
    if (tmp2) {
      tmp = tmp2(outer1_2[16]);
    }
    obj.ListHeaderComponent = tmp;
    return obj.createList(obj);
  }, items);
  const effect = importAllResult.useEffect(() => {
    outer1_5();
  }, []);
  let items1 = [isFamilyCenterV3Enabled];
  const effect1 = importAllResult.useEffect(() => {
    const result = isFamilyCenterV3Enabled(outer1_2[17]).prefetchFamilyCenterAgeGroupWhen(isFamilyCenterV3Enabled);
  }, items1);
  return callback(importDefault(13550), { node });
});
let result = require("_initializeAndroidNotificationSettingsStore").fileFinishedImporting("modules/user_settings/notifications/native/SettingsNotificationScreen.tsx");

export default memoResult;
