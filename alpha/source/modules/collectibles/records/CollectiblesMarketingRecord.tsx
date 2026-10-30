// Module ID: 7733
// Function ID: 7734
// Name: CollectiblesMarketingRecord
// Dependencies: [7734, 7736, 7737, 7738, 7735, 2]
// Exports: rehydratePersistedMarketings

// Module 7733 (CollectiblesMarketingRecord)
import CollectiblesMarketingBadgeRecord from "CollectiblesMarketingBadgeRecord" /* 7734 */;
import CollectiblesMarketingType from "CollectiblesMarketingType" /* 7735 */;
import CollectiblesMarketingBannerRecord from "CollectiblesMarketingBannerRecord" /* 7736 */;
import CollectiblesMarketingCoachmarkRecord from "CollectiblesMarketingCoachmarkRecord" /* 7737 */;
import CollectiblesMarketingTabTooltipRecord from "CollectiblesMarketingTabTooltipRecord" /* 7738 */;
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
export function rehydratePersistedMarketings(arg0) {
  const tmp = CollectiblesMarketingsRecord;
  const entries = Object.entries(arg0);
  if (typeof CollectiblesMarketingsRecord === "function") {
    const obj = Object.create(tmp.prototype);
    obj.marketingsBySurfaces = tmp3;
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
