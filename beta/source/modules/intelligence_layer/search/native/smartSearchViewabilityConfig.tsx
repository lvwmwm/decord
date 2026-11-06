// Module ID: 18792
// Function ID: 18793
// Name: smartSearchViewabilityConfig
// Dependencies: [9827, 13910, 13908, 2]

// Module 18792 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 9827 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13908 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13910 */;
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
