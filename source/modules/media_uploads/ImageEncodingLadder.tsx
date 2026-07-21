// Module ID: 4697
// Function ID: 40893
// Name: getAdaptiveImageCompressionQuality
// Dependencies: []

// Module 4697 (getAdaptiveImageCompressionQuality)
function getAdaptiveImageCompressionQuality(size, ADAPTIVE_COMPRESSION_CONFIG) {
  if (ADAPTIVE_COMPRESSION_CONFIG.useAdaptiveCompression) {
    if (null != size.width) {
      if (null != size.height) {
        const result = size.width * size.height;
        if (result <= obj.SMALL) {
          let HIGH5 = ADAPTIVE_COMPRESSION_CONFIG.veryHighQuality;
          if (null == HIGH5) {
            HIGH5 = CompressionQuality.HIGH;
          }
          let HIGH = HIGH5;
        } else if (result <= obj.MEDIUM) {
          let HIGH4 = ADAPTIVE_COMPRESSION_CONFIG.highQuality;
          if (null == HIGH4) {
            HIGH4 = CompressionQuality.HIGH;
          }
          HIGH = HIGH4;
        } else if (result <= obj.LARGE) {
          let HIGH3 = ADAPTIVE_COMPRESSION_CONFIG.mediumQuality;
          if (null == HIGH3) {
            HIGH3 = CompressionQuality.HIGH;
          }
          HIGH = HIGH3;
        } else if (result <= obj.VERY_LARGE) {
          let HIGH2 = ADAPTIVE_COMPRESSION_CONFIG.lowQuality;
          if (null == HIGH2) {
            HIGH2 = CompressionQuality.HIGH;
          }
          HIGH = HIGH2;
        } else {
          HIGH = ADAPTIVE_COMPRESSION_CONFIG.veryLowQuality;
          if (null == HIGH) {
            HIGH = CompressionQuality.HIGH;
          }
        }
        return HIGH;
      }
    }
    return CompressionQuality.HIGH;
  } else {
    return CompressionQuality.HIGH;
  }
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
const CompressionQuality = arg1(dependencyMap[2]).CompressionQuality;
let obj = {};
obj = {};
const tmp2 = () => {
  class ImageEncodingLadder {
    constructor() {
      tmp = ImageEncodingLadder(this, ImageEncodingLadder);
      return;
    }
  }
  let closure_0 = ImageEncodingLadder;
  let obj = {
    key: "selectEncodingConfig",
    value(width) {
      let targetHeight;
      let targetWidth;
      ({ targetWidth, targetHeight } = ImageEncodingLadder.clampDimensions(width.width, width.height, 3840, 2160));
      if (width.width === targetWidth) {
        if (width.height === targetHeight) {
          let obj = {};
          obj = { width: targetWidth, height: targetHeight };
          obj.compressionQuality = 100 * callback(obj, lowQuality);
          obj.targetWidth = targetWidth;
          obj.targetHeight = targetHeight;
        }
        return obj;
      }
      obj = {};
      const lowQuality = lowQuality.lowQuality;
      let num = 0.5;
      if (null != lowQuality) {
        num = lowQuality;
      }
      obj.compressionQuality = 100 * num;
      obj.targetWidth = targetWidth;
      obj.targetHeight = targetHeight;
    }
  };
  const items = [obj, ];
  obj = {
    key: "clampDimensions",
    value(targetWidth, targetHeight) {
      const bound = Math.max(targetWidth, targetHeight);
      const bound1 = Math.min(targetWidth, targetHeight);
      const bound2 = Math.max(arg2, arg3);
      const bound3 = Math.min(arg2, arg3);
      if (bound <= bound2) {
        if (bound1 <= bound3) {
          let obj = { targetWidth, targetHeight };
          return obj;
        }
      }
      const bound4 = Math.min(bound2 / bound, bound3 / bound1);
      obj = { targetWidth: Math.max(1, Math.round(targetWidth * bound4)), targetHeight: Math.max(1, Math.round(targetHeight * bound4)) };
      return obj;
    }
  };
  items[1] = obj;
  return callback(ImageEncodingLadder, null, items);
}();
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/media_uploads/ImageEncodingLadder.tsx");

export const IMAGE_COMPRESSION_THRESHOLDS = obj;
export const ADAPTIVE_COMPRESSION_CONFIG = obj;
export { getAdaptiveImageCompressionQuality };
export const ImageEncodingLadder = tmp2;
