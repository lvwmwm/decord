// Module ID: 20055
// Function ID: 20056
// Name: ListingImageUtil
// Dependencies: [6238, 2]
// Exports: getSource

// Module 20055 (ListingImageUtil)
import StoreUtils from "StoreUtils" /* 6238 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/ListingImageUtil.tsx");

export function getSource(image_asset) {
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
}
