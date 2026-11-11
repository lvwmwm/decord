// Module ID: 16046
// Function ID: 16047
// Name: settings/NotifSettingsUtils
// Dependencies: [1231, 502, 16047, 1233, 16048, 504, 16061, 2]
// Exports: b64ToDeclarativeSettingsProto, getNotifSettingRadioValue, getNotifSettingToggleValue, useNotifSettingRadioValue, useNotifSettingToggleValue, useNotifSettingValue

// Module 16046 (settings/NotifSettingsUtils)
import user_settings_UserSettingsUtils from "user_settings/UserSettingsUtils" /* 1233 */;
import notification_settings from "notification_settings" /* 16048 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import NotifSettingsProtoStore from "NotifSettingsProtoStore" /* 16047 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c5 = "no-radio-selection";
const result = size.fileFinishedImporting("modules/notifications/settings/NotifSettingsUtils.tsx");

export const NO_RADIO_SELECTION = "no-radio-selection";
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
  return obj.useStateFromStores(items, () => NotifSettingsProtoStore.getSetting(closure_0), items1);
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
        let value;
        if (iter != null) {
          value = iter.value;
        }
        if (typeof value === "boolean") {
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
        let value;
        if (iter != null) {
          value = iter.value;
        }
        if (typeof value === "boolean") {
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
export function getNotifSettingRadioValue(arg0, arg1) {
  const tmp = arg1;
  if (tmp) {
    if (NotifSettingsProtoStore.hasValidEffectiveSettings) {
      const setting = obj.getSetting(arg0);
      if (null != setting) {
        return setting.radio;
      } else {
        const iter = NotifSettingsProtoStore.getEffectiveSetting(arg0);
        let value;
        if (iter != null) {
          value = iter.value;
        }
        let value2;
        if (typeof value === "number") {
          value2 = iter.value;
        }
        return value2;
      }
    }
  } else {
    const setting1 = obj.getSetting(arg0);
    let num;
    if (setting1 != null) {
      num = setting1.radio;
    }
    if (num == null) {
      num = 0;
    }
    return num;
  }
}
export function useNotifSettingRadioValue(REACTIONS_CHOICE) {
  let isDeclarativeNotificationSettingsRedesignEnabled;
  _require = REACTIONS_CHOICE;
  const obj = require("DeclarativeNotificationSettingsRedesignExperiment");
  isDeclarativeNotificationSettingsRedesignEnabled = obj.useIsDeclarativeNotificationSettingsRedesignEnabled("useNotifSettingRadioValue");
  const items = [NotifSettingsProtoStore, AuthenticationStore, UserSettingsProtoStore];
  const items1 = [REACTIONS_CHOICE, isDeclarativeNotificationSettingsRedesignEnabled];
  const obj2 = require("get initialized");
  return obj2.useStateFromStores(items, () => {
    let num;
    if (isDeclarativeNotificationSettingsRedesignEnabled) {
      if (NotifSettingsProtoStore.hasValidEffectiveSettings) {
        const setting = obj.getSetting(tmp);
        if (null != setting) {
          num = setting.radio;
        } else {
          const iter = NotifSettingsProtoStore.getEffectiveSetting(REACTIONS_CHOICE);
          let value;
          if (iter != null) {
            value = iter.value;
          }
          let value2;
          if (typeof value === "number") {
            value2 = iter.value;
          }
          num = value2;
        }
      }
    } else {
      const setting1 = obj.getSetting(tmp);
      num = undefined;
      if (setting1 != null) {
        num = setting1.radio;
      }
      if (num == null) {
        num = 0;
      }
    }
    if (num == null) {
      num = c5;
    }
    return num;
  }, items1);
}
