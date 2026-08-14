// Module ID: 7106
// Function ID: 7107
// Name: fromServer
// Dependencies: [7102, 2]

// Module 7106 (fromServer)
let prototype;
prototype = function FeedBlockRecord(arg0) {
  const obj = Object.create(new.target.prototype);
  obj.type = require(7102) /* ShopBlockType */.ShopBlockType.FEED;
  ({ ranked_sku_ids: tmp.rankedSkuIds, sorted_sku_ids: tmp.sortedSkuIds } = arg0);
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(arg0) {
  if (typeof prototype !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(prototype.prototype);
  obj.type = require(7102) /* ShopBlockType */.ShopBlockType.FEED;
  ({ ranked_sku_ids: tmp2.rankedSkuIds, sorted_sku_ids: tmp2.sortedSkuIds } = arg0);
  return obj;
};
const result = require("set").fileFinishedImporting("modules/collectibles/records/FeedBlockRecord.tsx");

export const FeedBlockRecord = prototype;
