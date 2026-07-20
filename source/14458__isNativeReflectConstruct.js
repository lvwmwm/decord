// Module ID: 14458
// Function ID: 108968
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 14458 (_isNativeReflectConstruct)
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let obj = { guilds: [], lastFetchedAt: 0, lastFetchedGameIds: new Set() };
const set = new Set();
obj.dismissedGuildIds = new Set();
obj.guildGameIds = {};
let tmp4 = (PersistedStore) => {
  class MobileGameCommunitiesStore {
    constructor() {
      self = this;
      tmp = closure_2(this, MobileGameCommunitiesStore);
      obj = closure_5(MobileGameCommunitiesStore);
      tmp2 = closure_4;
      if (closure_8()) {
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
  const arg1 = MobileGameCommunitiesStore;
  callback2(MobileGameCommunitiesStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(guilds) {
      if (null != guilds) {
        const obj = {};
        guilds = guilds.guilds;
        obj.guilds = guilds.map((features) => {
          const obj = {};
          const merged = Object.assign(features);
          obj["features"] = new Set(features.features);
          return obj;
        });
        obj.lastFetchedAt = guilds.lastFetchedAt;
        const _Set = Set;
        const set = new Set(guilds.lastFetchedGameIds);
        obj.lastFetchedGameIds = set;
        const _Set2 = Set;
        const set1 = new Set(guilds.dismissedGuildIds);
        obj.dismissedGuildIds = set1;
        let guildGameIds = guilds.guildGameIds;
        if (null == guildGameIds) {
          guildGameIds = {};
        }
        obj.guildGameIds = guildGameIds;
      }
    }
  };
  const items = [obj, , , , , , , , , , ];
  obj = {
    key: "getState",
    value() {
      const obj = {
        guilds: guilds.map((features) => {
          const obj = {};
          const merged = Object.assign(features);
          const items = [...features.features];
          obj["features"] = items;
          return obj;
        }),
        lastFetchedAt: closure_7.lastFetchedAt
      };
      const guilds = closure_7.guilds;
      const items = [...closure_7.lastFetchedGameIds];
      obj.lastFetchedGameIds = items;
      obj.dismissedGuildIds = [...closure_7.dismissedGuildIds];
      obj.guildGameIds = closure_7.guildGameIds;
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "getPresentableUpsellGuilds",
    value() {
      const guilds = closure_7.guilds;
      return guilds.filter((id) => {
        const dismissedGuildIds = dismissedGuildIds.dismissedGuildIds;
        return !dismissedGuildIds.has(id.id);
      });
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasGuilds",
    value() {
      return this.getPresentableUpsellGuilds().length > 0;
    }
  };
  items[4] = {
    key: "getLastFetchedAt",
    value() {
      return closure_7.lastFetchedAt;
    }
  };
  items[5] = {
    key: "getLastFetchedGameIds",
    value() {
      return closure_7.lastFetchedGameIds;
    }
  };
  items[6] = {
    key: "getGuildGameIds",
    value() {
      return closure_7.guildGameIds;
    }
  };
  items[7] = {
    key: "getDismissedGuildIds",
    value() {
      return closure_7.dismissedGuildIds;
    }
  };
  items[8] = {
    key: "DEV_clearFetchCache",
    value() {
      const obj = {};
      const merged = Object.assign(obj);
      obj["guilds"] = [];
      obj["lastFetchedAt"] = 0;
      obj["lastFetchedGameIds"] = new Set();
      obj["guildGameIds"] = {};
      this.emitChange();
    }
  };
  items[9] = {
    key: "DEV_clearDismissedGuilds",
    value() {
      const obj = {};
      const merged = Object.assign(obj);
      obj["dismissedGuildIds"] = new Set();
      this.emitChange();
    }
  };
  items[10] = {
    key: "DEV_clearState",
    value() {
      const obj = { guilds: [], lastFetchedAt: 0, lastFetchedGameIds: new Set() };
      const set = new Set();
      obj.dismissedGuildIds = new Set();
      obj.guildGameIds = {};
      this.emitChange();
    }
  };
  return callback(MobileGameCommunitiesStore, items);
}(importDefault(dependencyMap[6]).PersistedStore);
tmp4.displayName = "MobileGameCommunitiesStore";
tmp4.persistKey = "MobileGameCommunitiesStore";
obj = {
  MOBILE_GAME_COMMUNITIES_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let gameIds;
    let guilds;
    let iter2;
    ({ guilds, gameIds } = arg0);
    let obj = {};
    const merged = Object.assign(obj.guildGameIds);
    const tmp2 = _createForOfIteratorHelperLoose(guilds);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let value = iter.value;
        if (null != value.game_id) {
          obj[value.id] = value.game_id;
        }
        iter2 = tmp2();
        iter = iter2;
      } while (!iter2.done);
    }
    obj = {};
    const merged1 = Object.assign(obj);
    obj["guilds"] = guilds.map((body) => callback(closure_1[5]).makeDiscoverableGuild(body));
    obj["lastFetchedAt"] = Date.now();
    obj["lastFetchedGameIds"] = new Set(gameIds);
    obj["guildGameIds"] = obj;
  },
  MOBILE_GAME_COMMUNITIES_DISMISS_GUILD: function handleDismissGuildAction(guildId) {
    const obj = {};
    const merged = Object.assign(obj);
    const items = [...closure_7.dismissedGuildIds, guildId.guildId];
    obj["dismissedGuildIds"] = new Set(items);
  },
  LOGOUT: function handleLogout() {
    const obj = { guilds: [], lastFetchedAt: 0, lastFetchedGameIds: new Set() };
    const set = new Set();
    obj.dismissedGuildIds = new Set();
    obj.guildGameIds = {};
  }
};
tmp4 = new tmp4(importDefault(dependencyMap[7]), obj);
const set1 = new Set();
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/game_community_upsell/native/MobileGameCommunitiesStore.tsx");

export default tmp4;
