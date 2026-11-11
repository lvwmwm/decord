// Module ID: 1492
// Function ID: 1493
// Name: utils/ImageUtils
// Dependencies: [32, 17, 1072, 1447, 1493, 1487, 1448, 2021, 12, 1414, 1411, 2022, 2]
// Exports: getMobileOptimizedSrc, getPaletteForAvatarMobile

// Module 1492 (utils/ImageUtils)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import AvatarUtils from "AvatarUtils" /* 1411 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1414 */;
import AttachmentImageLadderExperiment from "AttachmentImageLadderExperiment" /* 1447 */;
import AttachmentImageLadder from "AttachmentImageLadder" /* 1448 */;
import _modDef1487 from "module_1487" /* 1487 */;
import useWindowDimensions from "useWindowDimensions" /* 1493 */;
import react_nativeDefault from "react-native" /* 2021 */;
import react_nativeDefault2 from "react-native" /* 2022 */;
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
  let tmp2;
  let tmp3;
  let tmp8;
  let tmp9;
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
  let tmp5 = dependencyMap;
  [tmp2, tmp3] = _slicedToArray(src.split("?"), 2);
  const tmp = _slicedToArray(src.split("?"), 2);
  let obj = _modDef1487;
  const parsed = obj.parse(tmp3);
  delete tmp6[""];
  const items = [tmp2, parsed];
  [tmp8, tmp9] = items;
  _slicedToArray(items, 2);
  if (re7.test(tmp8)) {
    tmp9.format = "webp";
  } else if (null != format) {
    tmp9.format = format;
  }
  if (targetWidth > closure_5) {
    targetWidth = tmp11;
  }
  if (targetHeight > closure_5) {
    targetHeight = tmp11;
  }
  if (targetWidth !== sourceWidth) {
    const tmp12 = getAttachmentLadderConfig("native/ImageUtils.getSrcWithWidthAndHeight");
    size = { width: targetWidth, height: targetHeight };
    if (null != tmp12) {
      const obj2 = { targetWidth, targetHeight, sourceWidth, sourceHeight, maxUpscale: obj3.getSnapDownMaxUpscale(tmp12, react_nativeDefault()), ladder: tmp12.ladder };
      const snapAttachmentDimensions = AttachmentImageLadder.snapAttachmentDimensions;
      AttachmentImageLadder;
      obj3 = AttachmentImageLadder;
      size = snapAttachmentDimensions(obj2);
    }
    const tmp16 = size.width === sourceWidth && size.height === sourceHeight;
    if (!tmp16) {
      tmp9.width = size.width | 0;
      tmp9.height = size.height | 0;
    }
  }
  if (flag) {
    tmp9.animated = true;
  }
  let text = tmp8;
  const tmp4Result = _modDef12;
  if (!tmp4Result.isEmpty(tmp9)) {
    _modDef1487;
    text = `${tmp8}?${obj5.stringify(tmp9)}`;
  }
  return text;
}
function getMobileOptimizedSrc(proxy_url, width, height, png) {
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
  const bound = Math.min(width > height ? result / width : PixelRatio.getPixelSizeForLayoutSize(size.height / 2) * num / height, 1);
  let rounded1 = height;
  let rounded = width;
  if (bound < 1) {
    const _Math = Math;
    rounded = Math.ceil(width * bound);
    const _Math2 = Math;
    rounded1 = Math.ceil(height * bound);
  }
  const obj2 = { src: proxy_url, sourceWidth: width, sourceHeight: height, targetWidth: rounded, targetHeight: rounded1, format: tmp };
  return getSrcWithWidthAndHeight(obj2);
}
function getPaletteForAvatarMobile(automodAvatarURL) {
  const ensureAvatarSource = utils_AvatarUtils.ensureAvatarSource;
  utils_AvatarUtils;
  const obj = AvatarUtils;
  const ensureAvatarSourceResult = ensureAvatarSource(obj.makeSource(automodAvatarURL));
  const obj2 = react_nativeDefault2;
  return obj2.getDominantColors(ensureAvatarSourceResult);
}
const PixelRatio = react_native.PixelRatio;
let closure_5 = Constants.MEDIA_PROXY_MAX_TARGET_RESOLUTION;
const tmp2 = /\.(gif)$/i;
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
