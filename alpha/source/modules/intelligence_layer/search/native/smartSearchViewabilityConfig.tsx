// Module ID: 19371
// Function ID: 19372
// Name: smartSearchViewabilityConfig
// Dependencies: [9000, 14655, 14653, 2]

// Module 19371 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 9000 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 14653 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 14655 */;
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
