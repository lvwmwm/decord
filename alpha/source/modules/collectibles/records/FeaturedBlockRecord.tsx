// Module ID: 7664
// Function ID: 7665
// Name: FeaturedBlockRecord
// Dependencies: [7665, 5626, 7666, 2]

// Module 7664 (FeaturedBlockRecord)
import ShopBlockType from "ShopBlockType" /* 5626 */;
import FeaturedCategorySubblockRecord from "FeaturedCategorySubblockRecord" /* 7665 */;
import FeaturedSubblockType from "FeaturedSubblockType" /* 7666 */;
import size from "module_2" /* 2 */;

const f98931 = (type) => {
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
    obj.subblocks = subblocks.map(f98931);
    return obj;
  }
  static fromServer(subblocks) {
    if (typeof FeaturedBlockRecord === "function") {
      const obj = Object.create(tmp.prototype);
      obj.type = ShopBlockType.ShopBlockType.FEATURED;
      subblocks = subblocks.subblocks;
      obj.subblocks = subblocks.map(f98931);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/FeaturedBlockRecord.tsx");

export { FeaturedBlockRecord };
