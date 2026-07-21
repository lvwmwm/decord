// Module ID: 6795
// Function ID: 53640
// Name: CollectiblesMarketingBannerRecord
// Dependencies: []

// Module 6795 (CollectiblesMarketingBannerRecord)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class CollectiblesMarketingBannerRecord {
    constructor(arg0) {
      tmp = closure_2(this, CollectiblesMarketingBannerRecord);
      this.type = CollectiblesMarketingBannerRecord(closure_1[2]).CollectiblesMarketingType.BANNER;
      ({ title: this.title, body: this.body, asset: this.asset, popout_asset: this.popoutAsset, version: this.version, revert_text_color: this.revertTextColor } = arg0);
      return;
    }
  }
  const arg1 = CollectiblesMarketingBannerRecord;
  const items = [
    {
      key: "fromServer",
      value(arg0) {
        return new CollectiblesMarketingBannerRecord(arg0);
      }
    }
  ];
  return callback(CollectiblesMarketingBannerRecord, null, items);
}();
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/collectibles/records/CollectiblesMarketingBannerRecord.tsx");

export const CollectiblesMarketingBannerRecord = tmp2;
