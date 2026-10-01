// Module ID: 8289
// Function ID: 8290
// Name: DominantColorUtils
// Dependencies: [32, 19, 17, 1439, 4683, 576, 558, 2]
// Exports: getCachedSourceFromURI, useDominantColorFromImage, useDominantRGBFromImage

// Module 8289 (DominantColorUtils)
import nativeDefault from "native" /* 576 */;
import LRUCacheDefault from "LRUCache" /* 1439 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let hasOwnProperty;
let metroRequire;
const f86061 = () => () => {
  closure_1_1.current = false;
};
const f86062 = () => {
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
};
({ NativeModules: hasOwnProperty, Image: metroRequire } = react_native);
let tmp3 = new LRUCacheDefault({ max: 1000 });
let closure_7 = tmp3;
let tmp4 = new LRUCacheDefault({ max: 1000 });
let closure_8 = tmp4;
let result = size.fileFinishedImporting("modules/voice_panel/native/card/DominantColorUtils.tsx");

export const getCachedSourceFromURI = function getCachedSourceFromURI(avatarURI) {
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
};
export const useDominantRGBFromImage = function useDominantRGBFromImage(arg0) {
  let closure_0;
  let closure_1;
  let closure_2;
  let first;
  _require = arg0;
  importDefault = react.useRef(true);
  const effect = react.useEffect(f86061, []);
  let hexToRgbResult;
  const useState = react.useState;
  const obj = react;
  if (null != arg0) {
    hexToRgbResult = closure_7.get(arg0);
  }
  if (hexToRgbResult == null) {
    const obj2 = require("ColorUtils");
    hexToRgbResult = obj2.hexToRgb(nativeDefault.unsafe_rawColors.PRIMARY_800);
  }
  [first, dependencyMap] = useState(hexToRgbResult);
  const items = [arg0];
  const effect1 = obj.useEffect(f86062, items);
  return first;
};
export const useDominantColorFromImage = function useDominantColorFromImage(uri) {
  let closure_1;
  let tmp8;
  _require = uri;
  let obj = react;
  importDefault = react.useRef(true);
  const effect = react.useEffect(f86061, []);
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
  let tmp7 = _slicedToArray(useState(hexToRgbResult), 2);
  [tmp8, dependencyMap] = tmp7;
  const items = [uri];
  const effect1 = obj.useEffect(f86062, items);
  return "rgb(" + tmp8.r + ", " + tmp8.g + ", " + tmp8.b + ")";
};
