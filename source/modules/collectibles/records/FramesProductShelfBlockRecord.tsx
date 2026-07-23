// Module ID: 6812
// Function ID: 53739
// Name: FramesProductShelfBlockRecord
// Dependencies: [6, 7, 6806, 2]

// Module 6812 (FramesProductShelfBlockRecord)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
const tmp2 = (() => {
  class FramesProductShelfBlockRecord {
    constructor(arg0) {
      self = this;
      tmp = outer1_2(this, FramesProductShelfBlockRecord);
      this.type = FramesProductShelfBlockRecord(outer1_1[2]).ShopBlockType.FRAMES_PRODUCT_SHELF;
      ({ title: this.title, category_sku_id: this.categorySkuId, category_store_listing_id: this.categoryStoreListingId, ranked_sku_ids } = arg0);
      if (null == ranked_sku_ids) {
        ranked_sku_ids = [];
      }
      self.rankedSkuIds = ranked_sku_ids;
      background_image = arg0.desktop_background_image;
      if (null == background_image) {
        background_image = arg0.background_image;
      }
      self.desktopBackgroundImage = background_image;
      background_image2 = arg0.mobile_background_image;
      if (null == background_image2) {
        background_image2 = arg0.background_image;
      }
      self.mobileBackgroundImage = background_image2;
      self.buttonText = arg0.button_text;
      return;
    }
  }
  const items = [
    {
      key: "fromServer",
      value(desktop_background_image) {
        return new FramesProductShelfBlockRecord(desktop_background_image);
      }
    }
  ];
  return callback(FramesProductShelfBlockRecord, null, items);
})();
const result = require("ShopBlockType").fileFinishedImporting("modules/collectibles/records/FramesProductShelfBlockRecord.tsx");

export const FramesProductShelfBlockRecord = tmp2;
