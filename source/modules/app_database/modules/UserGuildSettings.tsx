// Module ID: 6718
// Function ID: 52229
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 6718 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let importDefault = Symbol_iterator;
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
      importDefault = tmp;
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
({ convertChannelOverridesToMap: closure_5, getGuildDefaults: closure_6 } = arg1(dependencyMap[3]));
let importDefaultResult = importDefault(dependencyMap[4]);
importDefaultResult = new importDefaultResult("ReadStates");
let tmp5 = () => {
  class UserGuildSettings {
    constructor() {
      f52237 = this;
      tmp = closure_3(this, UserGuildSettings);
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
  const dependencyMap = UserGuildSettings;
  let obj = { key: "getAll" };
  let closure_0 = callback(async (arg0) => {
    const nowResult = performance.now();
    const obj = callback(closure_1[5]);
    const arr = yield callback(closure_1[5]).userGuildSettings(arg0).getMany();
    closure_7.log("asynchronously loaded in " + performance.now() - nowResult + "ms (userGuildSettings: " + arr.length + ")");
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
      const tmp = callback3(arg0);
      let iter = tmp();
      if (!iter.done) {
        do {
          let value = iter.value;
          obj = {};
          let tmp2 = closure_6;
          let tmp3 = obj;
          let merged = Object.assign(closure_6(value.guild_id));
          let tmp5 = obj;
          let tmp6 = value;
          let merged1 = Object.assign(value);
          let tmp8 = closure_5;
          obj["channel_overrides"] = closure_5(value.channel_overrides);
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
}();
tmp5 = new tmp5();
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/app_database/modules/UserGuildSettings.tsx");

export default tmp5;
