// Module ID: 17457
// Function ID: 17458
// Name: smartSearchViewabilityConfig
// Dependencies: [9308, 12062, 12060, 2]

// Module 17457 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 9308 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 12060 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 12062 */;
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
