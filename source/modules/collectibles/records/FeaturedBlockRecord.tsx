// Module ID: 6927
// Function ID: 6928
// Name: fromServer
// Dependencies: [6928, 6926, 6929, 2]

// Module 6927 (fromServer)
import { FeaturedCategorySubblockRecord as closure_2 } from "fromServer";

let prototype;
prototype = function FeaturedBlockRecord(subblocks) {
  const obj = Object.create(new.target.prototype);
  obj.type = require(6926) /* ShopBlockType */.ShopBlockType.FEATURED;
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
  obj.type = require(6926) /* ShopBlockType */.ShopBlockType.FEATURED;
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
