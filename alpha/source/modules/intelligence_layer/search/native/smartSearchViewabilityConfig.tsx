// Module ID: 19184
// Function ID: 19185
// Name: smartSearchViewabilityConfig
// Dependencies: [9923, 14170, 14168, 2]

// Module 19184 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 9923 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 14168 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 14170 */;
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
