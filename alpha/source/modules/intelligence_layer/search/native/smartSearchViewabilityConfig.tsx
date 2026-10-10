// Module ID: 17396
// Function ID: 17397
// Name: smartSearchViewabilityConfig
// Dependencies: [9312, 12058, 12056, 2]

// Module 17396 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 9312 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 12056 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 12058 */;
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
