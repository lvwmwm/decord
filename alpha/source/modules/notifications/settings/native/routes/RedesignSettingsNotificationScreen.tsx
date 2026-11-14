// Module ID: 18617
// Function ID: 18618
// Name: RedesignSettingsNotificationScreen
// Dependencies: [19, 18105, 9202, 21, 18618, 1113, 3029, 12406, 5899, 18619, 2]

// Module 18617 (RedesignSettingsNotificationScreen)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef3029 from "module_3029" /* 3029 */;
import useMountEffectDefault from "useMountEffect" /* 5899 */;
import SettingsConstants from "SettingsConstants" /* 9202 */;
import SettingBuilders from "SettingBuilders" /* 12406 */;
import AndroidNotificationSettingsStore from "AndroidNotificationSettingsStore" /* 18105 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 18618 */;
import SystemNotifPermissionLayoutDefault from "SystemNotifPermissionLayout" /* 18619 */;
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
    const obj3 = { label: intl.string(_modDef3029.nvBHcD), settings: items1 };
    intl = intl2.intl;
    items1 = [, , , , , , , ];
    ({ REDESIGN_SYSTEM_NOTIFICATIONS: arr2[0], REDESIGN_IN_APP_NOTIFICATIONS: arr2[1], REDESIGN_IN_APP_MESSAGE_SOUNDS: arr2[2], REDESIGN_ANDROID_MESSAGE_NOTIFICATIONS: arr2[3], REDESIGN_IOS_NATIVE_PHONE_INTEGRATION: arr2[4], REDESIGN_ANDROID_NOTIFICATION_LIGHTS: arr2[5], REDESIGN_ANDROID_NOTIFICATION_VIBRATIONS: arr2[6], REDESIGN_ANDROID_NOTIFICATION_SOUNDS: arr2[7] } = constants);
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
