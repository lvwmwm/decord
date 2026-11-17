// Module ID: 19605
// Function ID: 19606
// Name: smartSearchViewabilityConfig
// Dependencies: [9077, 13842, 13840, 2]

// Module 19605 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 9077 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13840 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13842 */;
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
