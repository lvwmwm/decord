// Module ID: 9522
// Function ID: 9523
// Name: DominantColorUtils
// Dependencies: [32, 19, 17, 1451, 5011, 575, 558, 1893, 2]
// Exports: getCachedSourceFromURI, useDominantColorFromImage, useDominantRGBFromImage

// Module 9522 (DominantColorUtils)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import LRUCacheDefault from "LRUCache" /* 1451 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const f94882 = () => () => {
  closure_1_1.current = false;
};
const Image = react_native.Image;
let tmp2 = new LRUCacheDefault({ max: 1000 });
let closure_6 = tmp2;
let tmp3 = new LRUCacheDefault({ max: 1000 });
let closure_7 = tmp3;
let result = size.fileFinishedImporting("modules/voice_panel/native/card/DominantColorUtils.tsx");

export function getCachedSourceFromURI(avatarURL) {
  let value = closure_7.get(avatarURL);
  const obj = closure_7;
  if (value == null) {
    let tmp2 = avatarURL;
    if (typeof avatarURL !== "number") {
      let tmp3 = null;
      if (null != avatarURL) {
        tmp3 = null;
        if ("" !== avatarURL.trim()) {
          tmp3 = { uri: avatarURL };
          const obj2 = { uri: avatarURL };
        }
      }
      tmp2 = tmp3;
    }
    value = tmp2;
  }
  const result = obj.set(avatarURL, value);
  return value;
}
export function useDominantRGBFromImage(arg0) {
  let closure_0;
  let closure_1;
  let closure_2;
  let first;
  _require = arg0;
  importDefault = react.useRef(true);
  const effect = react.useEffect(f94882, []);
  let hexToRgbResult;
  const useState = react.useState;
  const obj = react;
  if (null != arg0) {
    hexToRgbResult = closure_6.get(arg0);
  }
  if (hexToRgbResult == null) {
    const obj2 = require("ColorUtils");
    hexToRgbResult = obj2.hexToRgb(nativeDefault.unsafe_rawColors.PRIMARY_800);
  }
  [first, dependencyMap] = useState(hexToRgbResult);
  const items = [arg0];
  const effect1 = obj.useEffect(() => {
    let value;
    if (null != uri) {
      value = closure_1_6.get(str);
    }
    uri = value;
    if (null != uri) {
      if (null == value) {
        let obj = closure_1_7;
        let value2 = closure_1_7.get(str);
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
            const obj3 = ref(dependencyMap[7]);
            dominantColorsLocalAsset = obj3.getDominantColorsLocalAsset(Image.resolveAssetSource(value2));
          } else {
            const obj4 = ref(dependencyMap[7]);
            dominantColorsLocalAsset = obj4.getDominantColors(Image.resolveAssetSource(value2));
          }
          const nextPromise = dominantColorsLocalAsset.then((result) => {
            const tmp = _slicedToArray(result[0], 3);
            const obj = { r: tmp[0], g: tmp[1], b: tmp[2] };
            result = closure_2_6.set(closure_0, obj);
            if (ref.current) {
              closure_1_2(obj);
            }
          });
          nextPromise.catch(() => {

          });
        }
      } else {
        dependencyMap((arg0) => {
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
}
export function useDominantColorFromImage(uri) {
  let closure_1;
  let tmp8;
  _require = uri;
  let obj = react;
  importDefault = react.useRef(true);
  const effect = react.useEffect(f94882, []);
  let hexToRgbResult;
  const useState = react.useState;
  if (null != uri) {
    hexToRgbResult = closure_6.get(uri);
  }
  if (hexToRgbResult == null) {
    let obj2 = require("ColorUtils");
    let tmp6 = importDefault;
    hexToRgbResult = obj2.hexToRgb(nativeDefault.unsafe_rawColors.PRIMARY_800);
  }
  let tmp7 = _slicedToArray(useState(hexToRgbResult), 2);
  [tmp8, dependencyMap] = tmp7;
  const items = [uri];
  const effect1 = obj.useEffect(() => {
    let value;
    if (null != uri) {
      value = closure_1_6.get(str);
    }
    uri = value;
    if (null != uri) {
      if (null == value) {
        let obj = closure_1_7;
        let value2 = closure_1_7.get(str);
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
            const obj3 = ref(dependencyMap[7]);
            dominantColorsLocalAsset = obj3.getDominantColorsLocalAsset(Image.resolveAssetSource(value2));
          } else {
            const obj4 = ref(dependencyMap[7]);
            dominantColorsLocalAsset = obj4.getDominantColors(Image.resolveAssetSource(value2));
          }
          const nextPromise = dominantColorsLocalAsset.then((result) => {
            const tmp = _slicedToArray(result[0], 3);
            const obj = { r: tmp[0], g: tmp[1], b: tmp[2] };
            result = closure_2_6.set(closure_0, obj);
            if (ref.current) {
              closure_1_2(obj);
            }
          });
          nextPromise.catch(() => {

          });
        }
      } else {
        dependencyMap((arg0) => {
          let tmp = closure_0;
          if (closure_0 === arg0) {
            tmp = arg0;
          }
          return tmp;
        });
      }
    }
  }, items);
  return "rgb(" + tmp8.r + ", " + tmp8.g + ", " + tmp8.b + ")";
}
