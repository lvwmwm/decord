// Module ID: 1481
// Function ID: 1482
// Name: utils/ImageUtils
// Dependencies: [32, 17, 1078, 1436, 1482, 1476, 1437, 1883, 12, 1404, 1401, 2]
// Exports: getMobileOptimizedSrc, getPaletteForAvatarMobile

// Module 1481 (utils/ImageUtils)
import AvatarUtils from "AvatarUtils" /* 1401 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1404 */;
import AttachmentImageLadderExperiment from "AttachmentImageLadderExperiment" /* 1436 */;
import AttachmentImageLadder from "AttachmentImageLadder" /* 1437 */;
import _modDef1476 from "module_1476" /* 1476 */;
import useWindowDimensions from "useWindowDimensions" /* 1482 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
function getSrcWithWidthAndHeight(animated) {
  ({ src, sourceWidth, sourceHeight, targetWidth, targetHeight, format } = animated);
  if (format === undefined) {
    format = null;
  }
  let flag = animated.animated;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = _slicedToArray(src.split("?"), 2);
  const items = [tmp[0], _modDef1476.parse(tmp[1])];
  [tmp5, tmp6] = items;
  if (re8.test(tmp5)) {
    tmp6.format = "webp";
  } else if (null != format) {
    tmp6.format = format;
  }
  if (targetWidth > closure_6) {
    targetWidth = tmp8;
  }
  if (targetHeight > closure_6) {
    targetHeight = tmp8;
  }
  if (targetWidth !== sourceWidth) {
    const tmp9 = (function getAttachmentLadderConfig(arg0) {
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
    })("native/ImageUtils.getSrcWithWidthAndHeight");
    let size = { width: targetWidth, height: targetHeight };
    if (null != tmp9) {
      const obj3 = { targetWidth, targetHeight, sourceWidth, sourceHeight, maxUpscale: null };
      const obj2 = AttachmentImageLadder;
      obj3.maxUpscale = AttachmentImageLadder.getSnapDownMaxUpscale(tmp9, tmp2(1883)());
      size = obj2.snapAttachmentDimensions(obj3);
    }
    if (!tmp12) {
      tmp6.width = size.width | 0;
      tmp6.height = size.height | 0;
    }
    tmp12 = size.width === sourceWidth && size.height === sourceHeight;
  }
  if (flag) {
    tmp6.animated = true;
  }
  const tmp4 = _slicedToArray(items, 2);
  let text = tmp5;
  if (!tmp2Result.isEmpty(tmp6)) {
    tmp2(1476);
    text = `${tmp5}?${obj6.stringify(tmp6)}`;
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
  const size = useWindowDimensions.getWindowDimensions();
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
  return getSrcWithWidthAndHeight({ src: proxy_url, sourceWidth: c7, sourceHeight: c72, targetWidth: rounded, targetHeight: rounded1, format: tmp });
}
function getPaletteForAvatarMobile(src) {
  const obj = utils_AvatarUtils;
  ImageManager = ImageManager.ImageManager;
  return ImageManager.getDominantColors(obj.ensureAvatarSource(AvatarUtils.makeSource(src)));
}
get_ActivityIndicator = fn(17);
({ NativeModules: closure_4, PixelRatio: hasOwnProperty } = get_ActivityIndicator);
let closure_6 = fn(1078).MEDIA_PROXY_MAX_TARGET_RESOLUTION;
const tmp3 = /\.(gif)$/i;
const re7 = tmp3;
let tmp4 = /\.(avif)$/i;
const re8 = tmp4;
let size = fn(2);
let result = size.fileFinishedImporting("utils/native/ImageUtils.tsx");

export default { getMobileOptimizedSrc, getPaletteForAvatarMobile };
export const GIF_RE = tmp3;
export const AVIF_RE = tmp4;
export { getSrcWithWidthAndHeight };
export { getMobileOptimizedSrc };
export { getPaletteForAvatarMobile };
