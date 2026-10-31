// Module ID: 17949
// Function ID: 17950
// Name: RedesignSettingsNotificationScreen
// Dependencies: [19, 17463, 8432, 21, 17950, 1113, 2868, 17464, 11539, 17466, 5593, 17951, 16575, 2]

// Module 17949 (RedesignSettingsNotificationScreen)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef2868 from "module_2868" /* 2868 */;
import useMountEffectDefault from "useMountEffect" /* 5593 */;
import SettingsConstants from "SettingsConstants" /* 8432 */;
import SettingBuilders from "SettingBuilders" /* 11539 */;
import SettingLayoutDefault from "SettingLayout" /* 16575 */;
import AndroidNotificationSettingsStore from "AndroidNotificationSettingsStore" /* 17463 */;
import ContextualOptInNudgeHoldoutExperimentDefault from "ContextualOptInNudgeHoldoutExperiment" /* 17464 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 17950 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp3;
const NotificationPermissionSettingsHeaderDefault = tmp3(17466);
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
    const obj3 = { label: intl.string(_modDef2868.nvBHcD), settings: items1 };
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
