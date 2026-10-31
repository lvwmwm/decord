// Module ID: 2025
// Function ID: 2026
// Name: getGameMediaRefURL
// Dependencies: [2026, 1409, 2030, 2]
// Exports: default, hasGameMediaRef

// Module 2025 (getGameMediaRefURL)
import AvatarUtilsDefault from "AvatarUtils" /* 1409 */;
import StringUtils from "StringUtils" /* 2026 */;
import ImageProxyUtils from "ImageProxyUtils" /* 2030 */;
import size_mod from "module_2" /* 2 */;

let size = size_mod;
const result = size.fileFinishedImporting("modules/games/getGameMediaRefURL.tsx");

export default function getGameMediaRefURL(id, value, size) {
  let format;
  let keepAspectRatio;
  let tmp = null != value;
  if (tmp) {
    const obj = StringUtils;
    tmp = !obj.isNullOrEmpty(value.value);
  }
  if (tmp) {
    const type = value.type;
    if ("hash" === type) {
      const obj2 = { id, hash: value.value };
      const getGameAssetURL = AvatarUtilsDefault.getGameAssetURL;
      AvatarUtilsDefault;
      const merged = Object.assign(size);
      let gameAssetURL = getGameAssetURL(obj2);
      if (gameAssetURL == null) {
        gameAssetURL = null;
      }
      return gameAssetURL;
    } else if ("url" === type) {
      size = undefined;
      const getSizedImageAssetURL = ImageProxyUtils.getSizedImageAssetURL;
      value = value.value;
      ImageProxyUtils;
      if (size != null) {
        size = size.size;
      }
      const obj3 = { size, keepAspectRatio, format };
      keepAspectRatio = undefined;
      if (size != null) {
        keepAspectRatio = size.keepAspectRatio;
      }
      format = undefined;
      if (size != null) {
        format = size.format;
      }
      return getSizedImageAssetURL(value, obj3);
    } else {
      return null;
    }
  } else {
    return null;
  }
};
export function hasGameMediaRef(cover) {
  let tmp = null != cover;
  if (tmp) {
    const obj = StringUtils;
    tmp = !obj.isNullOrEmpty(cover.value);
  }
  return tmp;
}
