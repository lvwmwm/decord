// Module ID: 7749
// Function ID: 7750
// Name: ImageConversionDecision
// Dependencies: [1381, 7750, 2]
// Exports: isHeicUTI, isPhotoKitAsset, shouldConvertToJPG, shouldForceConvertToJPG

// Module 7749 (ImageConversionDecision)
import PlatformUtils from "PlatformUtils" /* 1381 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 7750 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/ImageConversionDecision.tsx");

export const isPhotoKitAsset = function isPhotoKitAsset(c0, c1) {
  const tmp = null != c0.match(/^ph:\/\//i) && null != c1;
  return tmp;
};
export const isHeicUTI = function isHeicUTI(str) {
  if (null == str) {
    return false;
  } else {
    const formatted = str.toLowerCase();
    const hasItem = formatted.includes("heic") || formatted.includes("heif");
    return hasItem;
  }
};
export const shouldForceConvertToJPG = function shouldForceConvertToJPG(c0, c1, value) {
  const obj = PlatformUtils;
  let isIOSResult = obj.isIOS();
  if (isIOSResult) {
    let flag = false;
    if (null != value) {
      const formatted = value.toLowerCase();
      const hasItem = formatted.includes("heic") || formatted.includes("heif");
      flag = hasItem;
    }
    let tmp5 = flag;
    if (!tmp5) {
      let tmp9;
      const tmp8 = null != c0.match(/^ph:\/\//i) && null != c1;
      if (tmp8) {
        let match;
        if (c1 != null) {
          match = c1.match(/\.HEI[CF]$/i);
        }
        tmp9 = null != match;
      } else {
        tmp9 = null != c0.match(/^(assets-library|file):\/\/.+(&ext=|\.)(HEI[CF])$/i);
      }
      tmp5 = tmp9;
    }
    isIOSResult = tmp5;
  }
  return isIOSResult;
};
export const shouldConvertToJPG = function shouldConvertToJPG(c0, c1, c2, c4, c7) {
  let flag = c7;
  if (c7 === undefined) {
    flag = true;
  }
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    let formatted;
    let num;
    if (c1 != null) {
      num = c1.lastIndexOf(".");
    }
    if (num == null) {
      num = -1;
    }
    if (-1 !== num) {
      const str2 = c1.substring(num + 1);
      formatted = str2.toLowerCase();
    }
    const match = c0.match;
    if (flag) {
      const tmp8 = null != match(/^ph:\/\//i) && null != c1;
      if (tmp8) {
        if (null == formatted) {
          return false;
        } else {
          if ("png" === formatted) {
            if (c4) {
              return true;
            } else if (c2) {
              return true;
            }
          } else {
            const obj2 = IosImageTypesManagerDefault;
            const tmp14 = importDefault;
            if (obj2.isExtensionAnimated(formatted)) {
              return false;
            } else {
              const tmp14Result = tmp14(7750);
              const supportedExtensions = tmp14Result.getSupportedExtensions();
              if (null !== supportedExtensions) {
                if (supportedExtensions.has(formatted)) {
                  return true;
                }
              }
            }
          }
          return false;
        }
      } else {
        let tmp11 = null != c0.match(/^(assets-library|file):\/\/.+(&ext=|\.)(hei[cf]|jpe?g|dng)$/i);
        if (!tmp11) {
          let tmp12 = null == c0.match(/^(assets-library|file):\/\/.+(&ext=|\.)png$/i);
          if (!tmp12) {
            tmp12 = !c2 && !c4;
          }
          tmp11 = !tmp12;
        }
        return tmp11;
      }
    } else {
      let tmp7 = "heic" === formatted;
      const tmp6 = null != match(/(&ext=|\.)(hei[cf])$/i);
      if (!tmp7) {
        tmp7 = "heif" === formatted;
      }
      if (!tmp7) {
        tmp7 = tmp6;
      }
      return tmp7;
    }
  } else {
    return false;
  }
};
