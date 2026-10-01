// Module ID: 15031
// Function ID: 15032
// Name: SettingsNotificationScreen
// Dependencies: [19, 17, 15032, 7417, 21, 4836, 576, 6401, 11904, 15033, 15034, 4832, 1115, 5919, 6028, 11006, 15035, 15036, 14247, 2]

// Module 15031 (SettingsNotificationScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl7 from "intl" /* 1115 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 6401 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import NotificationPermissionUtil from "NotificationPermissionUtil" /* 11904 */;
import SettingLayoutDefault from "SettingLayout" /* 14247 */;
import AndroidNotificationSettingsStore from "AndroidNotificationSettingsStore" /* 15032 */;
import ContextualOptInNudgeHoldoutExperimentDefault from "ContextualOptInNudgeHoldoutExperiment" /* 15033 */;
import SettingsNotificationUtils from "SettingsNotificationUtils" /* 15034 */;
import NotificationPermissionSettingsHeaderDefault from "NotificationPermissionSettingsHeader" /* 15035 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
function SystemNotificationsSubLabel() {
  let Card;
  let Text2;
  let intl;
  let intl2;
  let items1;
  let obj11;
  let obj7;
  let obj8;
  const tmp = closure_10();
  const obj = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("SystemNotificationsSubLabel");
  const obj2 = NotificationPermissionUtil;
  let showReactivationPrompt = obj2.useShowReactivationPrompt();
  const obj3 = ContextualOptInNudgeHoldoutExperimentDefault;
  const inHoldout = obj3.useConfig({ location: "SystemNotificationsSubLabel" }).inHoldout;
  const obj4 = SettingsNotificationUtils;
  let result = obj4.hasAndroidNotificationChannels();
  const tmp9 = React4;
  if (result) {
    let str = "text-sm/medium";
    const Text = tmp2(4832).Text;
    const tmp10 = metroImportDefault;
    if (manaTypeConsolidationExperiment) {
      str = "experimental/body-xs/normal";
    }
    const obj5 = { variant: str, color: "text-muted", children: intl.string(intl7.t["/TZX1J"]) };
    intl = tmp2(1115).intl;
    result = tmp10(Text, obj5);
  }
  const children = [result, ];
  if (showReactivationPrompt) {
    showReactivationPrompt = inHoldout;
  }
  if (showReactivationPrompt) {
    const obj6 = { style: tmp.card, children: metroImportDefault(Card, obj7) };
    obj7 = { border: "none", shadow: "none", children: metroImportAll(View, obj8) };
    obj8 = { style: tmp.cardContent, children: items1 };
    Card = tmp2(5919).Card;
    const obj9 = { color: nativeDefault.unsafe_rawColors.YELLOW_300 };
    const CircleErrorIcon = tmp2(6028).CircleErrorIcon;
    items1 = [metroImportDefault(CircleErrorIcon, obj9), ];
    const obj10 = { style: tmp.text, children: metroImportDefault(Text2, obj11) };
    obj11 = { color: "text-default", variant: "text-sm/medium", children: intl2.string(intl7.t.TAuasM) };
    Text2 = tmp2(4832).Text;
    intl2 = tmp2(1115).intl;
    items1[1] = metroImportDefault(View, obj10);
    showReactivationPrompt = metroImportDefault(View, obj6);
  }
  children[1] = showReactivationPrompt;
  return metroImportAll(tmp9, { children });
}
const View = react_native.View;
let closure_5 = AndroidNotificationSettingsStore.initializeAndroidNotificationSettingsStore;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let obj = { card: obj2, cardContent: { flexDirection: "row", alignItems: "center", gap: 8 }, text: { flex: 1 } };
obj2 = { marginBottom: 8, borderColor: nativeDefault.unsafe_rawColors.YELLOW_300, borderWidth: 1, borderRadius: nativeDefault.radii.lg };
let closure_10 = createStyles.createStyles(obj);
const memoResult = react.memo(() => {
  let obj = ContextualOptInNudgeHoldoutExperimentDefault;
  const tmp = !obj.useConfig({ location: "SettingsNotificationsScreen" }).inHoldout;
  let closure_0 = tmp;
  let items = [tmp];
  const node = react.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let intl6;
    let items;
    let items1;
    let items10;
    let items11;
    let items12;
    let items13;
    let items14;
    let items15;
    let items16;
    let items17;
    let items18;
    let items19;
    let items2;
    let items3;
    let items4;
    let items5;
    let items6;
    let items7;
    let items8;
    let items9;
    let tmp3;
    const obj = { sections: items1, ListHeaderComponent: tmp3 };
    const obj2 = { label: intl.string(intl7.t.clE4PU), settings: items };
    const createList = SettingBuilders.createList;
    SettingBuilders;
    intl = intl7.intl;
    items = [, ];
    ({ IN_APP_NOTIFICATIONS: arr[0], IN_APP_MESSAGE_SOUNDS: arr[1] } = MobileUserSettings);
    items1 = [obj2, , , , , , , , , , , , , , , , , , ];
    const obj3 = { label: intl2.string(intl7.t["jcHF+3"]), settings: items2, subLabel: metroImportDefault(SystemNotificationsSubLabel, {}) };
    intl2 = intl7.intl;
    items2 = [MobileUserSettings.SYSTEM_NOTIFICATIONS];
    items1[1] = obj3;
    const obj4 = { settings: items3 };
    items3 = [MobileUserSettings.ANDROID_MESSAGE_NOTIFICATIONS];
    items1[2] = obj4;
    const obj5 = { settings: items4 };
    items4 = [MobileUserSettings.IOS_NATIVE_PHONE_INTEGRATION];
    items1[3] = obj5;
    const obj6 = { label: intl3.string(intl7.t.a2O7oY), settings: items5 };
    intl3 = intl7.intl;
    items5 = [, , ];
    ({ ANDROID_NOTIFICATION_LIGHTS: arr6[0], ANDROID_NOTIFICATION_VIBRATIONS: arr6[1], ANDROID_NOTIFICATION_SOUNDS: arr6[2] } = MobileUserSettings);
    items1[4] = obj6;
    const obj7 = { settings: items6, subLabel: intl4.string(intl7.t.oWF6eQ) };
    items6 = [MobileUserSettings.REACTION_NOTIFICATIONS];
    intl4 = intl7.intl;
    items1[5] = obj7;
    const obj8 = { label: intl5.string(intl7.t.EZorjX), settings: items7 };
    intl5 = intl7.intl;
    items7 = [MobileUserSettings.COMMUNITY_ACTIVITY_ALERTS];
    items1[6] = obj8;
    const obj9 = { settings: items8 };
    items8 = [MobileUserSettings.HIGHLIGHT_NOTIFICATIONS];
    items1[7] = obj9;
    const obj10 = { settings: items9 };
    items9 = [MobileUserSettings.FRIEND_STREAM_NOTIFICATIONS];
    items1[8] = obj10;
    const obj11 = { settings: items10 };
    items10 = [MobileUserSettings.FRIEND_ANNIVERSARY_NOTIFICATIONS];
    items1[9] = obj11;
    const obj12 = { settings: items11 };
    items11 = [MobileUserSettings.VOICE_ACTIVITY_NOTIFICATIONS];
    items1[10] = obj12;
    const obj13 = { settings: items12 };
    items12 = [MobileUserSettings.FRIEND_ONLINE_NOTIFICATIONS];
    items1[11] = obj13;
    const obj14 = { settings: items13 };
    items13 = [MobileUserSettings.CUSTOM_STATUS_NOTIFICATIONS];
    items1[12] = obj14;
    const obj15 = { settings: items14 };
    items14 = [MobileUserSettings.FRIEND_GAMING_ACTIVITY_NOTIFICATIONS];
    items1[13] = obj15;
    const obj16 = { settings: items15 };
    items15 = [MobileUserSettings.PROFILE_UPDATES_NOTIFICATIONS];
    items1[14] = obj16;
    const obj17 = { settings: items16 };
    items16 = [MobileUserSettings.SERVER_TRENDING_NOTIFICATIONS];
    items1[15] = obj17;
    const obj18 = { settings: items17 };
    items17 = [MobileUserSettings.UPCOMING_SERVER_EVENT_NOTIFICATIONS];
    items1[16] = obj18;
    const obj19 = { settings: items18 };
    items18 = [MobileUserSettings.SUMMARY_REMINDER_NOTIFICATIONS];
    items1[17] = obj19;
    const obj20 = { label: intl6.string(intl7.t["0YtG+k"]), settings: items19 };
    intl6 = intl7.intl;
    items19 = [, ];
    ({ SCREEN_DOWNTIME_SCHEDULE_NOTIFICATIONS: arr20[0], SCREEN_DOWNTIME_REMINDER_NOTIFICATIONS: arr20[1] } = MobileUserSettings);
    items1[18] = obj20;
    tmp3 = undefined;
    if (closure_0) {
      tmp3 = NotificationPermissionSettingsHeaderDefault;
    }
    return createList(obj);
  }, items);
  const effect = react.useEffect(() => {
    closure_1_5();
  }, []);
  const effect1 = react.useEffect(() => {
    const obj = closure_0(dependencyMap[17]);
    const result = obj.prefetchFamilyCenterAgeGroup();
  }, []);
  return closure_7(SettingLayoutDefault, { node });
});
let result = size.fileFinishedImporting("modules/user_settings/notifications/native/SettingsNotificationScreen.tsx");

export default memoResult;
