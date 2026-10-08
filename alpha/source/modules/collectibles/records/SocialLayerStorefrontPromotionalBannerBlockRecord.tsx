// Module ID: 7291
// Function ID: 7292
// Name: SocialLayerStorefrontPromotionalBannerBlockRecord
// Dependencies: [7282, 2]

// Module 7291 (SocialLayerStorefrontPromotionalBannerBlockRecord)
import ShopBlockType from "ShopBlockType" /* 7282 */;
import size from "module_2" /* 2 */;

class SocialLayerStorefrontPromotionalBannerBlockRecord {
  constructor(arg0) {
    const obj = Object.create(new.target.prototype);
    obj.type = ShopBlockType.ShopBlockType.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER;
    ({ application_id: tmp.applicationId, header_text: tmp.headerText, subheader_text: tmp.subheaderText, gradient_colors: tmp.gradientColors, gradient_angle: tmp.gradientAngle, sku_ids: tmp.skuIds, end_time: tmp.endTime, cta_type: tmp.ctaType, logo_url: tmp.logoUrl, terms_url: tmp.termsUrl, background_image_url: tmp.backgroundImageUrl } = arg0);
    return obj;
  }
  static fromServer(arg0) {
    if (typeof SocialLayerStorefrontPromotionalBannerBlockRecord === "function") {
      const obj = Object.create(tmp.prototype);
      obj.type = ShopBlockType.ShopBlockType.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER;
      ({ application_id: tmp3.applicationId, header_text: tmp3.headerText, subheader_text: tmp3.subheaderText, gradient_colors: tmp3.gradientColors, gradient_angle: tmp3.gradientAngle, sku_ids: tmp3.skuIds, end_time: tmp3.endTime, cta_type: tmp3.ctaType, logo_url: tmp3.logoUrl, terms_url: tmp3.termsUrl, background_image_url: tmp3.backgroundImageUrl } = arg0);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/SocialLayerStorefrontPromotionalBannerBlockRecord.tsx");

export { SocialLayerStorefrontPromotionalBannerBlockRecord };
