// Module ID: 15536
// Function ID: 15537
// Name: RedesignSettingsNotificationScreen
// Dependencies: [19, 15032, 7417, 21, 15537, 1115, 2813, 15033, 11006, 15035, 5298, 15538, 14247, 2]

// Module 15536 (RedesignSettingsNotificationScreen)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import _modDef2813 from "module_2813" /* 2813 */;
import useMountEffectDefault from "useMountEffect" /* 5298 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import SettingLayoutDefault from "SettingLayout" /* 14247 */;
import AndroidNotificationSettingsStore from "AndroidNotificationSettingsStore" /* 15032 */;
import ContextualOptInNudgeHoldoutExperimentDefault from "ContextualOptInNudgeHoldoutExperiment" /* 15033 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 15537 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp3;
const NotificationPermissionSettingsHeaderDefault = tmp3(15035);
let closure_4 = AndroidNotificationSettingsStore.initializeAndroidNotificationSettingsStore;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const memoResult = react.memo(() => {
  let obj = ContextualOptInNudgeHoldoutExperimentDefault;
  const tmp = !obj.useConfig({ location: "SettingsNotificationsScreen" }).inHoldout;
  let closure_0 = tmp;
  let items = [tmp];
  const node = react.useMemo(() => {
    let intl;
    let items;
    let items1;
    let tmp3Result;
    const obj = { sections: items, ListHeaderComponent: tmp3Result };
    const createList = SettingBuilders.createList;
    SettingBuilders;
    items = [, ];
    const obj2 = MobileNotifSettingsRouteBuilders;
    items[0] = obj2.buildOverviewCategoriesSection();
    const obj3 = { label: intl.string(_modDef2813.nvBHcD), settings: items1 };
    intl = intl2.intl;
    items1 = [, , , , , , ];
    ({ REDESIGN_IN_APP_NOTIFICATIONS: arr2[0], REDESIGN_IN_APP_MESSAGE_SOUNDS: arr2[1], REDESIGN_ANDROID_MESSAGE_NOTIFICATIONS: arr2[2], REDESIGN_IOS_NATIVE_PHONE_INTEGRATION: arr2[3], REDESIGN_ANDROID_NOTIFICATION_LIGHTS: arr2[4], REDESIGN_ANDROID_NOTIFICATION_VIBRATIONS: arr2[5], REDESIGN_ANDROID_NOTIFICATION_SOUNDS: arr2[6] } = MobileUserSettings);
    items[1] = obj3;
    tmp3Result = undefined;
    if (closure_0) {
      tmp3Result = NotificationPermissionSettingsHeaderDefault;
    }
    return createList(obj);
  }, items);
  let tmp3 = useMountEffectDefault(() => {
    const obj = closure_0(dependencyMap[11]);
    const result = obj.refreshSystemNotifPermissionsAsync("notification_settings_screen");
    closure_1_4();
  });
  return jsx(SettingLayoutDefault, { node });
});
let result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsNotificationScreen.tsx");

export default memoResult;
