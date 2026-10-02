// Module ID: 8286
// Function ID: 8287
// Name: DominantColorUtils
// Dependencies: [32, 19, 17, 1445, 558, 576, 4685, 588, 568, 2]
// Exports: getCachedSourceFromURI

// Module 8286 (DominantColorUtils)
import nativeDefault from "native" /* 588 */;
import LRUCacheDefault from "LRUCache" /* 1445 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, uri;

let hasOwnProperty;
let metroRequire;
({ NativeModules: hasOwnProperty, Image: metroRequire } = react_native);
let tmp3 = new LRUCacheDefault({ max: 1000 });
let closure_7 = tmp3;
let tmp4 = new LRUCacheDefault({ max: 1000 });
let closure_8 = tmp4;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((uri) => {
  let closure_1;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp4;
  let tmp5;
  let tmp7;
  _require = uri;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(7);
  let obj2 = react;
  importDefault = react.useRef(true);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      return () => {
        closure_1_1.current = false;
      };
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp4 = fn;
    tmp5 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const effect = obj2.useEffect(tmp4, tmp5);
  if (cResult[2] !== uri) {
    let hexToRgbResult;
    if (null != uri) {
      hexToRgbResult = closure_7.get(uri);
    }
    if (hexToRgbResult == null) {
      const tmpResult = tmp(4685);
      hexToRgbResult = tmpResult.hexToRgb(nativeDefault.unsafe_rawColors.PRIMARY_800);
    }
    cResult[2] = uri;
    cResult[3] = hexToRgbResult;
    tmp7 = hexToRgbResult;
  } else {
    tmp7 = cResult[3];
  }
  [tmp13, dependencyMap] = obj2.useState(tmp7);
  _slicedToArray(obj2.useState(tmp7), 2);
  if (cResult[4] !== uri) {
    class R {
      constructor() {
        let ref;
        let value;
        if (null != uri) {
          value = closure_1_7.get(str);
        }
        uri = value;
        if (null != uri) {
          if (null == value) {
            let obj = closure_1_8;
            let value2 = closure_1_8.get(str);
            if (value2 == null) {
              let tmp6 = str;
              if (typeof uri !== "number") {
                let tmp7 = null;
                if (null != uri) {
                  tmp7 = null;
                  if ("" !== uri.trim()) {
                    tmp7 = { uri };
                    const obj2 = { uri };
                  }
                }
                tmp6 = tmp7;
              }
              value2 = tmp6;
            }
            let result = obj.set(str, value2);
            if (null != value2) {
              let dominantColorsLocalAsset;
              if (typeof value2 === "number") {
                const ImageManager = closure_1_5.ImageManager;
                dominantColorsLocalAsset = ImageManager.getDominantColorsLocalAsset(closure_1_6.resolveAssetSource(value2));
              } else {
                const ImageManager2 = closure_1_5.ImageManager;
                dominantColorsLocalAsset = ImageManager2.getDominantColors(closure_1_6.resolveAssetSource(value2));
              }
              const nextPromise = dominantColorsLocalAsset.then((result) => {
                const tmp = _slicedToArray(result[0], 3);
                const obj = { r: tmp[0], g: tmp[1], b: tmp[2] };
                result = closure_2_7.set(closure_0, obj);
                if (ref.current) {
                  closure_1_2(obj);
                }
              });
              nextPromise.catch(() => {

              });
            }
          } else {
            closure_2((arg0) => {
              let tmp = closure_0;
              if (closure_0 === arg0) {
                tmp = arg0;
              }
              return tmp;
            });
          }
        }
      }
    }
    const items1 = [uri];
    cResult[4] = uri;
    cResult[5] = R;
    cResult[6] = items1;
    tmp15 = items1;
    tmp14 = R;
  } else {
    class R {
      constructor() {
        let ref;
        let value;
        if (null != uri) {
          value = closure_1_7.get(str);
        }
        uri = value;
        if (null != uri) {
          if (null == value) {
            let obj = closure_1_8;
            let value2 = closure_1_8.get(str);
            if (value2 == null) {
              let tmp6 = str;
              if (typeof uri !== "number") {
                let tmp7 = null;
                if (null != uri) {
                  tmp7 = null;
                  if ("" !== uri.trim()) {
                    tmp7 = { uri };
                    const obj2 = { uri };
                  }
                }
                tmp6 = tmp7;
              }
              value2 = tmp6;
            }
            let result = obj.set(str, value2);
            if (null != value2) {
              let dominantColorsLocalAsset;
              if (typeof value2 === "number") {
                const ImageManager = closure_1_5.ImageManager;
                dominantColorsLocalAsset = ImageManager.getDominantColorsLocalAsset(closure_1_6.resolveAssetSource(value2));
              } else {
                const ImageManager2 = closure_1_5.ImageManager;
                dominantColorsLocalAsset = ImageManager2.getDominantColors(closure_1_6.resolveAssetSource(value2));
              }
              const nextPromise = dominantColorsLocalAsset.then((result) => {
                const tmp = _slicedToArray(result[0], 3);
                const obj = { r: tmp[0], g: tmp[1], b: tmp[2] };
                result = closure_2_7.set(closure_0, obj);
                if (ref.current) {
                  closure_1_2(obj);
                }
              });
              nextPromise.catch(() => {

              });
            }
          } else {
            closure_2((arg0) => {
              let tmp = closure_0;
              if (closure_0 === arg0) {
                tmp = arg0;
              }
              return tmp;
            });
          }
        }
      }
    }
    tmp15 = cResult[6];
  }
  const effect1 = obj2.useEffect(tmp14, tmp15);
  return tmp13;
}) : ((uri) => {
  let closure_1;
  let closure_2;
  let first;
  _require = uri;
  let obj = react;
  importDefault = react.useRef(true);
  const effect = react.useEffect(() => () => {
    closure_1_1.current = false;
  }, []);
  let hexToRgbResult;
  const useState = react.useState;
  if (null != uri) {
    hexToRgbResult = closure_7.get(uri);
  }
  if (hexToRgbResult == null) {
    let obj2 = require("ColorUtils");
    let tmp6 = importDefault;
    hexToRgbResult = obj2.hexToRgb(nativeDefault.unsafe_rawColors.PRIMARY_800);
  }
  [first, dependencyMap] = useState(hexToRgbResult);
  const items = [uri];
  const effect1 = obj.useEffect(() => {
    let ref;
    let value;
    if (null != uri) {
      value = closure_1_7.get(str);
    }
    uri = value;
    if (null != uri) {
      if (null == value) {
        let obj = closure_1_8;
        let value2 = closure_1_8.get(str);
        if (value2 == null) {
          let tmp6 = str;
          if (typeof uri !== "number") {
            let tmp7 = null;
            if (null != uri) {
              tmp7 = null;
              if ("" !== uri.trim()) {
                tmp7 = { uri };
                const obj2 = { uri };
              }
            }
            tmp6 = tmp7;
          }
          value2 = tmp6;
        }
        let result = obj.set(str, value2);
        if (null != value2) {
          let dominantColorsLocalAsset;
          if (typeof value2 === "number") {
            const ImageManager = closure_1_5.ImageManager;
            dominantColorsLocalAsset = ImageManager.getDominantColorsLocalAsset(closure_1_6.resolveAssetSource(value2));
          } else {
            const ImageManager2 = closure_1_5.ImageManager;
            dominantColorsLocalAsset = ImageManager2.getDominantColors(closure_1_6.resolveAssetSource(value2));
          }
          const nextPromise = dominantColorsLocalAsset.then((result) => {
            const tmp = _slicedToArray(result[0], 3);
            const obj = { r: tmp[0], g: tmp[1], b: tmp[2] };
            result = closure_2_7.set(closure_0, obj);
            if (ref.current) {
              closure_1_2(obj);
            }
          });
          nextPromise.catch(() => {

          });
        }
      } else {
        closure_2((arg0) => {
          let tmp = closure_0;
          if (closure_0 === arg0) {
            tmp = arg0;
          }
          return tmp;
        });
      }
    }
  }, items);
  return first;
});
let closure_9 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const tmp = closure_9(arg0);
  return "rgb(" + tmp.r + ", " + tmp.g + ", " + tmp.b + ")";
}) : ((arg0) => {
  const tmp = closure_9(arg0);
  return "rgb(" + tmp.r + ", " + tmp.g + ", " + tmp.b + ")";
});
function getCachedSourceFromURI(avatarURI) {
  let value = closure_8.get(avatarURI);
  const obj = closure_8;
  if (value == null) {
    let tmp2 = avatarURI;
    if (typeof avatarURI !== "number") {
      let tmp3 = null;
      if (null != avatarURI) {
        tmp3 = null;
        if ("" !== avatarURI.trim()) {
          tmp3 = { uri: avatarURI };
          const obj2 = { uri: avatarURI };
        }
      }
      tmp2 = tmp3;
    }
    value = tmp2;
  }
  const result = obj.set(avatarURI, value);
  return value;
}
let result = size.fileFinishedImporting("modules/voice_panel/native/card/DominantColorUtils.tsx");

export { getCachedSourceFromURI };
export const useDominantRGBFromImage = tmp5;
export const useDominantColorFromImage = tmp6;
