// Module ID: 6810
// Function ID: 53700
// Name: RewardHeroBlockRecord
// Dependencies: []

// Module 6810 (RewardHeroBlockRecord)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class RewardHeroBlockRecord {
    constructor(arg0) {
      self = this;
      tmp = closure_2(this, RewardHeroBlockRecord);
      this.type = RewardHeroBlockRecord(closure_1[2]).ShopBlockType.REWARD_HERO;
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
      ({ banner_text_color: self.bannerTextColor, mobile_title: self.mobileTitle, mobile_summary: self.mobileSummary, mobile_products_title: self.mobileProductsTitle, reward_sku_id: self.rewardSkuId, hero_banner_url: self.heroBannerUrl, hero_banner_animated_url: self.heroBannerAnimatedUrl, hero_rive_url: self.heroRiveUrl, hero_logo_url: self.heroLogoUrl, mobile_hero_url: self.mobileHeroUrl, mobile_hero_animated_url: self.mobileHeroAnimatedUrl } = arg0);
      obj = RewardHeroBlockRecord(closure_1[3]);
      self.logoDisplayConfig = obj.getAssetDisplayConfig(arg0.logo_display_config);
      obj2 = RewardHeroBlockRecord(closure_1[3]);
      self.bannerDisplayConfig = obj2.getAssetDisplayConfig(arg0.banner_display_config);
      return;
    }
  }
  const arg1 = RewardHeroBlockRecord;
  const items = [
    {
      key: "fromServer",
      value(unpublished_at) {
        return new RewardHeroBlockRecord(unpublished_at);
      }
    }
  ];
  return callback(RewardHeroBlockRecord, null, items);
}();
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/collectibles/records/RewardHeroBlockRecord.tsx");

export const RewardHeroBlockRecord = tmp2;
