// Module ID: 15891
// Function ID: 15892
// Name: settings/NotifSettingsUtils
// Dependencies: [1231, 502, 15892, 1233, 15893, 504, 15906, 2]
// Exports: b64ToDeclarativeSettingsProto, getNotifSettingToggleValue, useNotifSettingRadioValue, useNotifSettingToggleValue, useNotifSettingValue

// Module 15891 (settings/NotifSettingsUtils)
import user_settings_UserSettingsUtils from "user_settings/UserSettingsUtils" /* 1233 */;
import notification_settings from "notification_settings" /* 15893 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import NotifSettingsProtoStore from "NotifSettingsProtoStore" /* 15892 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f110424 = () => NotifSettingsProtoStore.getSetting(closure_0);
const result = size.fileFinishedImporting("modules/notifications/settings/NotifSettingsUtils.tsx");

export function b64ToDeclarativeSettingsProto(declarative_settings_proto) {
  const obj = user_settings_UserSettingsUtils;
  return obj.b64ToProto(notification_settings.DeclarativeSettings, declarative_settings_proto);
}
export function useNotifSettingValue(arg0) {
  let closure_0;
  _require = arg0;
  const items = [NotifSettingsProtoStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, f110424, items1);
}
export function getNotifSettingToggleValue(arg0, result) {
  const tmp = result;
  if (tmp) {
    if (NotifSettingsProtoStore.hasValidEffectiveSettings) {
      const optimisticSetting = obj.getOptimisticSetting(arg0);
      if (null != optimisticSetting) {
        return optimisticSetting.toggle;
      } else {
        const iter = NotifSettingsProtoStore.getEffectiveSetting(arg0);
        if (null != iter) {
          return iter.value;
        }
      }
    }
  }
  const setting = NotifSettingsProtoStore.getSetting(arg0);
  let flag;
  if (setting != null) {
    flag = setting.toggle;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}
export function useNotifSettingToggleValue(CALLS) {
  let isDeclarativeNotificationSettingsRedesignEnabled;
  _require = CALLS;
  const obj = require("DeclarativeNotificationSettingsRedesignExperiment");
  isDeclarativeNotificationSettingsRedesignEnabled = obj.useIsDeclarativeNotificationSettingsRedesignEnabled("useNotifSettingToggleValue");
  const items = [NotifSettingsProtoStore, AuthenticationStore, UserSettingsProtoStore];
  const items1 = [CALLS, isDeclarativeNotificationSettingsRedesignEnabled];
  const obj2 = require("get initialized");
  return obj2.useStateFromStores(items, () => {
    let flag;
    const tmp2 = isDeclarativeNotificationSettingsRedesignEnabled;
    if (!tmp2) {
      const setting = NotifSettingsProtoStore.getSetting(tmp);
      let flag2;
      if (setting != null) {
        flag2 = setting.toggle;
      }
      if (flag2 == null) {
        flag2 = true;
      }
      flag = flag2;
    } else if (NotifSettingsProtoStore.hasValidEffectiveSettings) {
      const optimisticSetting = obj.getOptimisticSetting(tmp);
      if (null != optimisticSetting) {
        flag = optimisticSetting.toggle;
      } else {
        const iter = NotifSettingsProtoStore.getEffectiveSetting(CALLS);
        if (null != iter) {
          flag = iter.value;
        }
      }
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }, items1);
}
export function useNotifSettingRadioValue(arg0) {
  let closure_0;
  _require = arg0;
  const items = [NotifSettingsProtoStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f110424, items1);
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.radio;
  }
  if (num == null) {
    num = 0;
  }
  return num;
}
