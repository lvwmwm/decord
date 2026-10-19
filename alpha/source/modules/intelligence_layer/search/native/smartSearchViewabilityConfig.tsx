// Module ID: 17839
// Function ID: 17840
// Name: smartSearchViewabilityConfig
// Dependencies: [9614, 13012, 13010, 2]

// Module 17839 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 9614 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13010 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13012 */;
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
