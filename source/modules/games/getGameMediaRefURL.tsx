// Module ID: 4156
// Function ID: 35113
// Name: getGameMediaRefURL
// Dependencies: []
// Exports: default

// Module 4156 (getGameMediaRefURL)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/games/getGameMediaRefURL.tsx");

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
        const gameAssetURL = importDefault(dependencyMap[1]).getGameAssetURL(obj);
        let tmp15 = null;
        if (null != gameAssetURL) {
          tmp15 = gameAssetURL;
        }
        tmp7 = tmp15;
        const obj4 = importDefault(dependencyMap[1]);
      }
      return tmp7;
    } else if ("url" === type) {
      obj = require(dependencyMap[2]);
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
