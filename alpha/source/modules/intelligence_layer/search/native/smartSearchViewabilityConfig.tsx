// Module ID: 18868
// Function ID: 18869
// Name: smartSearchViewabilityConfig
// Dependencies: [13113, 8878, 13141, 13139, 2]

// Module 18868 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 8878 */;
import SmartSearchConstants from "SmartSearchConstants" /* 13113 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13139 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13141 */;
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
