// Module ID: 18754
// Function ID: 18755
// Name: useInterestCoverColor
// Dependencies: [5, 32, 19, 5147, 1453, 671, 1490, 2]
// Exports: coverArtColor, default

// Module 18754 (useInterestCoverColor)
import _modDef671 from "module_671" /* 671 */;
import LRUCacheDefault from "LRUCache" /* 1453 */;
import shared from "shared" /* 5147 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c1, c3, c4;

function accessibleCoverColor(arg0) {
  let contrast2;
  let hexResult1;
  let tmp12Result2;
  let tmp5;
  let tmp6;
  const tmp3 = _modDef671;
  const tmp3Result = tmp3(...arg0);
  const tmp4 = _slicedToArray(tmp3Result.hsl(), 3);
  [tmp5, tmp6] = tmp4;
  let bound = Math.min(tmp4[2], 0.36);
  const hsl = _modDef671.hsl;
  let num = 0;
  _modDef671;
  if (Number.isFinite(tmp5)) {
    num = tmp5;
  }
  const hslResult = hsl(num, Math.min(tmp6, 0.35), bound);
  let hexResult = hslResult.hex();
  const contrast = _modDef671.contrast;
  _modDef671;
  const tmpResult2 = _modDef671;
  if (contrast("#ffffff", tmpResult2.mix(hexResult, "#ffffff", 0.12, "rgb")) < metroRequire) {
    do {
      let _Math = Math;
      let bound1 = Math.max(0, bound - 0.01);
      let tmp12 = importDefault;
      let tmp14 = _modDef671;
      let _Number = Number;
      let hsl2 = tmp14.hsl;
      let num2 = 0;
      if (Number.isFinite(tmp5)) {
        num2 = tmp5;
      }
      let _Math2 = Math;
      let hsl2Result = hsl2(num2, Math.min(tmp6, 0.35), bound1);
      hexResult1 = hsl2Result.hex();
      let tmp12Result = tmp12(671);
      contrast2 = tmp12Result.contrast;
      tmp12Result2 = tmp12(671);
      let str = "#ffffff";
      let str2 = "rgb";
      bound = bound1;
      hexResult = hexResult1;
    } while (contrast2("#ffffff", tmp12Result2.mix(hexResult1, "#ffffff", 0.12, "rgb")) < metroRequire);
  }
  return hexResult;
}
function fetchInterestCoverColor(arg0, uri) {
  function extractColor() {
    return obj(...arguments);
  }
  let closure_0 = uri;
  let obj = function _extractColor() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let obj3;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        let c2;
        try {
          let closure_0;
          let first;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_1 = tmp;
              closure_0 = undefined;
              first = undefined;
              c2 = 1;
              c3 = 2;
              c4 = 1;
              const obj5 = { value: obj3.getPaletteForAvatar(uri), done: false };
              obj3 = closure_0(c2[6]);
              return obj5;
            }
          } else if (1 === c3) {
            c2 = 0;
            c4 = 3;
            return { value: null, done: true };
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 0;
            c4 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_0 = value;
            first = undefined;
            if (closure_0 != null) {
              first = closure_0[0];
            }
            let color = null;
            if (null != first) {
              color = null;
              if (!first.some((item) => {
                const isFiniteResult = Number.isFinite(item);
                let tmp2 = !isFiniteResult;
                if (isFiniteResult) {
                  tmp2 = item < 0;
                }
                if (!tmp2) {
                  tmp2 = item > 255;
                }
                return tmp2;
              })) {
                closure_129_1.color = closure_1_8(first);
                color = closure_129_1.color;
              }
            }
            c2 = 0;
            c4 = 3;
            obj = { value: color, done: true };
            return obj;
          }
        } catch (tmp19) {
          if (0 === c2) {
            c4 = 3;
            throw tmp19;
          } else {
            c3 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  obj = closure_7;
  const value = closure_7.get(arg0);
  uri = undefined;
  if (value != null) {
    uri = value.uri;
  }
  if (uri === uri) {
    return value.pending;
  } else {
    let obj2 = { uri, color: null, pending: extractColor() };
    const tmp3 = globalThis;
    const result = obj.set(arg0, obj2);
    return obj2.pending;
  }
}
const sum = shared.WCAGContrastRatios.Text + 0.3;
const metroRequire = sum;
let tmp3 = new LRUCacheDefault({ max: 256 });
let closure_7 = tmp3;
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/useInterestCoverColor.tsx");

export default function useInterestCoverColor(arg0, arg1) {
  let tmp2;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let tmp = _slicedToArray(react.useState(null), 2);
  [tmp2, dependencyMap] = tmp;
  const items = [arg0, arg1];
  const effect = react.useEffect(() => {
    function resolveColor() {
      return obj(...arguments);
    }
    let obj = function _resolveColor() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let v1;
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            let tmp;
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_1 = tmp4;
                tmp = undefined;
                c2 = 1;
                c3 = 1;
                const obj4 = { value: closure_2_9(tmp, closure_2_0), done: false };
                return obj4;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              tmp = value;
              const tmp7 = closure_129_1;
              if (tmp7) {
                obj = { gameId: tmp, uri: closure_129_0, color: tmp };
                c2(obj);
              }
              c3 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } catch (tmp16) {
            c3 = 3;
            throw tmp16;
          }
        }
      });
      return obj(...arguments);
    };
    if (null != c1) {
      closure_0 = c1;
      c1 = true;
      let tmp = resolveColor();
      return () => {
        c1 = false;
      };
    }
  }, items);
  if (null == arg1) {
    return null;
  } else {
    let gameId;
    if (tmp2 != null) {
      gameId = tmp2.gameId;
    }
    if (gameId === arg0) {
      if (tmp2.uri === arg1) {
        return tmp2.color;
      }
    }
    const value = closure_7.get(arg0);
    let uri;
    if (value != null) {
      uri = value.uri;
    }
    let color = null;
    if (uri === arg1) {
      color = value.color;
    }
    return color;
  }
};
export const COVER_TEXTURE_OPACITY = 0.12;
export const COVER_COLOR_MAX_SATURATION = 0.35;
export const COVER_COLOR_MAX_LIGHTNESS = 0.36;
export const COVER_COLOR_TEXT_CONTRAST = sum;
export const COVER_ART_LUMINANCE_RATIO = 0.5;
export { accessibleCoverColor };
export function coverArtColor(backgroundColor) {
  const obj = _modDef671(backgroundColor);
  const luminanceResult = obj.luminance(0.5 * obj.luminance());
  return luminanceResult.hex();
}
export { fetchInterestCoverColor };
