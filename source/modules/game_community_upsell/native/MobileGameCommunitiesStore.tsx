// Module ID: 14639
// Function ID: 111545
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 5736, 566, 686, 2]

// Module 14639 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import set from "_possibleConstructorReturn";

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
let obj = { guilds: [], lastFetchedAt: 0 };
let set = new Set();
obj.lastFetchedGameIds = set;
obj.dismissedGuildIds = new Set();
obj.guildGameIds = {};
let tmp4 = ((PersistedStore) => {
  class MobileGameCommunitiesStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, MobileGameCommunitiesStore);
      obj = outer1_5(MobileGameCommunitiesStore);
      tmp2 = outer1_4;
      if (outer1_8()) {
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
  callback2(MobileGameCommunitiesStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(guilds) {
      if (null != guilds) {
        let obj = {};
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
        const outer1_7 = obj;
      }
    }
  };
  let items = [obj, , , , , , , , , , ];
  obj = {
    key: "getState",
    value() {
      let obj = {
        guilds: guilds.map((features) => {
          const obj = {};
          const merged = Object.assign(features);
          const items = [...features.features];
          obj["features"] = items;
          return obj;
        }),
        lastFetchedAt: outer1_7.lastFetchedAt
      };
      guilds = outer1_7.guilds;
      let items = [...outer1_7.lastFetchedGameIds];
      obj.lastFetchedGameIds = items;
      obj.dismissedGuildIds = [...outer1_7.dismissedGuildIds];
      obj.guildGameIds = outer1_7.guildGameIds;
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "getPresentableUpsellGuilds",
    value() {
      const guilds = outer1_7.guilds;
      return guilds.filter((id) => {
        const dismissedGuildIds = outer2_7.dismissedGuildIds;
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
      return outer1_7.lastFetchedAt;
    }
  };
  items[5] = {
    key: "getLastFetchedGameIds",
    value() {
      return outer1_7.lastFetchedGameIds;
    }
  };
  items[6] = {
    key: "getGuildGameIds",
    value() {
      return outer1_7.guildGameIds;
    }
  };
  items[7] = {
    key: "getDismissedGuildIds",
    value() {
      return outer1_7.dismissedGuildIds;
    }
  };
  items[8] = {
    key: "DEV_clearFetchCache",
    value() {
      const obj = {};
      const merged = Object.assign(outer1_7);
      obj["guilds"] = [];
      obj["lastFetchedAt"] = 0;
      obj["lastFetchedGameIds"] = new Set();
      obj["guildGameIds"] = {};
      outer1_7 = obj;
      this.emitChange();
    }
  };
  items[9] = {
    key: "DEV_clearDismissedGuilds",
    value() {
      const obj = {};
      const merged = Object.assign(outer1_7);
      obj["dismissedGuildIds"] = new Set();
      outer1_7 = obj;
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
      const outer1_7 = obj;
      this.emitChange();
    }
  };
  return callback(MobileGameCommunitiesStore, items);
})(require("initialize").PersistedStore);
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
    obj["guilds"] = guilds.map((body) => outer1_0(outer1_1[5]).makeDiscoverableGuild(body));
    obj["lastFetchedAt"] = Date.now();
    obj["lastFetchedGameIds"] = new Set(gameIds);
    obj["guildGameIds"] = obj;
  },
  MOBILE_GAME_COMMUNITIES_DISMISS_GUILD: function handleDismissGuildAction(guildId) {
    const obj = {};
    const merged = Object.assign(obj);
    const items = [...obj.dismissedGuildIds, guildId.guildId];
    obj["dismissedGuildIds"] = new Set(items);
  },
  LOGOUT: function handleLogout() {
    const obj = { guilds: [], lastFetchedAt: 0, lastFetchedGameIds: new Set() };
    const set = new Set();
    obj.dismissedGuildIds = new Set();
    obj.guildGameIds = {};
  }
};
tmp4 = new tmp4(require("dispatcher"), obj);
let result = set.fileFinishedImporting("modules/game_community_upsell/native/MobileGameCommunitiesStore.tsx");

export default tmp4;
