// Module ID: 5795
// Function ID: 50977
// Name: CollectiblesMarketingBannerRecord
// Dependencies: [6, 7, 5794, 2]

// Module 5795 (CollectiblesMarketingBannerRecord)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
const tmp2 = (() => {
  class CollectiblesMarketingBannerRecord {
    constructor(arg0) {
      tmp = outer1_2(this, CollectiblesMarketingBannerRecord);
      this.type = CollectiblesMarketingBannerRecord(outer1_1[2]).CollectiblesMarketingType.BANNER;
      ({ title: this.title, body: this.body, asset: this.asset, popout_asset: this.popoutAsset, version: this.version, revert_text_color: this.revertTextColor } = arg0);
      return;
    }
  }
  const items = [
    {
      key: "fromServer",
      value(arg0) {
        return new CollectiblesMarketingBannerRecord(arg0);
      }
    }
  ];
  return callback(CollectiblesMarketingBannerRecord, null, items);
})();
const result = require("CollectiblesMarketingType").fileFinishedImporting("modules/collectibles/records/CollectiblesMarketingBannerRecord.tsx");

export const CollectiblesMarketingBannerRecord = tmp2;
