// Module ID: 19058
// Function ID: 19059
// Name: smartSearchViewabilityConfig
// Dependencies: [13296, 9020, 13324, 13322, 2]

// Module 19058 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 9020 */;
import SmartSearchConstants from "SmartSearchConstants" /* 13296 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13322 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13324 */;
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
