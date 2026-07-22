// Module ID: 6814
// Function ID: 53735
// Name: WideBannerBlockRecord
// Dependencies: []

// Module 6814 (WideBannerBlockRecord)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class WideBannerBlockRecord {
    constructor(arg0) {
      tmp = closure_2(this, WideBannerBlockRecord);
      this.type = WideBannerBlockRecord(closure_1[2]).ShopBlockType.WIDE_BANNER;
      ({ title: this.title, body: this.body, category_store_listing_id: this.categoryStoreListingId, banner_text_color: this.bannerTextColor, banner_body_text_color: this.bannerBodyTextColor, disable_cta: this.disableCta, wide_banner_url: this.bannerURL, wide_banner_animated_url: this.bannerAnimatedURL, logo_url: this.logoURL, cta_text: this.ctaText, cta_route: this.ctaRoute, is_dismissible: this.isDismissible, dismissible_content_version: this.dismissibleContentVersion } = arg0);
      return;
    }
  }
  const arg1 = WideBannerBlockRecord;
  const items = [
    {
      key: "fromServer",
      value(arg0) {
        return new WideBannerBlockRecord(arg0);
      }
    }
  ];
  return callback(WideBannerBlockRecord, null, items);
}();
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/collectibles/records/WideBannerBlockRecord.tsx");

export const WideBannerBlockRecord = tmp2;
