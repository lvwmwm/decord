// Module ID: 18105
// Function ID: 18106
// Name: RedesignSettingsNotificationScreen
// Dependencies: [19, 17619, 8556, 21, 18106, 1113, 2995, 17620, 11677, 17622, 5716, 18107, 16731, 2]

// Module 18105 (RedesignSettingsNotificationScreen)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef2995 from "module_2995" /* 2995 */;
import useMountEffectDefault from "useMountEffect" /* 5716 */;
import SettingsConstants from "SettingsConstants" /* 8556 */;
import SettingBuilders from "SettingBuilders" /* 11677 */;
import SettingLayoutDefault from "SettingLayout" /* 16731 */;
import AndroidNotificationSettingsStore from "AndroidNotificationSettingsStore" /* 17619 */;
import ContextualOptInNudgeHoldoutExperimentDefault from "ContextualOptInNudgeHoldoutExperiment" /* 17620 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 18106 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp3;
const NotificationPermissionSettingsHeaderDefault = tmp3(17622);
let closure_4 = AndroidNotificationSettingsStore.initializeAndroidNotificationSettingsStore;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const memoResult = react.memo(function RedesignSettingsNotificationsScreen() {
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
    const obj3 = { label: intl.string(_modDef2995.nvBHcD), settings: items1 };
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
