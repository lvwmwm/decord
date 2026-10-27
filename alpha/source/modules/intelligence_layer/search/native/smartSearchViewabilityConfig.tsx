// Module ID: 18187
// Function ID: 18188
// Name: smartSearchViewabilityConfig
// Dependencies: [9716, 13263, 13261, 2]

// Module 18187 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 9716 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13261 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13263 */;
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
