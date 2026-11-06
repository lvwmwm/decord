// Module ID: 19092
// Function ID: 19093
// Name: smartSearchViewabilityConfig
// Dependencies: [9933, 14118, 14116, 2]

// Module 19092 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 9933 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 14116 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 14118 */;
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
