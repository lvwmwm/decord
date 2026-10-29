// Module ID: 18689
// Function ID: 18690
// Name: smartSearchViewabilityConfig
// Dependencies: [9780, 13713, 13711, 2]

// Module 18689 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 9780 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13711 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13713 */;
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
