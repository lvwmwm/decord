// Module ID: 1426
// Function ID: 16672
// Name: isAttachmentLadderEnabled
// Dependencies: []
// Exports: getBestMediaProxySize, getImageSrc, getSizedImageSrc, isImageLoaded, loadImage

// Module 1426 (isAttachmentLadderEnabled)
function isAttachmentLadderEnabled(location) {
  return true === arg1(dependencyMap[3]).getAttachmentImageLadderConfig({ location }).enabled;
}
function loadImageAsset(url) {
  const arg1 = url;
  const image = new globalThis.Image();
  const importDefault = image;
  image.onerror = function getOnError(backoff, image) {
    if (null == backoff.backoff) {
      let tmp3 = image(backoff[5]);
      const prototype = tmp3.prototype;
      tmp3 = new tmp3();
      backoff.backoff = tmp3;
    }
    backoff = backoff.backoff;
    return callback(async () => {
      yield callback(closure_2[6]).isOnline();
      if (closure_2.fails < 5) {
        closure_2.fail(() => {
          callback(closure_0);
        });
      } else {
        callback2(true, closure_0, callback);
      }
    });
  }(url, image);
  image.onload = () => {
    const backoff = arg0.backoff;
    if (null != backoff) {
      backoff.succeed();
    }
    callback2(false, arg0, image);
  };
  image.src = url.url;
}
function handleImageLoad(arg0, arg1, arg2) {
  let callbacks;
  let url;
  arg1 = arg0;
  let importDefault = arg1;
  ({ callbacks, url } = arg1);
  if (arg0) {
    importDefaultResult.del(url);
  } else {
    const obj = { url, loaded: true };
    ({ width: obj.width, height: obj.height } = arg2);
    importDefault = obj;
    const result = importDefaultResult.set(url, obj);
  }
  if (null != callbacks) {
    const item = callbacks.forEach((arg0) => arg0(arg0, obj));
  }
}
function splitURL(src) {
  const tmp = callback(src.split("?"), 2);
  const items = [tmp[0], importDefault(dependencyMap[7]).parse(tmp[1])];
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
    let obj = importDefault(dependencyMap[8]);
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
      const obj2 = arg1(dependencyMap[9]);
      ({ width, height } = arg1(dependencyMap[9]).fit(obj));
      if (width !== sourceWidth) {
        if (isAttachmentLadderEnabled("ImageLoaderUtils.getSrcWithWidthAndHeight")) {
          obj = { targetWidth: width, targetHeight: height, sourceWidth, sourceHeight, maxUpscale: 1.1 };
          let size = arg1(dependencyMap[10]).snapAttachmentDimensions(obj);
          const obj4 = arg1(dependencyMap[10]);
        } else {
          size = { width, height };
        }
        if (!tmp22) {
          tmp8.width = size.width | 0;
          tmp8.height = size.height | 0;
        }
        const tmp22 = size.width === sourceWidth && size.height === sourceHeight;
      }
      const fitResult = arg1(dependencyMap[9]).fit(obj);
      let text = first;
      if (!obj6.isEmpty(tmp6[1])) {
        text = `${tmp7}?${importDefault(dependencyMap[7]).stringify(tmp8)}`;
        const obj7 = importDefault(dependencyMap[7]);
      }
      return text;
    }
  }
  return src;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ NOOP: closure_5, MEDIA_PROXY_MAX_TARGET_RESOLUTION: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = /\.webp($|\?|#)/i;
let closure_8 = /\.avif($|\?|#)/i;
let closure_9 = [0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007580800221623744, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007878611496468766, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000032767259097001853, 92500279190609380000000000000000000000000000000000000000000000000000000000000000000, 15188496700585637000000000000000000000000000000000000000000000000000000000000000000, 131130.96496906897, -552240133217517200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000013673225648914002, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003190914560313445, 95799687305839330000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022223298294488853, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000340379524931868, 76483870968582430000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005785266185124823, "REGISTER_SUCCESS", "<string:3506438407>", "<string:2264924645>", "<string:1442841171>", "<string:1628522630>", "<string:3851116819>", "<string:2169681977>", "<string:1834051937>", "<string:3114090973>", "<string:3881893892>", "<string:1653860433>", "<string:1817340391>", "<string:1359513863>", "<string:3931179260>", "<string:149574152>", 1683753809, -687746047];
let importDefaultResult = importDefault(dependencyMap[4]);
importDefaultResult = new importDefaultResult({ max: 1000 });
const obj = { max: 1000 };
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/image_upload/ImageLoaderUtils.tsx");

export const getDevicePixelRatio = importDefault(dependencyMap[12]);
export const ATTACHMENT_LADDER = arg1(dependencyMap[10]).ATTACHMENT_LADDER;
export const snapAttachmentDimensions = arg1(dependencyMap[10]).snapAttachmentDimensions;
export const isImageLoaded = function isImageLoaded(arg0) {
  const value = importDefaultResult.get(arg0);
  return null != value && value.loaded;
};
export const loadImage = function loadImage(url, bind) {
  bind = url;
  let value = importDefaultResult.get(url);
  let dependencyMap = value;
  if (null != value) {
    if (value.loaded) {
      if (null != bind) {
        const obj2 = importDefault(dependencyMap[6]);
        importDefault(dependencyMap[6]).awaitOnline().then(() => {
          let tmp = null != obj;
          if (tmp) {
            tmp = null != obj.callbacks;
          }
          if (tmp) {
            const callbacks = obj.callbacks;
            const item = callbacks.forEach((arg0) => {
              if (null != closure_2) {
                arg0(false, closure_2);
              } else {
                const obj = { url: closure_0, loaded: true };
                arg0(true, obj);
              }
            });
          }
        });
        const awaitOnlineResult = importDefault(dependencyMap[6]).awaitOnline();
      }
      let fn = closure_5;
    }
    return fn;
  }
  if (null == value) {
    const obj = { url, loaded: false };
    dependencyMap = obj;
    const result = importDefaultResult.set(url, obj);
    loadImageAsset(obj);
    value = obj;
  }
  if (null != bind) {
    const bindResult = bind.bind(null);
    const importDefault = bindResult;
    if (null == value.callbacks) {
      const _Set = Set;
      const set = new Set();
      value.callbacks = set;
    }
    const callbacks = value.callbacks;
    callbacks.add(bindResult);
  }
  fn = () => {
    let tmp = null != bindResult;
    if (tmp) {
      tmp = null != obj;
    }
    if (tmp) {
      if (null != obj.callbacks) {
        const callbacks = obj.callbacks;
        callbacks.delete(bindResult);
      }
      if (null != obj.backoff) {
        const backoff = obj.backoff;
        backoff.cancel();
      }
    }
  };
};
export const getBestMediaProxySize = function getBestMediaProxySize(size, closure_12) {
  let flag = closure_12;
  closure_12 = size;
  if (closure_12 === undefined) {
    flag = false;
  }
  if (flag) {
    const found = closure_9.filter((arg0) => arg0 <= arg0);
    const arr = found.pop();
    if (null != arr) {
      if (size / arr <= 1.25) {
        return arr;
      }
    }
  }
  let found1 = closure_9.find((arg0) => arg0 <= arg0);
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
  const tmp = importDefault(dependencyMap[12])();
  const rounded = Math.ceil(arg1 * tmp);
  const rounded1 = Math.ceil(arg2 * tmp);
  width = rounded;
  height = rounded1;
  if (isAttachmentLadderEnabled("ImageLoaderUtils.getSizedImageSrc")) {
    let obj = arg1(dependencyMap[10]);
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
  return "" + tmp8 + "?" + importDefault(dependencyMap[7]).stringify(obj);
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
  const tmp10 = importDefault(dependencyMap[12])();
  const obj = { src: format.src, sourceWidth: width, sourceHeight: height, targetWidth: bound * tmp10, targetHeight: bound1 * tmp10, format, quality, animated: flag, srcIsAnimated: flag2 };
  return getSrcWithWidthAndHeight(obj);
};
