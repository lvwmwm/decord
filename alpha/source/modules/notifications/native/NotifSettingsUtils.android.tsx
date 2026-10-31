// Module ID: 16275
// Function ID: 16276
// Name: NotifSettingsUtils
// Dependencies: [16272, 1113, 16276, 16277, 1242, 2]

// Module 16275 (NotifSettingsUtils)
import intl2 from "intl" /* 1113 */;
import react_nativeDefault from "react-native" /* 16276 */;
import NotificationSettingsConstants from "NotificationSettingsConstants" /* 16272 */;
import size from "module_2" /* 2 */;

let map, map1, notifType;

let c3;
let closure_4;
let tmp2;
const SentryUtilsDefault = tmp2(1242);
function inferImportanceFromBehavior(visibility) {
  if (!("ringtone" in visibility)) {
    let HIGH;
    if ("popup" !== visibility.visibility) {
      if ("hidden" === visibility.visibility) {
        HIGH = constants.MIN;
      } else {
        HIGH = visibility.sound ? tmp2.DEFAULT : tmp2.LOW;
      }
    }
    return HIGH;
  }
  HIGH = constants.HIGH;
}
function formatCategory(id) {
  let stringId;
  const obj = { id: id.stringId, name: stringId };
  const intl = intl2.intl;
  const stringResult = intl.string(id.title);
  stringId = id.stringId;
  if ("" !== stringResult) {
    stringId = stringResult;
  }
  return obj;
}
function formatSetting(item10023, arg1) {
  let ringtone;
  let string_id;
  let tmp2;
  const obj = { id: item10023.string_id, groupId: item10023.category, name: string_id, importance: tmp2, ringtone, badge: item10023.behavior.badge, vibrate: item10023.behavior.vibrate };
  const intl = intl2.intl;
  const stringResult = intl.string(item10023.title);
  string_id = item10023.string_id;
  if ("" !== stringResult) {
    string_id = stringResult;
  }
  tmp2 = arg1;
  if (arg1 == null) {
    const behavior = item10023.behavior;
    if (!("ringtone" in behavior)) {
      let HIGH;
      if ("popup" !== behavior.visibility) {
        if ("hidden" === behavior.visibility) {
          HIGH = constants.MIN;
        } else {
          HIGH = behavior.sound ? tmp3.DEFAULT : tmp3.LOW;
        }
      }
      tmp2 = HIGH;
    }
    HIGH = constants.HIGH;
  }
  ringtone = undefined;
  if ("ringtone" in item10023.behavior) {
    ringtone = item10023.behavior.ringtone;
  }
  return obj;
}
function buildChannelsAndMapping() {
  let categories;
  let flatMapResult;
  let mappings;
  let settings;
  function computeInheritedImportances(mappings) {
    map = new Map();
    const tmp = react_nativeDefault;
    let prop;
    if (tmp != null) {
      prop = tmp.getAndroidNotifChannelStates;
    }
    if (null == prop) {
      return map;
    } else {
      const _Map2 = Map;
      const self3 = this;
      const self4 = this;
      map1 = new Map();
      const propResult = prop();
      for (const item10020 of propResult) {
        let result = map1.set(item10020.channelId, item10020.importance);
        continue;
      }
      const _Map = Map;
      const self = this;
      const self2 = this;
      const map2 = new Map();
      for (const item10036 of closure_1_4) {
        let result1 = map2.set(item10036.id, item10036);
        continue;
      }
      const iter = mappings[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let notifSetting = nextResult.notifSetting;
        let tmp15 = closure_1_3[nextResult.notifType];
        if (null != tmp15) {
          for (const item10055 of tmp15) {
            if (item10055 !== notifSetting) {
              let value = map2.get(tmp18);
              let tmp22 = value;
              if (null != value) {
                let value2 = map1.get(tmp22.string_id);
                let tmp25 = value2;
                if (null != value2) {
                  if (tmp25 !== inferImportanceFromBehavior(tmp22.behavior)) {
                    let result2 = map.set(notifSetting, tmp25);
                    obj4.return();
                    break;
                  }
                }
              }
            }
            continue;
          }
        }
        continue;
      }
      return map;
    }
  }
  const obj = map(16277);
  const assignedNotifSettingsAndMappings = obj.getAssignedNotifSettingsAndMappings();
  ({ categories, settings, mappings } = assignedNotifSettingsAndMappings);
  const obj2 = computeInheritedImportances(mappings);
  let items = [];
  map = new Map();
  for (const item10023 of settings) {
    let arr = items.push(formatSetting(item10023, obj2.get(item10023.id)));
    let result = map.set(item10023.id, item10023.string_id);
    continue;
  }
  const obj3 = { groups: categories.map(formatCategory), mapping: flatMapResult, channels: items, inheritedImportances: obj2 };
  flatMapResult = mappings.flatMap((notifType) => {
    let items;
    notifType = notifType.notifType;
    const value = map.get(notifType.notifSetting);
    if (null == value) {
      items = [];
    } else {
      items = { type: notifType, channel: value };
    }
    return items;
  });
  return obj3;
}
({ NOTIF_SETTING_MAPPING: c3, NOTIF_SETTINGS: closure_4 } = NotificationSettingsConstants);
const constants = { NONE: 0, [0]: "NONE", MIN: 1, [1]: "MIN", LOW: 2, [2]: "LOW", DEFAULT: 3, [3]: "DEFAULT", HIGH: 4, [4]: "HIGH" };
let obj = {
  registerDeclarativeNotificationCategories() {
    let arr;
    let channels;
    let found;
    let groups;
    let inheritedImportances;
    let mapping;
    let obj3;
    let registerAndroidNotifGroupsAndChannels;
    let registerAndroidNotifTypeMappings;
    const tmp2 = importDefault;
    let obj = react_nativeDefault;
    if (obj == null) {
      obj = {};
    }
    ({ registerAndroidNotifGroupsAndChannels, registerAndroidNotifTypeMappings } = obj);
    if (null != registerAndroidNotifGroupsAndChannels) {
      if (null != registerAndroidNotifTypeMappings) {
        ({ groups, channels, inheritedImportances, mapping } = buildChannelsAndMapping());
        buildChannelsAndMapping();
        const obj2 = { message: "Registering declarative notification categories", data: obj3 };
        obj3 = {
          channels: channels.map((id) => id.id),
          entriesWithFallbackNames: found.map((id) => id.id),
          inheritedImportances: arr.map((item) => {
                let tmp;
                let tmp2;
                [tmp, tmp2] = item;
                return "NotifSettings#" + tmp + " -> " + tmp2;
              })
        };
        const addBreadcrumb = SentryUtilsDefault.addBreadcrumb;
        SentryUtilsDefault;
        const items = [];
        HermesBuiltin.arraySpread(items, channels, HermesBuiltin.arraySpread(items, groups, 0));
        found = items.filter((name) => name.name === name.id);
        const _Array = Array;
        arr = Array.from(inheritedImportances.entries());
        addBreadcrumb(obj2);
        const result = registerAndroidNotifGroupsAndChannels(groups, channels);
        const result1 = registerAndroidNotifTypeMappings(mapping);
        return true;
      }
    }
    return false;
  }
};
let result = size.fileFinishedImporting("modules/notifications/native/NotifSettingsUtils.android.tsx");

export default obj;
