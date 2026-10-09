// Module ID: 17324
// Function ID: 17325
// Name: smartSearchViewabilityConfig
// Dependencies: [9285, 12014, 12012, 2]

// Module 17324 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 9285 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 12012 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 12014 */;
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
