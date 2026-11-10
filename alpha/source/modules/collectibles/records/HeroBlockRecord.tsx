// Module ID: 7827
// Function ID: 7828
// Name: HeroBlockRecord
// Dependencies: [5815, 7828, 7811, 2]

// Module 7827 (HeroBlockRecord)
import ShopBlockType from "ShopBlockType" /* 5815 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7811 */;
import ShopBlockRecordFactory from "ShopBlockRecordFactory" /* 7828 */;
import size from "module_2" /* 2 */;

class HeroBlockRecord {
  constructor(foreground_block) {
    let summary;
    const obj = Object.create(new.target.prototype);
    obj.type = ShopBlockType.ShopBlockType.HERO;
    let result;
    if (null != foreground_block.foreground_block) {
      const tmp2Result = ShopBlockRecordFactory;
      result = tmp2Result.parseNonHeroShopBlock(foreground_block.foreground_block);
    }
    let type;
    if (result != null) {
      type = result.type;
    }
    let tmp6;
    if (type === ShopBlockType.ShopBlockType.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER) {
      tmp6 = result;
    }
    obj.foregroundBlock = tmp6;
    ({ category_sku_id: tmp.categorySkuId, name: tmp.name, summary } = foreground_block);
    obj.summary = summary.trim();
    ({ category_store_listing_id: tmp.categoryStoreListingId, title: tmp.title, ranked_sku_ids: tmp.rankedSkuIds } = foreground_block);
    let date = null;
    if (null != foreground_block.unpublished_at) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      date = new Date(foreground_block.unpublished_at);
    }
    obj.unpublishedAt = date;
    ({ banner_text_color: tmp.bannerTextColor, mobile_title: tmp.mobileTitle, mobile_summary: tmp.mobileSummary, mobile_products_title: tmp.mobileProductsTitle, hero_banner_url: tmp.heroBannerUrl, hero_banner_animated_url: tmp.heroBannerAnimatedUrl, hero_rive_url: tmp.heroRiveUrl, hero_logo_url: tmp.heroLogoUrl, mobile_hero_url: tmp.mobileHeroUrl, mobile_hero_animated_url: tmp.mobileHeroAnimatedUrl } = foreground_block);
    const tmp2Result3 = CollectiblesUtils;
    obj.bannerDisplayConfig = tmp2Result3.getAssetDisplayConfig(foreground_block.banner_display_config);
    const tmp2Result4 = CollectiblesUtils;
    obj.logoDisplayConfig = tmp2Result4.getAssetDisplayConfig(foreground_block.logo_display_config);
    return obj;
  }
  static fromServer(foreground_block) {
    return new HeroBlockRecord(foreground_block);
  }
}
let result = size.fileFinishedImporting("modules/collectibles/records/HeroBlockRecord.tsx");

export { HeroBlockRecord };
