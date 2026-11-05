// Module ID: 16543
// Function ID: 16544
// Name: NotifSettingsUtils
// Dependencies: [16537, 1113, 16541, 16544, 1242, 2]

// Module 16543 (NotifSettingsUtils)
import intl2 from "intl" /* 1113 */;
import react_nativeDefault from "react-native" /* 16544 */;
import NotificationSettingsConstants from "NotificationSettingsConstants" /* 16537 */;
import size from "module_2" /* 2 */;

let map, map1, map2, set, set2;

let c3;
let closure_4;
let hasOwnProperty;
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
function formatSetting(item10037, arg1) {
  let ringtone;
  let string_id;
  let tmp2;
  const obj = { id: item10037.string_id, groupId: item10037.category, name: string_id, importance: tmp2, ringtone, badge: item10037.behavior.badge, vibrate: item10037.behavior.vibrate };
  const intl = intl2.intl;
  const stringResult = intl.string(item10037.title);
  string_id = item10037.string_id;
  if ("" !== stringResult) {
    string_id = stringResult;
  }
  tmp2 = arg1;
  if (arg1 == null) {
    const behavior = item10037.behavior;
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
  if ("ringtone" in item10037.behavior) {
    ringtone = item10037.behavior.ringtone;
  }
  return obj;
}
function buildChannelsAndMapping() {
  let categories;
  let items;
  let mappings;
  let redesignState;
  let settings;
  function computeInheritedImportances(settings, mappings, androidNotifChannelStates, redesignState) {
    let notifSetting;
    let notifType;
    map = new Map();
    map1 = new Map(androidNotifChannelStates.map((item) => {
      items = [, ];
      ({ channelId: arr[0], importance: arr[1] } = item);
      return items;
    }));
    map2 = new Map(set2.map((id) => {
      items = [id.id, id];
      return items;
    }));
    const map3 = new Map();
    const map4 = new Map();
    const iter = set2[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      set = map4.get(nextResult.string_id);
      if (set == null) {
        let _Set = Set;
        let self = this;
        let self2 = this;
        set = new Set();
      }
      let addResult = set.add(inferImportanceFromBehavior(tmp3.behavior));
      let result = map4.set(tmp3.string_id, set);
      continue;
    }
    const iter2 = settings[Symbol.iterator]();
    const nextResult1 = iter2.next();
    while (iter2 !== undefined) {
      let tmp9 = nextResult1;
      let prop = nextResult1.sourceAndroidChannels;
      let _Set2 = Set;
      if (prop == null) {
        prop = [];
      }
      let self3 = this;
      let self4 = this;
      let _Set21 = new _Set2(prop);
      let obj7 = _Set21;
      if (!redesignState) {
        for (const item10092 of set2) {
          let sourceAndroidChannels = item10092.sourceAndroidChannels;
          let hasItem;
          let tmp14 = item10092;
          if (sourceAndroidChannels != null) {
            hasItem = sourceAndroidChannels.includes(tmp9.string_id);
          }
          if (hasItem) {
            let addResult1 = obj7.add(tmp14.string_id);
          }
          continue;
        }
      }
      let result1 = map3.set(tmp9.id, obj7);
      continue;
    }
    const iter3 = mappings[Symbol.iterator]();
    const nextResult2 = iter3.next();
    while (iter3 !== undefined) {
      ({ notifType, notifSetting } = nextResult2);
      let tmp24 = notifSetting;
      let value7 = map2.get(notifSetting);
      let tmp26 = value7;
      if (null != value7) {
        if (!("sourceAndroidChannels" in tmp26)) {
          items = mapped[notifType];
          if (items == null) {
            items = [];
          }
          for (const item10132 of items) {
            let value8 = map2.get(item10132);
            let tmp32 = value8;
            let tmp33 = null != value8;
            if (tmp33) {
              tmp33 = tmp32.string_id !== tmp26.string_id;
            }
            if (tmp33) {
              let value9 = map3.get(tmp24);
              if (value9 != null) {
                let addResult2 = value9.add(tmp32.string_id);
              }
            }
            continue;
          }
        }
      }
      continue;
    }
    const iter4 = settings[Symbol.iterator]();
    const nextResult3 = iter4.next();
    while (iter4 !== undefined) {
      let tmp40 = nextResult3;
      if (!map1.has(nextResult3.string_id)) {
        let tmp43 = inferImportanceFromBehavior(tmp40.behavior);
        let bound = tmp43;
        let tmp44 = tmp43;
        let value10 = map3.get(tmp40.id);
        if (value10 == null) {
          value10 = [];
        }
        for (const item10173 of value10) {
          let tmp48 = item10173;
          let value11 = map1.get(item10173);
          let tmp50 = value11;
          let tmp51 = null == value11;
          if (!tmp51) {
            let _Number = Number;
            tmp51 = !Number.isInteger(tmp50);
          }
          if (!tmp51) {
            tmp51 = tmp50 < constants.NONE;
          }
          if (!tmp51) {
            let value12 = map4.get(tmp48);
            let hasItem1;
            if (value12 != null) {
              hasItem1 = value12.has(tmp50);
            }
            if (true !== hasItem1) {
              let _Math = Math;
              bound = Math.min(bound, tmp50);
            }
          }
          continue;
        }
        if (bound < tmp44) {
          let result2 = map.set(tmp40.id, bound);
        }
      }
      continue;
    }
    return map;
  }
  function _loop(item10083) {
    let closure_0 = item10083;
    if (set1.has(item10083.string_id)) {
      const obj = set;
      if (!set.has(item10083.string_id)) {
        items.push(formatSetting(item10083));
        obj.add(item10083.string_id);
        const found = _false.find((string_id) => string_id.string_id === category.category);
        const hasItem = null == found || set2.has(found.string_id);
        if (!hasItem) {
          let string_id = found.string_id;
          const push = mapped.push;
          const title = found.title;
          const obj2 = { id: string_id, name: string_id };
          const intl = intl2.intl;
          const stringResult = intl.string(title);
          if ("" !== stringResult) {
            string_id = stringResult;
          }
          push(obj2);
          set2.add(found.string_id);
        }
      }
    }
    return 1;
  }
  let obj = items(set[2]);
  const assignedNotifSettingsAndMappings = obj.getAssignedNotifSettingsAndMappings();
  ({ categories, settings, mappings, redesignState } = assignedNotifSettingsAndMappings);
  const tmp2 = map(set[3]);
  let androidNotifChannelStates;
  if (tmp2 != null) {
    const getAndroidNotifChannelStates = tmp2.getAndroidNotifChannelStates;
    if (getAndroidNotifChannelStates != null) {
      androidNotifChannelStates = getAndroidNotifChannelStates();
    }
  }
  if (androidNotifChannelStates == null) {
    androidNotifChannelStates = [];
  }
  let obj2 = computeInheritedImportances(settings, mappings, androidNotifChannelStates, redesignState);
  items = [];
  map = new Map();
  for (const item10037 of settings) {
    let tmp3 = formatSetting;
    let arr = items.push(formatSetting(item10037, obj2.get(item10037.id)));
    let result = map.set(item10037.id, item10037.string_id);
    continue;
  }
  set = new Set(items.map((id) => id.id));
  const set1 = new Set(androidNotifChannelStates.map((channelId) => channelId.channelId));
  const mapped = categories.map(formatCategory);
  set2 = new Set(mapped.map((id) => id.id));
  for (const item10083 of set2) {
    let tmp9 = _loop(item10083);
    continue;
  }
  const obj3 = {
    groups: mapped,
    mapping: mappings.flatMap((notifType) => {
      notifType = notifType.notifType;
      const value = map.get(notifType.notifSetting);
      if (null == value) {
        items = [];
      } else {
        items = { type: notifType, channel: value };
      }
      return items;
    }),
    channels: items,
    inheritedImportances: obj2
  };
  return obj3;
}
({ NOTIF_CATEGORIES: c3, NOTIF_SETTING_MAPPING: closure_4, NOTIF_SETTINGS: hasOwnProperty } = NotificationSettingsConstants);
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
