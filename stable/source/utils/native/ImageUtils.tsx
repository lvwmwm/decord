// Module ID: 1484
// Function ID: 1485
// Name: utils/ImageUtils
// Dependencies: [32, 17, 1086, 1439, 1485, 1479, 1440, 1886, 12, 1406, 1403, 2]
// Exports: getMobileOptimizedSrc, getPaletteForAvatarMobile

// Module 1484 (utils/ImageUtils)
import _modDef12 from "module_12" /* 12 */;
import Constants from "Constants" /* 1086 */;
import AvatarUtils from "AvatarUtils" /* 1403 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1406 */;
import AttachmentImageLadderExperiment from "AttachmentImageLadderExperiment" /* 1439 */;
import AttachmentImageLadder from "AttachmentImageLadder" /* 1440 */;
import _modDef1479 from "module_1479" /* 1479 */;
import useWindowDimensions from "useWindowDimensions" /* 1485 */;
import react_nativeDefault from "react-native" /* 1886 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_native from "react-native" /* 17 */;
import size_mod from "module_2" /* 2 */;

let ImageManager;

let closure_4;
let hasOwnProperty;
function getSrcWithWidthAndHeight(animated) {
  let format;
  let obj3;
  let sourceHeight;
  let sourceWidth;
  let src;
  let targetHeight;
  let targetWidth;
  let tmp6;
  let tmp7;
  function getAttachmentLadderConfig(arg0) {
    try {
      const obj = { location: "native/ImageUtils.getSrcWithWidthAndHeight" };
      const attachmentImageLadderConfig = AttachmentImageLadderExperiment.getAttachmentImageLadderConfig(obj);
      let tmp5 = null;
      if (true === attachmentImageLadderConfig.enabled) {
        tmp5 = attachmentImageLadderConfig;
      }
      return tmp5;
    } catch (err) {
      return null;
    }
  }
  ({ src, sourceWidth, sourceHeight, targetWidth, targetHeight, format } = animated);
  if (format === undefined) {
    format = null;
  }
  let flag = animated.animated;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = _slicedToArray(src.split("?"), 2);
  const items = [tmp[0], ];
  const tmp2 = tmp[1];
  let obj = _modDef1479;
  items[1] = obj.parse(tmp2);
  let tmp5 = _slicedToArray(items, 2);
  [tmp6, tmp7] = tmp5;
  if (re8.test(tmp6)) {
    tmp7.format = "webp";
  } else if (null != format) {
    tmp7.format = format;
  }
  if (targetWidth > closure_6) {
    targetWidth = tmp9;
  }
  if (targetHeight > closure_6) {
    targetHeight = tmp9;
  }
  if (targetWidth !== sourceWidth) {
    const tmp10 = getAttachmentLadderConfig("native/ImageUtils.getSrcWithWidthAndHeight");
    size = { width: targetWidth, height: targetHeight };
    if (null != tmp10) {
      const obj2 = { targetWidth, targetHeight, sourceWidth, sourceHeight, maxUpscale: obj3.getSnapDownMaxUpscale(tmp10, react_nativeDefault()) };
      const snapAttachmentDimensions = AttachmentImageLadder.snapAttachmentDimensions;
      AttachmentImageLadder;
      obj3 = AttachmentImageLadder;
      size = snapAttachmentDimensions(obj2);
    }
    const tmp14 = size.width === sourceWidth && size.height === sourceHeight;
    if (!tmp14) {
      tmp7.width = size.width | 0;
      tmp7.height = size.height | 0;
    }
  }
  if (flag) {
    tmp7.animated = true;
  }
  let text = tmp6;
  const tmp3Result = _modDef12;
  if (!tmp3Result.isEmpty(tmp7)) {
    _modDef1479;
    text = `${tmp6}?${obj5.stringify(tmp7)}`;
  }
  return text;
}
function getMobileOptimizedSrc(proxy_url, c7, c72, png) {
  let tmp = png;
  if (png === undefined) {
    tmp = null;
  }
  let num = 1;
  if (re7.test(proxy_url)) {
    num = 0.3;
  }
  const obj = useWindowDimensions;
  size = obj.getWindowDimensions();
  const result = hasOwnProperty.getPixelSizeForLayoutSize(size.width) * num;
  const bound = Math.min(c7 > c72 ? result / c7 : hasOwnProperty.getPixelSizeForLayoutSize(size.height / 2) * num / c72, 1);
  let rounded1 = c72;
  let rounded = c7;
  if (bound < 1) {
    const _Math = Math;
    rounded = Math.ceil(c7 * bound);
    const _Math2 = Math;
    rounded1 = Math.ceil(c72 * bound);
  }
  const obj2 = { src: proxy_url, sourceWidth: c7, sourceHeight: c72, targetWidth: rounded, targetHeight: rounded1, format: tmp };
  return getSrcWithWidthAndHeight(obj2);
}
function getPaletteForAvatarMobile(src) {
  const ensureAvatarSource = utils_AvatarUtils.ensureAvatarSource;
  utils_AvatarUtils;
  ImageManager = ImageManager.ImageManager;
  const obj = AvatarUtils;
  return ImageManager.getDominantColors(ensureAvatarSource(obj.makeSource(src)));
}
({ NativeModules: closure_4, PixelRatio: hasOwnProperty } = react_native);
let closure_6 = Constants.MEDIA_PROXY_MAX_TARGET_RESOLUTION;
const tmp3 = /\.(gif)$/i;
const re7 = tmp3;
const tmp4 = /\.(avif)$/i;
const re8 = tmp4;
let size = size_mod;
let result = size.fileFinishedImporting("utils/native/ImageUtils.tsx");

export default { getMobileOptimizedSrc, getPaletteForAvatarMobile };
export const GIF_RE = tmp3;
export const AVIF_RE = tmp4;
export { getSrcWithWidthAndHeight };
export { getMobileOptimizedSrc };
export { getPaletteForAvatarMobile };
