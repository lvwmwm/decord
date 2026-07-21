// Module ID: 4711
// Function ID: 40957
// Name: _shouldConvertToWebP
// Dependencies: []
// Exports: maybeConvertToWebP

// Module 4711 (_shouldConvertToWebP)
function _shouldConvertToWebP() {
  return _shouldConvertToWebP2(...arguments);
}
async function _shouldConvertToWebP2(type, arg1) {
  let obj = type;
  if ("image/webp" === type.type) {
    closure_4.verbose("[WebP] File already WebP format");
    return closure_5.ALREADY_WEBP;
  } else {
    const items = [];
    if (items.includes(obj.type)) {
      if ("function" === typeof obj.arrayBuffer) {
        const tmp15 = yield obj.arrayBuffer();
        const DiscordImageFactory = type(closure_2[2]).DiscordImageFactory;
        obj = DiscordImageFactory.create(tmp15);
        if (null == obj) {
          const _Error = Error;
          const error = new Error("DiscordImage.create returned null");
          throw error;
        } else if (obj2.hasTransparency()) {
          closure_4.verbose("[webp] png uses actual transparency - skipping conversion");
          return closure_5.HAS_TRANSPARENCY;
        } else if (obj2.isAnimated()) {
          closure_4.verbose("[webp] png is animated (apng) - skipping conversion");
          return closure_5.ANIMATED_IMAGE;
        } else if (obj2.isPng8()) {
          closure_4.verbose("[webp] png is PNG8 format (indexed color) - skipping conversion");
          return closure_5.PNG8_FORMAT;
        } else if (yield obj2.hasSrgbIccProfile()) {
          return null;
        } else {
          return closure_5.ICC_NON_SRGB_PROFILE;
        }
        const tmp16 = tmp15;
      } else {
        const promise = new Promise((data) => {
          const fileReader = new FileReader();
          fileReader.onload = () => arg0(fileReader.result);
          fileReader.onerror = () => {
            const error = new Error("Failed to read file as ArrayBuffer");
            return arg1(error);
          };
          const asArrayBuffer = fileReader.readAsArrayBuffer(data);
        });
        const tmp11 = yield promise;
        return tmp11;
      }
    } else {
      const _HermesInternal = HermesInternal;
      closure_4.verbose("[WebP] Unsupported format: " + obj.type);
      return closure_5.UNSUPPORTED_FORMAT;
    }
  }
}
function hashImageData(data) {
  const uint8Array = new Uint8Array(data.data.buffer);
  return importDefault(dependencyMap[3])(uint8Array).toString(16);
}
async function _performWebPConversion(name, arg1) {
  let height;
  let width;
  let size;
  let image;
  let objectURL;
  let image1;
  objectURL = undefined;
  size = <canvas />;
  const size2 = size;
  const context = size.getContext("2d");
  let obj = context;
  if (null == context) {
    const _Error2 = Error;
    const error = new Error("could not get canvas context");
    throw error;
  } else {
    const prototype6 = globalThis.Image.prototype;
    image = new globalThis.Image();
    const _URL4 = URL;
    objectURL = URL.createObjectURL(name);
    yield new Promise((arg0, arg1) => {
      const size = arg0;
      const image = arg1;
      image.onload = () => arg0();
      image.onerror = () => {
        const error = new Error("failed to load image");
        return arg1(error);
      };
      image.src = objectURL;
    });
    ({ width: size2.width, height: size2.height } = image);
    obj.drawImage(image, 0, 0);
    const _URL = URL;
    URL.revokeObjectURL(objectURL);
    const tmp10 = yield new Promise((arg0) => {
      size.toBlob(arg0, "image/webp", 1);
    });
    if (null == tmp10) {
      const _Error = Error;
      const error1 = new Error("failed to convert to webp");
      throw error1;
    } else {
      const _performance2 = performance;
      const tmp75 = yield obj.getImageData(0, 0, size2.width, size2.height);
      obj.clearRect(0, 0, size2.width, size2.height);
      const prototype2 = globalThis.Image.prototype;
      image1 = new globalThis.Image();
      const _URL2 = URL;
      objectURL = URL.createObjectURL(tmp11);
      yield new Promise((arg0, arg1) => {
        const size = arg0;
        const image = arg1;
        image1.onload = () => arg0();
        image1.onerror = () => {
          const error = new Error("failed to load image");
          return arg1(error);
        };
        image1.src = objectURL;
      });
      obj.drawImage(image1, 0, 0);
      const _URL3 = URL;
      URL.revokeObjectURL(objectURL);
      const nowResult = performance.now();
      const tmp21 = image1;
      const tmp24 = objectURL;
      const tmp37 = callback(tmp75);
      const tmp38 = callback(yield obj.getImageData(0, 0, size.width, size.height));
      const _performance = performance;
      const diff = performance.now() - nowResult;
      name = name.name;
      const _Math = Math;
      ({ width, height } = image1);
      const _HermesInternal = HermesInternal;
      objectURL.verbose("[WebP] Pixel hash results: fileName=" + name + " fileLength={" + name.size + "} width=" + width + " height=" + height + " pixelHash=" + tmp37 + " mezzanineFileLength={" + tmp11.size + "} mezzaninePixelHash=" + tmp38 + " match=" + tmp37 === tmp38 + " elapsed_ms=" + Math.round(diff));
      obj = {};
      if (tmp37 === tmp38) {
        obj.success = true;
        obj.webpBlob = tmp10;
        obj.pixelHashTimeMs = diff;
        let tmp51 = obj;
      } else {
        obj.success = false;
        obj.reason = constants.PIXEL_HASH_MISMATCH;
        obj.pixelHashTimeMs = diff;
        tmp51 = obj;
      }
      return tmp51;
    }
    const tmp63 = image;
    const tmp67 = objectURL;
  }
}
async function _maybeConvertToWebP(arg0, arg1) {
  let nowResult;
  function createFailedResult(INSUFFICIENT_SAVINGS, size) {
    if (size === undefined) {
      size = INSUFFICIENT_SAVINGS.size;
    }
    const obj = { success: false, originalFile: INSUFFICIENT_SAVINGS, sizeBefore: INSUFFICIENT_SAVINGS.size, sizeAfter: size };
    let num = 1;
    if (INSUFFICIENT_SAVINGS.size > 0) {
      num = size / INSUFFICIENT_SAVINGS.size;
    }
    obj.compressionRatio = num;
    obj.reason = INSUFFICIENT_SAVINGS;
    obj.compressTimeMs = Math.round(performance.now() - nowResult);
    return obj;
  }
  if (null == arg0) {
    const _Error = Error;
    const error = new Error("file is null or undefined");
    throw error;
  } else {
    const _HermesInternal3 = HermesInternal;
    closure_4.verbose("[WebP] Starting conversion for: " + tmp.name);
    const _performance = performance;
    nowResult = performance.now();
    const tmp36 = yield closure_6(tmp);
    if (null != tmp36) {
      const _HermesInternal2 = HermesInternal;
      closure_4.verbose("[WebP] Conversion rejected: " + tmp2);
      return createFailedResult(tmp2);
    } else {
      const tmp38 = yield function performWebPConversion(arg0) {
        return callback(...arguments);
      }(tmp);
      if (tmp38.success) {
        if (null != tmp3.webpBlob) {
          const webpBlob = tmp3.webpBlob;
          let num = 1;
          if (tmp.size > 0) {
            num = webpBlob.size / tmp.size;
          }
          const diff = 1 - num;
          if (diff < 0) {
            const _Math = Math;
            const _HermesInternal = HermesInternal;
            closure_4.verbose("[WebP] Insufficient savings: " + Math.round(100 * tmp9) + "% < 0% (" + tmp.size + " -> " + webpBlob.size + " bytes)");
            let failedResult = createFailedResult(constants.INSUFFICIENT_SAVINGS, webpBlob.size);
          } else {
            const _performance2 = performance;
            const diff1 = performance.now() - nowResult;
            const name = tmp.name;
            const _Math2 = Math;
            const _HermesInternal4 = HermesInternal;
            closure_4.verbose("[WebP] Conversion successful: " + name + " to WebP in " + Math.round(diff1) + "ms");
            failedResult = { success: true, originalFile: tmp, convertedBlob: webpBlob, sizeBefore: tmp.size, sizeAfter: webpBlob.size, compressionRatio: num, hashTimeMs: tmp3.pixelHashTimeMs };
            const _Math3 = Math;
            failedResult.compressTimeMs = Math.round(diff1);
          }
          return failedResult;
        }
      }
      const reason = tmp38.reason;
      if (null != reason) {
        let UNKNOWN_ERROR = reason;
      } else {
        UNKNOWN_ERROR = constants.UNKNOWN_ERROR;
      }
      return createFailedResult(UNKNOWN_ERROR);
    }
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let importDefaultResult = importDefault(dependencyMap[1]);
importDefaultResult = new importDefaultResult("WebP");
const obj = { ALREADY_WEBP: "already_webp", UNSUPPORTED_FORMAT: "unsupported_format", ANIMATED_IMAGE: "animated_image", HAS_TRANSPARENCY: "has_transparency", PNG8_FORMAT: "png8_format", INSUFFICIENT_SAVINGS: "insufficient_savings", CONVERSION_FAILED: "conversion_failed", CORRUPTED_FILE: "corrupted_file", PIXEL_HASH_MISMATCH: "pixel_hash_mismatch", ICC_NON_SRGB_PROFILE: "icc_non_srgb_profile", ICC_DETECTION_FAILED: "icc_detection_failed", UNKNOWN_ERROR: "unknown_error" };
const result = arg1(dependencyMap[4]).fileFinishedImporting("lib/uploader/webpConversion.tsx");

export const ConversionFailureReason = obj;
export { _shouldConvertToWebP };
export const maybeConvertToWebP = function maybeConvertToWebP(size) {
  return _maybeConvertToWebP(...arguments);
};
