// Module ID: 17891
// Function ID: 17892
// Name: smartSearchViewabilityConfig
// Dependencies: [9642, 13062, 13060, 2]

// Module 17891 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 9642 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13060 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13062 */;
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
