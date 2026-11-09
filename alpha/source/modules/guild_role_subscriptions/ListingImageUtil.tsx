// Module ID: 20348
// Function ID: 20349
// Name: ListingImageUtil
// Dependencies: [6588, 2]
// Exports: getSource

// Module 20348 (ListingImageUtil)
import StoreUtils from "StoreUtils" /* 6588 */;
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
