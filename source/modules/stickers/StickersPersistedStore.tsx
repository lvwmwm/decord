// Module ID: 5034
// Function ID: 43334
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1316, 5035, 662, 664, 4214, 22, 566, 686, 2]

// Module 5034 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import MAX_FAVORITES from "MAX_FAVORITES";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { UserSettingsTypes } from "MAX_FAVORITES";
import importDefaultResult from "DEFAULT_FRECENCY";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function recomputeStickerFrecency() {
  if (stickerById.isLoaded) {
    importDefaultResult.compute();
  }
}
function handleStickersStoreUpdate() {
  recomputeStickerFrecency();
}
function handleUserSettingsProtoStoreChange() {
  const stickerFrecency = obj.frecencyWithoutFetchingLatest.stickerFrecency;
  let stickers;
  if (null != stickerFrecency) {
    stickers = stickerFrecency.stickers;
  }
  if (null == stickers) {
    return false;
  } else {
    obj = importDefault(22);
    importDefaultResult.overwriteHistory(obj.mapValues(stickers, (recentUses) => {
      const obj = {};
      const merged = Object.assign(recentUses);
      recentUses = recentUses.recentUses;
      const mapped = recentUses.map(Number);
      obj["recentUses"] = mapped.filter((arg0) => arg0 > 0);
      return obj;
    }), pendingUsages.pendingUsages);
  }
}
let closure_10 = { pendingUsages: [] };
let obj = {
  computeBonus() {
    return 100;
  },
  lookupKey(arg0) {
    return stickerById.getStickerById(arg0);
  },
  afterCompute() {

  },
  numFrequentlyItems: 20
};
importDefaultResult = new importDefaultResult(obj);
let tmp4 = ((PersistedStore) => {
  class StickersPersistedStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, StickersPersistedStore);
      obj = outer1_5(StickersPersistedStore);
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
  callback2(StickersPersistedStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      const self = this;
      this.waitFor(outer1_8, outer1_7);
      if (null != arg0) {
        const outer1_10 = arg0;
      }
      const items = [outer1_8];
      self.syncWith(items, outer1_14);
      const items1 = [outer1_7];
      self.syncWith(items1, outer1_15);
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "getState",
    value() {
      return outer1_10;
    }
  };
  items[1] = obj;
  obj = {
    key: "hasPendingUsage",
    value() {
      return outer1_10.pendingUsages.length > 0;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "stickerFrecencyWithoutFetchingLatest",
    get() {
      return outer1_11;
    }
  };
  return callback(StickersPersistedStore, items);
})(require("initialize").PersistedStore);
tmp4.displayName = "StickersPersistedStore";
tmp4.persistKey = "StickersPersistedStoreV2";
obj = {
  STICKER_TRACK_USAGE: function handleStickersUsage(stickerIds) {
    stickerIds = stickerIds.stickerIds;
    if (null != stickerIds) {
      const item = stickerIds.forEach((key) => {
        outer1_11.track(key);
        const pendingUsages = outer1_10.pendingUsages;
        pendingUsages.push({ key, timestamp: Date.now() });
      });
    }
    recomputeStickerFrecency();
  },
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate(settings) {
    if (settings.settings.type === UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
      if (settings.wasSaved) {
        closure_10.pendingUsages = [];
      }
    }
    return false;
  }
};
tmp4 = new tmp4(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/stickers/StickersPersistedStore.tsx");

export default tmp4;
export const STICKER_PACK_NEW_TIMESTAMP_THRESHOLD = require("set").Millis.DAY;
