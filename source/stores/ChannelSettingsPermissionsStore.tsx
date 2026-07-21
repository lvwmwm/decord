// Module ID: 15383
// Function ID: 117274
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15383 (_isNativeReflectConstruct)
let FormStates;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
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
      arg1 = tmp;
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
function getPermissionOverwrites(closure_21) {
  const guildId = closure_21.getGuildId();
  const obj = {};
  const merged = Object.assign(closure_21.permissionOverwrites);
  if (tmp3) {
    obj[guildId] = importAll(dependencyMap[10]).makeEveryoneOverwrite(guildId);
    const obj2 = importAll(dependencyMap[10]);
  }
  return obj;
}
function init() {
  const store2 = store.getChannel();
  const category = store.getCategory();
  if (null == store2) {
    return false;
  } else {
    const guildId = store2.getGuildId();
    const tmp13 = getPermissionOverwrites(store2);
    let closure_19 = tmp13;
    let closure_20 = tmp13;
    if (null == tmp13[closure_23]) {
      let closure_23 = guildId;
    }
    let closure_15 = null != category;
    let closure_14 = importAll(dependencyMap[10]).areChannelsLocked(store2, category);
    let closure_24 = null;
    let closure_18 = false;
    const CLOSED = FormStates.CLOSED;
    set.clear();
  }
}
function syncChannelUpdates(channelId) {
  if (null != store2) {
    if (store2.id === channelId) {
      const channel = channel.getChannel(channelId);
      const store2 = channel;
      if (null == channel) {
        return false;
      } else {
        const category = store.getCategory();
        const guildId = store2.getGuildId();
        if (null == guildId) {
          return false;
        } else {
          let closure_20 = getPermissionOverwrites(store2);
          let obj = {};
          const arg1 = obj;
          const item = set.forEach((arg0) => {
            if (null != obj) {
              obj[arg0] = obj[arg0];
            }
          });
          let tmp2 = null == obj[guildId];
          if (tmp2) {
            tmp2 = null == store2.permissionOverwrites[guildId];
          }
          if (tmp2) {
            obj = importAll(dependencyMap[10]);
            obj[guildId] = obj.makeEveryoneOverwrite(guildId);
          }
          obj = {};
          const merged = Object.assign(store2.permissionOverwrites);
          const merged1 = Object.assign(obj);
          let closure_19 = obj;
          if (null == obj[closure_23]) {
            let closure_23 = guildId;
          } else {
            let tmp13 = null != closure_24;
            if (tmp13) {
              tmp13 = null != closure_19[closure_24];
            }
            if (tmp13) {
              closure_23 = closure_24;
              closure_24 = null;
            }
          }
          let closure_14 = importAll(dependencyMap[10]).areChannelsLocked(store2, category);
          return true;
        }
      }
    }
  }
  return false;
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
({ ChannelSettingsSections: closure_11, FormStates } = arg1(dependencyMap[7]));
const ADVANCED_MODE_ON_KEY = arg1(dependencyMap[8]).ADVANCED_MODE_ON_KEY;
const set = new Set();
const CLOSED = FormStates.CLOSED;
let closure_18 = false;
let closure_19 = null;
let closure_20 = null;
let closure_21 = null;
let closure_22 = null;
let closure_23 = null;
let closure_24 = null;
const Storage = arg1(dependencyMap[9]).Storage;
const tmp4 = Storage.get(ADVANCED_MODE_ON_KEY) || false;
let tmp5 = (Store) => {
  class ChannelSettingsPermissionsStore {
    constructor() {
      self = this;
      tmp = closure_4(this, ChannelSettingsPermissionsStore);
      obj = closure_7(ChannelSettingsPermissionsStore);
      tmp2 = closure_6;
      if (closure_26()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = ChannelSettingsPermissionsStore;
  callback2(ChannelSettingsPermissionsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_9, closure_10);
    }
  };
  const items = [obj, , , , , , , , , , , , ];
  obj = {
    key: "hasChanges",
    value() {
      return closure_18;
    }
  };
  items[1] = obj;
  obj = {
    key: "showNotice",
    value() {
      return this.hasChanges();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getPermissionOverwrite",
    value(arg0) {
      let tmp2;
      if (null != closure_19) {
        tmp2 = tmp[arg0];
      }
      return tmp2;
    }
  };
  items[4] = {
    key: "editedPermissionIds",
    get() {
      return Array.from(closure_16);
    }
  };
  items[5] = {
    key: "permissionOverwrites",
    get() {
      return closure_19;
    }
  };
  items[6] = {
    key: "selectedOverwriteId",
    get() {
      return closure_23;
    }
  };
  items[7] = {
    key: "formState",
    get() {
      return closure_17;
    }
  };
  items[8] = {
    key: "isLockable",
    get() {
      return closure_15;
    }
  };
  items[9] = {
    key: "locked",
    get() {
      return closure_14;
    }
  };
  items[10] = {
    key: "channel",
    get() {
      return closure_21;
    }
  };
  items[11] = {
    key: "category",
    get() {
      return closure_22;
    }
  };
  items[12] = {
    key: "advancedMode",
    get() {
      return closure_25;
    }
  };
  return callback(ChannelSettingsPermissionsStore, items);
}(importDefault(dependencyMap[12]).Store);
tmp5.displayName = "ChannelSettingsPermissionsStore";
tmp5 = new tmp5(importDefault(dependencyMap[13]), {
  CHANNEL_SETTINGS_SET_SECTION: function handleSetSection(arg0) {
    if (null == closure_21) {
      if (tmp === constants.PERMISSIONS) {
        init();
      }
    }
    return false;
  },
  CHANNEL_SETTINGS_PERMISSIONS_INIT: init,
  CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function handleUpdatePermission(id) {
    let allow;
    let deny;
    id = id.id;
    let tmp;
    ({ allow, deny } = id);
    if (null != closure_19) {
      tmp = closure_19[id];
    }
    if (null != tmp) {
      if (null != closure_21) {
        let obj = {};
        const merged = Object.assign(tmp);
        obj["allow"] = allow;
        obj["deny"] = deny;
        obj = {};
        const merged1 = Object.assign(closure_19);
        obj[id] = obj;
        closure_19 = obj;
        set.add(id);
        const CLOSED = FormStates.OPEN;
        let closure_18 = !importDefault(dependencyMap[11]).isEqual(closure_19, closure_20);
        const obj3 = importDefault(dependencyMap[11]);
        let closure_14 = importAll(dependencyMap[10]).areChannelsLocked(closure_21, closure_22);
      }
    }
    return false;
  },
  CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function handleSelectPermission(id) {
    id = id.id;
    if (null != closure_19) {
      if (null != closure_19[id]) {
        let closure_23 = id;
      }
    }
    if (null == closure_21) {
      return false;
    } else {
      let closure_24 = id;
    }
  },
  CHANNEL_SETTINGS_INIT: function handleInit() {
    if (store.getSection() === constants.PERMISSIONS) {
      init();
    }
  },
  CHANNEL_SETTINGS_CLOSE: function handleClose() {
    const CLOSED = FormStates.CLOSED;
    let closure_19 = null;
    let closure_20 = null;
    let closure_21 = null;
    let closure_22 = null;
    let closure_18 = false;
    set.clear();
    let closure_23 = null;
    let closure_24 = null;
  },
  CHANNEL_UPDATES: function handleChannelUpdates(arg0) {
    let iter3;
    if (null == closure_21) {
      return false;
    } else {
      const tmp3 = _createForOfIteratorHelperLoose(tmp);
      const iter = tmp3();
      let iter2 = iter;
      let flag2 = false;
      let flag3 = false;
      if (!iter.done) {
        do {
          let tmp4 = closure_31;
          if (false !== closure_31(iter2.value.id)) {
            flag2 = true;
          }
          iter3 = tmp3();
          iter2 = iter3;
          flag3 = flag2;
        } while (!iter3.done);
      }
      return flag3;
    }
  },
  CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING: function handleSubmitting() {
    const CLOSED = FormStates.SUBMITTING;
  },
  CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS: function handleSaveSuccess(silent) {
    if (silent.silent) {
      let CLOSED = tmp.OPEN;
    } else {
      CLOSED = tmp.CLOSED;
      init();
    }
  },
  CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function handleSetAdvancedMode(advancedMode) {
    advancedMode = advancedMode.advancedMode;
    const Storage = arg1(dependencyMap[9]).Storage;
    const result = Storage.set(ADVANCED_MODE_ON_KEY, advancedMode);
  }
});
const obj = {
  CHANNEL_SETTINGS_SET_SECTION: function handleSetSection(arg0) {
    if (null == closure_21) {
      if (tmp === constants.PERMISSIONS) {
        init();
      }
    }
    return false;
  },
  CHANNEL_SETTINGS_PERMISSIONS_INIT: init,
  CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function handleUpdatePermission(id) {
    let allow;
    let deny;
    id = id.id;
    let tmp;
    ({ allow, deny } = id);
    if (null != closure_19) {
      tmp = closure_19[id];
    }
    if (null != tmp) {
      if (null != closure_21) {
        let obj = {};
        const merged = Object.assign(tmp);
        obj["allow"] = allow;
        obj["deny"] = deny;
        obj = {};
        const merged1 = Object.assign(closure_19);
        obj[id] = obj;
        closure_19 = obj;
        set.add(id);
        const CLOSED = FormStates.OPEN;
        let closure_18 = !importDefault(dependencyMap[11]).isEqual(closure_19, closure_20);
        const obj3 = importDefault(dependencyMap[11]);
        let closure_14 = importAll(dependencyMap[10]).areChannelsLocked(closure_21, closure_22);
      }
    }
    return false;
  },
  CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function handleSelectPermission(id) {
    id = id.id;
    if (null != closure_19) {
      if (null != closure_19[id]) {
        let closure_23 = id;
      }
    }
    if (null == closure_21) {
      return false;
    } else {
      let closure_24 = id;
    }
  },
  CHANNEL_SETTINGS_INIT: function handleInit() {
    if (store.getSection() === constants.PERMISSIONS) {
      init();
    }
  },
  CHANNEL_SETTINGS_CLOSE: function handleClose() {
    const CLOSED = FormStates.CLOSED;
    let closure_19 = null;
    let closure_20 = null;
    let closure_21 = null;
    let closure_22 = null;
    let closure_18 = false;
    set.clear();
    let closure_23 = null;
    let closure_24 = null;
  },
  CHANNEL_UPDATES: function handleChannelUpdates(arg0) {
    let iter3;
    if (null == closure_21) {
      return false;
    } else {
      const tmp3 = _createForOfIteratorHelperLoose(tmp);
      const iter = tmp3();
      let iter2 = iter;
      let flag2 = false;
      let flag3 = false;
      if (!iter.done) {
        do {
          let tmp4 = closure_31;
          if (false !== closure_31(iter2.value.id)) {
            flag2 = true;
          }
          iter3 = tmp3();
          iter2 = iter3;
          flag3 = flag2;
        } while (!iter3.done);
      }
      return flag3;
    }
  },
  CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING: function handleSubmitting() {
    const CLOSED = FormStates.SUBMITTING;
  },
  CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS: function handleSaveSuccess(silent) {
    if (silent.silent) {
      let CLOSED = tmp.OPEN;
    } else {
      CLOSED = tmp.CLOSED;
      init();
    }
  },
  CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function handleSetAdvancedMode(advancedMode) {
    advancedMode = advancedMode.advancedMode;
    const Storage = arg1(dependencyMap[9]).Storage;
    const result = Storage.set(ADVANCED_MODE_ON_KEY, advancedMode);
  }
};
const tmp2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("stores/ChannelSettingsPermissionsStore.tsx");

export default tmp5;
