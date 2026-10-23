// Module ID: 18108
// Function ID: 18109
// Name: smartSearchViewabilityConfig
// Dependencies: [9713, 13205, 13203, 2]

// Module 18108 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 9713 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13203 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13205 */;
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
