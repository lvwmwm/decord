// Module ID: 7283
// Function ID: 7284
// Name: FeaturedBlockRecord
// Dependencies: [7284, 7282, 7285, 2]

// Module 7283 (FeaturedBlockRecord)
import ShopBlockType from "ShopBlockType" /* 7282 */;
import FeaturedCategorySubblockRecord from "FeaturedCategorySubblockRecord" /* 7284 */;
import FeaturedSubblockType from "FeaturedSubblockType" /* 7285 */;
import size from "module_2" /* 2 */;

const f95551 = (type) => {
  let fromServerResult;
  if (type.type === FeaturedSubblockType.FeaturedSubblockType.CATEGORY) {
    fromServerResult = closure_1_2.fromServer(type);
  } else {
    type = type.type;
    fromServerResult = type;
  }
  return fromServerResult;
};
let closure_2 = FeaturedCategorySubblockRecord.FeaturedCategorySubblockRecord;
class FeaturedBlockRecord {
  constructor(subblocks) {
    const obj = Object.create(new.target.prototype);
    obj.type = ShopBlockType.ShopBlockType.FEATURED;
    subblocks = subblocks.subblocks;
    obj.subblocks = subblocks.map(f95551);
    return obj;
  }
  static fromServer(subblocks) {
    if (typeof FeaturedBlockRecord === "function") {
      const obj = Object.create(tmp.prototype);
      obj.type = ShopBlockType.ShopBlockType.FEATURED;
      subblocks = subblocks.subblocks;
      obj.subblocks = subblocks.map(f95551);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/FeaturedBlockRecord.tsx");

export { FeaturedBlockRecord };
