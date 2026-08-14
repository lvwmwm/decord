// Module ID: 16897
// Function ID: 16898
// Name: getSource
// Dependencies: [4604, 2]
// Exports: getSource

// Module 16897 (getSource)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/ListingImageUtil.tsx");

export const getSource = function getSource(image_asset) {
  if (null == image_asset.image_asset) {
    let obj = { uri: "" };
  } else {
    obj = require(4604) /* _httpGetWithCountryCodeQuery */;
    let str = obj.getAssetURL(image_asset.application_id, image_asset.image_asset);
    if (str == null) {
      str = "";
    }
    obj = { uri: null };
    obj[0] = str;
  }
  return obj;
};
