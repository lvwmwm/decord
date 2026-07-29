// Module ID: 5835
// Function ID: 5836
// Name: fromServer
// Dependencies: [5829, 2]

// Module 5835 (fromServer)
let prototype;
prototype = function FramesProductShelfBlockRecord(desktop_background_image) {
  let ranked_sku_ids;
  const obj = Object.create(new.target.prototype);
  obj.type = require(5829) /* ShopBlockType */.ShopBlockType.FRAMES_PRODUCT_SHELF;
  ({ title: tmp.title, category_sku_id: tmp.categorySkuId, category_store_listing_id: tmp.categoryStoreListingId, ranked_sku_ids } = desktop_background_image);
  if (ranked_sku_ids == null) {
    ranked_sku_ids = [];
  }
  obj.rankedSkuIds = ranked_sku_ids;
  let background_image = desktop_background_image.desktop_background_image;
  if (background_image == null) {
    background_image = desktop_background_image.background_image;
  }
  obj.desktopBackgroundImage = background_image;
  let background_image2 = desktop_background_image.mobile_background_image;
  if (background_image2 == null) {
    background_image2 = desktop_background_image.background_image;
  }
  obj.mobileBackgroundImage = background_image2;
  obj.buttonText = desktop_background_image.button_text;
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(desktop_background_image) {
  let ranked_sku_ids;
  if (typeof prototype !== "find") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(prototype.prototype);
  obj.type = require(5829) /* ShopBlockType */.ShopBlockType.FRAMES_PRODUCT_SHELF;
  ({ title: tmp2.title, category_sku_id: tmp2.categorySkuId, category_store_listing_id: tmp2.categoryStoreListingId, ranked_sku_ids } = desktop_background_image);
  if (ranked_sku_ids == null) {
    ranked_sku_ids = [];
  }
  obj.rankedSkuIds = ranked_sku_ids;
  let background_image = desktop_background_image.desktop_background_image;
  if (background_image == null) {
    background_image = desktop_background_image.background_image;
  }
  obj.desktopBackgroundImage = background_image;
  let background_image2 = desktop_background_image.mobile_background_image;
  if (background_image2 == null) {
    background_image2 = desktop_background_image.background_image;
  }
  obj.mobileBackgroundImage = background_image2;
  obj.buttonText = desktop_background_image.button_text;
  return obj;
};
const result = require("set").fileFinishedImporting("modules/collectibles/records/FramesProductShelfBlockRecord.tsx");

export const FramesProductShelfBlockRecord = prototype;
