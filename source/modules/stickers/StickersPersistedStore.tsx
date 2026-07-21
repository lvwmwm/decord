// Module ID: 5305
// Function ID: 44899
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5305 (_isNativeReflectConstruct)
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
    const obj = importDefault(dependencyMap[10]);
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
const UserSettingsTypes = arg1(dependencyMap[7]).UserSettingsTypes;
let closure_10 = { pendingUsages: [] };
let importDefaultResult = importDefault(dependencyMap[9]);
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
let tmp4 = (PersistedStore) => {
  class StickersPersistedStore {
    constructor() {
      self = this;
      tmp = closure_2(this, StickersPersistedStore);
      obj = closure_5(StickersPersistedStore);
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
  const importDefault = StickersPersistedStore;
  callback2(StickersPersistedStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      const self = this;
      this.waitFor(closure_8, closure_7);
      const items = [closure_8];
      self.syncWith(items, closure_14);
      const items1 = [closure_7];
      self.syncWith(items1, closure_15);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getState",
    value() {
      return closure_10;
    }
  };
  items[1] = obj;
  obj = {
    key: "hasPendingUsage",
    value() {
      return pendingUsages.pendingUsages.length > 0;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "stickerFrecencyWithoutFetchingLatest",
    get() {
      return closure_11;
    }
  };
  return callback(StickersPersistedStore, items);
}(importDefault(dependencyMap[11]).PersistedStore);
tmp4.displayName = "StickersPersistedStore";
tmp4.persistKey = "StickersPersistedStoreV2";
obj = {
  STICKER_TRACK_USAGE: function handleStickersUsage(stickerIds) {
    stickerIds = stickerIds.stickerIds;
    if (null != stickerIds) {
      const item = stickerIds.forEach((key) => {
        closure_11.track(key);
        const pendingUsages = pendingUsages.pendingUsages;
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
tmp4 = new tmp4(importDefault(dependencyMap[12]), obj);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/stickers/StickersPersistedStore.tsx");

export default tmp4;
export const STICKER_PACK_NEW_TIMESTAMP_THRESHOLD = importDefault(dependencyMap[8]).Millis.DAY;
