// Module ID: 6792
// Function ID: 53649
// Name: CollectiblesMarketingsRecord
// Dependencies: []

// Module 6792 (CollectiblesMarketingsRecord)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = arg1(dependencyMap[2]).CollectiblesMarketingBadgeRecord;
let closure_5 = arg1(dependencyMap[3]).CollectiblesMarketingBannerRecord;
let closure_6 = arg1(dependencyMap[4]).CollectiblesMarketingCoachmarkRecord;
let closure_7 = importDefault(dependencyMap[5]);
const tmp2 = () => {
  class CollectiblesMarketingsRecord {
    constructor(arg0) {
      tmp = closure_2(this, CollectiblesMarketingsRecord);
      this.marketingsBySurfaces = arg0;
      return;
    }
  }
  const arg1 = CollectiblesMarketingsRecord;
  const items = [
    {
      key: "fromServer",
      value(marketings) {
        let tmp = CollectiblesMarketingsRecord;
        marketings = undefined;
        if (null != marketings) {
          marketings = marketings.marketings;
        }
        if (null == marketings) {
          marketings = {};
        }
        const entries = Object.entries(marketings);
        tmp = new tmp(Object.fromEntries(entries.map((arg0) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = arg0;
          let type;
          if (null != tmp2) {
            type = tmp2.type;
          }
          if (callback(closure_1[6]).CollectiblesMarketingType.BADGE === type) {
            const items = [tmp, closure_4.fromServer(tmp2)];
            return items;
          } else if (callback(closure_1[6]).CollectiblesMarketingType.BANNER === type) {
            const items1 = [tmp, closure_5.fromServer(tmp2)];
            return items1;
          } else if (callback(closure_1[6]).CollectiblesMarketingType.COACHMARK === type) {
            const items2 = [tmp, closure_6.fromServer(tmp2)];
            return items2;
          } else if (callback(closure_1[6]).CollectiblesMarketingType.TAB_TOOLTIP === type) {
            const items3 = [tmp, closure_7.fromServer(tmp2)];
            return items3;
          } else {
            const items4 = [tmp, undefined];
            return items4;
          }
        })));
        return tmp;
      }
    }
  ];
  return callback(CollectiblesMarketingsRecord, null, items);
}();
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/collectibles/records/CollectiblesMarketingRecord.tsx");

export const CollectiblesMarketingsRecord = tmp2;
