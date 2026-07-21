// Module ID: 16284
// Function ID: 125677
// Name: getSource
// Dependencies: []
// Exports: getSource

// Module 16284 (getSource)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/guild_role_subscriptions/ListingImageUtil.tsx");

export const getSource = function getSource(image_asset) {
  if (null == image_asset.image_asset) {
    let obj = { uri: "" };
    return obj;
  } else {
    obj = require(dependencyMap[0]);
    const assetURL = obj.getAssetURL(image_asset.application_id, image_asset.image_asset);
    obj = {};
    let str = "";
    if (null != assetURL) {
      str = assetURL;
    }
    obj.uri = str;
    return obj;
  }
};
