// Module ID: 1215
// Function ID: 13992
// Name: loadJsonAsset
// Dependencies: [5, 27, 1216, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 477, 1247, 2]

// Module 1215 (loadJsonAsset)
import registerAsset from "registerAsset";
import get_ActivityIndicator from "registerAsset";

let closure_4;
let closure_5;
const require = arg1;
function loadJsonAsset(arg0) {
  return _loadJsonAsset(...arguments);
}
async function _loadJsonAsset(arg0, arg1) {
  let iter = (function*(source) {
    let flag = arg1;
    if (flag === undefined) {
      flag = true;
    }
    yield undefined;
    if (null != outer2_6[source]) {
      if (flag) {
        return outer2_6[source];
      }
    }
    const uri = outer2_4.resolveAssetSource(source).uri;
    if (obj.isAndroid()) {
      let asset;
      if (null != outer2_1(outer2_2[33])) {
        asset = outer2_1(outer2_2[33]).readAsset(uri, "utf8");
        const obj2 = outer2_1(outer2_2[33]);
      }
      let asset1 = asset;
    } else {
      const DCDFileManager = outer2_5.DCDFileManager;
      asset1 = DCDFileManager.readAsset(uri, "utf8");
    }
    if (null == asset1) {
      const _Error = Error;
      const error = new Error("RTNFileManager doesn't exist?");
      throw error;
    } else {
      const tmp9 = yield asset1;
      if (null == tmp9) {
        return null;
      } else {
        if (null != outer2_6[source]) {
          if (flag) {
            return outer2_6[source];
          }
        }
        const _JSON = JSON;
        const parsed = JSON.parse(tmp9);
        outer2_6[source] = parsed;
        return parsed;
      }
    }
    obj = outer2_0(outer2_2[32]);
  })();
  iter.next();
  return iter;
}
({ Image: closure_4, NativeModules: closure_5 } = get_ActivityIndicator);
let closure_6 = {};
const result = require("registerAsset").fileFinishedImporting("modules/asset_json/native/AssetJsonUtils.tsx");

export const jsonAssets = {
  i18n_bg() {
    return loadJsonAsset(require(1216) /* registerAsset */);
  },
  i18n_cs() {
    return loadJsonAsset(require(1218) /* registerAsset */);
  },
  i18n_da() {
    return loadJsonAsset(require(1219) /* registerAsset */);
  },
  i18n_de() {
    return loadJsonAsset(require(1220) /* registerAsset */);
  },
  i18n_el() {
    return loadJsonAsset(require(1221) /* registerAsset */);
  },
  i18n_enGB() {
    return loadJsonAsset(require(1222) /* registerAsset */);
  },
  i18n_esES() {
    return loadJsonAsset(require(1223) /* registerAsset */);
  },
  i18n_es419() {
    return loadJsonAsset(require(1224) /* registerAsset */);
  },
  i18n_fi() {
    return loadJsonAsset(require(1225) /* registerAsset */);
  },
  i18n_fr() {
    return loadJsonAsset(require(1226) /* registerAsset */);
  },
  i18n_hr() {
    return loadJsonAsset(require(1227) /* registerAsset */);
  },
  i18n_hu() {
    return loadJsonAsset(require(1228) /* registerAsset */);
  },
  i18n_it() {
    return loadJsonAsset(require(1229) /* registerAsset */);
  },
  i18n_ja() {
    return loadJsonAsset(require(1230) /* registerAsset */);
  },
  i18n_ko() {
    return loadJsonAsset(require(1231) /* registerAsset */);
  },
  i18n_lt() {
    return loadJsonAsset(require(1232) /* registerAsset */);
  },
  i18n_nl() {
    return loadJsonAsset(require(1233) /* registerAsset */);
  },
  i18n_no() {
    return loadJsonAsset(require(1234) /* registerAsset */);
  },
  i18n_pl() {
    return loadJsonAsset(require(1235) /* registerAsset */);
  },
  i18n_ptBR() {
    return loadJsonAsset(require(1236) /* registerAsset */);
  },
  i18n_ro() {
    return loadJsonAsset(require(1237) /* registerAsset */);
  },
  i18n_ru() {
    return loadJsonAsset(require(1238) /* registerAsset */);
  },
  i18n_svSE() {
    return loadJsonAsset(require(1239) /* registerAsset */);
  },
  i18n_th() {
    return loadJsonAsset(require(1240) /* registerAsset */);
  },
  i18n_tr() {
    return loadJsonAsset(require(1241) /* registerAsset */);
  },
  i18n_uk() {
    return loadJsonAsset(require(1242) /* registerAsset */);
  },
  i18n_vi() {
    return loadJsonAsset(require(1243) /* registerAsset */);
  },
  i18n_zhCN() {
    return loadJsonAsset(require(1244) /* registerAsset */);
  },
  i18n_zhTW() {
    return loadJsonAsset(require(1245) /* registerAsset */);
  },
  i18n_hi() {
    return loadJsonAsset(require(1246) /* registerAsset */);
  }
};
export { loadJsonAsset };
