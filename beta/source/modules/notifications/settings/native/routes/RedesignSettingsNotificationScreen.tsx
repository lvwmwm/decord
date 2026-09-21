// Module ID: 16232
// Function ID: 16233
// Name: RedesignSettingsNotificationScreen
// Dependencies: [19, 15745, 8238, 21, 16233, 1119, 2812, 558, 568, 15746, 11594, 15748, 16234, 5203, 14953, 2]

// Module 16232 (RedesignSettingsNotificationScreen)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import _modDef2812 from "module_2812" /* 2812 */;
import useMountEffectDefault from "useMountEffect" /* 5203 */;
import SettingBuilders from "SettingBuilders" /* 11594 */;
import SettingLayoutDefault from "SettingLayout" /* 14953 */;
import ContextualOptInNudgeHoldoutExperimentDefault from "ContextualOptInNudgeHoldoutExperiment" /* 15746 */;
import NotificationPermissionSettingsHeaderDefault from "NotificationPermissionSettingsHeader" /* 15748 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 16233 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_4 = fn(15745).initializeAndroidNotificationSettingsStore;
const MobileUserSettings = fn(8238).MobileUserSettings;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsNotificationScreen.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "SettingsNotificationsScreen" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const inHoldout = ContextualOptInNudgeHoldoutExperimentDefault.useConfig(first).inHoldout;
  if (cResult[1] !== !inHoldout) {
    const obj4 = { sections: null, ListHeaderComponent: null };
    const tmpResult = tmp(11594);
    const items = [tmp(16233).buildOverviewCategoriesSection(), ];
    const obj5 = { label: null, settings: null };
    const intl = tmp(1119).intl;
    obj5.label = intl.string(tmp5(2812).nvBHcD);
    const items1 = [, , , , , , ];
    ({ REDESIGN_IN_APP_NOTIFICATIONS: arr2[0], REDESIGN_IN_APP_MESSAGE_SOUNDS: arr2[1], REDESIGN_ANDROID_MESSAGE_NOTIFICATIONS: arr2[2], REDESIGN_IOS_NATIVE_PHONE_INTEGRATION: arr2[3], REDESIGN_ANDROID_NOTIFICATION_LIGHTS: arr2[4], REDESIGN_ANDROID_NOTIFICATION_VIBRATIONS: arr2[5], REDESIGN_ANDROID_NOTIFICATION_SOUNDS: arr2[6] } = MobileUserSettings);
    obj5.settings = items1;
    items[1] = obj5;
    obj4.sections = items;
    let tmp5Result;
    if (!inHoldout) {
      tmp5Result = tmp5(15748);
    }
    obj4.ListHeaderComponent = tmp5Result;
    const list = tmpResult.createList(obj4);
    cResult[1] = tmp6;
    cResult[2] = list;
    let tmp7 = list;
    const tmpResult2 = tmp(16233);
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
    const tmp11 = S;
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
  useMountEffectDefault(tmp11);
  if (cResult[4] !== tmp7) {
    class S {
      constructor() {
        obj = closure_1_0(closure_1_2[12]);
        result = obj.refreshSystemNotifPermissionsAsync("notification_settings_screen");
        tmp2 = closure_1_4();
        return;
      }
    }
    const obj6 = { node: tmp7 };
    const tmp14 = jsx(tmp5(14953), { node: tmp7 });
    cResult[4] = tmp7;
    cResult[5] = tmp14;
    const tmp13 = tmp14;
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
  return tmp13;
}) : (() => {
  const tmp = !ContextualOptInNudgeHoldoutExperimentDefault.useConfig({ location: "SettingsNotificationsScreen" }).inHoldout;
  closure_0 = tmp;
  let items = [tmp];
  const node = noop.useMemo(() => {
    const obj2 = { sections: null, ListHeaderComponent: null };
    const obj = SettingBuilders;
    const items = [MobileNotifSettingsRouteBuilders.buildOverviewCategoriesSection(), ];
    const obj4 = { label: null, settings: null };
    const intl = util.intl;
    obj4.label = intl.string(_modDef2812.nvBHcD);
    const items1 = [, , , , , , ];
    ({ REDESIGN_IN_APP_NOTIFICATIONS: arr2[0], REDESIGN_IN_APP_MESSAGE_SOUNDS: arr2[1], REDESIGN_ANDROID_MESSAGE_NOTIFICATIONS: arr2[2], REDESIGN_IOS_NATIVE_PHONE_INTEGRATION: arr2[3], REDESIGN_ANDROID_NOTIFICATION_LIGHTS: arr2[4], REDESIGN_ANDROID_NOTIFICATION_VIBRATIONS: arr2[5], REDESIGN_ANDROID_NOTIFICATION_SOUNDS: arr2[6] } = MobileUserSettings);
    obj4.settings = items1;
    items[1] = obj4;
    obj2.sections = items;
    let tmp2Result;
    if (closure_0) {
      tmp2Result = NotificationPermissionSettingsHeaderDefault;
    }
    obj2.ListHeaderComponent = tmp2Result;
    return obj.createList(obj2);
  }, items);
  useMountEffectDefault(() => {
    const result = closure_0(dependencyMap[12]).refreshSystemNotifPermissionsAsync("notification_settings_screen");
    closure_1_4();
  });
  return jsx(SettingLayoutDefault, { node });
}));
