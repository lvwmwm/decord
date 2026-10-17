// Module ID: 17835
// Function ID: 17836
// Name: smartSearchViewabilityConfig
// Dependencies: [9614, 13004, 13002, 2]

// Module 17835 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 9614 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13002 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13004 */;
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
