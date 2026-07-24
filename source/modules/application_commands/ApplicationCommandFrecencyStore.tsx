// Module ID: 8009
// Function ID: 63439
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1316, 4566, 4156, 662, 4214, 22, 566, 686, 2]
// Exports: getFilteredTopCommands, getTopRealCommands

// Module 8009 (_isNativeReflectConstruct)
import closure_2 from "TRUE_OPTION_NAME";
import ApplicationTypes from "ApplicationTypes";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import TRUE_OPTION_NAME from "TRUE_OPTION_NAME";
import { UserSettingsTypes } from "MAX_FAVORITES";
import importDefaultResult from "DEFAULT_FRECENCY";

let closure_8;
let closure_9;
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
  importDefaultResult.overwriteHistory(importDefault(22).mapValues(applicationCommands, (recentUses) => {
    const obj = {};
    const merged = Object.assign(recentUses);
    recentUses = recentUses.recentUses;
    const mapped = recentUses.map(Number);
    obj["recentUses"] = mapped.filter((arg0) => arg0 > 0);
    return obj;
  }), closure_11.pendingUsages);
}
({ DISCOVERY_COMMAND_FRECENCY_GATEWAY_LIMIT: closure_8, SUB_COMMAND_KEY_SEPARATOR: closure_9 } = TRUE_OPTION_NAME);
let closure_11 = { pendingUsages: [] };
let obj = {
  computeBonus() {
    return 1;
  },
  lookupKey(arg0) {
    return arg0;
  },
  afterCompute() {

  },
  numFrequentlyItems: require("ApplicationTypes").FREQUENCY_ITEM_LIMIT
};
importDefaultResult = new importDefaultResult(obj);
let tmp5 = ((PersistedStore) => {
  class ApplicationCommandFrecencyStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, ApplicationCommandFrecencyStore);
      obj = outer1_5(ApplicationCommandFrecencyStore);
      tmp2 = outer1_4;
      if (outer1_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ApplicationCommandFrecencyStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      const self = this;
      if (null != arg0) {
        const outer1_11 = arg0;
      }
      const items = [outer1_7];
      self.syncWith(items, outer1_17);
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "getState",
    value() {
      return outer1_11;
    }
  };
  items[1] = obj;
  obj = {
    key: "hasPendingUsage",
    value() {
      return outer1_11.pendingUsages.length > 0;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getCommandFrecencyWithoutLoadingLatest",
    value() {
      return outer1_12;
    }
  };
  items[4] = {
    key: "getScoreWithoutLoadingLatest",
    value(arg0, arg1) {
      const score = outer1_12.getScore(outer1_16(arg0, arg1));
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
      return outer1_12.frequently;
    }
  };
  return callback(ApplicationCommandFrecencyStore, items);
})(require("initialize").PersistedStore);
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
tmp5 = new tmp5(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/application_commands/ApplicationCommandFrecencyStore.tsx");

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
  let closure_0 = arg1;
  const found = arr.filter((arr) => {
    let tmp = !arr.includes(":");
    if (!tmp) {
      let guild;
      if (null != closure_0) {
        guild = closure_0.guild;
      }
      let tmp6 = null != guild;
      if (tmp6) {
        tmp6 = closure_0.guild.id === arr.split(":")[1];
      }
      tmp = tmp6;
    }
    return tmp;
  });
  return found.map((arg0) => arg0.split(":")[0]);
};
