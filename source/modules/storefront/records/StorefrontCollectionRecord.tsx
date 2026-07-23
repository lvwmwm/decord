// Module ID: 6793
// Function ID: 53657
// Name: StorefrontCollectionRecord
// Dependencies: [6, 7, 6794, 6787, 6795, 2]

// Module 6793 (StorefrontCollectionRecord)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AssetDisplayConfigRecord } from "AssetDisplayConfigRecord";
import StorefrontProductRecord from "StorefrontProductRecord";

const tmp2 = (() => {
  class StorefrontCollectionRecord {
    constructor(arg0) {
      tmp = StorefrontCollectionRecord(this, StorefrontCollectionRecord);
      ({ id: this.id, applicationId: this.applicationId, name: this.name, description: this.description, products: this.products, createdAt: this.createdAt, updatedAt: this.updatedAt, unpublishedAt: this.unpublishedAt, willUnpublishAt: this.willUnpublishAt, styles: this.styles, bannerTextColor: this.bannerTextColor, heroRanking: this.heroRanking, heroDisplayConfig: this.heroDisplayConfig, heroLogoDisplayConfig: this.heroLogoDisplayConfig, heroUrl: this.heroUrl, heroRiveUrl: this.heroRiveUrl, heroAnimatedUrl: this.heroAnimatedUrl, heroLogoUrl: this.heroLogoUrl, heroBannerUrl: this.heroBannerUrl, heroBannerAnimatedUrl: this.heroBannerAnimatedUrl, catalogBannerUrl: this.catalogBannerUrl, catalogBannerRiveUrl: this.catalogBannerRiveUrl, catalogBannerAnimatedUrl: this.catalogBannerAnimatedUrl, featuredBlockUrl: this.featuredBlockUrl, logoUrl: this.logoUrl, pdpBgUrl: this.pdpBgUrl, wideBannerUrl: this.wideBannerUrl, wideBannerAnimatedUrl: this.wideBannerAnimatedUrl, mobileHeroUrl: this.mobileHeroUrl, mobileHeroAnimatedUrl: this.mobileHeroAnimatedUrl, mobileBannerUrl: this.mobileBannerUrl, mobileBgUrl: this.mobileBgUrl, shopButtonBgHoverUrl: this.shopButtonBgHoverUrl, upsellBannerPopoutUrl: this.upsellBannerPopoutUrl, upsellBannerUrl: this.upsellBannerUrl, heroBlockTitle: this.heroBlockTitle, featuredBlockBody: this.featuredBlockBody, mobileHeroBlockTitle: this.mobileHeroBlockTitle, mobileProductsTitle: this.mobileProductsTitle, mobileSummary: this.mobileSummary, wideBannerTitle: this.wideBannerTitle, wideBannerBody: this.wideBannerBody } = arg0);
      return;
    }
  }
  const items = [
    {
      key: "fromServer",
      value(application_id) {
        let created_at;
        let tenant_metadata;
        let unpublish_settings;
        let unpublished_at;
        let updated_at;
        ({ created_at, updated_at, unpublished_at, unpublish_settings, tenant_metadata } = application_id);
        let obj = { application_id: 0, created_at: 0, updated_at: 0, unpublished_at: 0, unpublish_settings: 0, tenant_metadata: 0 };
        Object.setPrototypeOf(null);
        const merged = Object.assign(application_id, obj);
        let tmp3 = StorefrontCollectionRecord;
        obj = {};
        const merged1 = Object.assign(merged);
        obj["applicationId"] = application_id.application_id;
        const products = merged.products;
        obj["products"] = products.map(outer1_4.fromServer);
        obj["createdAt"] = new Date(created_at);
        const date = new Date(created_at);
        obj["updatedAt"] = new Date(updated_at);
        let date2;
        if (null != unpublished_at) {
          const _Date = Date;
          date2 = new Date(unpublished_at);
        }
        obj["unpublishedAt"] = date2;
        let will_unpublish_at;
        if (null != unpublish_settings) {
          will_unpublish_at = unpublish_settings.will_unpublish_at;
        }
        let date3;
        if (null != will_unpublish_at) {
          const _Date2 = Date;
          date3 = new Date(unpublish_settings.will_unpublish_at);
        }
        obj["willUnpublishAt"] = date3;
        let fromServerResult;
        if (null != tenant_metadata.collectibles.styles) {
          fromServerResult = outer1_2.fromServer(tenant_metadata.collectibles.styles);
        }
        obj["styles"] = fromServerResult;
        obj["bannerTextColor"] = tenant_metadata.collectibles.banner_text_color;
        obj["heroRanking"] = tenant_metadata.collectibles.hero_ranking;
        let fromServerResult1;
        if (null != tenant_metadata.collectibles.hero_display_config) {
          fromServerResult1 = outer1_3.fromServer(tenant_metadata.collectibles.hero_display_config);
        }
        obj["heroDisplayConfig"] = fromServerResult1;
        let fromServerResult2;
        if (null != tenant_metadata.collectibles.hero_logo_display_config) {
          fromServerResult2 = outer1_3.fromServer(tenant_metadata.collectibles.hero_logo_display_config);
        }
        obj["heroLogoDisplayConfig"] = fromServerResult2;
        obj["heroUrl"] = tenant_metadata.collectibles.hero_url;
        obj["heroRiveUrl"] = tenant_metadata.collectibles.hero_rive_url;
        obj["heroAnimatedUrl"] = tenant_metadata.collectibles.hero_animated_url;
        obj["heroLogoUrl"] = tenant_metadata.collectibles.hero_logo_url;
        obj["heroBannerUrl"] = tenant_metadata.collectibles.hero_banner_url;
        obj["heroBannerAnimatedUrl"] = tenant_metadata.collectibles.hero_banner_animated_url;
        obj["catalogBannerUrl"] = tenant_metadata.collectibles.catalog_banner_url;
        obj["catalogBannerRiveUrl"] = tenant_metadata.collectibles.catalog_banner_rive_url;
        obj["catalogBannerAnimatedUrl"] = tenant_metadata.collectibles.catalog_banner_animated_url;
        obj["featuredBlockUrl"] = tenant_metadata.collectibles.featured_block_url;
        obj["logoUrl"] = tenant_metadata.collectibles.logo_url;
        obj["pdpBgUrl"] = tenant_metadata.collectibles.pdp_bg_url;
        obj["wideBannerUrl"] = tenant_metadata.collectibles.wide_banner_url;
        obj["wideBannerAnimatedUrl"] = tenant_metadata.collectibles.wide_banner_animated_url;
        obj["mobileHeroUrl"] = tenant_metadata.collectibles.mobile_hero_url;
        obj["mobileHeroAnimatedUrl"] = tenant_metadata.collectibles.mobile_hero_animated_url;
        obj["mobileBannerUrl"] = tenant_metadata.collectibles.mobile_banner_url;
        obj["mobileBgUrl"] = tenant_metadata.collectibles.mobile_bg_url;
        obj["shopButtonBgHoverUrl"] = tenant_metadata.collectibles.shop_button_bg_hover_url;
        obj["upsellBannerPopoutUrl"] = tenant_metadata.collectibles.upsell_banner_popout_url;
        obj["upsellBannerUrl"] = tenant_metadata.collectibles.upsell_banner_url;
        obj["heroBlockTitle"] = tenant_metadata.collectibles.hero_block_title;
        obj["featuredBlockBody"] = tenant_metadata.collectibles.featured_block_body;
        obj["mobileHeroBlockTitle"] = tenant_metadata.collectibles.mobile_hero_block_title;
        obj["mobileProductsTitle"] = tenant_metadata.collectibles.mobile_products_title;
        obj["mobileSummary"] = tenant_metadata.collectibles.mobile_summary;
        obj["wideBannerTitle"] = tenant_metadata.collectibles.wide_banner_title;
        obj["wideBannerBody"] = tenant_metadata.collectibles.wide_banner_body;
        tmp3 = new tmp3(obj);
        return tmp3;
      }
    }
  ];
  return callback(StorefrontCollectionRecord, null, items);
})();
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/storefront/records/StorefrontCollectionRecord.tsx");

export default tmp2;
