// Module ID: 17491
// Function ID: 17492
// Name: smartSearchViewabilityConfig
// Dependencies: [9322, 12612, 12610, 2]

// Module 17491 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 9322 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 12610 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 12612 */;
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
