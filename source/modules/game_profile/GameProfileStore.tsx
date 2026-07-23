// Module ID: 8596
// Function ID: 68243
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 8596 (_isNativeReflectConstruct)
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
let closure_5 = {};
let closure_6 = {};
let closure_7 = {};
let closure_8 = {};
let closure_9 = {};
let closure_10 = {};
let closure_11 = {};
let c12 = null;
let tmp2 = ((Store) => {
  class GameProfileStore {
    constructor() {
      self = this;
      tmp = GameProfileStore(this, GameProfileStore);
      obj = outer1_3(GameProfileStore);
      tmp2 = outer1_2;
      if (outer1_13()) {
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
  callback2(GameProfileStore, Store);
  let obj = {
    key: "getSimilarGames",
    value(arg0) {
      return outer1_5[arg0];
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "getShopCollectionSkuIds",
    value(arg0) {
      return outer1_6[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "hasShopCollectionBeenFetched",
    value(arg0) {
      return null != outer1_7[arg0] && outer1_7[arg0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isShopCollectionFetching",
    value(arg0) {
      return null != outer1_8[arg0] && outer1_8[arg0];
    }
  };
  items[4] = {
    key: "getAnnouncements",
    value(arg0) {
      return outer1_9[arg0];
    }
  };
  items[5] = {
    key: "hasAnnouncementsBeenFetched",
    value(arg0) {
      return null != outer1_10[arg0] && outer1_10[arg0];
    }
  };
  items[6] = {
    key: "isAnnouncementsFetching",
    value(arg0) {
      return null != outer1_11[arg0] && outer1_11[arg0];
    }
  };
  items[7] = {
    key: "getPendingReturn",
    value() {
      return outer1_12;
    }
  };
  return callback(GameProfileStore, items);
})(require("initialize").Store);
tmp2.displayName = "GameProfileStore";
tmp2 = new tmp2(require("dispatcher"), {
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
    _null = { gameId, channelId, initialScrollOffset };
  },
  GAME_PROFILE_CLEAR_PENDING_RETURN: function handleClearPendingReturn(arg0) {
    if (null != _null) {
      if (_null.gameId === tmp) {
        _null = null;
      }
    }
    return false;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/game_profile/GameProfileStore.tsx");

export default tmp2;
