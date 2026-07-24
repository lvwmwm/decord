// Module ID: 6824
// Function ID: 53824
// Name: CollectiblesShopPerfCheckpoint
// Dependencies: [653, 675, 2]
// Exports: trackShopPerf

// Module 6824 (CollectiblesShopPerfCheckpoint)
import { AnalyticEvents } from "ME";

const result = require("set").fileFinishedImporting("modules/collectibles/utils/CollectiblesPerfLogging.tsx");

export const CollectiblesShopPerfCheckpoint = { SHOP_MOUNTED: "shop_mounted", CATEGORIES_FETCH_STARTED: "categories_fetch_started", CATEGORIES_FETCH_COMPLETED: "categories_fetch_completed", SHOP_HOME_FETCH_STARTED: "shop_home_fetch_started", SHOP_HOME_FETCH_COMPLETED: "shop_home_fetch_completed", SHOP_RENDERED: "shop_rendered" };
export const trackShopPerf = function trackShopPerf(arg0) {
  let cacheDisabled;
  let checkpoint;
  let sessionId;
  let tab;
  let unpublishedCategoriesShown;
  ({ sessionId, checkpoint, tab, unpublishedCategoriesShown, cacheDisabled } = arg0);
  importDefault(675).track(AnalyticEvents.COLLECTIBLES_SHOP_PERF_TRACKED, { page_session_id: sessionId, checkpoint, tab, unpublished_categories_shown: unpublishedCategoriesShown, cache_disabled: cacheDisabled });
};
