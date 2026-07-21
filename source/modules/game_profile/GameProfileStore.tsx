// Module ID: 8588
// Function ID: 68180
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8588 (_isNativeReflectConstruct)
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
let closure_5 = {};
let closure_6 = {};
let closure_7 = {};
let closure_8 = {};
let closure_9 = {};
let closure_10 = {};
let closure_11 = {};
let closure_12 = null;
let tmp2 = (Store) => {
  class GameProfileStore {
    constructor() {
      self = this;
      tmp = GameProfileStore(this, GameProfileStore);
      obj = closure_3(GameProfileStore);
      tmp2 = closure_2;
      if (closure_13()) {
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
  let closure_0 = GameProfileStore;
  callback2(GameProfileStore, Store);
  let obj = {
    key: "getSimilarGames",
    value(arg0) {
      return closure_5[arg0];
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "getShopCollectionSkuIds",
    value(arg0) {
      return closure_6[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "hasShopCollectionBeenFetched",
    value(arg0) {
      return null != closure_7[arg0] && closure_7[arg0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isShopCollectionFetching",
    value(arg0) {
      return null != closure_8[arg0] && closure_8[arg0];
    }
  };
  items[4] = {
    key: "getAnnouncements",
    value(arg0) {
      return closure_9[arg0];
    }
  };
  items[5] = {
    key: "hasAnnouncementsBeenFetched",
    value(arg0) {
      return null != closure_10[arg0] && closure_10[arg0];
    }
  };
  items[6] = {
    key: "isAnnouncementsFetching",
    value(arg0) {
      return null != closure_11[arg0] && closure_11[arg0];
    }
  };
  items[7] = {
    key: "getPendingReturn",
    value() {
      return closure_12;
    }
  };
  return callback(GameProfileStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp2.displayName = "GameProfileStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function handleGetSimilarGamesSuccess(gameId) {
    closure_5[gameId.gameId] = gameId.games;
  },
  GAME_PROFILE_GET_SHOP_COLLECTION_START: function handleGetShopCollectionStart(collectionId) {
    closure_8[collectionId.collectionId] = true;
  },
  GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS: function handleGetShopCollectionSuccess(collectionId) {
    collectionId = collectionId.collectionId;
    closure_6[collectionId] = collectionId.skuIds;
    closure_7[collectionId] = true;
    closure_8[collectionId] = false;
  },
  GAME_PROFILE_GET_SHOP_COLLECTION_ERROR: function handleGetShopCollectionError(collectionId) {
    collectionId = collectionId.collectionId;
    closure_7[collectionId] = true;
    closure_8[collectionId] = false;
  },
  GAME_PROFILE_GET_ANNOUNCEMENTS_START: function handleGetAnnouncementsStart(gameId) {
    closure_11[gameId.gameId] = true;
  },
  GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS: function handleGetAnnouncementsSuccess(gameId) {
    gameId = gameId.gameId;
    closure_9[gameId] = { messages: gameId.messages, channelId: gameId.channelId, guildId: gameId.guildId };
    closure_10[gameId] = true;
    closure_11[gameId] = false;
  },
  GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR: function handleGetAnnouncementsError(gameId) {
    gameId = gameId.gameId;
    closure_10[gameId] = true;
    closure_11[gameId] = false;
  },
  GAME_PROFILE_SET_PENDING_RETURN: function handleSetPendingReturn(arg0) {
    let channelId;
    let gameId;
    let initialScrollOffset;
    ({ gameId, channelId, initialScrollOffset } = arg0);
    gameId = undefined;
    if (null != _null) {
      gameId = _null.gameId;
    }
    if (gameId === gameId) {
      channelId = undefined;
      if (null != _null) {
        channelId = _null.channelId;
      }
      if (channelId === channelId) {
        initialScrollOffset = undefined;
        if (null != _null) {
          initialScrollOffset = _null.initialScrollOffset;
        }
        if (initialScrollOffset === initialScrollOffset) {
          return false;
        }
      }
    }
    const _null = { gameId, channelId, initialScrollOffset };
  },
  GAME_PROFILE_CLEAR_PENDING_RETURN: function handleClearPendingReturn(arg0) {
    if (null != _null) {
      if (_null.gameId === tmp) {
        const _null = null;
      }
    }
    return false;
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/game_profile/GameProfileStore.tsx");

export default tmp2;
