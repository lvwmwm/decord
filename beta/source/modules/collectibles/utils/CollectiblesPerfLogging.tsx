// Module ID: 7763
// Function ID: 7764
// Name: CollectiblesPerfLogging
// Dependencies: [1072, 1252, 2]
// Exports: trackShopPerf

// Module 7763 (CollectiblesPerfLogging)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesPerfLogging.tsx");

export const CollectiblesShopPerfCheckpoint = { SHOP_MOUNTED: "shop_mounted", CATEGORIES_FETCH_STARTED: "categories_fetch_started", CATEGORIES_FETCH_COMPLETED: "categories_fetch_completed", SHOP_HOME_FETCH_STARTED: "shop_home_fetch_started", SHOP_HOME_FETCH_COMPLETED: "shop_home_fetch_completed", SHOP_RENDERED: "shop_rendered" };
export function trackShopPerf(logPerf) {
  let cacheDisabled;
  let checkpoint;
  let sessionId;
  let tab;
  let unpublishedCategoriesShown;
  ({ sessionId, checkpoint, tab, unpublishedCategoriesShown, cacheDisabled } = logPerf);
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.COLLECTIBLES_SHOP_PERF_TRACKED, { page_session_id: sessionId, checkpoint, tab, unpublished_categories_shown: unpublishedCategoriesShown, cache_disabled: cacheDisabled });
}
