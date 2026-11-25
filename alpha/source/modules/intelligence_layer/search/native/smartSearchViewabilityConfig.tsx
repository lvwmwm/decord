// Module ID: 18979
// Function ID: 18980
// Name: smartSearchViewabilityConfig
// Dependencies: [13236, 8977, 13264, 13262, 2]

// Module 18979 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 8977 */;
import SmartSearchConstants from "SmartSearchConstants" /* 13236 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13262 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13264 */;
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
