// Module ID: 17027
// Function ID: 17028
// Name: RedesignSettingsNotificationScreen
// Dependencies: [19, 16543, 8260, 21, 17028, 1128, 2917, 558, 576, 16544, 11084, 16546, 17029, 5496, 15732, 2]

// Module 17027 (RedesignSettingsNotificationScreen)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1128 */;
import _modDef2917 from "module_2917" /* 2917 */;
import useMountEffectDefault from "useMountEffect" /* 5496 */;
import SettingsConstants from "SettingsConstants" /* 8260 */;
import SettingBuilders from "SettingBuilders" /* 11084 */;
import SettingLayoutDefault from "SettingLayout" /* 15732 */;
import AndroidNotificationSettingsStore from "AndroidNotificationSettingsStore" /* 16543 */;
import ContextualOptInNudgeHoldoutExperimentDefault from "ContextualOptInNudgeHoldoutExperiment" /* 16544 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 17028 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2;

let tmp3;
const NotificationPermissionSettingsHeaderDefault = tmp3(16546);
let closure_4 = AndroidNotificationSettingsStore.initializeAndroidNotificationSettingsStore;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function RedesignSettingsNotificationsScreen() {
  let first;
  let intl;
  let items;
  let items1;
  let tmp12;
  let tmp14;
  let tmp5Result;
  let tmp7;
  let obj = react2;
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "SettingsNotificationsScreen" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const obj3 = ContextualOptInNudgeHoldoutExperimentDefault;
  const inHoldout = obj3.useConfig(first).inHoldout;
  if (cResult[1] !== !inHoldout) {
    const obj4 = { sections: items, ListHeaderComponent: tmp5Result };
    const createList = SettingBuilders.createList;
    SettingBuilders;
    items = [, ];
    const tmpResult2 = MobileNotifSettingsRouteBuilders;
    items[0] = tmpResult2.buildOverviewCategoriesSection();
    const obj5 = { label: intl.string(_modDef2917.nvBHcD), settings: items1 };
    intl = tmp(1128).intl;
    items1 = [, , , , , , ];
    ({ REDESIGN_IN_APP_NOTIFICATIONS: arr2[0], REDESIGN_IN_APP_MESSAGE_SOUNDS: arr2[1], REDESIGN_ANDROID_MESSAGE_NOTIFICATIONS: arr2[2], REDESIGN_IOS_NATIVE_PHONE_INTEGRATION: arr2[3], REDESIGN_ANDROID_NOTIFICATION_LIGHTS: arr2[4], REDESIGN_ANDROID_NOTIFICATION_VIBRATIONS: arr2[5], REDESIGN_ANDROID_NOTIFICATION_SOUNDS: arr2[6] } = MobileUserSettings);
    items[1] = obj5;
    tmp5Result = undefined;
    if (!inHoldout) {
      tmp5Result = tmp5(16546);
    }
    const list = createList(obj4);
    cResult[1] = !inHoldout;
    cResult[2] = list;
    tmp7 = list;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        obj = closure_1_0(closure_1_2[12]);
        result = obj.refreshSystemNotifPermissionsAsync("notification_settings_screen");
        tmp2 = closure_1_4();
        return;
      }
    }
    cResult[3] = S;
    tmp12 = S;
  } else {
    class S {
      constructor() {
        obj = closure_1_0(closure_1_2[12]);
        result = obj.refreshSystemNotifPermissionsAsync("notification_settings_screen");
        tmp2 = closure_1_4();
        return;
      }
    }
  }
  useMountEffectDefault(tmp12);
  if (cResult[4] !== tmp7) {
    class S {
      constructor() {
        obj = closure_1_0(closure_1_2[12]);
        result = obj.refreshSystemNotifPermissionsAsync("notification_settings_screen");
        tmp2 = closure_1_4();
        return;
      }
    }
    const tmp15 = jsx(SettingLayoutDefault, { node: tmp7 });
    cResult[4] = tmp7;
    cResult[5] = tmp15;
    tmp14 = tmp15;
  } else {
    class S {
      constructor() {
        obj = closure_1_0(closure_1_2[12]);
        result = obj.refreshSystemNotifPermissionsAsync("notification_settings_screen");
        tmp2 = closure_1_4();
        return;
      }
    }
  }
  return tmp14;
}) : (function RedesignSettingsNotificationsScreen() {
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
    const obj3 = { label: intl.string(_modDef2917.nvBHcD), settings: items1 };
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
    const obj = closure_0(dependencyMap[12]);
    const result = obj.refreshSystemNotifPermissionsAsync("notification_settings_screen");
    closure_1_4();
  });
  return jsx(SettingLayoutDefault, { node });
}));
let result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsNotificationScreen.tsx");

export default memoResult;
