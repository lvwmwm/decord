// Module ID: 17722
// Function ID: 17723
// Name: getSource
// Dependencies: [4802, 2]
// Exports: getSource

// Module 17722 (getSource)
import set from "set" /* 2 */;
import _httpGetWithCountryCodeQuery from "_httpGetWithCountryCodeQuery" /* 4802 */;

const result = set.fileFinishedImporting("modules/guild_role_subscriptions/ListingImageUtil.tsx");

export const getSource = function getSource(image_asset) {
  if (null == image_asset.image_asset) {
    let obj = { uri: "" };
  } else {
    obj = _httpGetWithCountryCodeQuery;
    let str = obj.getAssetURL(image_asset.application_id, image_asset.image_asset);
    if (str == null) {
      str = "";
    }
    obj = { uri: null };
    obj[0] = str;
  }
  return obj;
};
