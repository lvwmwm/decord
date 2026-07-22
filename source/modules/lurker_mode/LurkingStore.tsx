// Module ID: 3757
// Function ID: 28735
// Name: _isNativeReflectConstruct
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1194, 653, 3768, 3769]

// Module 3757 (_isNativeReflectConstruct)
import __exportStarResult1 from "__exportStarResult1";
import closure_1 from "__exportStarResult1";
import closure_2 from "__exportStarResult1";
import closure_3 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import { isGuildLurker } from "__exportStarResult1";
import closure_6 from "__exportStarResult1";
import closure_7 from "__exportStarResult1";
import closure_8 from "__exportStarResult1";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

function _isNativeReflectConstruct() {
  let __exportStarResult1 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return __exportStarResult1;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let __exportStarResult1 = Symbol_iterator;
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
      __exportStarResult1 = tmp;
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
function removeLurkedGuild(id) {
  const index = closure_11.indexOf(id);
  if (index > -1) {
    const items = [];
    HermesBuiltin.arraySpread(closure_11, 0);
    items.splice(index, 1);
    closure_11 = items;
    delete r2[r1];
    delete r2[r1];
    delete r0[r1];
    return true;
  } else {
    return false;
  }
}
function addLurkingGuild(guildId) {
  let tmp = guildId !== closure_10;
  if (tmp) {
    let flag = !closure_11.includes(guildId);
    if (flag) {
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(closure_11, 0);
      items[arraySpreadResult] = guildId;
      const sum = arraySpreadResult + 1;
      closure_11 = items;
      flag = true;
    }
    tmp = flag;
  }
  return tmp;
}
function setLurkingSource(guildId, lurkingSource) {
  if (null == lurkingSource) {
    delete r0[r1];
  } else {
    closure_13[guildId] = lurkingSource;
  }
}
({ JoinGuildSources: closure_9, ME: closure_10 } = _isNativeReflectConstruct);
let closure_11 = [];
let closure_12 = {};
let closure_13 = {};
let closure_14 = {};
let tmp3 = (Store) => {
  class LurkingStore {
    constructor() {
      self = this;
      tmp = LurkingStore(this, LurkingStore);
      obj = closure_3(LurkingStore);
      tmp2 = closure_2;
      if (closure_15()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let __exportStarResult1 = LurkingStore;
  callback2(LurkingStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_6, closure_7, closure_8);
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "lurkingGuildIds",
    value() {
      return closure_11;
    }
  };
  items[1] = obj;
  obj = {
    key: "mostRecentLurkedGuildId",
    value() {
      let tmp = null;
      if (0 !== length.length) {
        tmp = length[closure_11.length - 1];
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isLurking",
    value(guildId) {
      const guild = guild.getGuild(guildId);
      if (null == guild) {
        return false;
      } else {
        let tmp6 = !currentUserGuest.isCurrentUserGuest(guildId);
        if (tmp6) {
          tmp6 = callback2(guild);
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
        if (null != closure_13[arg0]) {
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
        tmp = closure_12[arg0];
      }
      return tmp;
    }
  };
  items[6] = {
    key: "getLurkingPreviewExpirations",
    value() {
      return closure_14;
    }
  };
  items[7] = {
    key: "getLurkingPreviewExpiry",
    value(arg0) {
      let tmp = null;
      if (null != arg0) {
        let tmp4 = null;
        if (null != closure_14[arg0]) {
          tmp4 = tmp3;
        }
        tmp = tmp4;
      }
      return tmp;
    }
  };
  return callback(LurkingStore, items);
}(require("ME").Store);
tmp3.displayName = "LurkingStore";
tmp3 = new tmp3(require("AccountNotificationFlags"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    const guildsArray = guildsArray.getGuildsArray();
    const found = guildsArray.filter((arg0) => callback(arg0));
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
      delete r0[r3];
      if (constants.MOBILE_GUILD_DISCOVERY === source) {
        let obj = { type: constants.MOBILE_GUILD_DISCOVERY };
        setLurkingSource(guildId, obj);
      } else if (constants.DIRECTORY_ENTRY === source) {
        obj = { type: constants.DIRECTORY_ENTRY, directoryChannelId: tmp };
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
    return function clearLurkingGuilds(ignoredGuildIds) {
      let items = ignoredGuildIds;
      if (null == ignoredGuildIds) {
        items = [];
      }
      const items1 = [...items];
      const set = new Set(items1);
      const items2 = [...closure_11];
      return items2.reduce((arg0, arg1) => {
        let tmp = arg0;
        if (!set.has(arg1)) {
          tmp = callback(arg1) || arg0;
          const tmp3 = callback(arg1) || arg0;
        }
        return tmp;
      }, false);
    }(ignoredGuildIds.ignoredGuildIds);
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
    const currentUser = currentUser.getCurrentUser();
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
          let tmp4 = closure_14;
          if (closure_14[value] !== expiresAt) {
            let tmp5 = closure_14;
            closure_14[value] = expiresAt;
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
const result = _createForOfIteratorHelperLoose.fileFinishedImporting("modules/lurker_mode/LurkingStore.tsx");

export default tmp3;
