// Module ID: 7285
// Function ID: 7286
// Name: CollectiblesMarketingRecord
// Dependencies: [7286, 7288, 7289, 7290, 7287, 2]
// Exports: rehydratePersistedMarketings

// Module 7285 (CollectiblesMarketingRecord)
import CollectiblesMarketingBadgeRecord from "CollectiblesMarketingBadgeRecord" /* 7286 */;
import CollectiblesMarketingType from "CollectiblesMarketingType" /* 7287 */;
import CollectiblesMarketingBannerRecord from "CollectiblesMarketingBannerRecord" /* 7288 */;
import CollectiblesMarketingCoachmarkRecord from "CollectiblesMarketingCoachmarkRecord" /* 7289 */;
import CollectiblesMarketingTabTooltipRecord from "CollectiblesMarketingTabTooltipRecord" /* 7290 */;
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
export const rehydratePersistedMarketings = function rehydratePersistedMarketings(arg0) {
  const tmp = CollectiblesMarketingsRecord;
  const entries = Object.entries(arg0);
  if (typeof CollectiblesMarketingsRecord === "function") {
    const obj = Object.create(tmp.prototype);
    obj.marketingsBySurfaces = tmp3;
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
