// Module ID: 17293
// Function ID: 17294
// Name: RedesignSettingsNotificationScreen
// Dependencies: [19, 16767, 8592, 21, 17294, 1112, 3053, 11817, 5355, 17295, 2]

// Module 17293 (RedesignSettingsNotificationScreen)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import _modDef3053 from "module_3053" /* 3053 */;
import useMountEffectDefault from "useMountEffect" /* 5355 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
import AndroidNotificationSettingsStore from "AndroidNotificationSettingsStore" /* 16767 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 17294 */;
import SystemNotifPermissionLayoutDefault from "SystemNotifPermissionLayout" /* 17295 */;
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
    const obj3 = { label: intl.string(_modDef3053.nvBHcD), settings: items1 };
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
