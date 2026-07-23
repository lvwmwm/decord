// Module ID: 13381
// Function ID: 102820
// Name: _createForOfIteratorHelperLoose
// Dependencies: [13377, 1212, 13382, 13383, 1184, 2]

// Module 13381 (_createForOfIteratorHelperLoose)
import items2 from "items2";

let closure_3;
let closure_4;
let closure_5;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function inferImportanceFromBehavior(behavior) {
  if (!("ringtone" in behavior)) {
    if ("popup" !== behavior.visibility) {
      if ("hidden" === behavior.visibility) {
        let HIGH = constants.MIN;
      } else {
        HIGH = behavior.sound ? tmp2.DEFAULT : tmp2.LOW;
      }
    }
    return HIGH;
  }
  HIGH = constants.HIGH;
}
function formatCategory(id) {
  const obj = { id: id.string_id };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.name = intl.string(id.title);
  return obj;
}
function formatSetting(value4, map) {
  let tmp = map;
  const obj = { id: value4.string_id, groupId: value4.category };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.name = intl.string(value4.title);
  if (null == map) {
    tmp = inferImportanceFromBehavior(value4.behavior);
  }
  obj.importance = tmp;
  let ringtone;
  if ("ringtone" in value4.behavior) {
    ringtone = value4.behavior.ringtone;
  }
  obj.ringtone = ringtone;
  obj.badge = value4.behavior.badge;
  obj.vibrate = value4.behavior.vibrate;
  return obj;
}
function buildChannelsAndMapping() {
  let done;
  let done2;
  let done3;
  let iter9;
  let obj = map3(13383);
  const assignedNotifSettingsAndMappings = obj.getAssignedNotifSettingsAndMappings();
  const mappings = assignedNotifSettingsAndMappings.mappings;
  const map = new Map();
  let prop;
  if (null != importDefault(13382)) {
    prop = importDefault(13382).getAndroidNotifChannelStates;
  }
  if (null != prop) {
    const _Map2 = Map;
    const map1 = new Map();
    const tmp43 = _createForOfIteratorHelperLoose(prop());
    let iter2 = tmp43();
    if (!iter2.done) {
      do {
        let value = iter2.value;
        let result = map1.set(value.channelId, value.importance);
        let iter = tmp43();
        iter2 = iter;
        done = iter.done;
      } while (!done);
    }
    const _Map = Map;
    const map2 = new Map();
    const tmp11 = _createForOfIteratorHelperLoose(closure_5);
    let iter3 = tmp11();
    if (!iter3.done) {
      do {
        value = iter3.value;
        let result1 = map2.set(value.id, value);
        let iter4 = tmp11();
        iter3 = iter4;
        done2 = iter4.done;
      } while (!done2);
    }
    const tmp14 = _createForOfIteratorHelperLoose(mappings);
    const iter5 = tmp14();
    let iter6 = iter5;
    if (!iter5.done) {
      do {
        value = iter6.value;
        let notifSetting = value.notifSetting;
        let tmp18 = table;
        let tmp19 = table[value.notifType];
        let tmp20 = tmp15;
        let tmp21 = tmp16;
        let tmp22 = tmp17;
        if (null != tmp19) {
          let tmp44 = _createForOfIteratorHelperLoose;
          let tmp45 = _createForOfIteratorHelperLoose(tmp19);
          let iter12 = tmp45();
          let iter8 = iter12;
          let tmp26 = tmp16;
          let tmp29 = tmp17;
          let tmp46 = iter12;
          let tmp47 = tmp45;
          tmp20 = tmp15;
          tmp21 = tmp16;
          tmp22 = tmp17;
          if (!iter12.done) {
            while (true) {
              let value1 = iter8.value;
              let tmp23 = iter8;
              let tmp24 = tmp29;
              if (value1 !== notifSetting) {
                let value2 = map2.get(value1);
                tmp26 = value2;
                tmp24 = tmp29;
                if (null != value2) {
                  let value3 = map1.get(value2.string_id);
                  tmp26 = value2;
                  tmp24 = value3;
                  if (null != value3) {
                    let tmp28 = inferImportanceFromBehavior;
                    tmp26 = value2;
                    tmp24 = value3;
                    if (value3 !== inferImportanceFromBehavior(value2.behavior)) {
                      break;
                    }
                  }
                }
              }
              let iter7 = tmp45();
              tmp29 = tmp24;
              iter8 = iter7;
              let tmp30 = iter7;
              let tmp31 = tmp45;
              tmp20 = value1;
              tmp21 = tmp26;
              tmp22 = tmp24;
              continue;
            }
            let result2 = map.set(notifSetting, value3);
            let tmp33 = iter8;
            let tmp34 = tmp45;
            tmp20 = value1;
            tmp21 = value2;
            tmp22 = value3;
          }
        }
        iter9 = tmp14();
        tmp15 = tmp20;
        tmp16 = tmp21;
        tmp17 = tmp22;
        iter6 = iter9;
      } while (!iter9.done);
    }
  }
  let items = [];
  map3 = new Map();
  const tmp35 = _createForOfIteratorHelperLoose(assignedNotifSettingsAndMappings.settings);
  let iter10 = tmp35();
  if (!iter10.done) {
    do {
      let value4 = iter10.value;
      let tmp36 = formatSetting;
      let arr = items.push(formatSetting(value4, map.get(value4.id)));
      let result3 = map3.set(value4.id, value4.string_id);
      let iter11 = tmp35();
      iter10 = iter11;
      done3 = iter11.done;
    } while (!done3);
  }
  obj = {
    mapping: mappings.flatMap((notifSetting) => {
      const value = map3.get(notifSetting.notifSetting);
      if (null == value) {
        let items = [];
      } else {
        items = { type: notifSetting.notifType, channel: value };
      }
      return items;
    }),
    channels: items,
    inheritedImportances: map
  };
  return obj;
}
({ NOTIF_CATEGORIES: closure_3, NOTIF_SETTING_MAPPING: closure_4, NOTIF_SETTINGS: closure_5 } = items2);
let closure_6 = { NONE: 0, [0]: "NONE", MIN: 1, [1]: "MIN", LOW: 2, [2]: "LOW", DEFAULT: 3, [3]: "DEFAULT", HIGH: 4, [4]: "HIGH" };
let result = require("NativeNotifSettingsModule").fileFinishedImporting("modules/notifications/native/NotifSettingsUtils.android.tsx");

