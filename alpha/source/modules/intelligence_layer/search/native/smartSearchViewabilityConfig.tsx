// Module ID: 18748
// Function ID: 18749
// Name: smartSearchViewabilityConfig
// Dependencies: [9806, 13860, 13858, 2]

// Module 18748 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 9806 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13858 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13860 */;
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
