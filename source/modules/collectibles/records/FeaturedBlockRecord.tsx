// Module ID: 6806
// Function ID: 53732
// Name: FeaturedBlockRecord
// Dependencies: [6, 7, 6807, 6805, 6808, 2]

// Module 6806 (FeaturedBlockRecord)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import { FeaturedCategorySubblockRecord as closure_4 } from "FeaturedCategorySubblockRecord";

const require = arg1;
const tmp2 = (() => {
  class FeaturedBlockRecord {
    constructor(arg0) {
      tmp = outer1_2(this, FeaturedBlockRecord);
      this.type = FeaturedBlockRecord(outer1_1[3]).ShopBlockType.FEATURED;
      subblocks = arg0.subblocks;
      this.subblocks = subblocks.map((type) => {
        if (type.type === FeaturedBlockRecord(outer2_1[4]).FeaturedSubblockType.CATEGORY) {
          let fromServerResult = outer2_4.fromServer(type);
        } else {
          type = type.type;
          fromServerResult = type;
        }
        return fromServerResult;
      });
      return;
    }
  }
  const items = [
    {
      key: "fromServer",
      value(subblocks) {
        return new FeaturedBlockRecord(subblocks);
      }
    }
  ];
  return callback(FeaturedBlockRecord, null, items);
})();
const result = require("FeaturedCategorySubblockRecord").fileFinishedImporting("modules/collectibles/records/FeaturedBlockRecord.tsx");

export const FeaturedBlockRecord = tmp2;
