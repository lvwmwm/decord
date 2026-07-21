// Module ID: 5306
// Function ID: 44920
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5306 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function loadSavedGuildStickers() {
  return _loadSavedGuildStickers(...arguments);
}
async function _loadSavedGuildStickers() {
  let databaseResult;
  if (Loaded === closure_13.Unloaded) {
    databaseResult = callback(closure_2[10]).database();
    if (null != databaseResult) {
      const Loaded = closure_13.Loaded;
      let obj = databaseResult(closure_2[11]);
      const tmp4 = yield obj.tryLoadOrResetCacheGatewayAsync("StickerStore.loadSavedGuildStickers", () => callback(closure_2[12]).timeAsync("\u{1F4BE}", "loadSavedGuildStickers", () => callback(closure_2[13]).getAsync(closure_0)));
      if (null != tmp4) {
        obj = { type: "CACHED_STICKERS_LOADED", stickers: tmp4 };
        callback(closure_2[14]).dispatch(obj);
        const obj2 = callback(closure_2[14]);
      }
    }
    const obj4 = callback(closure_2[10]);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let obj = { Unloaded: 0, [0]: "Unloaded", Loaded: 1, [1]: "Loaded" };
const Unloaded = obj.Unloaded;
let tmp2 = (Store) => {
  class StickersStore {
    constructor() {
      self = this;
      tmp = closure_3(this, StickersStore);
      obj = closure_6(StickersStore);
      tmp2 = closure_5;
      if (closure_15()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = StickersStore;
  callback2(StickersStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_9, closure_11, closure_10, closure_12);
      const items = [closure_11, closure_12];
      this.syncWith(items, () => true);
    }
  };
  const items = [obj, , , , , , , , , , , , , ];
  obj = {
    key: "isLoaded",
    get() {
      return closure_14 !== Unloaded.Unloaded;
    }
  };
  items[1] = obj;
  obj = {
    key: "loadState",
    get() {
      return closure_14;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getStickerMetadataArrays",
    value() {
      callback4();
      const items = [store.getStickerMetadataMap(), store2.getStickerMetadataMap()];
      return items;
    }
  };
  items[4] = {
    key: "hasLoadedStickerPacks",
    get() {
      return store2.hasLoadedStickerPacks;
    }
  };
  items[5] = {
    key: "isFetchingStickerPacks",
    get() {
      return store2.isFetchingStickerPacks;
    }
  };
  items[6] = {
    key: "getStickerById",
    value(arg0) {
      callback4();
      let stickerById = store.getStickerById(arg0);
      if (null == stickerById) {
        stickerById = store2.getStickerById(arg0);
      }
      return stickerById;
    }
  };
  items[7] = {
    key: "getStickerPack",
    value(arg0) {
      return store2.getStickerPack(arg0);
    }
  };
  items[8] = {
    key: "getPremiumPacks",
    value() {
      return store2.getPremiumPacks();
    }
  };
  items[9] = {
    key: "isPremiumPack",
    value(arg0) {
      return store2.isPremiumPack(arg0);
    }
  };
  items[10] = {
    key: "getRawStickersByGuild",
    value() {
      return store.getAllGuildStickers();
    }
  };
  items[11] = {
    key: "getAllGuildStickers",
    value() {
      callback4();
      return store.getAllGuildStickers();
    }
  };
  items[12] = {
    key: "getAllPackStickers",
    value() {
      return store2.getAllPackStickers();
    }
  };
  items[13] = {
    key: "getStickersByGuildId",
    value(arg0) {
      callback4();
      return store.getStickersByGuildId(arg0);
    }
  };
  return callback(StickersStore, items);
}(importDefault(dependencyMap[15]).Store);
tmp2.displayName = "StickersStore";
obj = {
  BACKGROUND_SYNC: function handleBackgroundSync() {
    const Unloaded = obj.Unloaded;
  },
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    guilds = guilds.guilds;
    if (0 === guilds.unavailableGuilds.length) {
      if (guilds.every((stickers) => "full_sync" === stickers.stickers.op)) {
        let Unloaded = obj.Loaded;
      }
    }
    Unloaded = obj.Unloaded;
  },
  LOGOUT: function handleLogout() {
    const Unloaded = obj.Unloaded;
  }
};
tmp2 = new tmp2(importDefault(dependencyMap[14]), obj);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/stickers/StickersStore.tsx");

export default tmp2;
