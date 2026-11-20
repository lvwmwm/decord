// Module ID: 19563
// Function ID: 19564
// Name: smartSearchViewabilityConfig
// Dependencies: [9066, 14766, 14764, 2]

// Module 19563 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 9066 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 14764 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 14766 */;
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
