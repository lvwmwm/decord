// Module ID: 3759
// Function ID: 28740
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1391, 1917, 1838, 1849, 653, 566, 686, 2]

// Module 3759 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { isGuildLurker } from "isGuildOwner";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_10;
let closure_9;
function _isNativeReflectConstruct() {
  let _isNativeReflectConstruct = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _isNativeReflectConstruct;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let _isNativeReflectConstruct = iterable;
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
      _isNativeReflectConstruct = tmp;
    }
    let c1 = 0;
    return () => {
      if (_createForOfIteratorHelperLoose >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        _createForOfIteratorHelperLoose = tmp3 + 1;
        obj.value = length[+_createForOfIteratorHelperLoose];
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
function removeLurkedGuild(id) {
  const index = items.indexOf(id);
  if (index > -1) {
    items = [];
    HermesBuiltin.arraySpread(items, 0);
    items.splice(index, 1);
    delete tmp3[tmp2];
    delete tmp3[tmp2];
    delete tmp[tmp2];
    return true;
  } else {
    return false;
  }
}
function addLurkingGuild(guildId) {
  let tmp = guildId !== closure_10;
  if (tmp) {
    let flag = !items.includes(guildId);
    if (flag) {
      items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(items, 0);
      items[arraySpreadResult] = guildId;
      const sum = arraySpreadResult + 1;
      flag = true;
    }
    tmp = flag;
  }
  return tmp;
}
function setLurkingSource(guildId, lurkingSource) {
  if (null == lurkingSource) {
    delete tmp[tmp2];
  } else {
    closure_13[guildId] = lurkingSource;
  }
}
({ JoinGuildSources: closure_9, ME: closure_10 } = ME);
let closure_11 = [];
let closure_12 = {};
let closure_13 = {};
let closure_14 = {};
let tmp3 = ((Store) => {
  class LurkingStore {
    constructor() {
      self = this;
      tmp = LurkingStore(this, LurkingStore);
      obj = outer1_3(LurkingStore);
      tmp2 = outer1_2;
      if (outer1_15()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(LurkingStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_6, outer1_7, outer1_8);
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "lurkingGuildIds",
    value() {
      return outer1_11;
    }
  };
  items[1] = obj;
  obj = {
    key: "mostRecentLurkedGuildId",
    value() {
      let tmp = null;
      if (0 !== outer1_11.length) {
        tmp = outer1_11[outer1_11.length - 1];
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isLurking",
    value(guildId) {
      const guild = outer1_7.getGuild(guildId);
      if (null == guild) {
        return false;
      } else {
        let tmp6 = !outer1_6.isCurrentUserGuest(guildId);
        if (tmp6) {
          tmp6 = outer1_5(guild);
        }
        return Boolean(tmp6);
      }
    }
  };
  items[4] = {
    key: "getLurkingSourceForGuild",
    value(arg0) {
      let tmp = null;
      if (null != arg0) {
        let tmp4 = null;
        if (null != outer1_13[arg0]) {
          tmp4 = tmp3;
        }
        tmp = tmp4;
      }
      return tmp;
    }
  };
  items[5] = {
    key: "getLoadId",
    value(arg0) {
      let tmp = null;
      if (null != arg0) {
        tmp = outer1_12[arg0];
      }
      return tmp;
    }
  };
  items[6] = {
    key: "getLurkingPreviewExpirations",
    value() {
      return outer1_14;
    }
  };
  items[7] = {
    key: "getLurkingPreviewExpiry",
    value(arg0) {
      let tmp = null;
      if (null != arg0) {
        let tmp4 = null;
        if (null != outer1_14[arg0]) {
          tmp4 = tmp3;
        }
        tmp = tmp4;
      }
      return tmp;
    }
  };
  return callback(LurkingStore, items);
})(require("initialize").Store);
tmp3.displayName = "LurkingStore";
tmp3 = new tmp3(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    guildsArray = guildsArray.getGuildsArray();
    const found = guildsArray.filter((arg0) => outer1_5(arg0));
    let closure_11 = found.map((id) => id.id);
    let closure_13 = {};
    let closure_14 = {};
  },
  GUILD_JOIN: function handleGuildJoin(lurker) {
    let guildId;
    let loadId;
    let source;
    ({ guildId, source, loadId } = lurker);
    if (lurker.lurker) {
      addLurkingGuild(guildId);
      if (null != loadId) {
        closure_12[guildId] = loadId;
      }
      delete tmp[tmp2];
      if (constants.MOBILE_GUILD_DISCOVERY === source) {
        let obj = { type: constants.MOBILE_GUILD_DISCOVERY };
        setLurkingSource(guildId, obj);
      } else if (constants.DIRECTORY_ENTRY === source) {
        obj = { type: constants.DIRECTORY_ENTRY, directoryChannelId: tmp3 };
        setLurkingSource(guildId, obj);
      } else {
        setLurkingSource(guildId, null);
      }
      return true;
    } else {
      return false;
    }
  },
  GUILD_STOP_LURKING: function handleGuildStopLurking(ignoredGuildIds) {
    return (function clearLurkingGuilds(ignoredGuildIds) {
      let items = ignoredGuildIds;
      if (null == ignoredGuildIds) {
        items = [];
      }
      const items1 = [...items];
      const set = new Set(items1);
      const items2 = [...outer1_11];
      return items2.reduce((arg0, arg1) => {
        let tmp = arg0;
        if (!set.has(arg1)) {
          tmp = outer2_18(arg1) || arg0;
          const tmp3 = outer2_18(arg1) || arg0;
        }
        return tmp;
      }, false);
    })(ignoredGuildIds.ignoredGuildIds);
  },
  GUILD_STOP_LURKING_FOR_GUILD: function handleGuildStopLurkingForGuild(lurkingGuildId) {
    return removeLurkedGuild(lurkingGuildId.lurkingGuildId);
  },
  GUILD_STOP_LURKING_FAILURE: function handleGuildStopLurkingFailure(lurkingGuildId) {
    lurkingGuildId = lurkingGuildId.lurkingGuildId;
    addLurkingGuild(lurkingGuildId);
    setLurkingSource(lurkingGuildId, lurkingGuildId.lurkingSource);
    return true;
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    let tmp = null == guild.joined_at;
    if (!tmp) {
      tmp = !closure_11.includes(guild.id);
    }
    let flag = !tmp;
    if (!tmp) {
      removeLurkedGuild(guild.id);
      flag = true;
    }
    return flag;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    const tmp = !closure_11.includes(guild.id);
    let flag = !tmp;
    if (!tmp) {
      removeLurkedGuild(guild.id);
      flag = true;
    }
    return flag;
  },
  GUILD_MEMBER_ADD: function handleGuildMemberAdd(guildId, arg1) {
    guildId = guildId.guildId;
    currentUser = currentUser.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    let tmp3 = guildId.user.id !== id || null == guildId.joinedAt;
    if (!tmp3) {
      tmp3 = !closure_11.includes(guildId);
    }
    let flag = !tmp3;
    if (!tmp3) {
      removeLurkedGuild(guildId);
      flag = true;
    }
    return flag;
  },
  LURKER_PREVIEW_SET_EXPIRY: function handleLurkerPreviewSetExpiry(expiresAt) {
    let iter3;
    expiresAt = expiresAt.expiresAt;
    const tmp = _createForOfIteratorHelperLoose(expiresAt.guildIds);
    const iter = tmp();
    let iter2 = iter;
    let flag = false;
    let flag2 = false;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp2 = closure_11;
        let tmp3 = flag;
        if (closure_11.includes(value)) {
          let tmp4 = table;
          if (table[value] !== expiresAt) {
            let tmp5 = table;
            table[value] = expiresAt;
            flag = true;
          }
          tmp3 = flag;
        }
        iter3 = tmp();
        flag = tmp3;
        iter2 = iter3;
        flag2 = tmp3;
      } while (!iter3.done);
    }
    return flag2;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/lurker_mode/LurkingStore.tsx");

export default tmp3;
