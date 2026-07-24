// Module ID: 6818
// Function ID: 53778
// Name: WideBannerBlockRecord
// Dependencies: [6, 7, 6805, 2]

// Module 6818 (WideBannerBlockRecord)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
const tmp2 = (() => {
  class WideBannerBlockRecord {
    constructor(arg0) {
      tmp = outer1_2(this, WideBannerBlockRecord);
      this.type = WideBannerBlockRecord(outer1_1[2]).ShopBlockType.WIDE_BANNER;
      ({ title: this.title, body: this.body, category_store_listing_id: this.categoryStoreListingId, banner_text_color: this.bannerTextColor, banner_body_text_color: this.bannerBodyTextColor, disable_cta: this.disableCta, wide_banner_url: this.bannerURL, wide_banner_animated_url: this.bannerAnimatedURL, logo_url: this.logoURL, cta_text: this.ctaText, cta_route: this.ctaRoute, is_dismissible: this.isDismissible, dismissible_content_version: this.dismissibleContentVersion } = arg0);
      return;
    }
  }
  const items = [
    {
      key: "fromServer",
      value(arg0) {
        return new WideBannerBlockRecord(arg0);
      }
    }
  ];
  return callback(WideBannerBlockRecord, null, items);
})();
const result = require("ShopBlockType").fileFinishedImporting("modules/collectibles/records/WideBannerBlockRecord.tsx");

export const WideBannerBlockRecord = tmp2;
