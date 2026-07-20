// Module ID: 1449
// Function ID: 16921
// Name: clampDimension
// Dependencies: []
// Exports: getMobileOptimizedSrc, getPaletteForAvatarMobile

// Module 1449 (clampDimension)
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
  let obj = importDefault(dependencyMap[5]);
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
      if (true === arg1(dependencyMap[3]).getAttachmentImageLadderConfig(obj).enabled) {
        let tmp10 = arg1;
        let tmp11 = dependencyMap;
        let num2 = 6;
        let obj3 = arg1(dependencyMap[6]);
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
    text = `${tmp3}?${importDefault(dependencyMap[5]).stringify(tmp4)}`;
    const obj6 = importDefault(dependencyMap[5]);
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
  let obj = width(dependencyMap[4]);
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
  const obj = arg1(dependencyMap[8]);
  const ImageManager = ImageManager.ImageManager;
  return ImageManager.getDominantColors(obj.ensureAvatarSource(arg1(dependencyMap[9]).makeSource(emojiURL)));
}
let closure_3 = importDefault(dependencyMap[0]);
({ NativeModules: closure_4, PixelRatio: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = arg1(dependencyMap[2]).MEDIA_PROXY_MAX_TARGET_RESOLUTION;
const tmp3 = /\.(gif)$/i;
const tmp4 = /\.(avif)$/i;
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("utils/native/ImageUtils.tsx");

export default { getMobileOptimizedSrc, getPaletteForAvatarMobile };
export const GIF_RE = tmp3;
export const AVIF_RE = tmp4;
export { getSrcWithWidthAndHeight };
export { getMobileOptimizedSrc };
export { getPaletteForAvatarMobile };
