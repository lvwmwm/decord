// Module ID: 6803
// Function ID: 53683
// Name: FeaturedCategorySubblockRecord
// Dependencies: []

// Module 6803 (FeaturedCategorySubblockRecord)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class FeaturedCategorySubblockRecord {
    constructor(arg0) {
      self = this;
      tmp = closure_2(this, FeaturedCategorySubblockRecord);
      this.type = FeaturedCategorySubblockRecord(closure_1[2]).FeaturedSubblockType.CATEGORY;
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
  const arg1 = FeaturedCategorySubblockRecord;
  const items = [
    {
      key: "fromServer",
      value(unpublished_at) {
        return new FeaturedCategorySubblockRecord(unpublished_at);
      }
    }
  ];
  return callback(FeaturedCategorySubblockRecord, null, items);
}();
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/collectibles/records/FeaturedCategorySubblockRecord.tsx");

export const FeaturedCategorySubblockRecord = tmp2;
