// Module ID: 5035
// Function ID: 43359
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 5, 1350, 1838, 5036, 5037, 1882, 1901, 20, 5038, 686, 566, 2]

// Module 5035 (_isNativeReflectConstruct)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_4 from "_createForOfIteratorHelperLoose";
import initialize from "initialize";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import asyncGeneratorStep from "asyncGeneratorStep";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";

const require = arg1;
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
  let c0;
  if (outer2_14 === outer2_13.Unloaded) {
    const databaseResult = outer2_1(outer2_2[10]).database();
    c0 = databaseResult;
    if (null != databaseResult) {
      outer2_14 = outer2_13.Loaded;
      let obj = outer2_0(outer2_2[11]);
      const tmp4 = yield obj.tryLoadOrResetCacheGatewayAsync("StickerStore.loadSavedGuildStickers", () => outer3_1(outer3_2[12]).timeAsync("\u{1F4BE}", "loadSavedGuildStickers", () => outer4_1(outer4_2[13]).getAsync(outer1_0)));
      if (null != tmp4) {
        obj = { type: "CACHED_STICKERS_LOADED", stickers: tmp4 };
        outer2_1(outer2_2[14]).dispatch(obj);
        const obj2 = outer2_1(outer2_2[14]);
      }
    }
    const obj4 = outer2_1(outer2_2[10]);
  }
}
let obj = { Unloaded: 0, [0]: "Unloaded", Loaded: 1, [1]: "Loaded" };
let Unloaded = obj.Unloaded;
let tmp2 = ((Store) => {
  class StickersStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, StickersStore);
      obj = outer1_6(StickersStore);
      tmp2 = outer1_5;
      if (outer1_15()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(StickersStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_9, outer1_11, outer1_10, outer1_12);
      const items = [outer1_11, outer1_12];
      this.syncWith(items, () => true);
    }
  };
  let items = [obj, , , , , , , , , , , , , ];
  obj = {
    key: "isLoaded",
    get() {
      return outer1_14 !== outer1_13.Unloaded;
    }
  };
  items[1] = obj;
  obj = {
    key: "loadState",
    get() {
      return outer1_14;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getStickerMetadataArrays",
    value() {
      outer1_16();
      const items = [outer1_11.getStickerMetadataMap(), outer1_12.getStickerMetadataMap()];
      return items;
    }
  };
  items[4] = {
    key: "hasLoadedStickerPacks",
    get() {
      return outer1_12.hasLoadedStickerPacks;
    }
  };
  items[5] = {
    key: "isFetchingStickerPacks",
    get() {
      return outer1_12.isFetchingStickerPacks;
    }
  };
  items[6] = {
    key: "getStickerById",
    value(arg0) {
      outer1_16();
      let stickerById = outer1_11.getStickerById(arg0);
      if (null == stickerById) {
        stickerById = outer1_12.getStickerById(arg0);
      }
      return stickerById;
    }
  };
  items[7] = {
    key: "getStickerPack",
    value(arg0) {
      return outer1_12.getStickerPack(arg0);
    }
  };
  items[8] = {
    key: "getPremiumPacks",
    value() {
      return outer1_12.getPremiumPacks();
    }
  };
  items[9] = {
    key: "isPremiumPack",
    value(arg0) {
      return outer1_12.isPremiumPack(arg0);
    }
  };
  items[10] = {
    key: "getRawStickersByGuild",
    value() {
      return outer1_11.getAllGuildStickers();
    }
  };
  items[11] = {
    key: "getAllGuildStickers",
    value() {
      outer1_16();
      return outer1_11.getAllGuildStickers();
    }
  };
  items[12] = {
    key: "getAllPackStickers",
    value() {
      return outer1_12.getAllPackStickers();
    }
  };
  items[13] = {
    key: "getStickersByGuildId",
    value(arg0) {
      outer1_16();
      return outer1_11.getStickersByGuildId(arg0);
    }
  };
  return callback(StickersStore, items);
})(require("initialize").Store);
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
tmp2 = new tmp2(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/stickers/StickersStore.tsx");

export default tmp2;
