// Module ID: 15566
// Function ID: 15567
// Name: settings/NotifSettingsUtils
// Dependencies: [15567, 1233, 15568, 504, 2]
// Exports: b64ToDeclarativeSettingsProto, useNotifSettingRadioValue, useNotifSettingToggleValue, useNotifSettingValue

// Module 15566 (settings/NotifSettingsUtils)
import user_settings_UserSettingsUtils from "user_settings/UserSettingsUtils" /* 1233 */;
import notification_settings from "notification_settings" /* 15568 */;
import NotifSettingsProtoStore from "NotifSettingsProtoStore" /* 15567 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f108604 = () => NotifSettingsProtoStore.getSetting(closure_0);
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
  return obj.useStateFromStores(items, f108604, items1);
}
export function useNotifSettingToggleValue(CALLS) {
  _require = CALLS;
  const items = [NotifSettingsProtoStore];
  const items1 = [CALLS];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f108604, items1);
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
  const stateFromStores = obj.useStateFromStores(items, f108604, items1);
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.radio;
  }
  if (num == null) {
    num = 0;
  }
  return num;
}
