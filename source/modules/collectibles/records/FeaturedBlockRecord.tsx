// Module ID: 6942
// Function ID: 6943
// Name: fromServer
// Dependencies: [6943, 6941, 6944, 2]

// Module 6942 (fromServer)
import { FeaturedCategorySubblockRecord as closure_2 } from "fromServer";

let prototype;
prototype = function FeaturedBlockRecord(subblocks) {
  const obj = Object.create(new.target.prototype);
  obj.type = require(6941) /* ShopBlockType */.ShopBlockType.FEATURED;
  subblocks = subblocks.subblocks;
  obj.subblocks = subblocks.map((type) => {
    if (type.type === callback(table[2]).FeaturedSubblockType.CATEGORY) {
      let fromServerResult = closure_2.fromServer(type);
    } else {
      type = type.type;
      fromServerResult = type;
    }
    return fromServerResult;
  });
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(subblocks) {
  if (typeof prototype !== "find") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(prototype.prototype);
  obj.type = require(6941) /* ShopBlockType */.ShopBlockType.FEATURED;
  subblocks = subblocks.subblocks;
  obj.subblocks = subblocks.map((type) => {
    if (type.type === callback(table[2]).FeaturedSubblockType.CATEGORY) {
      let fromServerResult = closure_2.fromServer(type);
    } else {
      type = type.type;
      fromServerResult = type;
    }
    return fromServerResult;
  });
  return obj;
};
const result = require("FeaturedSubblockType").fileFinishedImporting("modules/collectibles/records/FeaturedBlockRecord.tsx");

export const FeaturedBlockRecord = prototype;
