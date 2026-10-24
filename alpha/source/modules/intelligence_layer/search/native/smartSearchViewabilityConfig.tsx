// Module ID: 18140
// Function ID: 18141
// Name: smartSearchViewabilityConfig
// Dependencies: [9714, 13242, 13240, 2]

// Module 18140 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 9714 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13240 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13242 */;
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
