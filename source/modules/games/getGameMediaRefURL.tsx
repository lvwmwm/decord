// Module ID: 4160
// Function ID: 35145
// Name: getGameMediaRefURL
// Dependencies: [1832, 1392, 4161, 2]
// Exports: default

// Module 4160 (getGameMediaRefURL)
const result = require("isImageProxyURL").fileFinishedImporting("modules/games/getGameMediaRefURL.tsx");

export default function getGameMediaRefURL(id, type, size) {
  if (null == type) {
    return null;
  } else {
    type = type.type;
    if ("hash" === type) {
      let tmp7 = null;
      if (!obj3.isNullOrEmpty(type.value)) {
        let obj = { id, hash: type.value };
        const merged = Object.assign(size);
        const gameAssetURL = importDefault(1392).getGameAssetURL(obj);
        let tmp15 = null;
        if (null != gameAssetURL) {
          tmp15 = gameAssetURL;
        }
        tmp7 = tmp15;
        const obj4 = importDefault(1392);
      }
      return tmp7;
    } else if ("url" === type) {
      obj = require(4161) /* isImageProxyURL */;
      obj = {};
      size = undefined;
      if (null != size) {
        size = size.size;
      }
      obj.size = size;
      let keepAspectRatio;
      if (null != size) {
        keepAspectRatio = size.keepAspectRatio;
      }
      obj.keepAspectRatio = keepAspectRatio;
      return obj.getSizedImageProxyURL(type.value, obj);
    } else {
      return null;
    }
  }
};
