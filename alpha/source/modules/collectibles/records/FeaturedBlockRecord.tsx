// Module ID: 7288
// Function ID: 7289
// Name: FeaturedBlockRecord
// Dependencies: [7289, 7287, 7290, 2]

// Module 7288 (FeaturedBlockRecord)
import ShopBlockType from "ShopBlockType" /* 7287 */;
import FeaturedCategorySubblockRecord from "FeaturedCategorySubblockRecord" /* 7289 */;
import FeaturedSubblockType from "FeaturedSubblockType" /* 7290 */;
import size from "module_2" /* 2 */;

const f95759 = (type) => {
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
    obj.subblocks = subblocks.map(f95759);
    return obj;
  }
  static fromServer(subblocks) {
    if (typeof FeaturedBlockRecord === "function") {
      const obj = Object.create(tmp.prototype);
      obj.type = ShopBlockType.ShopBlockType.FEATURED;
      subblocks = subblocks.subblocks;
      obj.subblocks = subblocks.map(f95759);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/FeaturedBlockRecord.tsx");

export { FeaturedBlockRecord };