export default {
  clear() {
    let registerAndroidNotifGroupsAndChannels;
    let registerAndroidNotifTypeMappings;
    if (null != importDefault(13382)) {
      let obj = importDefault(13382);
    } else {
      obj = {};
    }
    ({ registerAndroidNotifGroupsAndChannels, registerAndroidNotifTypeMappings } = obj);
    if (null != registerAndroidNotifGroupsAndChannels) {
      const result = registerAndroidNotifGroupsAndChannels([], []);
    }
    if (null != registerAndroidNotifTypeMappings) {
      const result1 = registerAndroidNotifTypeMappings([]);
    }
  },
  registerDeclarativeNotificationCategories() {
    let channels;
    let inheritedImportances;
    let registerAndroidNotifGroupsAndChannels;
    let registerAndroidNotifTypeMappings;
    if (null != importDefault(13382)) {
      let obj = importDefault(13382);
    } else {
      obj = {};
    }
    ({ registerAndroidNotifGroupsAndChannels, registerAndroidNotifTypeMappings } = obj);
    if (null != registerAndroidNotifGroupsAndChannels) {
      if (null != registerAndroidNotifTypeMappings) {
        const tmp4 = buildChannelsAndMapping();
        ({ channels, inheritedImportances } = tmp4);
        obj = { message: "Registering declarative notification categories" };
        obj = { channels: channels.map((id) => id.id) };
        const _Array = Array;
        const obj2 = importDefault(1184);
        obj.inheritedImportances = Array.from(inheritedImportances.entries()).map((arg0) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = arg0;
          return "NotifSettings#" + tmp + " -> " + tmp2;
        });
        obj.data = obj;
        obj2.addBreadcrumb(obj);
        const result = registerAndroidNotifGroupsAndChannels(closure_3.map(formatCategory), channels);
        const result1 = registerAndroidNotifTypeMappings(tmp4.mapping);
        return true;
      }
    }
    return false;
  }
};
