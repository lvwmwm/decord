// Module ID: 1449
// Function ID: 16928
// Name: clampDimension
// Dependencies: [57, 27, 653, 1427, 1450, 1440, 1824, 22, 1395, 1392, 2]
// Exports: getMobileOptimizedSrc, getPaletteForAvatarMobile

// Module 1449 (clampDimension)
import _slicedToArray from "_slicedToArray";
import get_ActivityIndicator from "get ActivityIndicator";
import { MEDIA_PROXY_MAX_TARGET_RESOLUTION as closure_6 } from "ME";

let closure_4;
let closure_5;
const require = arg1;
function clampDimension(targetHeight) {
  let tmp = targetHeight;
  if (targetHeight > closure_6) {
    tmp = closure_6;
  }
  return tmp;
}
function getSrcWithWidthAndHeight(animated) {
  let format;
  let sourceHeight;
  let sourceWidth;
  let src;
  let targetHeight;
  let targetWidth;
  let tmp3;
  let tmp4;
  ({ src, sourceWidth, sourceHeight, format } = animated);
  ({ targetWidth, targetHeight } = animated);
  if (format === undefined) {
    format = null;
  }
  let flag = animated.animated;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback(src.split("?"), 2);
  const items = [tmp[0], ];
  let obj = importDefault(1440);
  items[1] = obj.parse(tmp[1]);
  [tmp3, tmp4] = callback(items, 2);
  if (tmp4.test(tmp3)) {
    tmp4.format = "webp";
  } else if (null != format) {
    tmp4.format = format;
  }
  const tmp6 = clampDimension(targetWidth);
  const tmp7 = clampDimension(targetHeight);
  if (tmp6 !== sourceWidth) {
    obj = { location: "native/ImageUtils.getSrcWithWidthAndHeight" };
    while (true) {
      if (true === require(1427) /* apexExperiment */.getAttachmentImageLadderConfig(obj).enabled) {
        let tmp10 = require;
        let tmp11 = dependencyMap;
        let num2 = 6;
        let obj3 = require(1824) /* _createForOfIteratorHelperLoose */;
        obj = { targetWidth: tmp6, targetHeight: tmp7, sourceWidth, sourceHeight };
        let size = obj3.snapAttachmentDimensions(obj);
      } else {
        size = { width: tmp6, height: tmp7 };
      }
      let tmp12 = size.width === sourceWidth && size.height === sourceHeight;
      if (!tmp12) {
        tmp4.width = size.width | 0;
        tmp4.height = size.height | 0;
      }
    }
  }
  if (flag) {
    tmp4.animated = true;
  }
  const tmp2 = callback(items, 2);
  let text = tmp3;
  if (!obj5.isEmpty(tmp4)) {
    text = `${tmp3}?${importDefault(1440).stringify(tmp4)}`;
    const obj6 = importDefault(1440);
  }
  return text;
}
function getMobileOptimizedSrc(proxy_url, width, height, png) {
  let tmp = png;
  if (png === undefined) {
    tmp = null;
  }
  let num = 1;
  if (tmp3.test(proxy_url)) {
    num = 0.3;
  }
  let obj = require(1450) /* useWindowDimensions */;
  const size = obj.getWindowDimensions();
  const result = store.getPixelSizeForLayoutSize(size.width) * num;
  const bound = Math.min(width > height ? result / width : store.getPixelSizeForLayoutSize(size.height / 2) * num / height, 1);
  let rounded = width;
  let rounded1 = height;
  if (bound < 1) {
    const _Math = Math;
    rounded = Math.ceil(width * bound);
    const _Math2 = Math;
    rounded1 = Math.ceil(height * bound);
  }
  obj = { src: proxy_url, sourceWidth: width, sourceHeight: height, targetWidth: rounded, targetHeight: rounded1, format: tmp };
  return getSrcWithWidthAndHeight(obj);
}
function getPaletteForAvatarMobile(emojiURL) {
  const obj = require(1395) /* ensureAvatarSource */;
  ImageManager = ImageManager.ImageManager;
  return ImageManager.getDominantColors(obj.ensureAvatarSource(require(1392) /* getAvatarURL */.makeSource(emojiURL)));
}
({ NativeModules: closure_4, PixelRatio: closure_5 } = get_ActivityIndicator);
const tmp3 = /\.(gif)$/i;
let closure_7 = tmp3;
const tmp4 = /\.(avif)$/i;
let closure_8 = tmp4;
let result = require("ME").fileFinishedImporting("utils/native/ImageUtils.tsx");

export default { getMobileOptimizedSrc, getPaletteForAvatarMobile };
export const GIF_RE = tmp3;
export const AVIF_RE = tmp4;
export { getSrcWithWidthAndHeight };
export { getMobileOptimizedSrc };
export { getPaletteForAvatarMobile };
