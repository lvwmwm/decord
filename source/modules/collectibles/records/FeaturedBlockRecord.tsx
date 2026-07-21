// Module ID: 6802
// Function ID: 53670
// Name: FeaturedBlockRecord
// Dependencies: []

// Module 6802 (FeaturedBlockRecord)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = arg1(dependencyMap[2]).FeaturedCategorySubblockRecord;
const tmp2 = () => {
  class FeaturedBlockRecord {
    constructor(arg0) {
      tmp = closure_2(this, FeaturedBlockRecord);
      this.type = FeaturedBlockRecord(closure_1[3]).ShopBlockType.FEATURED;
      subblocks = arg0.subblocks;
      this.subblocks = subblocks.map((type) => {
        if (type.type === callback(closure_1[4]).FeaturedSubblockType.CATEGORY) {
          let fromServerResult = closure_4.fromServer(type);
        } else {
          type = type.type;
          fromServerResult = type;
        }
        return fromServerResult;
      });
      return;
    }
  }
  const arg1 = FeaturedBlockRecord;
  const items = [
    {
      key: "fromServer",
      value(subblocks) {
        return new FeaturedBlockRecord(subblocks);
      }
    }
  ];
  return callback(FeaturedBlockRecord, null, items);
}();
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/collectibles/records/FeaturedBlockRecord.tsx");

export const FeaturedBlockRecord = tmp2;
