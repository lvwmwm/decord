// Module ID: 18621
// Function ID: 18622
// Name: DeclarativeSystemNotifPermissionHelpers
// Dependencies: [17, 16898, 16899, 16905, 16902, 5263, 1379, 7769, 2]
// Exports: openSystemNotifSettings, refreshSystemNotifPermissions

// Module 18621 (DeclarativeSystemNotifPermissionHelpers)
import react_native from "react-native" /* 17 */;
import react_nativeAll from "react-native" /* 1379 */;
import DeviceUtils from "DeviceUtils" /* 5263 */;
import react_nativeDefault from "react-native" /* 7769 */;
import NotificationSettingsConstants from "NotificationSettingsConstants" /* 16898 */;
import NotifSettings from "NotifSettings" /* 16899 */;
import size from "module_2" /* 2 */;

let map, set;

let items;
let items1;
let items2;
let items3;
function refreshSystemNotifPermissions() {
  let settings;
  const tmp = settings(16905);
  let androidNotifChannelStates;
  if (tmp != null) {
    const getAndroidNotifChannelStates = tmp.getAndroidNotifChannelStates;
    if (getAndroidNotifChannelStates != null) {
      androidNotifChannelStates = getAndroidNotifChannelStates();
    }
  }
  if (null != androidNotifChannelStates) {
    let items = [];
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set();
    let tmp5 = androidNotifChannelStates;
    let iter = androidNotifChannelStates[Symbol.iterator]();
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
    const obj2 = androidNotifChannelStates(16902);
    settings = obj2.getAssignedNotifSettingsAndMappings().settings;
    const _Map = Map;
    const self3 = this;
    const self4 = this;
    map = new Map(androidNotifChannelStates.map((item) => {
      const items = [, ];
      ({ channelId: arr[0], importance: arr[1] } = item);
      return items;
    }));
    const _Object = Object;
    const entries = Object.entries(obj);
    let found = entries.filter((item) => {
      const iter = item[Symbol.iterator]();
      iter.next();
      let tmp2 = iter === undefined;
      let nextResult1;
      if (!tmp2) {
        let tmp5 = iter === undefined;
        tmp2 = tmp5;
        if (!tmp2) {
          nextResult1 = iter.next();
          tmp2 = tmp5;
        }
      }
      if (!tmp2) {
        iter.return();
      }
      let found = settings.filter((id) => nextResult1.includes(id.id));
      const tmp7 = found.length > 0 && found.every((id) => {
        let string_id;
        if (id.id === androidNotifChannelStates(dependencyMap[2]).NotifSettings.CALLS) {
          const found = nextResult1.find((channelId) => {
            channelId = channelId.channelId;
            return channelId.startsWith("calls");
          });
          let channelId;
          if (found != null) {
            channelId = found.channelId;
          }
          string_id = channelId;
        } else {
          string_id = id.string_id;
        }
        const tmp5 = null != string_id && 0 === map.get(string_id);
        return tmp5;
      });
      return tmp7;
    });
    obj = {
      type: "DECLARATIVE_SYSTEM_NOTIF_PERMISSIONS_UPDATED",
      disabledSettings: items,
      disabledCategories: found.map((item) => {
          let tmp;
          [tmp] = item;
          return tmp;
        })
    };
    return obj;
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
let obj = { "111_realtime": items, "222_social": items1, "333_server": items2, "444_other": items3 };
items = [NotifSettings.NotifSettings.CALLS, NotifSettings.NotifSettings.DMS, NotifSettings.NotifSettings.FRIEND_REQUESTS, NotifSettings.NotifSettings.MISSED_MESSAGES_LOW, NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT, NotifSettings.NotifSettings.REACTIONS_CHOICE];
items1 = [NotifSettings.NotifSettings.POLLS, NotifSettings.NotifSettings.REACTIONS, NotifSettings.NotifSettings.FRIENDS_GAMING_LOW, NotifSettings.NotifSettings.FRIENDS_GAMING_DEFAULT, NotifSettings.NotifSettings.GAMING_OTHER, NotifSettings.NotifSettings.GO_LIVE, NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW, NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT, NotifSettings.NotifSettings.VOICE_CHANNEL_ACTIVITY, NotifSettings.NotifSettings.CUSTOM_STATUS_UPDATE, NotifSettings.NotifSettings.PROFILE_UPDATES, NotifSettings.NotifSettings.FRIEND_ONLINE, NotifSettings.NotifSettings.FRIEND_REQUEST_REMINDER, NotifSettings.NotifSettings.FRIEND_SUGGESTIONS, NotifSettings.NotifSettings.NUDGE_NEW_FRIEND_DM];
items2 = [NotifSettings.NotifSettings.GUILD_MESSAGES, NotifSettings.NotifSettings.FORUM_NOTIFICATIONS, NotifSettings.NotifSettings.GUILD_EVENT_NOTIFICATIONS, NotifSettings.NotifSettings.STAGE_NOTIFICATIONS, NotifSettings.NotifSettings.OTHER_GUILD, NotifSettings.NotifSettings.SAFETY_ALERTS];
items3 = [NotifSettings.NotifSettings.INVITES_RECONNECTING, NotifSettings.NotifSettings.TRENDING_SUGGESTIONS, NotifSettings.NotifSettings.UPDATES_OFFERS];
let result = size.fileFinishedImporting("modules/notifications/settings/DeclarativeSystemNotifPermissionHelpers.android.tsx");

export default { openSystemNotifSettings, refreshSystemNotifPermissions };
export { refreshSystemNotifPermissions };
export { openSystemNotifSettings };
