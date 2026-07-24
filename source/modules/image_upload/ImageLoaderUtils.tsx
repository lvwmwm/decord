// Module ID: 1426
// Function ID: 16679
// Name: isAttachmentLadderEnabled
// Dependencies: [57, 5, 653, 1427, 1362, 561, 1430, 1440, 1443, 1447, 1824, 22, 1825, 2]
// Exports: getBestMediaProxySize, getImageSrc, getSizedImageSrc, isImageLoaded, loadImage

// Module 1426 (isAttachmentLadderEnabled)
import _slicedToArray from "_slicedToArray";
import Backoff from "Backoff";
import ME from "ME";
import importDefaultResult from "priv";

let closure_5;
let closure_6;
const require = arg1;
function isAttachmentLadderEnabled(location) {
  return true === require(1427) /* apexExperiment */.getAttachmentImageLadderConfig({ location }).enabled;
}
function loadImageAsset(url) {
  let closure_0 = url;
  const image = new globalThis.Image();
  image.onerror = (function getOnError(backoff, image) {
    let closure_0 = backoff;
    let closure_1 = image;
    if (null == backoff.backoff) {
      let tmp3 = image(outer1_2[5]);
      const prototype = tmp3.prototype;
      tmp3 = new tmp3();
      backoff.backoff = tmp3;
    }
    backoff = backoff.backoff;
    return outer1_4(async () => {
      yield image(outer3_2[6]).isOnline();
      if (outer1_2.fails < 5) {
        outer1_2.fail(() => {
          outer4_12(outer2_0);
        });
      } else {
        outer3_13(true, outer1_0, outer1_1);
      }
    });
  })(url, image);
  image.onload = () => {
    const backoff = url.backoff;
    if (null != backoff) {
      backoff.succeed();
    }
    outer1_13(false, url, image);
  };
  image.src = url.url;
}
function handleImageLoad(arg0, arg1, arg2) {
  let callbacks;
  let url;
  let closure_0 = arg0;
  let obj = arg1;
  ({ callbacks, url } = arg1);
  if (arg0) {
    importDefaultResult.del(url);
  } else {
    obj = { url, loaded: true };
    ({ width: obj.width, height: obj.height } = arg2);
    const result = importDefaultResult.set(url, obj);
  }
  if (null != callbacks) {
    const item = callbacks.forEach((arg0) => arg0(closure_0, obj));
  }
}
function splitURL(src) {
  const tmp = callback(src.split("?"), 2);
  const items = [tmp[0], importDefault(1440).parse(tmp[1])];
  return items;
}
function getSrcWithWidthAndHeight(quality) {
  let format;
  let height;
  let sourceHeight;
  let sourceWidth;
  let src;
  let targetHeight;
  let targetWidth;
  let width;
  ({ src, sourceWidth, sourceHeight, format } = quality);
  ({ targetWidth, targetHeight } = quality);
  if (format === undefined) {
    format = null;
  }
  quality = quality.quality;
  if (quality === undefined) {
    quality = null;
  }
  let flag = quality.animated;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = quality.srcIsAnimated;
  if (flag2 === undefined) {
    flag2 = false;
  }
  if (!src.startsWith("data:image")) {
    let obj = importDefault(1443);
    if (!obj.isDiscordCdnUrl(src)) {
      const tmp6 = callback(splitURL(src), 2);
      const first = tmp6[0];
      if (null != format) {
        tmp8.format = format;
      }
      if (null != quality) {
        tmp8.quality = quality;
      }
      if (flag) {
        flag = flag2;
      }
      if (flag) {
        let isMatch = regex.test(src);
        if (!isMatch) {
          isMatch = regex2.test(src);
        }
        flag = isMatch;
      }
      if (flag) {
        tmp8.animated = true;
      }
      if (regex2.test(src)) {
        tmp8.format = "webp";
      }
      obj = { width: targetWidth, height: targetHeight, maxWidth: closure_6, maxHeight: closure_6 };
      const obj2 = require(1447) /* fit */;
      ({ width, height } = require(1447) /* fit */.fit(obj));
      if (width !== sourceWidth) {
        if (isAttachmentLadderEnabled("ImageLoaderUtils.getSrcWithWidthAndHeight")) {
          obj = { targetWidth: width, targetHeight: height, sourceWidth, sourceHeight, maxUpscale: 1.1 };
          let size = require(1824) /* _createForOfIteratorHelperLoose */.snapAttachmentDimensions(obj);
          const obj4 = require(1824) /* _createForOfIteratorHelperLoose */;
        } else {
          size = { width, height };
        }
        if (!tmp22) {
          tmp8.width = size.width | 0;
          tmp8.height = size.height | 0;
        }
        tmp22 = size.width === sourceWidth && size.height === sourceHeight;
      }
      const fitResult = require(1447) /* fit */.fit(obj);
      let text = first;
      if (!obj6.isEmpty(tmp6[1])) {
        text = `${tmp7}?${importDefault(1440).stringify(tmp8)}`;
        const obj7 = importDefault(1440);
      }
      return text;
    }
  }
  return src;
}
({ NOOP: closure_5, MEDIA_PROXY_MAX_TARGET_RESOLUTION: closure_6 } = ME);
const re7 = /\.webp($|\?|#)/i;
const re8 = /\.avif($|\?|#)/i;
let closure_9 = [16, 20, 22, 24, 28, 32, 40, 44, 48, 56, 60, 64, 80, 96, 100, 128, 160, 240, 256, 300, 320, 480, 512, 600, 640, 1024, 1280, 1536, 2048, 3072, 4096];
importDefaultResult = new importDefaultResult({ max: 1000 });
let result = require("ME").fileFinishedImporting("modules/image_upload/ImageLoaderUtils.tsx");

export const getDevicePixelRatio = require("getDevicePixelRatio");
export const ATTACHMENT_LADDER = require("_createForOfIteratorHelperLoose").ATTACHMENT_LADDER;
export const snapAttachmentDimensions = require("_createForOfIteratorHelperLoose").snapAttachmentDimensions;
export const isImageLoaded = function isImageLoaded(arg0) {
  const value = importDefaultResult.get(arg0);
  return null != value && value.loaded;
};
export const loadImage = function loadImage(url, bind) {
  let closure_0 = url;
  let value = importDefaultResult.get(url);
  let obj = value;
  if (null != value) {
    if (value.loaded) {
      if (null != bind) {
        const obj2 = importDefault(obj[6]);
        importDefault(obj[6]).awaitOnline().then(() => {
          let tmp = null != obj;
          if (tmp) {
            tmp = null != obj.callbacks;
          }
          if (tmp) {
            const callbacks = obj.callbacks;
            const item = callbacks.forEach((arg0) => {
              if (null != outer1_2) {
                arg0(false, outer1_2);
              } else {
                const obj = { url: outer1_0, loaded: true };
                arg0(true, obj);
              }
            });
          }
        });
        const awaitOnlineResult = importDefault(obj[6]).awaitOnline();
      }
      let fn = closure_5;
    }
    return fn;
  }
  if (null == value) {
    obj = { url, loaded: false };
    const result = importDefaultResult.set(url, obj);
    loadImageAsset(obj);
    value = obj;
  }
  if (null != bind) {
    const bindResult = bind.bind(null);
    importDefault = bindResult;
    if (null == value.callbacks) {
      const _Set = Set;
      const set = new Set();
      value.callbacks = set;
    }
    let callbacks = value.callbacks;
    callbacks.add(bindResult);
  }
  fn = () => {
    let tmp = null != closure_1;
    if (tmp) {
      tmp = null != obj;
    }
    if (tmp) {
      if (null != obj.callbacks) {
        const callbacks = obj.callbacks;
        callbacks.delete(closure_1);
      }
      if (null != obj.backoff) {
        const backoff = obj.backoff;
        backoff.cancel();
      }
    }
  };
};
export const getBestMediaProxySize = function getBestMediaProxySize(size, set) {
  let flag = set;
  let closure_0 = size;
  if (set === undefined) {
    flag = false;
  }
  if (flag) {
    const found = closure_9.filter((arg0) => arg0 <= closure_0);
    const arr = found.pop();
    if (null != arr) {
      if (size / arr <= 1.25) {
        return arr;
      }
    }
  }
  let found1 = closure_9.find((arg0) => closure_0 <= arg0);
  if (null == found1) {
    found1 = closure_9[closure_9.length - 1];
  }
  return found1;
};
export { getSrcWithWidthAndHeight };
export const getSizedImageSrc = function getSizedImageSrc(src) {
  let height;
  let tmp8;
  let tmp9;
  let width;
  let str = arg3;
  if (arg3 === undefined) {
    str = "webp";
  }
  const tmp = importDefault(1825)();
  const rounded = Math.ceil(arg1 * tmp);
  const rounded1 = Math.ceil(arg2 * tmp);
  width = rounded;
  height = rounded1;
  if (isAttachmentLadderEnabled("ImageLoaderUtils.getSizedImageSrc")) {
    let obj = require(1824) /* _createForOfIteratorHelperLoose */;
    obj = { targetWidth: rounded, targetHeight: rounded1 };
    const result = obj.snapAttachmentDimensions(obj);
    ({ width, height } = result);
  }
  [tmp8, tmp9] = callback(splitURL(src), 2);
  const tmp7 = callback(splitURL(src), 2);
  obj = {};
  const merged = Object.assign(tmp9);
  obj["width"] = width | 0;
  obj["height"] = height | 0;
  obj["format"] = str;
  return "" + tmp8 + "?" + importDefault(1440).stringify(obj);
};
export const getImageSrc = function getImageSrc(format) {
  let height;
  let maxHeight;
  let maxWidth;
  let ratio;
  let width;
  ({ width, height, maxWidth, maxHeight, ratio } = format);
  if (ratio === undefined) {
    ratio = 1;
  }
  format = format.format;
  if (format === undefined) {
    format = null;
  }
  let quality = format.quality;
  if (quality === undefined) {
    quality = null;
  }
  let flag = format.animated;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = format.srcIsAnimated;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let rounded = width;
  let rounded1 = height;
  if (ratio < 1) {
    const _Math = Math;
    rounded = Math.round(width * ratio);
    const _Math2 = Math;
    rounded1 = Math.round(height * ratio);
  }
  let bound = rounded;
  if (null != maxWidth) {
    const _Math3 = Math;
    bound = Math.min(rounded, maxWidth);
  }
  let bound1 = rounded1;
  if (null != maxHeight) {
    const _Math4 = Math;
    bound1 = Math.min(rounded1, maxHeight);
  }
  const tmp10 = importDefault(1825)();
  const obj = { src: format.src, sourceWidth: width, sourceHeight: height, targetWidth: bound * tmp10, targetHeight: bound1 * tmp10, format, quality, animated: flag, srcIsAnimated: flag2 };
  return getSrcWithWidthAndHeight(obj);
};
