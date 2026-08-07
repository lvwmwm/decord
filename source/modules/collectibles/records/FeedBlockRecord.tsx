// Module ID: 6976
// Function ID: 6977
// Name: fromServer
// Dependencies: [6972, 2]

// Module 6976 (fromServer)
let prototype;
prototype = function FeedBlockRecord(arg0) {
  const obj = Object.create(new.target.prototype);
  obj.type = require(6972) /* ShopBlockType */.ShopBlockType.FEED;
  ({ ranked_sku_ids: tmp.rankedSkuIds, sorted_sku_ids: tmp.sortedSkuIds } = arg0);
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(arg0) {
  if (typeof prototype !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(prototype.prototype);
  obj.type = require(6972) /* ShopBlockType */.ShopBlockType.FEED;
  ({ ranked_sku_ids: tmp2.rankedSkuIds, sorted_sku_ids: tmp2.sortedSkuIds } = arg0);
  return obj;
};
const result = require("set").fileFinishedImporting("modules/collectibles/records/FeedBlockRecord.tsx");

export const FeedBlockRecord = prototype;
