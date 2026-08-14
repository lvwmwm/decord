// Module ID: 7103
// Function ID: 7104
// Name: fromServer
// Dependencies: [7104, 7102, 7105, 2]

// Module 7103 (fromServer)
import { FeaturedCategorySubblockRecord as closure_2 } from "fromServer";

let prototype;
prototype = function FeaturedBlockRecord(subblocks) {
  const obj = Object.create(new.target.prototype);
  obj.type = require(7102) /* ShopBlockType */.ShopBlockType.FEATURED;
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
  if (typeof prototype !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(prototype.prototype);
  obj.type = require(7102) /* ShopBlockType */.ShopBlockType.FEATURED;
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
