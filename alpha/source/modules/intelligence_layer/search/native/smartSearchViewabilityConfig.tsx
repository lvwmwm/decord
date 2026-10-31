// Module ID: 18790
// Function ID: 18791
// Name: smartSearchViewabilityConfig
// Dependencies: [9827, 13895, 13893, 2]

// Module 18790 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 9827 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13893 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13895 */;
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
