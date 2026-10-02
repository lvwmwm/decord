// Module ID: 2016
// Function ID: 2017
// Name: getGameMediaRefURL
// Dependencies: [2017, 1403, 2021, 2]
// Exports: default

// Module 2016 (getGameMediaRefURL)
import AvatarUtilsDefault from "AvatarUtils" /* 1403 */;
import StringUtils from "StringUtils" /* 2017 */;
import ImageProxyUtils from "ImageProxyUtils" /* 2021 */;
import size_mod from "module_2" /* 2 */;

let size = size_mod;
const result = size.fileFinishedImporting("modules/games/getGameMediaRefURL.tsx");

export default function getGameMediaRefURL(id, type, size) {
  let format;
  let keepAspectRatio;
  if (null == type) {
    return null;
  } else {
    type = type.type;
    if ("hash" === type) {
      let tmp9 = null;
      const obj2 = StringUtils;
      if (!obj2.isNullOrEmpty(type.value)) {
        const obj3 = { id, hash: type.value };
        const getGameAssetURL = AvatarUtilsDefault.getGameAssetURL;
        AvatarUtilsDefault;
        const merged = Object.assign(size);
        let gameAssetURL = getGameAssetURL(obj3);
        if (gameAssetURL == null) {
          gameAssetURL = null;
        }
        tmp9 = gameAssetURL;
      }
      return tmp9;
    } else if ("url" === type) {
      size = undefined;
      const getSizedImageAssetURL = ImageProxyUtils.getSizedImageAssetURL;
      const value = type.value;
      ImageProxyUtils;
      if (size != null) {
        size = size.size;
      }
      const obj = { size, keepAspectRatio, format };
      keepAspectRatio = undefined;
      if (size != null) {
        keepAspectRatio = size.keepAspectRatio;
      }
      format = undefined;
      if (size != null) {
        format = size.format;
      }
      return getSizedImageAssetURL(value, obj);
    } else {
      return null;
    }
  }
};
