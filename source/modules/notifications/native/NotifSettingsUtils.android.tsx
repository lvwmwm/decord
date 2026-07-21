// Module ID: 13258
// Function ID: 100609
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 13258 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let require = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      require = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  const intl = require(dependencyMap[1]).intl;
  obj.name = intl.string(id.title);
  return obj;
}
function formatSetting(id) {
  let tmp = arg1;
  const obj = { id: id.string_id, groupId: id.category };
  const intl = require(dependencyMap[1]).intl;
  obj.name = intl.string(id.title);
  if (null == arg1) {
    tmp = inferImportanceFromBehavior(id.behavior);
  }
  obj.importance = tmp;
  let ringtone;
  if ("ringtone" in id.behavior) {
    ringtone = id.behavior.ringtone;
  }
  obj.ringtone = ringtone;
  obj.badge = id.behavior.badge;
  obj.vibrate = id.behavior.vibrate;
  return obj;
}
function buildChannelsAndMapping() {
  let done;
  let done2;
  let done3;
  let iter9;
  let obj = require(dependencyMap[3]);
  const assignedNotifSettingsAndMappings = obj.getAssignedNotifSettingsAndMappings();
  const mappings = assignedNotifSettingsAndMappings.mappings;
  const map = new Map();
  let prop;
  if (null != importDefault(dependencyMap[2])) {
    prop = importDefault(dependencyMap[2]).getAndroidNotifChannelStates;
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
        let tmp18 = closure_4;
        let tmp19 = closure_4[value.notifType];
        let tmp20 = tmp15;
        let tmp21 = tmp16;
        let tmp22 = tmp17;
        if (null != tmp19) {
          let tmp44 = closure_7;
          let tmp45 = closure_7(tmp19);
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
                    let tmp28 = closure_9;
                    tmp26 = value2;
                    tmp24 = value3;
                    if (value3 !== closure_9(value2.behavior)) {
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
        let tmp15 = tmp20;
        let tmp16 = tmp21;
        let tmp17 = tmp22;
        iter6 = iter9;
      } while (!iter9.done);
    }
  }
  const items = [];
  const map3 = new Map();
  const require = map3;
  const tmp35 = _createForOfIteratorHelperLoose(assignedNotifSettingsAndMappings.settings);
  let iter10 = tmp35();
  if (!iter10.done) {
    do {
      let value4 = iter10.value;
      let tmp36 = closure_11;
      let arr = items.push(closure_11(value4, map.get(value4.id)));
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
const _module = require(dependencyMap[0]);
({ NOTIF_CATEGORIES: closure_3, NOTIF_SETTING_MAPPING: closure_4, NOTIF_SETTINGS: closure_5 } = _module);
let closure_6 = { NONE: 0, [0]: "NONE", MIN: 1, [1]: "MIN", LOW: 2, [2]: "LOW", DEFAULT: 3, [3]: "DEFAULT", HIGH: 4, [4]: "HIGH" };
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/notifications/native/NotifSettingsUtils.android.tsx");

export default {
  clear() {
    let registerAndroidNotifGroupsAndChannels;
    let registerAndroidNotifTypeMappings;
    if (null != importDefault(dependencyMap[2])) {
      let obj = importDefault(dependencyMap[2]);
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
    if (null != importDefault(dependencyMap[2])) {
      let obj = importDefault(dependencyMap[2]);
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
        const obj2 = importDefault(dependencyMap[4]);
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
