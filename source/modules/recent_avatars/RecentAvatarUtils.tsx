// Module ID: 7848
// Function ID: 62580
// Name: getImageFormat
// Dependencies: []
// Exports: createPendingImage, generateAvatarDescription, generateRecentAvatarFileDetails, getPendingAvatarSrc

// Module 7848 (getImageFormat)
function getImageFormat(canAnimate) {
  let flag = canAnimate.canAnimate;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = canAnimate.allowWebp;
  if (flag2 === undefined) {
    flag2 = true;
  }
  if (flag) {
    if (obj.isAnimatedIconHash(canAnimate.storageHash)) {
      let str5 = "gif";
      if (flag2) {
        str5 = "gif";
        if (require(dependencyMap[1]).SUPPORTS_WEBP) {
          str5 = "webp";
        }
      }
      let str = str5;
    }
    return str;
  }
  str = "jpg";
  if (null != window.GLOBAL_ENV.CDN_HOST) {
    let str3 = "png";
    if (flag2) {
      str3 = "png";
      if (require(dependencyMap[1]).SUPPORTS_WEBP) {
        str3 = "webp";
      }
    }
    str = str3;
  }
}
function getArchivedAvatarURL(allowWebp) {
  let avatarId;
  let canAnimate;
  let storageHash;
  let userId;
  ({ userId, avatarId, storageHash, canAnimate } = allowWebp);
  if (canAnimate === undefined) {
    canAnimate = false;
  }
  let flag = allowWebp.allowWebp;
  if (flag === undefined) {
    flag = true;
  }
  if (null != CDN_HOST) {
    const _HermesInternal = HermesInternal;
    let combined = "https://" + CDN_HOST;
  } else {
    const _location = location;
    const _window = window;
    combined = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
  }
  let obj = { storageHash, canAnimate, allowWebp: flag };
  const tmp2 = getImageFormat(obj);
  obj = {};
  const obj3 = require(dependencyMap[2]);
  obj.size = obj3.getBestMediaProxySize(allowWebp.size * require(dependencyMap[2]).getDevicePixelRatio());
  let isAnimatedIconHashResult = "webp" === tmp2 && canAnimate;
  if (isAnimatedIconHashResult) {
    isAnimatedIconHashResult = require(dependencyMap[1]).isAnimatedIconHash(storageHash);
    const obj5 = require(dependencyMap[1]);
  }
  if (isAnimatedIconHashResult) {
    obj.animated = true;
  }
  const obj4 = require(dependencyMap[2]);
  const ARCHIVED_AVATARResult = Endpoints.ARCHIVED_AVATAR(userId, avatarId, storageHash, tmp2);
  return "" + combined + ARCHIVED_AVATARResult + "?" + importDefault(dependencyMap[3]).stringify(obj);
}
function getFileTypeFromExtension(arg0) {
  if ("gif" === arg0) {
    return "image/gif";
  } else if ("png" === arg0) {
    return "image/png";
  } else if ("jpg" === arg0) {
    return "image/jpeg";
  } else if ("webp" === arg0) {
    return "image/webp";
  } else {
    require(dependencyMap[6]).assertNever(arg0);
  }
}
const Endpoints = require(dependencyMap[0]).Endpoints;
const _module = require(dependencyMap[7]);
const result = _module.fileFinishedImporting("modules/recent_avatars/RecentAvatarUtils.tsx");

export { getImageFormat };
export { getArchivedAvatarURL };
export const generateAvatarDescription = function generateAvatarDescription(maxSettingsForPreset) {
  let assetOrigin;
  let filename;
  let obj = maxSettingsForPreset;
  if (null == maxSettingsForPreset) {
    obj = {};
  }
  ({ filename, assetOrigin } = obj);
  if (undefined === assetOrigin) {
    assetOrigin = require(dependencyMap[5]).AssetOriginTypes.NEW_ASSET;
  }
  if (assetOrigin !== require(dependencyMap[5]).AssetOriginTypes.ARCHIVED_ASSET) {
    if (null == filename) {
      const intl = require(dependencyMap[4]).intl;
      filename = intl.string(require(dependencyMap[4]).t.lqaIxI);
    }
    const _Date = Date;
    const date = new Date();
    const intl2 = require(dependencyMap[4]).intl;
    if (assetOrigin === require(dependencyMap[5]).AssetOriginTypes.EDITED_ARCHIVED_ASSET) {
      let DYil93 = require(dependencyMap[4]).t.eC2sZi;
    } else {
      DYil93 = require(dependencyMap[4]).t.DYil93;
    }
    obj = { name: filename, dateTime: date.toLocaleString(require(dependencyMap[4]).intl.currentLocale, {}) };
    return intl2.formatToPlainString(DYil93, obj);
  }
};
export const generateRecentAvatarFileDetails = function generateRecentAvatarFileDetails(storageHash) {
  let obj = { storageHash, canAnimate: true, allowWebp: require(dependencyMap[1]).SUPPORTS_WEBP };
  const tmp = getImageFormat(obj);
  obj = {};
  if (null == arg1) {
    const intl = require(dependencyMap[4]).intl;
    let stringResult = intl.string(require(dependencyMap[4]).t.lqaIxI);
  } else {
    stringResult = arg1.split(",")[0];
  }
  obj.filename = "" + stringResult + "." + tmp;
  obj.type = getFileTypeFromExtension(tmp);
  return obj;
};
export const createPendingImage = function createPendingImage(assetOrigin) {
  let description;
  let imageUri;
  let originalAsset;
  let originalMd5;
  let NEW_ASSET = assetOrigin.assetOrigin;
  if (NEW_ASSET === undefined) {
    NEW_ASSET = require(dependencyMap[5]).AssetOriginTypes.NEW_ASSET;
  }
  ({ imageUri, description, originalAsset, originalMd5 } = assetOrigin);
  if (require(dependencyMap[5]).AssetOriginTypes.NEW_ASSET === NEW_ASSET) {
    let obj = { assetOrigin: NEW_ASSET, imageUri, description, originalMd5 };
    return obj;
  } else if (require(dependencyMap[5]).AssetOriginTypes.EDITED_ARCHIVED_ASSET === NEW_ASSET) {
    obj = { assetOrigin: NEW_ASSET, imageUri, description, originalAsset, originalMd5 };
    return obj;
  } else if (require(dependencyMap[5]).AssetOriginTypes.ARCHIVED_ASSET === NEW_ASSET) {
    const obj1 = { assetOrigin: NEW_ASSET, imageUri, originalAsset };
    return obj1;
  } else {
    obj = require(dependencyMap[6]);
    obj.assertNever(NEW_ASSET);
  }
};
export const getPendingAvatarSrc = function getPendingAvatarSrc(canAnimate) {
  let image;
  let size;
  let userId;
  ({ userId, image, size } = canAnimate);
  if (size === undefined) {
    size = 80;
  }
  let flag = canAnimate.canAnimate;
  if (flag === undefined) {
    flag = true;
  }
  let tmp = image;
  if (null != image) {
    tmp = image;
    if ("string" !== typeof image) {
      if (image.assetOrigin === require(dependencyMap[5]).AssetOriginTypes.ARCHIVED_ASSET) {
        const obj = { userId };
        userId = image.originalAsset.id;
        obj.avatarId = userId;
        image = image.originalAsset.storageHash;
        obj.storageHash = image;
        obj.size = size;
        obj.canAnimate = flag;
        let imageUri = getArchivedAvatarURL(obj);
      } else {
        imageUri = image.imageUri;
      }
    }
  }
  return tmp;
};
