// Module ID: 4695
// Function ID: 40892
// Name: isPhotoKitAsset
// Dependencies: [477, 4696, 2]
// Exports: shouldConvertToJPG, shouldForceConvertToJPG

// Module 4695 (isPhotoKitAsset)
function isPhotoKitAsset(uri, filename) {
  let tmp = null != uri.match(/^ph:\/\//i);
  if (tmp) {
    tmp = null != filename;
  }
  return tmp;
}
function isHeicUTI(str) {
  if (null == str) {
    return false;
  } else {
    const formatted = str.toLowerCase();
    let hasItem = formatted.includes("heic");
    if (!hasItem) {
      hasItem = formatted.includes("heif");
    }
    return hasItem;
  }
}
const result = require("set").fileFinishedImporting("modules/media_uploads/native/ImageConversionDecision.tsx");

export { isPhotoKitAsset };
export { isHeicUTI };
export const shouldForceConvertToJPG = function shouldForceConvertToJPG(uri, filename, arg2) {
  const tmp = !require(477) /* set */.isIOS();
  let tmp2 = !tmp;
  if (!tmp) {
    const tmp5 = !isHeicUTI(arg2);
    if (!tmp5) {
      tmp2 = !tmp5;
    } else if (isPhotoKitAsset(uri, filename)) {
      let match;
      if (null != filename) {
        match = filename.match(/\.HEI[CF]$/i);
      }
      let tmp8 = null != match;
    } else {
      tmp8 = null != uri.match(/^(assets-library|file):\/\/.+(&ext=|\.)(HEI[CF])$/i);
    }
  }
  return tmp2;
};
export const shouldConvertToJPG = function shouldConvertToJPG(uri, filename, isLowQuality, mobileLosslessImageEnabled, allowOptimization) {
  let flag = allowOptimization;
  if (allowOptimization === undefined) {
    flag = true;
  }
  if (obj.isIOS()) {
    let lastIndexOfResult;
    if (null != filename) {
      lastIndexOfResult = filename.lastIndexOf(".");
    }
    let num2 = -1;
    if (null != lastIndexOfResult) {
      num2 = lastIndexOfResult;
    }
    if (-1 !== num2) {
      const formatted = filename.substring(num2 + 1).toLowerCase();
      const str2 = filename.substring(num2 + 1);
    }
    if (flag) {
      if (isPhotoKitAsset(uri, filename)) {
        if (null == formatted) {
          return false;
        } else {
          if ("png" === formatted) {
            if (mobileLosslessImageEnabled) {
              return true;
            } else if (isLowQuality) {
              return true;
            }
          } else {
            if (obj2.isExtensionAnimated(formatted)) {
              return false;
            } else {
              const supportedExtensions = importDefault(4696).getSupportedExtensions();
              if (null !== supportedExtensions) {
                if (supportedExtensions.has(formatted)) {
                  return true;
                }
              }
              const obj3 = importDefault(4696);
            }
            obj2 = importDefault(4696);
          }
          return false;
        }
      } else {
        let tmp7 = null != uri.match(/^(assets-library|file):\/\/.+(&ext=|\.)(hei[cf]|jpe?g|dng)$/i);
        if (!tmp7) {
          let tmp8 = null == uri.match(/^(assets-library|file):\/\/.+(&ext=|\.)png$/i);
          if (!tmp8) {
            tmp8 = !isLowQuality && !mobileLosslessImageEnabled;
            const tmp9 = !isLowQuality && !mobileLosslessImageEnabled;
          }
          tmp7 = !tmp8;
        }
        return tmp7;
      }
    } else {
      let tmp5 = "heic" === formatted;
      if (!tmp5) {
        tmp5 = "heif" === formatted;
      }
      if (!tmp5) {
        tmp5 = tmp4;
      }
      return tmp5;
    }
  } else {
    return false;
  }
  obj = require(477) /* set */;
};
