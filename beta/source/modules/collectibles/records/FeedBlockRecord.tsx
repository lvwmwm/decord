// Module ID: 7000
// Function ID: 7001
// Name: FeedBlockRecord
// Dependencies: [6996, 2]

// Module 7000 (FeedBlockRecord)
import ShopBlockType from "ShopBlockType" /* 6996 */;
import size from "module_2" /* 2 */;

class FeedBlockRecord {
  constructor(arg0) {
    const obj = Object.create(new.target.prototype);
    obj.type = ShopBlockType.ShopBlockType.FEED;
    ({ ranked_sku_ids: tmp.rankedSkuIds, sorted_sku_ids: tmp.sortedSkuIds } = arg0);
    return obj;
  }
  static fromServer(arg0) {
    if (typeof FeedBlockRecord === "function") {
      const obj = Object.create(tmp.prototype);
      obj.type = ShopBlockType.ShopBlockType.FEED;
      ({ ranked_sku_ids: tmp3.rankedSkuIds, sorted_sku_ids: tmp3.sortedSkuIds } = arg0);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/FeedBlockRecord.tsx");

export { FeedBlockRecord };
