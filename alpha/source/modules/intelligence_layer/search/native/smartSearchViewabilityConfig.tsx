// Module ID: 18455
// Function ID: 18456
// Name: smartSearchViewabilityConfig
// Dependencies: [9748, 13480, 13478, 2]

// Module 18455 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 9748 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13478 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13480 */;
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
