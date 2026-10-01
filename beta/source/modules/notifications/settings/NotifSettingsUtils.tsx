// Module ID: 13223
// Function ID: 13224
// Name: settings/NotifSettingsUtils
// Dependencies: [13224, 1222, 13225, 504, 2]
// Exports: b64ToDeclarativeSettingsProto, useNotifSettingRadioValue, useNotifSettingToggleValue, useNotifSettingValue

// Module 13223 (settings/NotifSettingsUtils)
import user_settings_UserSettingsUtils from "user_settings/UserSettingsUtils" /* 1222 */;
import notification_settings from "notification_settings" /* 13225 */;
import NotifSettingsProtoStore from "NotifSettingsProtoStore" /* 13224 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f97674 = () => NotifSettingsProtoStore.getSetting(closure_0);
const result = size.fileFinishedImporting("modules/notifications/settings/NotifSettingsUtils.tsx");

export const b64ToDeclarativeSettingsProto = function b64ToDeclarativeSettingsProto(declarative_settings_proto) {
  const obj = user_settings_UserSettingsUtils;
  return obj.b64ToProto(notification_settings.DeclarativeSettings, declarative_settings_proto);
};
export const useNotifSettingValue = function useNotifSettingValue(arg0) {
  let closure_0;
  _require = arg0;
  const items = [NotifSettingsProtoStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, f97674, items1);
};
export const useNotifSettingToggleValue = function useNotifSettingToggleValue(GAMING_DEFAULT) {
  _require = GAMING_DEFAULT;
  const items = [NotifSettingsProtoStore];
  const items1 = [GAMING_DEFAULT];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f97674, items1);
  let flag;
  if (stateFromStores != null) {
    flag = stateFromStores.toggle;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
};
export const useNotifSettingRadioValue = function useNotifSettingRadioValue(arg0) {
  let closure_0;
  _require = arg0;
  const items = [NotifSettingsProtoStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f97674, items1);
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.radio;
  }
  if (num == null) {
    num = 0;
  }
  return num;
};
