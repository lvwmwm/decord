// Module ID: 14905
// Function ID: 112289
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 14905 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = null;
let tmp2 = (Store) => {
  class UnclaimedGamesStore {
    constructor() {
      self = this;
      tmp = UnclaimedGamesStore(this, UnclaimedGamesStore);
      obj = closure_3(UnclaimedGamesStore);
      tmp2 = closure_2;
      if (closure_6()) {
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
  let closure_0 = UnclaimedGamesStore;
  callback2(UnclaimedGamesStore, Store);
  let obj = {
    key: "getMap",
    value() {
      return closure_5;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getUnclaimedGameIdsForGuild",
    value(arg0) {
      let items;
      if (null != closure_5) {
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
      if (null != closure_5) {
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
      if (null == closure_5) {
        return [];
      } else {
        let closure_0 = closure_5;
        const _Object = Object;
        const keys = Object.keys(closure_5);
        return keys.filter((arg0) => {
          let items = closure_0[arg0];
          if (null == items) {
            items = [];
          }
          return items.length > 0;
        });
      }
    }
  };
  return callback(UnclaimedGamesStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp2.displayName = "UnclaimedGamesStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  LOGOUT: function handleLogout() {
    let closure_5 = null;
  },
  UNCLAIMED_GAMES_FETCH_SUCCESS: function handleFetchSuccess(guildIdToGameIds) {
    guildIdToGameIds = guildIdToGameIds.guildIdToGameIds;
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/game_claim/UnclaimedGamesStore.tsx");

export default tmp2;
