// Module ID: 7296
// Function ID: 7297
// Name: FeaturedBlockRecord
// Dependencies: [7297, 7295, 7298, 2]

// Module 7296 (FeaturedBlockRecord)
import ShopBlockType from "ShopBlockType" /* 7295 */;
import FeaturedCategorySubblockRecord from "FeaturedCategorySubblockRecord" /* 7297 */;
import FeaturedSubblockType from "FeaturedSubblockType" /* 7298 */;
import size from "module_2" /* 2 */;

const f96275 = (type) => {
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
    obj.subblocks = subblocks.map(f96275);
    return obj;
  }
  static fromServer(subblocks) {
    if (typeof FeaturedBlockRecord === "function") {
      const obj = Object.create(tmp.prototype);
      obj.type = ShopBlockType.ShopBlockType.FEATURED;
      subblocks = subblocks.subblocks;
      obj.subblocks = subblocks.map(f96275);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/FeaturedBlockRecord.tsx");

export { FeaturedBlockRecord };
