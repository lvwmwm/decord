// Module ID: 4151
// Function ID: 35061
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4152, 1443, 566, 686, 2]

// Module 4151 (_isNativeReflectConstruct)
import isOriginalContentTypeDifferent from "isOriginalContentTypeDifferent";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import set from "_possibleConstructorReturn";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let map = new Map();
let set = new Set();
let set1 = new Set();
let set2 = new Set();
let tmp6 = ((Store) => {
  class GameStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, GameStore);
      obj = outer1_5(GameStore);
      tmp2 = outer1_4;
      if (outer1_12()) {
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
  callback2(GameStore, Store);
  let obj = {
    key: "isFetching",
    value(arg0) {
      return outer1_9.has(arg0);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "didFetchingFail",
    value(arg0) {
      return outer1_10.has(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "getGame",
    value(arg0) {
      return outer1_8.get(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasNoData",
    value(arg0) {
      return outer1_11.has(arg0);
    }
  };
  items[4] = {
    key: "getCoverImageUrl",
    value(arg0, size) {
      const value = outer1_8.get(arg0);
      let coverURL;
      if (null != value) {
        coverURL = value.getCoverURL();
      }
      if (null == coverURL) {
        return null;
      } else if (null == size) {
        return coverURL;
      } else {
        let str = GameStore(outer1_1[6]).toURLSafe(coverURL);
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
})(require("initialize").Store);
tmp6.displayName = "NewGameStore";
tmp6 = new tmp6(require("dispatcher"), {
  LOGOUT: function handleLogout() {
    const map = new Map();
    const set = new Set();
    const set1 = new Set();
    const set2 = new Set();
  },
  GAME_FETCH: function handleFetch(gameIds) {
    gameIds = gameIds.gameIds;
    const item = gameIds.forEach((arg0) => {
      outer1_9.add(arg0);
      outer1_10.delete(arg0);
    });
  },
  GAME_FETCH_CANCELLED: function handleFetchCancelled(gameIds) {
    gameIds = gameIds.gameIds;
    const item = gameIds.forEach((arg0) => outer1_9.delete(arg0));
  },
  GAME_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let gameIds;
    let games;
    ({ gameIds, games } = arg0);
    const set = new Set(gameIds);
    const item = gameIds.forEach((arg0) => {
      outer1_9.delete(arg0);
      outer1_10.delete(arg0);
    });
    const item1 = games.forEach((id) => {
      set.delete(id.id);
      const result = outer1_8.set(id.id, new outer1_7(id));
    });
    const item2 = set.forEach((arg0) => {
      if (!outer1_8.has(arg0)) {
        outer1_11.add(arg0);
      }
    });
  },
  GAME_FETCH_FAILURE: function handleFetchFailure(gameIds) {
    gameIds = gameIds.gameIds;
    const item = gameIds.forEach((arg0) => {
      outer1_9.delete(arg0);
      outer1_10.add(arg0);
    });
  }
});
let result = set.fileFinishedImporting("modules/games/GameStore.tsx");

export default tmp6;
