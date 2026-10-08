// Module ID: 7273
// Function ID: 7274
// Name: CollectiblesMarketingRecord
// Dependencies: [7274, 7276, 7277, 7278, 7275, 2]

// Module 7273 (CollectiblesMarketingRecord)
import CollectiblesMarketingBadgeRecord from "CollectiblesMarketingBadgeRecord" /* 7274 */;
import CollectiblesMarketingType from "CollectiblesMarketingType" /* 7275 */;
import CollectiblesMarketingBannerRecord from "CollectiblesMarketingBannerRecord" /* 7276 */;
import CollectiblesMarketingCoachmarkRecord from "CollectiblesMarketingCoachmarkRecord" /* 7277 */;
import CollectiblesMarketingTabTooltipRecord from "CollectiblesMarketingTabTooltipRecord" /* 7278 */;
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
