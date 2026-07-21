// Module ID: 4160
// Function ID: 35197
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4160 (_isNativeReflectConstruct)
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
const createExecutable = arg1(dependencyMap[6]).createExecutable;
const importDefaultResult = importDefault(dependencyMap[5]);
const tmp3 = (importDefaultResult) => {
  class DetectableGameRecord {
    constructor(arg0) {
      self = this;
      tmp = DetectableGameRecord(this, DetectableGameRecord);
      obj = closure_3(DetectableGameRecord);
      tmp2 = closure_2;
      if (closure_6()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, [], closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      ({ id: tmp6.id, name: tmp6.name, description: tmp6.description, icon: tmp6.icon, icon_hash: tmp6.icon_hash } = importDefaultResult);
      tmp2Result.aliases = importDefaultResult.aliases || [];
      ({ cover_image_hash: tmp6.cover_image_hash, executables } = importDefaultResult);
      if (null == executables) {
        executables = [];
      }
      tmp2Result.executables = executables.map(closure_5);
      tmp2Result.overlay = importDefaultResult.overlay || false;
      tmp2Result.overlayWarn = importDefaultResult.overlayWarn || false;
      tmp2Result.overlayCompatibilityHook = importDefaultResult.overlayCompatibilityHook || false;
      tmp2Result.hook = importDefaultResult.hook || false;
      tmp2Result.supportsOutOfProcessOverlay = importDefaultResult.supportsOutOfProcessOverlay || false;
      tmp2Result.thirdPartySkus = importDefaultResult.thirdPartySkus || [];
      tmp2Result.themes = importDefaultResult.themes || [];
      tmp2Result.content_classification = importDefaultResult.content_classification;
      return tmp2Result;
    }
  }
  let closure_0 = DetectableGameRecord;
  callback2(DetectableGameRecord, importDefaultResult);
  let obj = {
    key: "getIconURL",
    value(arg0) {
      let icon;
      let id;
      let combined = null;
      if (null != this.icon) {
        ({ id, icon } = this);
        let str = "";
        if (null != arg0) {
          const _HermesInternal = HermesInternal;
          str = "?size=" + arg0;
        }
        const _HermesInternal2 = HermesInternal;
        combined = "https://cdn.discordapp.com/app-icons/" + id + "/" + icon + ".png" + str;
      }
      return combined;
    }
  };
  const items = [obj, ];
  obj = {
    key: "hasTheme",
    value(arg0) {
      const themes = this.themes;
      return themes.includes(arg0);
    }
  };
  items[1] = obj;
  return callback(DetectableGameRecord, items);
}(importDefault(dependencyMap[5]));
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/game_detection/GameDetectionTypes.tsx");

export const GameTheme = { EROTIC: "Erotic" };
export const DetectableGameRecord = tmp3;
export const GameDetectionDebugLevel = { NONE: 0, [0]: "NONE", WINDOWED_ONLY: 1, [1]: "WINDOWED_ONLY", ALL: 2, [2]: "ALL" };
export const SteamReviewScoreDescription = { NO_USER_REVIEWS: 0, [0]: "NO_USER_REVIEWS", OVERWHELMINGLY_POSITIVE: 1, [1]: "OVERWHELMINGLY_POSITIVE", VERY_POSITIVE: 2, [2]: "VERY_POSITIVE", POSITIVE: 3, [3]: "POSITIVE", MOSTLY_POSITIVE: 4, [4]: "MOSTLY_POSITIVE", MIXED: 5, [5]: "MIXED", MOSTLY_NEGATIVE: 6, [6]: "MOSTLY_NEGATIVE", NEGATIVE: 7, [7]: "NEGATIVE", VERY_NEGATIVE: 8, [8]: "VERY_NEGATIVE", OVERWHELMINGLY_NEGATIVE: 9, [9]: "OVERWHELMINGLY_NEGATIVE" };
