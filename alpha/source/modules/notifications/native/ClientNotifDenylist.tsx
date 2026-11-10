// Module ID: 16622
// Function ID: 16623
// Name: ClientNotifDenylist
// Dependencies: [32, 17, 1246, 502, 15888, 16620, 16623, 1242, 15889, 572, 2]
// Exports: getClientDisabledNotifTypes, initializeClientNotifDenylist

// Module 16622 (ClientNotifDenylist)
import react_native from "react-native" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import notification_settings from "notification_settings" /* 15889 */;
import NotifSettings from "NotifSettings" /* 16620 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 16623 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import NotifSettingsProtoStore from "NotifSettingsProtoStore" /* 15888 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

function getClientNotifTypeChoices() {
  let mappings;
  let setting;
  let settings;
  let fn = arg0;
  if (arg0 === undefined) {
    fn = function t(arg0) {
      return setting.getSetting(arg0);
    };
  }
  const obj = notifications_NotificationSettingsUtils;
  const assignedNotifSettingsAndMappings = obj.getAssignedNotifSettingsAndMappings();
  ({ settings, mappings } = assignedNotifSettingsAndMappings);
  const disabledTypes = [];
  const enabledTypes = [];
  map = new Map(settings.map((id) => {
    const items = [id.id, id];
    return items;
  }));
  const iter = mappings[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let notifSetting = nextResult.notifSetting;
    let tmp3 = notifSetting;
    let notifType = nextResult.notifType;
    let value = map.get(notifSetting);
    let tmp5 = value;
    if (null != value) {
      if (set.has(tmp3)) {
        if (!("systemOnly" in tmp5)) {
          let fnResult = fn(tmp3);
          let radio;
          let tmp12 = fnResult;
          if (fnResult != null) {
            radio = fnResult.radio;
          }
          if (0 === radio) {
            if (false === tmp12.toggle) {
              let arr = disabledTypes.push(notifType);
            } else {
              let arr2 = enabledTypes.push(notifType);
            }
          }
        }
      }
    }
    continue;
  }
  return { disabledTypes, enabledTypes };
}
function syncClientNotifDenylist(map, set) {
  let closure_0 = map;
  if (set === undefined) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set();
  }
  let set1;
  const str = AuthenticationStore.getId();
  let str2;
  if (str != null) {
    str2 = str.toString();
  }
  if (str2 == null) {
    str2 = "";
  }
  let items = [];
  try {
    let found;
    if ("" !== str2) {
      let fn;
      const tmp25 = getClientNotifTypeChoices;
      if (null != map) {
        fn = (arg0) => closure_0.get(arg0);
      }
      const tmp25Result = tmp25(fn);
      items = tmp25Result.disabledTypes;
      if (null != map) {
        const items1 = [];
        HermesBuiltin.arraySpread(items1, tmp25Result.enabledTypes, HermesBuiltin.arraySpread(items1, items, 0));
        for (const item10027 of items1) {
          let addResult = set.add(item10027);
          continue;
        }
        const _Set2 = Set;
        const self3 = this;
        const self4 = this;
        set1 = new Set(items);
        const items2 = [];
        HermesBuiltin.arraySpread(items2, set, 0);
        found = items2.filter((item) => !set1.has(item));
      }
    }
    const enforcing = TurboModuleRegistry.getEnforcing("NativeNotifSettingsModule");
    if (null != found) {
      const result = enforcing.updateAndroidNotifTypeDenylist(str2, items, found);
    } else {
      const result1 = enforcing.setAndroidNotifTypeDenylist(str2, items);
    }
  } catch (tmp15) {
    items = [];
    set.clear();
    const obj2 = SentryUtilsDefault;
    obj2.captureException(tmp15);
  }
}
const TurboModuleRegistry = react_native.TurboModuleRegistry;
let items = [NotifSettings.NotifSettings.CALLS, NotifSettings.NotifSettings.FRIEND_REQUESTS, NotifSettings.NotifSettings.POLLS, NotifSettings.NotifSettings.REACTIONS, NotifSettings.NotifSettings.MISSED_MESSAGES_LOW, NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT, NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW, NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT, NotifSettings.NotifSettings.VOICE_CHANNEL_ACTIVITY, NotifSettings.NotifSettings.GO_LIVE, NotifSettings.NotifSettings.FRIENDS_GAMING_LOW, NotifSettings.NotifSettings.FRIENDS_GAMING_DEFAULT, NotifSettings.NotifSettings.GAMING_OTHER, NotifSettings.NotifSettings.CUSTOM_STATUS_UPDATE, NotifSettings.NotifSettings.PROFILE_UPDATES, NotifSettings.NotifSettings.FRIEND_ONLINE, NotifSettings.NotifSettings.FRIEND_REQUEST_REMINDER, NotifSettings.NotifSettings.FRIEND_SUGGESTIONS, NotifSettings.NotifSettings.NUDGE_NEW_FRIEND_DM, NotifSettings.NotifSettings.FORUM_NOTIFICATIONS, NotifSettings.NotifSettings.GUILD_EVENT_NOTIFICATIONS, NotifSettings.NotifSettings.STAGE_NOTIFICATIONS, NotifSettings.NotifSettings.OTHER_GUILD, NotifSettings.NotifSettings.SAFETY_ALERTS, NotifSettings.NotifSettings.INVITES_RECONNECTING, NotifSettings.NotifSettings.TRENDING_SUGGESTIONS, NotifSettings.NotifSettings.UPDATES_OFFERS];
let set = new Set(items);
let result = size.fileFinishedImporting("modules/notifications/native/ClientNotifDenylist.tsx");

export function getClientDisabledNotifTypes() {
  return getClientNotifTypeChoices().disabledTypes;
}
export { syncClientNotifDenylist };
export function initializeClientNotifDenylist() {
  let closure_1;
  function sync() {
    let id;
    let tmp11;
    let tmp9;
    let hasLoaded = id !== AuthenticationStore.getId();
    const obj = AuthenticationStore;
    if (!hasLoaded) {
      hasLoaded = NotifSettingsProtoStore.hasLoaded;
    }
    if (hasLoaded) {
      id = obj.getId();
      set.clear();
    }
    if (null != map) {
      const tmp26 = map[Symbol.iterator]();
      while (tmp26 !== undefined) {
        let tmp8 = _slicedToArray(tmp5, 2);
        [tmp9, tmp11] = tmp8;
        let tmp10 = tmp9;
        let setting = NotifSettingsProtoStore.getSetting(tmp9);
        let toggle;
        let tmp14 = setting;
        if (setting != null) {
          toggle = setting.toggle;
        }
        let tmp17 = toggle === tmp11.toggle;
        if (tmp17) {
          tmp17 = tmp14.radio === tmp11.radio;
        }
        if (!tmp17) {
          let deleteResult = map.delete(tmp10);
        }
        continue;
      }
    }
    syncClientNotifDenylist(map, set);
  }
  function onEdit(updatedSettingId) {
    updatedSettingId = updatedSettingId.updatedSettingId;
    const edit = updatedSettingId.edit;
    sync();
    const tmp = sync;
    if (null != updatedSettingId) {
      if (!NotifSettingsProtoStore.hasLoaded) {
        if (null != edit.partialSettings.values[updatedSettingId]) {
          if (map == null) {
            const _Map = Map;
            const self = this;
            const self2 = this;
            map = new Map();
          }
          set = map.set;
          const DeclarativeNotifSetting = notification_settings.DeclarativeNotifSetting;
          const result = set(updatedSettingId, DeclarativeNotifSetting.clone(tmp3));
          tmp();
        }
      }
    }
  }
  importDefault = AuthenticationStore.getId();
  set = new Set();
  NotifSettingsProtoStore.addChangeListener(sync);
  AuthenticationStore.addChangeListener(sync);
  ApexExperimentStore.addChangeListener(sync);
  let obj = require("Dispatcher");
  const subscription = obj.subscribe("APP_STATE_UPDATE", sync);
  let obj2 = require("Dispatcher");
  const subscription1 = obj2.subscribe("DECLARATIVE_NOTIFICATION_SETTINGS_EDIT", onEdit);
  sync();
  return () => {
    NotifSettingsProtoStore.removeChangeListener(sync);
    AuthenticationStore.removeChangeListener(sync);
    ApexExperimentStore.removeChangeListener(sync);
    const obj = DispatcherDefault;
    obj.unsubscribe("APP_STATE_UPDATE", sync);
    const obj2 = DispatcherDefault;
    obj2.unsubscribe("DECLARATIVE_NOTIFICATION_SETTINGS_EDIT", onEdit);
  };
}
