// Module ID: 1350
// Function ID: 16072
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 1350 (_createForOfIteratorHelperLoose)
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
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let tmp2 = (Store) => {
  class GuildMembershipStore {
    constructor() {
      self = this;
      tmp = closure_3(this, GuildMembershipStore);
      items = [, , ];
      items[0] = closure_1(closure_2[5]);
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
      items[2] = GuildMembershipStore(closure_2[5]).DispatchBand.Early;
      obj = closure_6(GuildMembershipStore);
      tmp2 = closure_5;
      if (closure_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      GuildMembershipStore = tmp2Result;
      set = new Set();
      tmp2Result.guildIds = set;
      return tmp2Result;
    }
  }
  const arg1 = GuildMembershipStore;
  callback2(GuildMembershipStore, Store);
  let obj = {
    key: "allGuildIds",
    value() {
      return this.guildIds;
    }
  };
  const items = [obj, , , , , , ];
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
      const tmp = callback4(guilds.guilds);
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
}(importDefault(dependencyMap[6]).Store);
tmp2 = new tmp2();
const result = arg1(dependencyMap[7]).fileFinishedImporting("stores/GuildMembershipStore.tsx");

export default tmp2;
