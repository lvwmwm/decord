// Module ID: 18210
// Function ID: 18211
// Name: smartSearchViewabilityConfig
// Dependencies: [9746, 13279, 13277, 2]

// Module 18210 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 9746 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13277 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13279 */;
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
