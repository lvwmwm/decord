// Module ID: 6808
// Function ID: 53692
// Name: HeroBlockRecord
// Dependencies: []

// Module 6808 (HeroBlockRecord)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class HeroBlockRecord {
    constructor(arg0) {
      self = this;
      tmp = closure_2(this, HeroBlockRecord);
      this.type = HeroBlockRecord(closure_1[2]).ShopBlockType.HERO;
      ({ category_sku_id: this.categorySkuId, name: this.name, summary } = arg0);
      this.summary = summary.trim();
      ({ category_store_listing_id: this.categoryStoreListingId, title: this.title, ranked_sku_ids: this.rankedSkuIds } = arg0);
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
      ({ banner_text_color: self.bannerTextColor, mobile_title: self.mobileTitle, mobile_summary: self.mobileSummary, mobile_products_title: self.mobileProductsTitle, hero_banner_url: self.heroBannerUrl, hero_banner_animated_url: self.heroBannerAnimatedUrl, hero_rive_url: self.heroRiveUrl, hero_logo_url: self.heroLogoUrl, mobile_hero_url: self.mobileHeroUrl, mobile_hero_animated_url: self.mobileHeroAnimatedUrl } = arg0);
      obj = HeroBlockRecord(closure_1[3]);
      self.bannerDisplayConfig = obj.getAssetDisplayConfig(arg0.banner_display_config);
      obj2 = HeroBlockRecord(closure_1[3]);
      self.logoDisplayConfig = obj2.getAssetDisplayConfig(arg0.logo_display_config);
      return;
    }
  }
  const arg1 = HeroBlockRecord;
  const items = [
    {
      key: "fromServer",
      value(unpublished_at) {
        return new HeroBlockRecord(unpublished_at);
      }
    }
  ];
  return callback(HeroBlockRecord, null, items);
}();
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/collectibles/records/HeroBlockRecord.tsx");

export const HeroBlockRecord = tmp2;
