// Module ID: 17765
// Function ID: 17766
// Name: smartSearchViewabilityConfig
// Dependencies: [9549, 12931, 12929, 2]

// Module 17765 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 9549 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 12929 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 12931 */;
import size from "module_2" /* 2 */;

const SearchListItemTypes = SearchConstants.SearchListItemTypes;
let obj = {
  viewabilityConfig: { viewAreaCoveragePercentThreshold: 33, waitForInteraction: false },
  onViewableItemsChanged(changed) {
    changed = changed.changed;
    const found = changed.find((item) => item.item.type === constants.SMART_SEARCH);
    if (null != found) {
      const obj = SmartSearchAnalyticsManagerDefault;
      obj.setIsRowViewable(found.isViewable, SearchSessionAnalyticsManagerDefault);
    }
  }
};
const items = [obj];
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/smartSearchViewabilityConfig.tsx");

export const smartSearchViewabilityConfig = items;
