// Module ID: 7915
// Function ID: 63068
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: getFilteredTopCommands, getTopRealCommands

// Module 7915 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
function getKey(guild, id) {
  if (Number(id.id) < 0) {
    id = id.id;
  } else {
    guild = undefined;
    if (null != guild) {
      guild = guild.guild;
    }
    if (null != guild) {
      if (null != id.guildId) {
        const _HermesInternal = HermesInternal;
        id = "" + id.id + ":" + guild.guild.id;
      }
    }
    id = id.id;
  }
  return id;
}
function handleUserSettingsProtoStoreChange() {
  const applicationCommandFrecency = obj.frecencyWithoutFetchingLatest.applicationCommandFrecency;
  let applicationCommands;
  if (null != applicationCommandFrecency) {
    applicationCommands = applicationCommandFrecency.applicationCommands;
  }
  if (null == applicationCommands) {
    applicationCommands = {};
  }
  importDefaultResult.overwriteHistory(importDefault(dependencyMap[10]).mapValues(applicationCommands, (recentUses) => {
    const obj = {};
    const merged = Object.assign(recentUses);
    recentUses = recentUses.recentUses;
    const mapped = recentUses.map(Number);
    obj["recentUses"] = mapped.filter((arg0) => arg0 > 0);
    return obj;
  }), closure_11.pendingUsages);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
({ DISCOVERY_COMMAND_FRECENCY_GATEWAY_LIMIT: closure_8, SUB_COMMAND_KEY_SEPARATOR: closure_9 } = arg1(dependencyMap[6]));
const UserSettingsTypes = arg1(dependencyMap[8]).UserSettingsTypes;
let closure_11 = { pendingUsages: [] };
let importDefaultResult = importDefault(dependencyMap[9]);
let obj = {
  computeBonus() {
    return 1;
  },
  lookupKey(arg0) {
    return arg0;
  },
  afterCompute() {

  },
  numFrequentlyItems: arg1(dependencyMap[7]).FREQUENCY_ITEM_LIMIT
};
importDefaultResult = new importDefaultResult(obj);
let tmp5 = (PersistedStore) => {
  class ApplicationCommandFrecencyStore {
    constructor() {
      self = this;
      tmp = closure_2(this, ApplicationCommandFrecencyStore);
      obj = closure_5(ApplicationCommandFrecencyStore);
      tmp2 = closure_4;
      if (closure_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = ApplicationCommandFrecencyStore;
  callback2(ApplicationCommandFrecencyStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      const self = this;
      const items = [closure_7];
      self.syncWith(items, closure_17);
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getState",
    value() {
      return closure_11;
    }
  };
  items[1] = obj;
  obj = {
    key: "hasPendingUsage",
    value() {
      return pendingUsages.pendingUsages.length > 0;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getCommandFrecencyWithoutLoadingLatest",
    value() {
      return closure_12;
    }
  };
  items[4] = {
    key: "getScoreWithoutLoadingLatest",
    value(arg0, arg1) {
      const score = score.getScore(callback4(arg0, arg1));
      let num = 0;
      if (null != score) {
        num = score;
      }
      return num;
    }
  };
  items[5] = {
    key: "getTopCommandsWithoutLoadingLatest",
    value() {
      return score.frequently;
    }
  };
  return callback(ApplicationCommandFrecencyStore, items);
}(importDefault(dependencyMap[11]).PersistedStore);
tmp5.displayName = "ApplicationCommandFrecencyStore";
tmp5.persistKey = "ApplicationCommandFrecencyV2";
obj = {
  APPLICATION_COMMAND_USED: function handleApplicationCommandUsed(context) {
    const tmp = getKey(context.context, context.command);
    const pendingUsages = closure_11.pendingUsages;
    pendingUsages.push({ key: tmp, timestamp: Date.now() });
    importDefaultResult.track(tmp);
    importDefaultResult.compute();
  },
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate(settings) {
    if (settings.settings.type === UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
      if (settings.wasSaved) {
        closure_11.pendingUsages = [];
      }
    }
    return false;
  }
};
tmp5 = new tmp5(importDefault(dependencyMap[12]), obj);
const tmp2 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/application_commands/ApplicationCommandFrecencyStore.tsx");

export default tmp5;
export const getTopRealCommands = function getTopRealCommands(arg0) {
  const set = new Set();
  const tmp = _createForOfIteratorHelperLoose(arg0);
  let iter = tmp();
  if (!iter.done) {
    while (true) {
      let str = iter.value;
      let tmp2 = closure_9;
      let first = str.split(closure_9)[0];
      let _Number = Number;
      if (Number(first) > 0) {
        let addResult = set.add(first);
      }
      let tmp5 = closure_8;
      if (set.size >= closure_8) {
        break;
      } else {
        let iter2 = tmp();
        iter = iter2;
        if (iter2.done) {
          break;
        }
      }
    }
  }
  const items = [...set];
  return items;
};
export const getFilteredTopCommands = function getFilteredTopCommands(arr) {
  const importDefault = arg1;
  const found = arr.filter((arr) => {
    let tmp = !arr.includes(":");
    if (!tmp) {
      let guild;
      if (null != arg1) {
        guild = arg1.guild;
      }
      let tmp6 = null != guild;
      if (tmp6) {
        tmp6 = arg1.guild.id === arr.split(":")[1];
      }
      tmp = tmp6;
    }
    return tmp;
  });
  return found.map((arg0) => arg0.split(":")[0]);
};
