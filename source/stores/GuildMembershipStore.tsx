// Module ID: 1350
// Function ID: 16074
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 15, 17, 18, 686, 566, 2]

// Module 1350 (_createForOfIteratorHelperLoose)
import initialize from "initialize";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
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
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let tmp2 = ((Store) => {
  class GuildMembershipStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, apply);
      items = [, , ];
      items[0] = outer1_1(outer1_2[5]);
      items[1] = {
        CACHE_LOADED(arg0) {
              return tmp2Result.handleCacheLoaded(arg0);
            },
        CACHE_LOADED_LAZY(arg0) {
              return tmp2Result.handleCacheLoadedLazy(arg0);
            },
        CONNECTION_OPEN(arg0) {
              return tmp2Result.handleConnectionOpen(arg0);
            },
        GUILD_CREATE(arg0) {
              return tmp2Result.handleGuildCreate(arg0);
            },
        GUILD_DELETE(arg0) {
              return tmp2Result.handleGuildDelete(arg0);
            }
      };
      items[2] = GuildMembershipStore(outer1_2[5]).DispatchBand.Early;
      obj = outer1_6(apply);
      tmp2 = outer1_5;
      if (outer1_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      set = new Set();
      tmp2Result.guildIds = set;
      return tmp2Result;
    }
  }
  callback2(GuildMembershipStore, Store);
  let obj = {
    key: "allGuildIds",
    value() {
      return this.guildIds;
    }
  };
  let items = [obj, , , , , , ];
  obj = {
    key: "isMember",
    value(arg0) {
      const guildIds = this.guildIds;
      return guildIds.has(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "handleConnectionOpen",
    value(unavailableGuilds) {
      const items = [...unavailableGuilds.unavailableGuilds];
      this.guildIds = new Set(items);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "handleCacheLoaded",
    value(guilds) {
      guilds = guilds.guilds;
      this.guildIds = new Set(guilds.map((id) => id.id));
    }
  };
  items[4] = {
    key: "handleCacheLoadedLazy",
    value(guilds) {
      let done;
      const tmp = outer1_8(guilds.guilds);
      let iter = tmp();
      if (!iter.done) {
        do {
          let guildIds = this.guildIds;
          let addResult = guildIds.add(iter.value.id);
          let iter2 = tmp();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
    }
  };
  items[5] = {
    key: "handleGuildCreate",
    value(guild) {
      const guildIds = this.guildIds;
      guildIds.add(guild.guild.id);
    }
  };
  items[6] = {
    key: "handleGuildDelete",
    value(guild) {
      if (true !== guild.guild.unavailable) {
        const self = this;
        const guildIds = this.guildIds;
        guildIds.delete(guild.guild.id);
      }
    }
  };
  return callback(GuildMembershipStore, items);
})(require("initialize").Store);
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/GuildMembershipStore.tsx");

export default tmp2;
