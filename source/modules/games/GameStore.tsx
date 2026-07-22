// Module ID: 4147
// Function ID: 35030
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4147 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const map = new Map();
const set = new Set();
const set1 = new Set();
const set2 = new Set();
let tmp6 = (Store) => {
  class GameStore {
    constructor() {
      self = this;
      tmp = closure_2(this, GameStore);
      obj = closure_5(GameStore);
      tmp2 = closure_4;
      if (closure_12()) {
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
  const importDefault = GameStore;
  callback2(GameStore, Store);
  let obj = {
    key: "isFetching",
    value(arg0) {
      return set.has(arg0);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "didFetchingFail",
    value(arg0) {
      return set2.has(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "getGame",
    value(arg0) {
      return store.get(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasNoData",
    value(arg0) {
      return set3.has(arg0);
    }
  };
  items[4] = {
    key: "getCoverImageUrl",
    value(arg0, size) {
      const value = store.get(arg0);
      let coverURL;
      if (null != value) {
        coverURL = value.getCoverURL();
      }
      if (null == coverURL) {
        return null;
      } else if (null == size) {
        return coverURL;
      } else {
        let str = GameStore(closure_1[6]).toURLSafe(coverURL);
        str = coverURL;
        if (null != str) {
          const searchParams = str.searchParams;
          const result = searchParams.set("size", size.size.toString());
          str = str.toString();
          const str2 = size.size;
        }
        return str;
      }
    }
  };
  return callback(GameStore, items);
}(importDefault(dependencyMap[7]).Store);
tmp6.displayName = "NewGameStore";
tmp6 = new tmp6(importDefault(dependencyMap[8]), {
  LOGOUT: function handleLogout() {
    const map = new Map();
    const set = new Set();
    const set1 = new Set();
    const set2 = new Set();
  },
  GAME_FETCH: function handleFetch(gameIds) {
    gameIds = gameIds.gameIds;
    const item = gameIds.forEach((arg0) => {
      set.add(arg0);
      set2.delete(arg0);
    });
  },
  GAME_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let gameIds;
    let games;
    ({ gameIds, games } = arg0);
    const set = new Set(gameIds);
    const importDefault = set;
    const item = gameIds.forEach((arg0) => {
      set.delete(arg0);
      set2.delete(arg0);
    });
    const item1 = games.forEach((id) => {
      set.delete(id.id);
      const result = map.set(id.id, new closure_7(id));
    });
    const item2 = set.forEach((arg0) => {
      if (!map.has(arg0)) {
        set3.add(arg0);
      }
    });
  },
  GAME_FETCH_FAILURE: function handleFetchFailure(gameIds) {
    gameIds = gameIds.gameIds;
    const item = gameIds.forEach((arg0) => {
      set.delete(arg0);
      set2.add(arg0);
    });
  }
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/games/GameStore.tsx");

export default tmp6;
