// Module ID: 8109
// Function ID: 8110
// Name: FeedBlockRecord
// Dependencies: [5571, 2]

// Module 8109 (FeedBlockRecord)
import ShopBlockType from "ShopBlockType" /* 5571 */;
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
