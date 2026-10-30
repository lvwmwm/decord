// Module ID: 11415
// Function ID: 11416
// Name: BadgeArtImage
// Dependencies: [19, 17, 21, 1376, 9482, 5712, 8023, 2]
// Exports: default

// Module 11415 (BadgeArtImage)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import FastImageDefault from "FastImage" /* 5712 */;
import inlineStyles from "inlineStyles" /* 8023 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

function ignoreSvgError() {

}
const View = react_native.View;
const jsx = Fragment.jsx;
let size = size_mod;
const result = size.fileFinishedImporting("modules/badges/native/BadgeArtImage.tsx");

export default function BadgeArtImage(style) {
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
          tmpResult = tmp(tmp8(9482).APNGPlayer, obj2);
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
        tmpResult2 = tmp(tmp3(9482).APNGPlayer, obj6);
      }
    }
    const obj7 = { source: obj8, style: size, resizeMode: "contain", enableAnimation: animated };
    obj8 = { uri: url };
    tmpResult2 = tmp(FastImageDefault, obj7);
  }
  return <tmp2 style={items} aria-hidden>{tmpResult2}</tmp2>;
};
export const COMPLEX_BADGE_ASPECT_RATIO = 1.56;
