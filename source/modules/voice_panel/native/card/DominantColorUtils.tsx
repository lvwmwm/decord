// Module ID: 8257
// Function ID: 65156
// Name: getCachedSourceFromURI
// Dependencies: [57, 31, 27, 1362, 3974, 689, 620, 2]
// Exports: useDominantColorFromImage

// Module 8257 (getCachedSourceFromURI)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import importDefaultResult from "priv";
import importDefaultResult1 from "priv";

let closure_5;
let closure_6;
const require = arg1;
function getCachedSourceFromURI(avatarURI) {
  let value = importDefaultResult1.get(avatarURI);
  if (null == value) {
    let tmp2 = avatarURI;
    if ("number" !== typeof avatarURI) {
      let tmp3 = null;
      if (null != avatarURI) {
        tmp3 = null;
        if ("" !== avatarURI.trim()) {
          const obj = { uri: avatarURI };
          tmp3 = obj;
        }
      }
      tmp2 = tmp3;
    }
    value = tmp2;
  }
  const result = importDefaultResult1.set(avatarURI, value);
  return value;
}
function useDominantRGBFromImage(arg0) {
  const _require = arg0;
  const importDefault = React.useRef(true);
  const effect = React.useEffect(() => () => {
    outer1_1.current = false;
  }, []);
  let hexToRgbResult;
  if (null != arg0) {
    hexToRgbResult = importDefaultResult.get(arg0);
  }
  if (null == hexToRgbResult) {
    hexToRgbResult = _require(3974).hexToRgb(importDefault(689).unsafe_rawColors.PRIMARY_800);
    let obj = _require(3974);
  }
  let tmp8 = callback(React.useState(hexToRgbResult), 2);
  const dependencyMap = tmp8[1];
  const items = [arg0];
  const effect1 = React.useEffect(() => {
    let value;
    if (null != closure_0) {
      value = outer1_7.get(closure_0);
    }
    closure_0 = value;
    if (null != closure_0) {
      if (null == value) {
        const tmp8 = outer1_9(closure_0);
        if (null != tmp8) {
          if ("number" === typeof tmp8) {
            const ImageManager2 = outer1_5.ImageManager;
            let dominantColorsLocalAsset = ImageManager2.getDominantColorsLocalAsset(outer1_6.resolveAssetSource(tmp8));
          } else {
            const ImageManager = outer1_5.ImageManager;
            dominantColorsLocalAsset = ImageManager.getDominantColors(outer1_6.resolveAssetSource(tmp8));
          }
          dominantColorsLocalAsset.then((arg0) => {
            const tmp = outer2_3(arg0[0], 3);
            const obj = { r: tmp[0], g: tmp[1], b: tmp[2] };
            const result = outer2_7.set(value, obj);
            if (outer1_1.current) {
              outer1_2(obj);
            }
          }).catch(() => {

          });
          const nextPromise = dominantColorsLocalAsset.then((arg0) => {
            const tmp = outer2_3(arg0[0], 3);
            const obj = { r: tmp[0], g: tmp[1], b: tmp[2] };
            const result = outer2_7.set(value, obj);
            if (outer1_1.current) {
              outer1_2(obj);
            }
          });
        }
      } else {
        callback((arg0) => {
          let tmp = arg0;
          if (closure_0 !== arg0) {
            tmp = arg0;
            if (!callback(table[6])(closure_0, arg0)) {
              tmp = closure_0;
            }
          }
          return tmp;
        });
      }
    }
  }, items);
  return tmp8[0];
}
({ NativeModules: closure_5, Image: closure_6 } = get_ActivityIndicator);
let obj = { max: 1000 };
importDefaultResult = new importDefaultResult(obj);
obj = { max: 1000 };
importDefaultResult1 = new importDefaultResult1(obj);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/voice_panel/native/card/DominantColorUtils.tsx");

export { getCachedSourceFromURI };
export { useDominantRGBFromImage };
export const useDominantColorFromImage = function useDominantColorFromImage(arg0) {
  const tmp = useDominantRGBFromImage(arg0);
  return "rgb(" + tmp.r + ", " + tmp.g + ", " + tmp.b + ")";
};
