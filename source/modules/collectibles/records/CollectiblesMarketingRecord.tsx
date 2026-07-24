// Module ID: 6796
// Function ID: 53693
// Name: CollectiblesMarketingsRecord
// Dependencies: [6, 7, 6797, 6799, 6800, 6801, 6798, 2]

// Module 6796 (CollectiblesMarketingsRecord)
import CollectiblesMarketingType from "CollectiblesMarketingType";
import set from "set";
import { CollectiblesMarketingBadgeRecord as closure_4 } from "CollectiblesMarketingBadgeRecord";
import { CollectiblesMarketingBannerRecord as closure_5 } from "CollectiblesMarketingBannerRecord";
import { CollectiblesMarketingCoachmarkRecord as closure_6 } from "CollectiblesMarketingCoachmarkRecord";
import CollectiblesMarketingTabTooltipRecord from "CollectiblesMarketingTabTooltipRecord";

const require = arg1;
const tmp2 = (() => {
  class CollectiblesMarketingsRecord {
    constructor(arg0) {
      tmp = outer1_2(this, CollectiblesMarketingsRecord);
      this.marketingsBySurfaces = arg0;
      return;
    }
  }
  let items = [
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
          if (CollectiblesMarketingsRecord(outer2_1[6]).CollectiblesMarketingType.BADGE === type) {
            const items = [tmp, outer2_4.fromServer(tmp2)];
            return items;
          } else if (CollectiblesMarketingsRecord(outer2_1[6]).CollectiblesMarketingType.BANNER === type) {
            const items1 = [tmp, outer2_5.fromServer(tmp2)];
            return items1;
          } else if (CollectiblesMarketingsRecord(outer2_1[6]).CollectiblesMarketingType.COACHMARK === type) {
            const items2 = [tmp, outer2_6.fromServer(tmp2)];
            return items2;
          } else if (CollectiblesMarketingsRecord(outer2_1[6]).CollectiblesMarketingType.TAB_TOOLTIP === type) {
            const items3 = [tmp, outer2_7.fromServer(tmp2)];
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
})();
const result = require("CollectiblesMarketingBadgeRecord").fileFinishedImporting("modules/collectibles/records/CollectiblesMarketingRecord.tsx");

export const CollectiblesMarketingsRecord = tmp2;
