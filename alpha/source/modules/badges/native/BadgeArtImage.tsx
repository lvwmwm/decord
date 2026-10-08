// Module ID: 10546
// Function ID: 10547
// Name: BadgeArtImage
// Dependencies: [19, 17, 21, 558, 576, 1381, 8981, 6164, 7550, 2]

// Module 10546 (BadgeArtImage)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import FastImageDefault from "FastImage" /* 6164 */;
import inlineStyles from "inlineStyles" /* 7550 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function ignoreSvgError() {

}
const View = react_native.View;
const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function BadgeArtImage(arg0) {
  let animated;
  let enableAnimation;
  let fallbackUrl;
  let height;
  let style;
  let tmp6Result;
  let url;
  let width;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(18);
  ({ url, height, width, fallbackUrl, animated, style } = arg0);
  const tmp = _require;
  if (undefined === width) {
    width = height;
  }
  let tmp4 = undefined !== animated && animated;
  _require = tmp4;
  if (cResult[0] === height) {
    let tmp5;
    if (cResult[1] === width) {
      tmp5 = cResult[2];
    }
    style = tmp5;
    if (cResult[3] === tmp4) {
      let tmp6;
      if (cResult[4] === tmp5) {
        tmp6 = cResult[5];
      }
      if (cResult[6] === tmp5) {
        let tmp7;
        let tmp6Result1;
        if (cResult[7] === style) {
          tmp7 = cResult[8];
        }
        if (cResult[9] === fallbackUrl) {
          if (cResult[10] === height) {
            if (cResult[11] === tmp6) {
              if (cResult[12] === url) {
                let tmp8;
                if (cResult[13] === width) {
                  tmp8 = cResult[14];
                }
                if (cResult[15] === tmp7) {
                  let tmp14;
                  if (cResult[16] === tmp8) {
                    tmp14 = cResult[17];
                  }
                  return tmp14;
                }
                const tmp17 = <View style={tmp7} aria-hidden>{tmp8}</View>;
                cResult[15] = tmp7;
                cResult[16] = tmp8;
                cResult[17] = tmp17;
                tmp14 = tmp17;
              }
            }
          }
        }
        const str = url.split(/[?#]/)[0];
        const formatted = str.toLowerCase();
        if (formatted.endsWith(".svg")) {
          size = { uri: url, width, height, onError: ignoreSvgError, fallback: tmp6Result };
          tmp6Result = undefined;
          const SvgUri = tmp(7550).SvgUri;
          const tmp10 = jsx;
          if (null != fallbackUrl) {
            tmp6Result = tmp6(fallbackUrl);
          }
          tmp6Result1 = tmp10(SvgUri, size);
        } else {
          tmp6Result1 = tmp6(url);
        }
        cResult[9] = fallbackUrl;
        cResult[10] = height;
        cResult[11] = tmp6;
        cResult[12] = url;
        cResult[13] = width;
        cResult[14] = tmp6Result1;
        tmp8 = tmp6Result1;
      }
      const items = [tmp5, style];
      cResult[6] = tmp5;
      cResult[7] = style;
      cResult[8] = items;
      tmp7 = items;
    }
    function raster(uri) {
      if (enableAnimation) {
        let tmp4;
        const obj = PlatformUtils;
        const tmp2 = require;
        if (obj.isAndroid()) {
          tmp4 = jsx(tmp2(8981).APNGPlayer, { url: uri, style, autoplay: true });
        }
        return tmp4;
      }
      tmp4 = jsx(FastImageDefault, { source: { uri }, style, resizeMode: "contain", enableAnimation });
    }
    cResult[3] = tmp4;
    cResult[4] = tmp5;
    cResult[5] = raster;
    tmp6 = raster;
  }
  const size1 = { width, height };
  cResult[0] = height;
  cResult[1] = width;
  cResult[2] = size1;
  tmp5 = size1;
}) : (function BadgeArtImage(style) {
  let animated;
  let fallbackUrl;
  let height;
  let obj5;
  let obj8;
  let tmp12;
  let tmpResult2;
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
  size = { width, height };
  const items = [size, style.style];
  const str = url.split(/[?#]/)[0];
  const formatted = str.toLowerCase();
  if (formatted.endsWith(".svg")) {
    const size1 = { uri: url, width, height, onError: ignoreSvgError, fallback: tmp12 };
    tmp12 = undefined;
    const SvgUri = inlineStyles.SvgUri;
    if (null != fallbackUrl) {
      if (animated) {
        let tmpResult;
        const tmp8Result = PlatformUtils;
        if (tmp8Result.isAndroid()) {
          const obj2 = { url: fallbackUrl, style: size, autoplay: true };
          tmpResult = tmp(tmp8(8981).APNGPlayer, obj2);
        }
        tmp12 = tmpResult;
      }
      const obj3 = { source: obj5, style: size, resizeMode: "contain", enableAnimation: animated };
      obj5 = { uri: fallbackUrl };
      tmpResult = tmp(FastImageDefault, obj3);
    }
    tmpResult2 = tmp(SvgUri, size1);
  } else {
    if (animated) {
      const obj4 = PlatformUtils;
      const tmp3 = require;
      if (obj4.isAndroid()) {
        const obj6 = { url, style: size, autoplay: true };
        tmpResult2 = tmp(tmp3(8981).APNGPlayer, obj6);
      }
    }
    const obj7 = { source: obj8, style: size, resizeMode: "contain", enableAnimation: animated };
    obj8 = { uri: url };
    tmpResult2 = tmp(FastImageDefault, obj7);
  }
  return <tmp2 style={items} aria-hidden>{tmpResult2}</tmp2>;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/badges/native/BadgeArtImage.tsx");

export default tmp3;
export const COMPLEX_BADGE_ASPECT_RATIO = 1.56;
