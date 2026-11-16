// Module ID: 16901
// Function ID: 16902
// Name: ClientNotifDenylist
// Dependencies: [32, 17, 1246, 502, 16163, 16899, 16902, 1242, 16164, 572, 2]
// Exports: getClientDisabledNotifTypes, initializeClientNotifDenylist

// Module 16901 (ClientNotifDenylist)
import react_native from "react-native" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import notification_settings from "notification_settings" /* 16164 */;
import NotifSettings from "NotifSettings" /* 16899 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 16902 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import NotifSettingsProtoStore from "NotifSettingsProtoStore" /* 16163 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, set2;

function getClientNotifTypeChoices() {
  let c1;
  let c8;
  let c9;
  let mappings;
  let settings;
  let fn = arg0;
  if (arg0 === undefined) {
    fn = function t(map) {
      return guildDisabledTypes.getSetting(map);
    };
  }
  let assignedNotifSettingsAndMappings = arg1;
  if (arg1 === undefined) {
    const obj = fn(map[6]);
    assignedNotifSettingsAndMappings = obj.getAssignedNotifSettingsAndMappings();
  }
  c1 = undefined;
  c8 = undefined;
  c9 = undefined;
  ({ settings, mappings, redesignState: c1 } = assignedNotifSettingsAndMappings);
  map = new Map(settings.map((id) => {
    const items = [id.id, id];
    return items;
  }));
  const disabledTypes = [];
  const enabledTypes = [];
  const radioTypes = [];
  const dmDisabledTypes = [];
  const guildDisabledTypes = [];
  function _loop() {
    const tmp = c8;
    const value = map.get(c8);
    if (null != value) {
      const tmp4 = fn(tmp);
      let closure_0 = tmp4;
      if ("radioScopesByValue" in value) {
        if (null != value.radioScopesByValue) {
          const tmp13 = c1;
          if (tmp13) {
            if (null != tmp4) {
              if (!tmp4.toggle) {
                const _Object = Object;
                const entries = Object.entries(value.radioScopesByValue);
                const found = entries.find((item) => {
                  let tmp;
                  [tmp] = item;
                  return Number(tmp) === radio.radio;
                });
                let tmp16;
                if (found != null) {
                  tmp16 = found[1];
                }
                if (null == tmp16) {
                  return 0;
                } else {
                  const _Set = Set;
                  const self = this;
                  const self2 = this;
                  set = new Set(tmp16);
                  radioTypes.push(c9);
                  if (!set.has("dm")) {
                    dmDisabledTypes.push(c9);
                  }
                  if (!set.has("guild")) {
                    guildDisabledTypes.push(c9);
                  }
                  return 0;
                }
              }
            }
          }
          return 0;
        }
      }
      let num2 = 0;
      if (set.has(tmp)) {
        let radio;
        if (tmp4 != null) {
          radio = tmp4.radio;
        }
        if (0 === radio) {
          if (false === tmp4.toggle) {
            disabledTypes.push(c9);
          } else {
            enabledTypes.push(c9);
          }
        }
        num2 = num3;
      }
      return num2;
    }
    return 0;
  }
  const iter = mappings[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    ({ notifSetting: c8, notifType: c9 } = nextResult);
    let _loopResult = _loop();
    continue;
  }
  return { disabledTypes, enabledTypes, radioTypes, dmDisabledTypes, guildDisabledTypes };
}
function syncClientNotifDenylist(map, set, set1) {
  let disabledTypes;
  let dmDisabledTypes;
  let flag;
  let guildDisabledTypes;
  let radioTypes;
  let closure_0 = map;
  if (set === undefined) {
    const _Set = Set;
    const self = this;
    let self2 = this;
    set = new Set();
  }
  if (set1 === undefined) {
    const _Set2 = Set;
    const self3 = this;
    self2 = this;
    set1 = new Set();
  }
  set2 = undefined;
  const str = AuthenticationStore.getId();
  let str2;
  if (str != null) {
    str2 = str.toString();
  }
  if (str2 == null) {
    str2 = "";
  }
  const enforcing = TurboModuleRegistry.getEnforcing("NativeNotifSettingsModule");
  disabledTypes = [];
  dmDisabledTypes = [];
  guildDisabledTypes = [];
  radioTypes = [];
  try {
    let found;
    const obj4 = notifications_NotificationSettingsUtils;
    const assignedNotifSettingsAndMappings = obj4.getAssignedNotifSettingsAndMappings();
    let redesignState = assignedNotifSettingsAndMappings.redesignState;
    flag = redesignState;
    const tmp7 = assignedNotifSettingsAndMappings;
    if (redesignState) {
      redesignState = "" !== str2;
    }
    if (!redesignState) {
      self2 = enforcing;
      const result = enforcing.setAndroidNotifScopeDenylist(str2, [], [], [], true);
    }
    if ("" !== str2) {
      let fn;
      const tmp12 = getClientNotifTypeChoices;
      if (null != map) {
        fn = (arg0) => closure_0.get(arg0);
      }
      const tmp12Result = tmp12(fn, tmp7);
      ({ disabledTypes, dmDisabledTypes, guildDisabledTypes, radioTypes } = tmp12Result);
      if (null != map) {
        const items = [];
        HermesBuiltin.arraySpread(items, tmp12Result.radioTypes, HermesBuiltin.arraySpread(items, tmp12Result.enabledTypes, HermesBuiltin.arraySpread(items, disabledTypes, 0)));
        for (const item10066 of items) {
          let addResult = set.add(item10066);
          continue;
        }
        for (const item10075 of radioTypes) {
          let addResult1 = set1.add(item10075);
          continue;
        }
        const items1 = [];
        HermesBuiltin.arraySpread(items1, set1, 0);
        radioTypes = items1;
        const _Set3 = Set;
        const self4 = this;
        const self5 = this;
        set2 = new Set(disabledTypes);
        const items2 = [];
        HermesBuiltin.arraySpread(items2, set, 0);
        found = items2.filter((item) => !set2.has(item));
      }
    }
    if (null != found) {
      const result1 = enforcing.updateAndroidNotifTypeDenylist(str2, disabledTypes, found);
    } else {
      const result2 = enforcing.setAndroidNotifTypeDenylist(str2, disabledTypes);
    }
    if (flag) {
      flag = "" !== str2;
    }
    if (flag) {
      const result3 = enforcing.setAndroidNotifScopeDenylist(str2, dmDisabledTypes, guildDisabledTypes, radioTypes, null == map);
    }
  } catch (tmp31) {
    disabledTypes = [];
    set.clear();
    dmDisabledTypes = [];
    guildDisabledTypes = [];
    set1.clear();
    radioTypes = [];
    flag = false;
    const result4 = enforcing.setAndroidNotifScopeDenylist(str2, [], [], [], true);
    const obj5 = SentryUtilsDefault;
    obj5.captureException(tmp31);
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
    let tmp13;
    let hasLoaded = id !== AuthenticationStore.getId();
    const obj = AuthenticationStore;
    if (!hasLoaded) {
      hasLoaded = NotifSettingsProtoStore.hasLoaded;
    }
    if (hasLoaded) {
      id = obj.getId();
      set.clear();
      set1.clear();
    }
    if (null != map) {
      const tmp28 = map[Symbol.iterator]();
      while (tmp28 !== undefined) {
        let tmp10 = _slicedToArray(tmp7, 2);
        [tmp11, tmp13] = tmp10;
        let tmp12 = tmp11;
        let setting = NotifSettingsProtoStore.getSetting(tmp11);
        let toggle;
        let tmp16 = setting;
        if (setting != null) {
          toggle = setting.toggle;
        }
        let tmp19 = toggle === tmp13.toggle;
        if (tmp19) {
          tmp19 = tmp16.radio === tmp13.radio;
        }
        if (!tmp19) {
          let deleteResult = map.delete(tmp12);
        }
        continue;
      }
    }
    syncClientNotifDenylist(map, set, set1);
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
  const set1 = new Set();
  NotifSettingsProtoStore.addChangeListener(sync);
  AuthenticationStore.addChangeListener(sync);
  onEdit.addChangeListener(sync);
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
