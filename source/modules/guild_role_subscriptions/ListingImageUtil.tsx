// Module ID: 16417
// Function ID: 127954
// Name: getSource
// Dependencies: [4369, 2]
// Exports: getSource

// Module 16417 (getSource)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/ListingImageUtil.tsx");

export const getSource = function getSource(image_asset) {
  if (null == image_asset.image_asset) {
    let obj = { uri: "" };
    return obj;
  } else {
    obj = require(4369) /* _httpGetWithCountryCodeQuery */;
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
