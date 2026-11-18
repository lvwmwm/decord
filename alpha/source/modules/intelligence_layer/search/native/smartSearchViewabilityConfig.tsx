// Module ID: 18881
// Function ID: 18882
// Name: smartSearchViewabilityConfig
// Dependencies: [8488, 13149, 13147, 2]

// Module 18881 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 8488 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13147 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13149 */;
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
