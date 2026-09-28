// Module ID: 10766
// Function ID: 10767
// Name: BadgeArtImage
// Dependencies: [19, 17, 21, 1364, 8271, 5899, 7909, 2]
// Exports: default

// Module 10766 (BadgeArtImage)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import FastImageDefault from "FastImage" /* 5899 */;
import noop from "module_19" /* 19 */;

require = fn;
function ignoreSvgError() {

}
const View = fn(17).View;
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("modules/badges/native/BadgeArtImage.tsx");

export default function BadgeArtImage(style) {
  ({ url, height, width } = style);
  if (width === undefined) {
    width = height;
  }
  ({ fallbackUrl, animated } = style);
  if (animated === undefined) {
    animated = false;
  }
  const size = { width, height };
  const obj = { style: null, "aria-hidden": true, children: null };
  const items = [size, style.style];
  obj.style = items;
  const formatted = url.split(/[?#]/)[0].toLowerCase();
  if (formatted.endsWith(".svg")) {
    let APNGPlayer = require;
    let obj5 = dependencyMap;
    const size1 = { uri: url, width, height, onError: ignoreSvgError, fallback: null };
    if (null == fallbackUrl) {
      size1.fallback = undefined;
      let tmpResult = tmp(tmp8, size1);
    } else {
      if (!animated) {
        const obj2 = { source: null, style: null, resizeMode: "contain", enableAnimation: null };
        const obj3 = { uri: fallbackUrl };
        obj2.source = obj3;
        obj2.style = size;
        obj2.enableAnimation = animated;
        let tmpResult2 = tmp(FastImageDefault, obj2);
      } else {
        const APNGPlayerResult = APNGPlayer(1364);
      }
      APNGPlayer = APNGPlayer(8271).APNGPlayer;
      obj5 = { url: fallbackUrl, style: size, autoplay: true };
      tmpResult2 = tmp(APNGPlayer, obj5);
    }
  } else {
    if (animated) {
      if (obj4.isAndroid()) {
        const obj6 = { url, style: size, autoplay: true };
        tmpResult = tmp(tmp3(8271).APNGPlayer, obj6);
      }
      obj4 = PlatformUtils;
      tmp3 = require;
    }
    const obj7 = { source: null, style: null, resizeMode: "contain", enableAnimation: null };
    const obj8 = { uri: url };
    obj7.source = obj8;
    obj7.style = size;
    obj7.enableAnimation = animated;
    tmpResult = tmp(FastImageDefault, obj7);
  }
  obj.children = tmpResult;
  return <View style={null} aria-hidden>{null}</View>;
};
export const COMPLEX_BADGE_ASPECT_RATIO = 1.56;
