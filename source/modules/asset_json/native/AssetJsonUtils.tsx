// Module ID: 1215
// Function ID: 13991
// Name: loadJsonAsset
// Dependencies: []

// Module 1215 (loadJsonAsset)
function loadJsonAsset(arg0) {
  return _loadJsonAsset(...arguments);
}
async function _loadJsonAsset(arg0, arg1) {
  const fn = function*(source) {
    let flag = arg1;
    if (flag === undefined) {
      flag = true;
    }
    yield undefined;
    if (null != closure_6[source]) {
      if (flag) {
        return closure_6[source];
      }
    }
    const uri = closure_4.resolveAssetSource(source).uri;
    if (obj.isAndroid()) {
      let asset;
      if (null != callback2(closure_2[33])) {
        asset = callback2(closure_2[33]).readAsset(uri, "utf8");
        const obj2 = callback2(closure_2[33]);
      }
      let asset1 = asset;
    } else {
      const DCDFileManager = DCDFileManager.DCDFileManager;
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
        if (null != closure_6[source]) {
          if (flag) {
            return closure_6[source];
          }
        }
        const _JSON = JSON;
        const parsed = JSON.parse(tmp9);
        closure_6[source] = parsed;
        return parsed;
      }
    }
    const obj = callback(closure_2[32]);
  };
  fn.next();
  return fn;
}
let closure_3 = importDefault(dependencyMap[0]);
({ Image: closure_4, NativeModules: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = {};
const obj = {
  i18n_bg() {
    return loadJsonAsset(arg1(dependencyMap[2]));
  },
  i18n_cs() {
    return loadJsonAsset(arg1(dependencyMap[3]));
  },
  i18n_da() {
    return loadJsonAsset(arg1(dependencyMap[4]));
  },
  i18n_de() {
    return loadJsonAsset(arg1(dependencyMap[5]));
  },
  i18n_el() {
    return loadJsonAsset(arg1(dependencyMap[6]));
  },
  i18n_enGB() {
    return loadJsonAsset(arg1(dependencyMap[7]));
  },
  i18n_esES() {
    return loadJsonAsset(arg1(dependencyMap[8]));
  },
  i18n_es419() {
    return loadJsonAsset(arg1(dependencyMap[9]));
  },
  i18n_fi() {
    return loadJsonAsset(arg1(dependencyMap[10]));
  },
  i18n_fr() {
    return loadJsonAsset(arg1(dependencyMap[11]));
  },
  i18n_hr() {
    return loadJsonAsset(arg1(dependencyMap[12]));
  },
  i18n_hu() {
    return loadJsonAsset(arg1(dependencyMap[13]));
  },
  i18n_it() {
    return loadJsonAsset(arg1(dependencyMap[14]));
  },
  i18n_ja() {
    return loadJsonAsset(arg1(dependencyMap[15]));
  },
  i18n_ko() {
    return loadJsonAsset(arg1(dependencyMap[16]));
  },
  i18n_lt() {
    return loadJsonAsset(arg1(dependencyMap[17]));
  },
  i18n_nl() {
    return loadJsonAsset(arg1(dependencyMap[18]));
  },
  i18n_no() {
    return loadJsonAsset(arg1(dependencyMap[19]));
  },
  i18n_pl() {
    return loadJsonAsset(arg1(dependencyMap[20]));
  },
  i18n_ptBR() {
    return loadJsonAsset(arg1(dependencyMap[21]));
  },
  i18n_ro() {
    return loadJsonAsset(arg1(dependencyMap[22]));
  },
  i18n_ru() {
    return loadJsonAsset(arg1(dependencyMap[23]));
  },
  i18n_svSE() {
    return loadJsonAsset(arg1(dependencyMap[24]));
  },
  i18n_th() {
    return loadJsonAsset(arg1(dependencyMap[25]));
  },
  i18n_tr() {
    return loadJsonAsset(arg1(dependencyMap[26]));
  },
  i18n_uk() {
    return loadJsonAsset(arg1(dependencyMap[27]));
  },
  i18n_vi() {
    return loadJsonAsset(arg1(dependencyMap[28]));
  },
  i18n_zhCN() {
    return loadJsonAsset(arg1(dependencyMap[29]));
  },
  i18n_zhTW() {
    return loadJsonAsset(arg1(dependencyMap[30]));
  },
  i18n_hi() {
    return loadJsonAsset(arg1(dependencyMap[31]));
  }
};
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[34]).fileFinishedImporting("modules/asset_json/native/AssetJsonUtils.tsx");

export const jsonAssets = obj;
export { loadJsonAsset };
