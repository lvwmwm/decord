// Module ID: 18489
// Function ID: 18490
// Name: RedesignSettingsNotificationScreen
// Dependencies: [19, 17985, 9135, 21, 18490, 1113, 3013, 17986, 12311, 17988, 5836, 18491, 18495, 2]

// Module 18489 (RedesignSettingsNotificationScreen)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1113 */;
import _modDef3013 from "module_3013" /* 3013 */;
import useMountEffectDefault from "useMountEffect" /* 5836 */;
import SettingsConstants from "SettingsConstants" /* 9135 */;
import SettingBuilders from "SettingBuilders" /* 12311 */;
import AndroidNotificationSettingsStore from "AndroidNotificationSettingsStore" /* 17985 */;
import ContextualOptInNudgeHoldoutExperimentDefault from "ContextualOptInNudgeHoldoutExperiment" /* 17986 */;
import NotificationPermissionSettingsHeaderDefault from "NotificationPermissionSettingsHeader" /* 17988 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 18490 */;
import EffectiveNotifSettingsLayoutDefault from "EffectiveNotifSettingsLayout" /* 18495 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function getNotificationSettings() {
  let intl;
  let intl2;
  let items1;
  let items2;
  let items3;
  const items = [, , , ];
  const obj = MobileNotifSettingsRouteBuilders;
  items[0] = obj.buildOverviewCategoriesSection();
  const obj2 = { label: intl.string(_modDef3013.nvBHcD), settings: items1 };
  intl = intl3.intl;
  items1 = [, , , , , , ];
  ({ REDESIGN_IN_APP_NOTIFICATIONS: arr2[0], REDESIGN_IN_APP_MESSAGE_SOUNDS: arr2[1], REDESIGN_ANDROID_MESSAGE_NOTIFICATIONS: arr2[2], REDESIGN_IOS_NATIVE_PHONE_INTEGRATION: arr2[3], REDESIGN_ANDROID_NOTIFICATION_LIGHTS: arr2[4], REDESIGN_ANDROID_NOTIFICATION_VIBRATIONS: arr2[5], REDESIGN_ANDROID_NOTIFICATION_SOUNDS: arr2[6] } = MobileUserSettings);
  items[1] = obj2;
  const obj3 = { settings: items2 };
  items2 = [MobileUserSettings.REDESIGN_EMAIL_NOTIFICATIONS];
  items[2] = obj3;
  const obj4 = { label: intl2.string(_modDef3013["1S8d9h"]), settings: items3 };
  intl2 = intl3.intl;
  items3 = [, ];
  ({ HIGHLIGHT_NOTIFICATIONS: arr4[0], FRIEND_ANNIVERSARY_NOTIFICATIONS: arr4[1] } = MobileUserSettings);
  items[3] = obj4;
  return items;
}
let closure_4 = AndroidNotificationSettingsStore.initializeAndroidNotificationSettingsStore;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const memoResult = react.memo(function RedesignSettingsNotificationsScreen() {
  let obj = ContextualOptInNudgeHoldoutExperimentDefault;
  const tmp = !obj.useConfig({ location: "SettingsNotificationsScreen" }).inHoldout;
  let closure_0 = tmp;
  const items = [tmp];
  const node = react.useMemo(() => {
    let tmp3;
    const tmp2 = SettingBuilders;
    const createList = tmp2.createList;
    const obj = { sections: getNotificationSettings(), ListHeaderComponent: tmp3 };
    tmp3 = undefined;
    if (closure_0) {
      tmp3 = NotificationPermissionSettingsHeaderDefault;
    }
    return createList(obj);
  }, items);
  let tmp3 = useMountEffectDefault(() => {
    const obj = closure_0(dependencyMap[11]);
    const result = obj.refreshSystemNotifPermissionsAsync("notification_settings_screen");
    closure_1_4();
  });
  const items1 = [tmp];
  const unavailableNode = react.useMemo(() => {
    let arr;
    let tmp3;
    const obj = { sections: arr.slice(1), ListHeaderComponent: tmp3 };
    const createList = SettingBuilders.createList;
    SettingBuilders;
    tmp3 = undefined;
    arr = getNotificationSettings();
    if (closure_0) {
      tmp3 = NotificationPermissionSettingsHeaderDefault;
    }
    return createList(obj);
  }, items1);
  return jsx(EffectiveNotifSettingsLayoutDefault, { node, unavailableNode });
});
let result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsNotificationScreen.tsx");

export default memoResult;
