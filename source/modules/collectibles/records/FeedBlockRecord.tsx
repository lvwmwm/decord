// Module ID: 6809
// Function ID: 53742
// Name: FeedBlockRecord
// Dependencies: [6, 7, 6805, 2]

// Module 6809 (FeedBlockRecord)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
const tmp2 = (() => {
  class FeedBlockRecord {
    constructor(arg0) {
      tmp = outer1_2(this, FeedBlockRecord);
      this.type = FeedBlockRecord(outer1_1[2]).ShopBlockType.FEED;
      ({ ranked_sku_ids: this.rankedSkuIds, sorted_sku_ids: this.sortedSkuIds } = arg0);
      return;
    }
  }
  const items = [
    {
      key: "fromServer",
      value(arg0) {
        return new FeedBlockRecord(arg0);
      }
    }
  ];
  return callback(FeedBlockRecord, null, items);
})();
const result = require("ShopBlockType").fileFinishedImporting("modules/collectibles/records/FeedBlockRecord.tsx");

export const FeedBlockRecord = tmp2;
