// Module ID: 7036
// Function ID: 7037
// Name: fromServer
// Dependencies: [7037, 7035, 7038, 2]

// Module 7036 (fromServer)
import { FeaturedCategorySubblockRecord as closure_2 } from "fromServer";

let prototype;
prototype = function FeaturedBlockRecord(subblocks) {
  const obj = Object.create(new.target.prototype);
  obj.type = require(7035) /* ShopBlockType */.ShopBlockType.FEATURED;
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
  obj.type = require(7035) /* ShopBlockType */.ShopBlockType.FEATURED;
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
