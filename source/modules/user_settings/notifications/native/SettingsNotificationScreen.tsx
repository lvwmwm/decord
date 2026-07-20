// Module ID: 14179
// Function ID: 107338
// Name: SystemNotificationsSubLabel
// Dependencies: []

// Module 14179 (SystemNotificationsSubLabel)
function SystemNotificationsSubLabel() {
  const tmp = callback3();
  let obj = arg1(dependencyMap[7]);
  let showReactivationPrompt = obj.useShowReactivationPrompt();
  let obj1 = importDefault(dependencyMap[8]);
  let obj2 = arg1(dependencyMap[9]);
  let result = obj2.hasAndroidNotificationChannels();
  obj = {};
  if (result) {
    obj = { INTEGRATION_CREATE: "<string:3305963521>", ConstraintReasonCode: "<string:671547393>" };
    const intl = arg1(dependencyMap[11]).intl;
    obj.children = intl.string(arg1(dependencyMap[11]).t./TZX1J);
    result = callback(arg1(dependencyMap[10]).Text, obj);
  }
  const items = [result, ];
  if (showReactivationPrompt) {
    showReactivationPrompt = obj1.useConfig({ location: "SystemNotificationsSubLabel" }).inHoldout;
  }
  if (showReactivationPrompt) {
    obj1 = { style: tmp.card };
    obj2 = {};
    const obj3 = { style: tmp.cardContent };
    const obj4 = { color: importDefault(dependencyMap[6]).unsafe_rawColors.YELLOW_300 };
    const items1 = [callback(arg1(dependencyMap[13]).CircleErrorIcon, obj4), ];
    const obj5 = { style: tmp.text };
    const obj6 = {};
    const intl2 = arg1(dependencyMap[11]).intl;
    obj6.children = intl2.string(arg1(dependencyMap[11]).t.TAuasM);
    obj5.children = callback(arg1(dependencyMap[10]).Text, obj6);
    items1[1] = callback(View, obj5);
    obj3.children = items1;
    obj2.children = callback2(View, obj3);
    obj1.children = callback(arg1(dependencyMap[12]).Card, obj2);
    showReactivationPrompt = callback(View, obj1);
  }
  items[1] = showReactivationPrompt;
  obj.children = items;
  return callback2(closure_9, obj);
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = arg1(dependencyMap[2]).initializeAndroidNotificationSettingsStore;
const MobileSetting = arg1(dependencyMap[3]).MobileSetting;
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
let obj = {};
obj = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, borderColor: importDefault(dependencyMap[6]).unsafe_rawColors.YELLOW_300, borderRadius: importDefault(dependencyMap[6]).radii.lg };
obj.card = obj;
obj.cardContent = {};
obj.text = { flex: 1 };
let closure_10 = arg1(dependencyMap[5]).createStyles(obj);
const obj2 = arg1(dependencyMap[5]);
const memoResult = importAllResult.memo(() => {
  const isFamilyCenterV3Enabled = arg1(dependencyMap[14]).useIsFamilyCenterV3Enabled({ location: "SettingsNotificationsScreen" });
  const arg1 = isFamilyCenterV3Enabled;
  const obj = arg1(dependencyMap[14]);
  const tmp2 = !importDefault(dependencyMap[8]).useConfig({ location: "SettingsNotificationsScreen" }).inHoldout;
  const importDefault = tmp2;
  const items = [tmp2];
  const node = importAllResult.useMemo(() => {
    let obj = isFamilyCenterV3Enabled(closure_2[15]);
    obj = {};
    obj = {};
    const intl = isFamilyCenterV3Enabled(closure_2[11]).intl;
    obj.label = intl.string(isFamilyCenterV3Enabled(closure_2[11]).t.clE4PU);
    const items = [, ];
    ({ IN_APP_NOTIFICATIONS: arr[0], IN_APP_MESSAGE_SOUNDS: arr[1] } = constants);
    obj.settings = items;
    const items1 = [obj, , , , , , , , , , , , , , , , , , ];
    const obj1 = {};
    const intl2 = isFamilyCenterV3Enabled(closure_2[11]).intl;
    obj1.label = intl2.string(isFamilyCenterV3Enabled(closure_2[11]).t.jcHF+3);
    const items2 = [constants.SYSTEM_NOTIFICATIONS];
    obj1.settings = items2;
    obj1.subLabel = callback2(closure_11, {});
    items1[1] = obj1;
    const items3 = [constants.ANDROID_MESSAGE_NOTIFICATIONS];
    items1[2] = { settings: items3 };
    const items4 = [constants.IOS_NATIVE_PHONE_INTEGRATION];
    items1[3] = { settings: items4 };
    const obj2 = {};
    const intl3 = isFamilyCenterV3Enabled(closure_2[11]).intl;
    obj2.label = intl3.string(isFamilyCenterV3Enabled(closure_2[11]).t.a2O7oY);
    const items5 = [, , ];
    ({ ANDROID_NOTIFICATION_LIGHTS: arr6[0], ANDROID_NOTIFICATION_VIBRATIONS: arr6[1], ANDROID_NOTIFICATION_SOUNDS: arr6[2] } = constants);
    obj2.settings = items5;
    items1[4] = obj2;
    const obj3 = { settings: items6 };
    const items6 = [constants.REACTION_NOTIFICATIONS];
    const intl4 = isFamilyCenterV3Enabled(closure_2[11]).intl;
    obj3.subLabel = intl4.string(isFamilyCenterV3Enabled(closure_2[11]).t.oWF6eQ);
    items1[5] = obj3;
    const obj4 = {};
    const intl5 = isFamilyCenterV3Enabled(closure_2[11]).intl;
    obj4.label = intl5.string(isFamilyCenterV3Enabled(closure_2[11]).t.EZorjX);
    const items7 = [constants.COMMUNITY_ACTIVITY_ALERTS];
    obj4.settings = items7;
    items1[6] = obj4;
    const items8 = [constants.HIGHLIGHT_NOTIFICATIONS];
    items1[7] = { settings: items8 };
    const items9 = [constants.FRIEND_STREAM_NOTIFICATIONS];
    items1[8] = { settings: items9 };
    const items10 = [constants.FRIEND_ANNIVERSARY_NOTIFICATIONS];
    items1[9] = { settings: items10 };
    const items11 = [constants.VOICE_ACTIVITY_NOTIFICATIONS];
    items1[10] = { settings: items11 };
    const items12 = [constants.FRIEND_ONLINE_NOTIFICATIONS];
    items1[11] = { settings: items12 };
    const items13 = [constants.CUSTOM_STATUS_NOTIFICATIONS];
    items1[12] = { settings: items13 };
    const items14 = [constants.FRIEND_GAMING_ACTIVITY_NOTIFICATIONS];
    items1[13] = { settings: items14 };
    const items15 = [constants.PROFILE_UPDATES_NOTIFICATIONS];
    items1[14] = { settings: items15 };
    const items16 = [constants.SERVER_TRENDING_NOTIFICATIONS];
    items1[15] = { settings: items16 };
    const items17 = [constants.UPCOMING_SERVER_EVENT_NOTIFICATIONS];
    items1[16] = { settings: items17 };
    const items18 = [constants.SUMMARY_REMINDER_NOTIFICATIONS];
    items1[17] = { settings: items18 };
    const obj5 = {};
    const intl6 = isFamilyCenterV3Enabled(closure_2[11]).intl;
    obj5.label = intl6.string(isFamilyCenterV3Enabled(closure_2[11]).t.0YtG+k);
    const items19 = [, ];
    ({ SCREEN_DOWNTIME_SCHEDULE_NOTIFICATIONS: arr20[0], SCREEN_DOWNTIME_REMINDER_NOTIFICATIONS: arr20[1] } = constants);
    obj5.settings = items19;
    items1[18] = obj5;
    obj.sections = items1;
    let tmp;
    if (tmp2) {
      tmp = tmp2(closure_2[16]);
    }
    obj.ListHeaderComponent = tmp;
    return obj.createList(obj);
  }, items);
  const effect = importAllResult.useEffect(() => {
    callback();
  }, []);
  const items1 = [isFamilyCenterV3Enabled];
  const effect1 = importAllResult.useEffect(() => {
    const result = isFamilyCenterV3Enabled(closure_2[17]).prefetchFamilyCenterAgeGroupWhen(isFamilyCenterV3Enabled);
  }, items1);
  return callback(importDefault(dependencyMap[18]), { node });
});
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/user_settings/notifications/native/SettingsNotificationScreen.tsx");

export default memoResult;
