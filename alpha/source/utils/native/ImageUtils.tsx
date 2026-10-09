// Module ID: 1496
// Function ID: 1497
// Name: utils/ImageUtils
// Dependencies: [32, 17, 1085, 1451, 1497, 1491, 1452, 1898, 12, 1418, 1415, 1899, 2]
// Exports: getMobileOptimizedSrc, getPaletteForAvatarMobile

// Module 1496 (utils/ImageUtils)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import AvatarUtils from "AvatarUtils" /* 1415 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1418 */;
import AttachmentImageLadderExperiment from "AttachmentImageLadderExperiment" /* 1451 */;
import AttachmentImageLadder from "AttachmentImageLadder" /* 1452 */;
import _modDef1491 from "module_1491" /* 1491 */;
import useWindowDimensions from "useWindowDimensions" /* 1497 */;
import react_nativeDefault from "react-native" /* 1898 */;
import react_nativeDefault2 from "react-native" /* 1899 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size_mod from "module_2" /* 2 */;

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
  let obj = _modDef1491;
  items[1] = obj.parse(tmp2);
  let tmp5 = _slicedToArray(items, 2);
  [tmp6, tmp7] = tmp5;
  if (re7.test(tmp6)) {
    tmp7.format = "webp";
  } else if (null != format) {
    tmp7.format = format;
  }
  if (targetWidth > closure_5) {
    targetWidth = tmp9;
  }
  if (targetHeight > closure_5) {
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
    _modDef1491;
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
  if (re6.test(proxy_url)) {
    num = 0.3;
  }
  const obj = useWindowDimensions;
  size = obj.getWindowDimensions();
  const result = PixelRatio.getPixelSizeForLayoutSize(size.width) * num;
  const bound = Math.min(c7 > c72 ? result / c7 : PixelRatio.getPixelSizeForLayoutSize(size.height / 2) * num / c72, 1);
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
  const obj = AvatarUtils;
  const ensureAvatarSourceResult = ensureAvatarSource(obj.makeSource(src));
  const obj2 = react_nativeDefault2;
  return obj2.getDominantColors(ensureAvatarSourceResult);
}
const PixelRatio = react_native.PixelRatio;
let closure_5 = Constants.MEDIA_PROXY_MAX_TARGET_RESOLUTION;
let tmp2 = /\.(gif)$/i;
const re6 = tmp2;
const tmp3 = /\.(avif)$/i;
const re7 = tmp3;
let size = size_mod;
let result = size.fileFinishedImporting("utils/native/ImageUtils.tsx");

export default { getMobileOptimizedSrc, getPaletteForAvatarMobile };
export const GIF_RE = tmp2;
export const AVIF_RE = tmp3;
export { getSrcWithWidthAndHeight };
export { getMobileOptimizedSrc };
export { getPaletteForAvatarMobile };
