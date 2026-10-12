// Module ID: 18546
// Function ID: 18547
// Name: ListingImageUtil
// Dependencies: [5644, 2]
// Exports: getSource

// Module 18546 (ListingImageUtil)
import StoreUtils from "StoreUtils" /* 5644 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/ListingImageUtil.tsx");

export const getSource = function getSource(image_asset) {
  let obj2;
  if (null == image_asset.image_asset) {
    obj2 = { uri: "" };
  } else {
    const obj = StoreUtils;
    let str = obj.getAssetURL(image_asset.application_id, image_asset.image_asset);
    if (str == null) {
      str = "";
    }
    obj2 = { uri: str };
  }
  return obj2;
};
