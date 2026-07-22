// Module ID: 8207
// Function ID: 64891
// Name: getCachedSourceFromURI
// Dependencies: []
// Exports: useDominantColorFromImage

// Module 8207 (getCachedSourceFromURI)
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
  const arg1 = arg0;
  const importDefault = React.useRef(true);
  const effect = React.useEffect(() => () => {
    closure_1.current = false;
  }, []);
  let hexToRgbResult;
  if (null != arg0) {
    hexToRgbResult = importDefaultResult.get(arg0);
  }
  if (null == hexToRgbResult) {
    hexToRgbResult = arg1(closure_2[4]).hexToRgb(importDefault(closure_2[5]).unsafe_rawColors.PRIMARY_800);
    const obj = arg1(closure_2[4]);
  }
  const tmp8 = callback(React.useState(hexToRgbResult), 2);
  closure_2 = tmp8[1];
  const items = [arg0];
  const effect1 = React.useEffect(() => {
    let value;
    if (null != arg0) {
      value = closure_7.get(arg0);
    }
    const arg0 = value;
    if (null != arg0) {
      if (null == value) {
        const tmp8 = callback2(arg0);
        if (null != tmp8) {
          if ("number" === typeof tmp8) {
            const ImageManager2 = closure_5.ImageManager;
            let dominantColorsLocalAsset = ImageManager2.getDominantColorsLocalAsset(closure_6.resolveAssetSource(tmp8));
          } else {
            const ImageManager = closure_5.ImageManager;
            dominantColorsLocalAsset = ImageManager.getDominantColors(closure_6.resolveAssetSource(tmp8));
          }
          dominantColorsLocalAsset.then((arg0) => {
            const tmp = callback2(arg0[0], 3);
            const obj = { r: tmp[0], g: tmp[1], b: tmp[2] };
            const result = closure_7.set(value, obj);
            if (ref.current) {
              callback(obj);
            }
          }).catch(() => {

          });
          const nextPromise = dominantColorsLocalAsset.then((arg0) => {
            const tmp = callback2(arg0[0], 3);
            const obj = { r: tmp[0], g: tmp[1], b: tmp[2] };
            const result = closure_7.set(value, obj);
            if (ref.current) {
              callback(obj);
            }
          });
        }
      } else {
        callback((arg0) => {
          let tmp = arg0;
          if (value !== arg0) {
            tmp = arg0;
            if (!ref(closure_2[6])(value, arg0)) {
              tmp = value;
            }
          }
          return tmp;
        });
      }
    }
  }, items);
  return tmp8[0];
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ NativeModules: closure_5, Image: closure_6 } = arg1(dependencyMap[2]));
let importDefaultResult = importDefault(dependencyMap[3]);
let obj = { max: 1000 };
importDefaultResult = new importDefaultResult(obj);
let importDefaultResult1 = importDefault(dependencyMap[3]);
obj = { max: 1000 };
importDefaultResult1 = new importDefaultResult1(obj);
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/voice_panel/native/card/DominantColorUtils.tsx");

export { getCachedSourceFromURI };
export { useDominantRGBFromImage };
export const useDominantColorFromImage = function useDominantColorFromImage(arg0) {
  const tmp = useDominantRGBFromImage(arg0);
  return "rgb(" + tmp.r + ", " + tmp.g + ", " + tmp.b + ")";
};
