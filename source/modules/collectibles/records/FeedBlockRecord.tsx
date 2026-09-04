// Module ID: 7510
// Function ID: 7511
// Name: fromServer
// Dependencies: [7506, 2]

// Module 7510 (fromServer)
import set from "set" /* 2 */;
import ShopBlockType from "ShopBlockType" /* 7506 */;

let prototype;
prototype = function FeedBlockRecord(arg0) {
  const obj = Object.create(new.target.prototype);
  obj.type = ShopBlockType.ShopBlockType.FEED;
  ({ ranked_sku_ids: tmp.rankedSkuIds, sorted_sku_ids: tmp.sortedSkuIds } = arg0);
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(arg0) {
  if (typeof prototype !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(prototype.prototype);
  obj.type = ShopBlockType.ShopBlockType.FEED;
  ({ ranked_sku_ids: tmp2.rankedSkuIds, sorted_sku_ids: tmp2.sortedSkuIds } = arg0);
  return obj;
};
const result = set.fileFinishedImporting("modules/collectibles/records/FeedBlockRecord.tsx");

export const FeedBlockRecord = prototype;
