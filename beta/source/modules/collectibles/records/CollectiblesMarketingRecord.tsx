// Module ID: 7074
// Function ID: 7075
// Name: CollectiblesMarketingRecord
// Dependencies: [7075, 7077, 7078, 7079, 7076, 2]

// Module 7074 (CollectiblesMarketingRecord)
import CollectiblesMarketingBadgeRecord from "CollectiblesMarketingBadgeRecord" /* 7075 */;
import CollectiblesMarketingType from "CollectiblesMarketingType" /* 7076 */;
import CollectiblesMarketingBannerRecord from "CollectiblesMarketingBannerRecord" /* 7077 */;
import CollectiblesMarketingCoachmarkRecord from "CollectiblesMarketingCoachmarkRecord" /* 7078 */;
import CollectiblesMarketingTabTooltipRecord from "CollectiblesMarketingTabTooltipRecord" /* 7079 */;
import size from "module_2" /* 2 */;

let marketings;

let closure_2 = CollectiblesMarketingBadgeRecord.CollectiblesMarketingBadgeRecord;
let closure_3 = CollectiblesMarketingBannerRecord.CollectiblesMarketingBannerRecord;
let closure_4 = CollectiblesMarketingCoachmarkRecord.CollectiblesMarketingCoachmarkRecord;
class CollectiblesMarketingsRecord {
  constructor(marketingsBySurfaces) {
    const obj = Object.create(new.target.prototype);
    obj.marketingsBySurfaces = marketingsBySurfaces;
    return obj;
  }
  static fromServer(marketings) {
    const tmp = CollectiblesMarketingsRecord;
    marketings = undefined;
    const _Object = Object;
    if (marketings != null) {
      marketings = marketings.marketings;
    }
    if (marketings == null) {
      marketings = {};
    }
    const entries1 = entries(marketings);
    if (typeof tmp === "function") {
      const obj = Object.create(tmp.prototype);
      obj.marketingsBySurfaces = tmp3;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesMarketingRecord.tsx");

export { CollectiblesMarketingsRecord };
