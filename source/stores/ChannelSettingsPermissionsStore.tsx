// Module ID: 15508
// Function ID: 119491
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 7597, 1348, 653, 7485, 587, 3763, 22, 566, 686, 2]

// Module 15508 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "ME";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import ME from "ME";
import { ADVANCED_MODE_ON_KEY } from "RowType";
import { Storage } from "Storage";
import set from "_possibleConstructorReturn";

let FormStates;
let closure_11;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
function getPermissionOverwrites(channel) {
  const guildId = channel.getGuildId();
  const obj = {};
  const merged = Object.assign(channel.permissionOverwrites);
  if (tmp3) {
    obj[guildId] = importAll(3763).makeEveryoneOverwrite(guildId);
    const obj2 = importAll(3763);
  }
  return obj;
}
function init() {
  const _null2 = store.getChannel();
  const category = store.getCategory();
  if (null == _null2) {
    return false;
  } else {
    const guildId = _null2.getGuildId();
    const tmp13 = getPermissionOverwrites(_null2);
    let c19 = tmp13;
    let c20 = tmp13;
    let closure_15 = null != category;
    let closure_14 = importAll(3763).areChannelsLocked(_null2, category);
    let c24 = null;
    let c18 = false;
    const CLOSED = FormStates.CLOSED;
    set.clear();
  }
}
function syncChannelUpdates(id) {
  if (null != channel) {
    if (channel.id === id) {
      channel = channel.getChannel(id);
      if (null == channel) {
        return false;
      } else {
        const category = store.getCategory();
        const guildId = channel.getGuildId();
        if (null == guildId) {
          return false;
        } else {
          let closure_20 = getPermissionOverwrites(channel);
          let obj = {};
          const item = set.forEach((arg0) => {
            if (null != obj) {
              obj[arg0] = obj[arg0];
            }
          });
          let tmp2 = null == obj[guildId];
          if (tmp2) {
            tmp2 = null == channel.permissionOverwrites[guildId];
          }
          if (tmp2) {
            obj = importAll(3763);
            obj[guildId] = obj.makeEveryoneOverwrite(guildId);
          }
          obj = {};
          const merged = Object.assign(channel.permissionOverwrites);
          const merged1 = Object.assign(obj);
          if (null == obj[closure_23]) {
            closure_23 = guildId;
          } else {
            let tmp13 = null != c24;
            if (tmp13) {
              tmp13 = null != obj[c24];
            }
            if (tmp13) {
              closure_23 = c24;
              c24 = null;
            }
          }
          let closure_14 = importAll(3763).areChannelsLocked(channel, category);
          return true;
        }
      }
    }
  }
  return false;
}
({ ChannelSettingsSections: closure_11, FormStates } = ME);
let set = new Set();
let CLOSED = FormStates.CLOSED;
let c18 = false;
let c19 = null;
let c20 = null;
let c21 = null;
let c22 = null;
let c23 = null;
let c24 = null;
let closure_25 = Storage.get(ADVANCED_MODE_ON_KEY) || false;
let tmp5 = ((Store) => {
  class ChannelSettingsPermissionsStore {
    constructor() {
      self = this;
      tmp = outer1_4(this, ChannelSettingsPermissionsStore);
      obj = outer1_7(ChannelSettingsPermissionsStore);
      tmp2 = outer1_6;
      if (outer1_26()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ChannelSettingsPermissionsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_9, outer1_10);
    }
  };
  const items = [obj, , , , , , , , , , , , ];
  obj = {
    key: "hasChanges",
    value() {
      return outer1_18;
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
      if (null != outer1_19) {
        tmp2 = tmp[arg0];
      }
      return tmp2;
    }
  };
  items[4] = {
    key: "editedPermissionIds",
    get() {
      return Array.from(outer1_16);
    }
  };
  items[5] = {
    key: "permissionOverwrites",
    get() {
      return outer1_19;
    }
  };
  items[6] = {
    key: "selectedOverwriteId",
    get() {
      return outer1_23;
    }
  };
  items[7] = {
    key: "formState",
    get() {
      return outer1_17;
    }
  };
  items[8] = {
    key: "isLockable",
    get() {
      return outer1_15;
    }
  };
  items[9] = {
    key: "locked",
    get() {
      return outer1_14;
    }
  };
  items[10] = {
    key: "channel",
    get() {
      return outer1_21;
    }
  };
  items[11] = {
    key: "category",
    get() {
      return outer1_22;
    }
  };
  items[12] = {
    key: "advancedMode",
    get() {
      return outer1_25;
    }
  };
  return callback(ChannelSettingsPermissionsStore, items);
})(require("initialize").Store);
tmp5.displayName = "ChannelSettingsPermissionsStore";
tmp5 = new tmp5(require("dispatcher"), {
  CHANNEL_SETTINGS_SET_SECTION: function handleSetSection(arg0) {
    if (null == c21) {
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
    if (null != obj) {
      tmp = obj[id];
    }
    if (null != tmp) {
      if (null != c21) {
        obj = {};
        const merged = Object.assign(tmp);
        obj["allow"] = allow;
        obj["deny"] = deny;
        obj = {};
        const merged1 = Object.assign(obj);
        obj[id] = obj;
        set.add(id);
        const OPEN = FormStates.OPEN;
        let closure_18 = !importDefault(22).isEqual(obj, c20);
        const obj3 = importDefault(22);
        let closure_14 = importAll(3763).areChannelsLocked(c21, c22);
      }
    }
    return false;
  },
  CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function handleSelectPermission(id) {
    id = id.id;
    if (null == c21) {
      return false;
    }
  },
  CHANNEL_SETTINGS_INIT: function handleInit() {
    if (store.getSection() === constants.PERMISSIONS) {
      init();
    }
  },
  CHANNEL_SETTINGS_CLOSE: function handleClose() {
    const CLOSED = FormStates.CLOSED;
    let c19 = null;
    let c20 = null;
    let c21 = null;
    let c22 = null;
    let c18 = false;
    set.clear();
    let c23 = null;
    let c24 = null;
  },
  CHANNEL_UPDATES: function handleChannelUpdates(arg0) {
    let iter3;
    if (null == c21) {
      return false;
    } else {
      const tmp3 = _createForOfIteratorHelperLoose(tmp);
      const iter = tmp3();
      let iter2 = iter;
      let flag2 = false;
      let flag3 = false;
      if (!iter.done) {
        do {
          let tmp4 = syncChannelUpdates;
          if (false !== syncChannelUpdates(iter2.value.id)) {
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
    const SUBMITTING = FormStates.SUBMITTING;
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
    const Storage = require(587) /* Storage */.Storage;
    const result = Storage.set(ADVANCED_MODE_ON_KEY, advancedMode);
  }
});
let result = set.fileFinishedImporting("stores/ChannelSettingsPermissionsStore.tsx");

export default tmp5;
