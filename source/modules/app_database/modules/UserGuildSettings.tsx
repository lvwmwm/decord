// Module ID: 6723
// Function ID: 52294
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 6, 7, 4325, 3, 1882, 22, 2]

// Module 6723 (_createForOfIteratorHelperLoose)
import closure_2 from "_isNativeReflectConstruct";
import apply from "apply";
import set from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import importDefaultResult from "_isNativeReflectConstruct";

let closure_5;
let closure_6;
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
({ convertChannelOverridesToMap: closure_5, getGuildDefaults: closure_6 } = _isNativeReflectConstruct);
importDefaultResult = new importDefaultResult("ReadStates");
let tmp5 = (() => {
  class UserGuildSettings {
    constructor() {
      self = this;
      tmp = outer1_3(this, UserGuildSettings);
      this.actions = {
        CONNECTION_OPEN(arg0, arg1) {
              return self.handleConnectionOpen(arg0, arg1);
            },
        USER_GUILD_SETTINGS_FULL_UPDATE(guildId) {
              return self.handleUserGuildSettingsUpdate(guildId, arg1);
            }
      };
      return;
    }
  }
  let obj = { key: "getAll" };
  let closure_0 = callback(async (arg0) => {
    const nowResult = performance.now();
    const obj = callback(UserGuildSettings[5]);
    const arr = yield callback(UserGuildSettings[5]).userGuildSettings(arg0).getMany();
    outer2_7.log("asynchronously loaded in " + performance.now() - nowResult + "ms (userGuildSettings: " + arr.length + ")");
    return arr;
  });
  obj.value = function getAll() {
    return callback(...arguments);
  };
  const items = [obj, , , , ];
  obj = {
    key: "resetInMemoryState",
    value() {

    }
  };
  items[1] = obj;
  obj = {
    key: "handleConnectionOpen",
    value(userGuildSettings) {
      const self = this;
      if (!userGuildSettings.userGuildSettings.partial) {
        const result = callback(UserGuildSettings[5]).userGuildSettingsTransaction(arg1);
        result.delete();
        const obj = callback(UserGuildSettings[5]);
      }
      self.write(userGuildSettings.userGuildSettings.entries, userGuildSettings.userGuildSettings.version, arg1);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "handleUserGuildSettingsUpdate",
    value(userGuildSettings) {
      const self = this;
      userGuildSettings = userGuildSettings.userGuildSettings;
      const maxResult = callback(UserGuildSettings[6]).max(userGuildSettings.map((version) => {
        version = version.version;
        let num = -1;
        if (null != version) {
          num = version;
        }
        return num;
      }));
      if (null != maxResult) {
        self.write(userGuildSettings.userGuildSettings, maxResult, arg1);
      }
    }
  };
  items[4] = {
    key: "write",
    value(arg0, version) {
      let iter2;
      let obj = callback(UserGuildSettings[5]);
      const result = obj.userGuildSettingsTransaction(arg2);
      const tmp = outer1_8(arg0);
      let iter = tmp();
      if (!iter.done) {
        do {
          let value = iter.value;
          obj = {};
          let tmp2 = outer1_6;
          let tmp3 = obj;
          let merged = Object.assign(outer1_6(value.guild_id));
          let tmp5 = obj;
          let tmp6 = value;
          let merged1 = Object.assign(value);
          let tmp8 = outer1_5;
          obj["channel_overrides"] = outer1_5(value.channel_overrides);
          let guild_id = value.guild_id;
          let str = "dm-sentinel";
          if (null != guild_id) {
            str = guild_id;
          }
          let putResult = result.put(str, obj);
          iter2 = tmp();
          iter = iter2;
        } while (!iter2.done);
      }
      const result1 = callback(UserGuildSettings[5]).nonGuildVersionsTransaction(arg2);
      obj = { id: "user_guild_settings_version", version };
      result1.put(obj);
    }
  };
  return callback2(UserGuildSettings, items);
})();
tmp5 = new tmp5();
let result = require("_defineProperties").fileFinishedImporting("modules/app_database/modules/UserGuildSettings.tsx");

export default tmp5;
