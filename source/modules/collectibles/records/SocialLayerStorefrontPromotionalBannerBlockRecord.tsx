// Module ID: 6817
// Function ID: 53774
// Name: SocialLayerStorefrontPromotionalBannerBlockRecord
// Dependencies: [6, 7, 6805, 2]

// Module 6817 (SocialLayerStorefrontPromotionalBannerBlockRecord)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
const tmp2 = (() => {
  class SocialLayerStorefrontPromotionalBannerBlockRecord {
    constructor(arg0) {
      tmp = outer1_2(this, SocialLayerStorefrontPromotionalBannerBlockRecord);
      this.type = SocialLayerStorefrontPromotionalBannerBlockRecord(outer1_1[2]).ShopBlockType.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER;
      ({ application_id: this.applicationId, header_text: this.headerText, gradient_colors: this.gradientColors, gradient_angle: this.gradientAngle, sku_ids: this.skuIds, end_time: this.endTime, cta_type: this.ctaType, logo_url: this.logoUrl } = arg0);
      return;
    }
  }
  const items = [
    {
      key: "fromServer",
      value(arg0) {
        return new SocialLayerStorefrontPromotionalBannerBlockRecord(arg0);
      }
    }
  ];
  return callback(SocialLayerStorefrontPromotionalBannerBlockRecord, null, items);
})();
const result = require("ShopBlockType").fileFinishedImporting("modules/collectibles/records/SocialLayerStorefrontPromotionalBannerBlockRecord.tsx");

export const SocialLayerStorefrontPromotionalBannerBlockRecord = tmp2;
