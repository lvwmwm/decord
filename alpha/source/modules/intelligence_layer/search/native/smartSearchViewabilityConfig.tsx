// Module ID: 18955
// Function ID: 18956
// Name: smartSearchViewabilityConfig
// Dependencies: [9958, 14041, 14039, 2]

// Module 18955 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 9958 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 14039 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 14041 */;
import size from "module_2" /* 2 */;

const SearchListItemTypes = SearchConstants.SearchListItemTypes;
let obj = {
  viewabilityConfig: { viewAreaCoveragePercentThreshold: 33, waitForInteraction: false },
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
