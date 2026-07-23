// Module ID: 6808
// Function ID: 53726
// Name: FeaturedCategorySubblockRecord
// Dependencies: [6, 7, 6809, 2]

// Module 6808 (FeaturedCategorySubblockRecord)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
const tmp2 = (() => {
  class FeaturedCategorySubblockRecord {
    constructor(arg0) {
      self = this;
      tmp = outer1_2(this, FeaturedCategorySubblockRecord);
      this.type = FeaturedCategorySubblockRecord(outer1_1[2]).FeaturedSubblockType.CATEGORY;
      ({ category_store_listing_id: this.categoryStoreListingId, name: this.name } = arg0);
      date = null;
      if (null != arg0.unpublished_at) {
        tmp3 = globalThis;
        _Date = Date;
        prototype = Date.prototype;
        tmp4 = new.target;
        tmp5 = new.target;
        date = new Date(arg0.unpublished_at);
      }
      self.unpublishedAt = date;
      ({ body_text: self.bodyText, banner_text_color: self.bannerTextColor, banner_url: self.bannerUrl, asset_url: self.assetUrl } = arg0);
      return;
    }
  }
  const items = [
    {
      key: "fromServer",
      value(unpublished_at) {
        return new FeaturedCategorySubblockRecord(unpublished_at);
      }
    }
  ];
  return callback(FeaturedCategorySubblockRecord, null, items);
})();
const result = require("FeaturedSubblockType").fileFinishedImporting("modules/collectibles/records/FeaturedCategorySubblockRecord.tsx");

export const FeaturedCategorySubblockRecord = tmp2;
