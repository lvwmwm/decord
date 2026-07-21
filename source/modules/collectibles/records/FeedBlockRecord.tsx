// Module ID: 6805
// Function ID: 53680
// Name: FeedBlockRecord
// Dependencies: []

// Module 6805 (FeedBlockRecord)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class FeedBlockRecord {
    constructor(arg0) {
      tmp = closure_2(this, FeedBlockRecord);
      this.type = FeedBlockRecord(closure_1[2]).ShopBlockType.FEED;
      ({ ranked_sku_ids: this.rankedSkuIds, sorted_sku_ids: this.sortedSkuIds } = arg0);
      return;
    }
  }
  const arg1 = FeedBlockRecord;
  const items = [
    {
      key: "fromServer",
      value(arg0) {
        return new FeedBlockRecord(arg0);
      }
    }
  ];
  return callback(FeedBlockRecord, null, items);
}();
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/collectibles/records/FeedBlockRecord.tsx");

export const FeedBlockRecord = tmp2;
