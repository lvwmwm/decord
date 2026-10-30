// Module ID: 15527
// Function ID: 15528
// Name: settings/NotifSettingsUtils
// Dependencies: [15528, 1234, 15529, 504, 2]
// Exports: b64ToDeclarativeSettingsProto, useNotifSettingRadioValue, useNotifSettingToggleValue, useNotifSettingValue

// Module 15527 (settings/NotifSettingsUtils)
import user_settings_UserSettingsUtils from "user_settings/UserSettingsUtils" /* 1234 */;
import notification_settings from "notification_settings" /* 15529 */;
import NotifSettingsProtoStore from "NotifSettingsProtoStore" /* 15528 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f108323 = () => NotifSettingsProtoStore.getSetting(closure_0);
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
  return obj.useStateFromStores(items, f108323, items1);
}
export function useNotifSettingToggleValue(CALLS) {
  _require = CALLS;
  const items = [NotifSettingsProtoStore];
  const items1 = [CALLS];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f108323, items1);
  let flag;
  if (stateFromStores != null) {
    flag = stateFromStores.toggle;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
}
export function useNotifSettingRadioValue(arg0) {
  let closure_0;
  _require = arg0;
  const items = [NotifSettingsProtoStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f108323, items1);
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.radio;
  }
  if (num == null) {
    num = 0;
  }
  return num;
}
