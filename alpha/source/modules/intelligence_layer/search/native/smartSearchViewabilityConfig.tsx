// Module ID: 17972
// Function ID: 17973
// Name: smartSearchViewabilityConfig
// Dependencies: [9672, 13130, 13128, 2]

// Module 17972 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 9672 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13128 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13130 */;
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
