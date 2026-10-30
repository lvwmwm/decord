// Module ID: 7742
// Function ID: 7743
// Name: FeaturedBlockRecord
// Dependencies: [7743, 5684, 7744, 2]

// Module 7742 (FeaturedBlockRecord)
import ShopBlockType from "ShopBlockType" /* 5684 */;
import FeaturedCategorySubblockRecord from "FeaturedCategorySubblockRecord" /* 7743 */;
import FeaturedSubblockType from "FeaturedSubblockType" /* 7744 */;
import size from "module_2" /* 2 */;

const f91304 = (type) => {
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
    obj.subblocks = subblocks.map(f91304);
    return obj;
  }
  static fromServer(subblocks) {
    if (typeof FeaturedBlockRecord === "function") {
      const obj = Object.create(tmp.prototype);
      obj.type = ShopBlockType.ShopBlockType.FEATURED;
      subblocks = subblocks.subblocks;
      obj.subblocks = subblocks.map(f91304);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/FeaturedBlockRecord.tsx");

export { FeaturedBlockRecord };
