// Module ID: 18144
// Function ID: 18145
// Name: smartSearchViewabilityConfig
// Dependencies: [9714, 13246, 13244, 2]

// Module 18144 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 9714 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13244 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13246 */;
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
