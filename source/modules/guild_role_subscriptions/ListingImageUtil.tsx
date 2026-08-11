// Module ID: 16821
// Function ID: 16822
// Name: getSource
// Dependencies: [4541, 2]
// Exports: getSource

// Module 16821 (getSource)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/ListingImageUtil.tsx");

export const getSource = function getSource(image_asset) {
  if (null == image_asset.image_asset) {
    let obj = { uri: "" };
  } else {
    obj = require(4541) /* _httpGetWithCountryCodeQuery */;
    let str = obj.getAssetURL(image_asset.application_id, image_asset.image_asset);
    if (str == null) {
      str = "";
    }
    obj = { uri: null };
    obj[0] = str;
  }
  return obj;
};
