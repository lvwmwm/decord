// Module ID: 19042
// Function ID: 19043
// Name: smartSearchViewabilityConfig
// Dependencies: [13288, 9019, 13316, 13314, 2]

// Module 19042 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 9019 */;
import SmartSearchConstants from "SmartSearchConstants" /* 13288 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13314 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13316 */;
import size from "module_2" /* 2 */;

const SMART_SEARCH_VIEWABILITY_THRESHOLD_PERCENT = SmartSearchConstants.SMART_SEARCH_VIEWABILITY_THRESHOLD_PERCENT;
const SearchListItemTypes = SearchConstants.SearchListItemTypes;
let obj = {
  viewabilityConfig: { viewAreaCoveragePercentThreshold: SMART_SEARCH_VIEWABILITY_THRESHOLD_PERCENT, waitForInteraction: false },
  onViewableItemsChanged(viewableItems) {
    viewableItems = viewableItems.viewableItems;
    const someResult = viewableItems.some((item) => item.item.type === constants.SMART_SEARCH);
    const obj = SmartSearchAnalyticsManagerDefault;
    obj.setIsRowViewable(someResult, SearchSessionAnalyticsManagerDefault);
  }
};
const items = [obj];
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/smartSearchViewabilityConfig.tsx");

export const smartSearchViewabilityConfig = items;
