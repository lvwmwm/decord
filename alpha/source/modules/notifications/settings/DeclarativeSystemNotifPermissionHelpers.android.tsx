// Module ID: 16967
// Function ID: 16968
// Name: DeclarativeSystemNotifPermissionHelpers
// Dependencies: [17, 15399, 15403, 5130, 1383, 6849, 2]
// Exports: openSystemNotifSettings, refreshSystemNotifPermissions

// Module 16967 (DeclarativeSystemNotifPermissionHelpers)
import react_native from "react-native" /* 17 */;
import react_nativeAll from "react-native" /* 1383 */;
import DeviceUtils from "DeviceUtils" /* 5130 */;
import react_nativeDefault from "react-native" /* 6849 */;
import NotificationSettingsConstants from "NotificationSettingsConstants" /* 15399 */;
import react_nativeDefault2 from "react-native" /* 15403 */;
import size from "module_2" /* 2 */;

let set;

function refreshSystemNotifPermissions() {
  const tmp = react_nativeDefault2;
  let androidNotifChannelStates;
  if (tmp != null) {
    const getAndroidNotifChannelStates = tmp.getAndroidNotifChannelStates;
    if (getAndroidNotifChannelStates != null) {
      androidNotifChannelStates = getAndroidNotifChannelStates();
    }
  }
  if (null != androidNotifChannelStates) {
    const items = [];
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set();
    const iter = androidNotifChannelStates[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (0 === nextResult.importance) {
        let addResult = set.add(tmp9.channelId);
      }
      continue;
    }
    for (const item10036 of NOTIF_SETTINGS) {
      let tmp14 = item10036;
      if (set.has(item10036.string_id)) {
        let arr = items.push(tmp14.id);
      }
      continue;
    }
    return { type: "DECLARATIVE_SYSTEM_NOTIF_PERMISSIONS_UPDATED", disabledSettings: items };
  }
}
function openSystemNotifSettings(arg0) {
  for (const item10008 of NOTIF_SETTINGS) {
    let string_id;
    if (item10008.id === arg0) {
      string_id = item10008.string_id;
      obj.return();
      break;
    }
    if (null != string_id) {
      let obj6 = DeviceUtils;
      if (obj6.getSystemVersionMajor() >= 26) {
        let entry = { key: "android.provider.extra.APP_PACKAGE", value: obj4.getConstants().Identifier };
        let sendIntent = Linking.sendIntent;
        let obj4 = react_nativeAll;
        let items = [entry, ];
        let entry1 = { key: "android.provider.extra.CHANNEL_ID", value: string_id };
        items[1] = entry1;
        let str = "android.settings.CHANNEL_NOTIFICATION_SETTINGS";
        let sendIntentResult = sendIntent("android.settings.CHANNEL_NOTIFICATION_SETTINGS", items);
      } else {
        let obj2 = react_nativeDefault;
        let result = obj2.openNotificationSettings();
      }
    }
  }
}
const Linking = react_native.Linking;
const NOTIF_SETTINGS = NotificationSettingsConstants.NOTIF_SETTINGS;
let result = size.fileFinishedImporting("modules/notifications/settings/DeclarativeSystemNotifPermissionHelpers.android.tsx");

export default { openSystemNotifSettings, refreshSystemNotifPermissions };
export { refreshSystemNotifPermissions };
export { openSystemNotifSettings };
