// Module ID: 17632
// Function ID: 17633
// Name: RedesignSettingsNotificationScreen
// Dependencies: [19, 17103, 9556, 21, 17633, 1112, 3207, 11970, 5604, 17634, 2]

// Module 17632 (RedesignSettingsNotificationScreen)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import _modDef3207 from "module_3207" /* 3207 */;
import useMountEffectDefault from "useMountEffect" /* 5604 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
import AndroidNotificationSettingsStore from "AndroidNotificationSettingsStore" /* 17103 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 17633 */;
import SystemNotifPermissionLayoutDefault from "SystemNotifPermissionLayout" /* 17634 */;
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
    const obj3 = { label: intl.string(_modDef3207.nvBHcD), settings: items1 };
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
