// Module ID: 18824
// Function ID: 18825
// Name: smartSearchViewabilityConfig
// Dependencies: [8576, 13223, 13221, 2]

// Module 18824 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 8576 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13221 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13223 */;
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
