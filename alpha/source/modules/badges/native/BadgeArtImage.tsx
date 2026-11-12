// Module ID: 15163
// Function ID: 15164
// Name: BadgeArtImage
// Dependencies: [32, 5, 19, 17, 21, 5373, 1089, 6016, 8197, 1377, 9431, 5957, 2]
// Exports: default

// Module 15163 (BadgeArtImage)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import DurationsDefault from "Durations" /* 1089 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import utils_FunctionUtils from "utils/FunctionUtils" /* 5373 */;
import FastImageDefault from "FastImage" /* 5957 */;
import TimeUtils from "TimeUtils" /* 6016 */;
import inlineStyles from "inlineStyles" /* 8197 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

let c1, c4, dependencyMap;

function ignoreSvgError() {

}
function timeOut() {
  return obj(...arguments);
}
let obj = function _timeOut() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj2;
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c1 = 1;
            c0 = 1;
            const obj5 = { value: obj2.sleep(closure_2_10), done: false };
            obj2 = TimeUtils;
            return obj5;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c0 = 3;
          return { value: null, done: true };
        }
      } catch (tmp7) {
        c0 = 3;
        throw tmp7;
      }
    }
  });
  return obj(...arguments);
};
function SvgArt(url) {
  let c2;
  let c3;
  let fallback;
  let height;
  let onLoad;
  let tmp2;
  let tmp4;
  let width;
  url = url.url;
  ({ fallback, onLoad } = url);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let closure_4;
  obj = react;
  ({ width, height } = url);
  let tmp = _slicedToArray(react.useState(null), 2);
  [tmp2, c2] = tmp;
  const tmp3 = _slicedToArray(react.useState(false), 2);
  [tmp4, c3] = tmp3;
  let items = [url];
  const effect = react.useEffect(() => {
    function load() {
      return obj(...arguments);
    }
    obj = function _load() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let v0;
        let v1;
        if (c4 === 2) {
          c4 = 3;
          const str = "Generator functions may not be called on executing generators";
          throw new TypeError("Generator functions may not be called on executing generators");
        } else {
          let tmp20 = value;
          if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              let closure_0;
              c4 = 2;
              const tmp4 = c3;
              if (0 === c3) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  let closure_1 = tmp;
                  closure_0 = undefined;
                  c2 = 1;
                  c3 = 2;
                  c4 = 1;
                  const obj4 = {
                    value: closure_2_9.one(closure_0, closure_2_4(function*() {
                                let closure_2;
                                let value = tmp;
                                const items = [, ];
                                const obj6 = closure_2_0(v0[8]);
                                items[0] = obj6.fetchText(c0);
                                items[1] = closure_2_11();
                                closure_0 = yield race(items);
                                c0 = closure_0;
                                const parse = closure_2_0(v0[8]).parse;
                                const tmp20 = closure_2_0(v0[8]);
                                if (closure_0 == null) {
                                  c0 = "";
                                }
                                value = parse(c0);
                                if (null == value) {
                                  const _Error = Error;
                                  const self = this;
                                  const self2 = this;
                                  const error = new Error("svg has no content");
                                  throw error;
                                }
                                return value;
                              })),
                    done: false
                  };
                  return obj4;
                }
              } else {
                if (1 === tmp4) {
                  c2 = 0;
                  const tmp12 = closure_129_0;
                  if (!tmp12) {
                    const tmp14 = c3(true);
                  }
                } else if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 0;
                  c4 = 3;
                  obj = { value, done: true };
                  return obj;
                } else {
                  closure_0 = value;
                  const tmp7 = closure_129_0;
                  if (!tmp7) {
                    c2(closure_0);
                  }
                  c2 = 0;
                }
                c4 = 3;
                return { value: "HermesInternal", done: null };
              }
            } catch (tmp18) {
              if (0 === c2) {
                c4 = 3;
                throw tmp18;
              } else {
                c3 = 1;
              }
            }
          }
        }
      });
      return obj(...arguments);
    };
    let c0 = false;
    const tmp = load();
    return () => {
      c0 = true;
    };
  }, items);
  let tmp6 = null != tmp2;
  if (!tmp6) {
    let tmp7 = tmp4 && null == fallback;
    tmp6 = tmp7;
  }
  closure_4 = tmp6;
  const items1 = [tmp6, onLoad];
  const effect1 = obj.useEffect(() => {
    const tmp = closure_4;
    if (tmp) {
      if (onLoad != null) {
        tmp2();
      }
    }
  }, items1);
  if (!tmp4) {
    let tmp9 = null;
    if (null != tmp2) {
      let tmp11 = url;
      let tmp12 = dependencyMap;
      size = { width, height };
      tmp9 = jsx(url(8197).SvgAst, { ast: tmp2, override: size });
    }
    fallback = tmp9;
  }
  return fallback;
}
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const jsx = Fragment.jsx;
const promiseDeduper = new utils_FunctionUtils.PromiseDeduper();
let closure_10 = 10 * DurationsDefault.Millis.SECOND;
let size = size_mod;
const result = size.fileFinishedImporting("modules/badges/native/BadgeArtImage.tsx");

export default function BadgeArtImage(style) {
  let animated;
  let fallbackUrl;
  let height;
  let items;
  let onError;
  let onLoad;
  let sharesSvgLoad;
  let tmp3;
  let tmp6;
  let url;
  let width;
  ({ url, height, width } = style);
  if (width === undefined) {
    width = height;
  }
  ({ fallbackUrl, animated } = style);
  if (animated === undefined) {
    animated = false;
  }
  ({ onLoad, onError, sharesSvgLoad } = style);
  if (sharesSvgLoad === undefined) {
    sharesSvgLoad = false;
  }
  size = { width, height };
  style = style.style;
  const str = url.split(/[?#]/)[0];
  const formatted = str.toLowerCase();
  if (formatted.endsWith(".svg")) {
    let tmp17Result;
    let tmp22;
    if (null != fallbackUrl) {
      if (animated) {
        const obj7 = PlatformUtils;
        const tmp10 = require;
        if (obj7.isAndroid()) {
          jsx(tmp10(9431).APNGPlayer, { url: fallbackUrl, style: size, autoplay: true, onLoad });
        }
      }
      const obj4 = { uri: fallbackUrl };
      jsx(FastImageDefault, { source: obj4, style: size, resizeMode: "contain", enableAnimation: animated, onLoadEnd: onLoad, onError });
    }
    if (sharesSvgLoad) {
      const size1 = { url, width, height, fallback: tmp9, onLoad };
      tmp17Result = tmp17(SvgArt, size1, url);
      tmp22 = tmp17;
    } else {
      const size2 = { uri: url, width, height, onLoad, onError: ignoreSvgError, fallback: tmp9 };
      tmp17Result = tmp17(inlineStyles.SvgUri, size2);
      tmp22 = tmp17;
    }
    tmp3 = tmp22;
    tmp6 = tmp17Result;
  } else {
    if (animated) {
      const obj3 = PlatformUtils;
      const tmp = require;
      if (obj3.isAndroid()) {
        tmp6 = jsx(tmp(9431).APNGPlayer, { url, style: size, autoplay: true, onLoad });
        tmp3 = jsx;
      }
    }
    tmp3 = jsx;
    const obj8 = { uri: url };
    tmp6 = jsx(FastImageDefault, { source: obj8, style: size, resizeMode: "contain", enableAnimation: animated, onLoadEnd: onLoad, onError });
  }
  const obj9 = { style: items, "aria-hidden": true, children: tmp6 };
  items = [size, style];
  return tmp3(View, obj9);
};
export const COMPLEX_BADGE_ASPECT_RATIO = 1.56;
