// Module ID: 6813
// Function ID: 53720
// Name: SocialLayerStorefrontPromotionalBannerBlockRecord
// Dependencies: []

// Module 6813 (SocialLayerStorefrontPromotionalBannerBlockRecord)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class SocialLayerStorefrontPromotionalBannerBlockRecord {
    constructor(arg0) {
      tmp = closure_2(this, SocialLayerStorefrontPromotionalBannerBlockRecord);
      this.type = SocialLayerStorefrontPromotionalBannerBlockRecord(closure_1[2]).ShopBlockType.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER;
      ({ application_id: this.applicationId, header_text: this.headerText, gradient_colors: this.gradientColors, gradient_angle: this.gradientAngle, sku_ids: this.skuIds, end_time: this.endTime, cta_type: this.ctaType, logo_url: this.logoUrl } = arg0);
      return;
    }
  }
  const arg1 = SocialLayerStorefrontPromotionalBannerBlockRecord;
  const items = [
    {
      key: "fromServer",
      value(arg0) {
        return new SocialLayerStorefrontPromotionalBannerBlockRecord(arg0);
      }
    }
  ];
  return callback(SocialLayerStorefrontPromotionalBannerBlockRecord, null, items);
}();
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/collectibles/records/SocialLayerStorefrontPromotionalBannerBlockRecord.tsx");

export const SocialLayerStorefrontPromotionalBannerBlockRecord = tmp2;
