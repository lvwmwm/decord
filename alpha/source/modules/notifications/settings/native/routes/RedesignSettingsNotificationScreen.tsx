// Module ID: 17466
// Function ID: 17467
// Name: RedesignSettingsNotificationScreen
// Dependencies: [19, 16943, 8593, 21, 17467, 1113, 3051, 11875, 5353, 17468, 2]

// Module 17466 (RedesignSettingsNotificationScreen)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef3051 from "module_3051" /* 3051 */;
import useMountEffectDefault from "useMountEffect" /* 5353 */;
import SettingsConstants from "SettingsConstants" /* 8593 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
import AndroidNotificationSettingsStore from "AndroidNotificationSettingsStore" /* 16943 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 17467 */;
import SystemNotifPermissionLayoutDefault from "SystemNotifPermissionLayout" /* 17468 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_4 = AndroidNotificationSettingsStore.initializeAndroidNotificationSettingsStore;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const memoResult = react.memo(function RedesignSettingsNotificationsScreen() {
  const node = react.useMemo(() => {
    let intl;
    let items;
    let items1;
    let items2;
    const obj = { sections: items };
    const createList = SettingBuilders.createList;
    SettingBuilders;
    items = [, , ];
    const obj2 = MobileNotifSettingsRouteBuilders;
    items[0] = obj2.buildOverviewCategoriesSection();
    const obj3 = { label: intl.string(_modDef3051.nvBHcD), settings: items1 };
    intl = intl2.intl;
    items1 = [, , , , , , ];
    ({ REDESIGN_IN_APP_NOTIFICATIONS: arr2[0], REDESIGN_IN_APP_MESSAGE_SOUNDS: arr2[1], REDESIGN_ANDROID_MESSAGE_NOTIFICATIONS: arr2[2], REDESIGN_IOS_NATIVE_PHONE_INTEGRATION: arr2[3], REDESIGN_ANDROID_NOTIFICATION_LIGHTS: arr2[4], REDESIGN_ANDROID_NOTIFICATION_VIBRATIONS: arr2[5], REDESIGN_ANDROID_NOTIFICATION_SOUNDS: arr2[6] } = constants);
    items[1] = obj3;
    const obj4 = { settings: items2 };
    items2 = [constants.REDESIGN_EMAIL_NOTIFICATIONS];
    items[2] = obj4;
    return createList(obj);
  }, []);
  useMountEffectDefault(() => {
    closure_1_4();
  });
  return jsx(SystemNotifPermissionLayoutDefault, { node, unavailableNode: node });
});
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsNotificationScreen.tsx");

export default memoResult;
