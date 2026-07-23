// Module ID: 15021
// Function ID: 114457
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 15021 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
let c5 = null;
let tmp2 = ((Store) => {
  class UnclaimedGamesStore {
    constructor() {
      self = this;
      tmp = UnclaimedGamesStore(this, UnclaimedGamesStore);
      obj = outer1_3(UnclaimedGamesStore);
      tmp2 = outer1_2;
      if (outer1_6()) {
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
  callback2(UnclaimedGamesStore, Store);
  let obj = {
    key: "getMap",
    value() {
      return outer1_5;
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "getUnclaimedGameIdsForGuild",
    value(arg0) {
      let items;
      if (null != outer1_5) {
        items = tmp[arg0];
      }
      if (null == items) {
        items = [];
      }
      return items;
    }
  };
  items[1] = obj;
  obj = {
    key: "hasUnclaimedGames",
    value(arg0) {
      let tmp2;
      if (null != outer1_5) {
        tmp2 = tmp[arg0];
      }
      let tmp4 = null != tmp2;
      if (tmp4) {
        tmp4 = tmp2.length > 0;
      }
      return tmp4;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getGuildIdsWithUnclaimedGames",
    value() {
      if (null == outer1_5) {
        return [];
      } else {
        let dispatcher = outer1_5;
        const _Object = Object;
        const keys = Object.keys(outer1_5);
        return keys.filter((arg0) => {
          let items = table[arg0];
          if (null == items) {
            items = [];
          }
          return items.length > 0;
        });
      }
    }
  };
  return callback(UnclaimedGamesStore, items);
})(require("initialize").Store);
tmp2.displayName = "UnclaimedGamesStore";
tmp2 = new tmp2(require("dispatcher"), {
  LOGOUT: function handleLogout() {
    let c5 = null;
  },
  UNCLAIMED_GAMES_FETCH_SUCCESS: function handleFetchSuccess(guildIdToGameIds) {
    guildIdToGameIds = guildIdToGameIds.guildIdToGameIds;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/game_claim/UnclaimedGamesStore.tsx");

export default tmp2;
