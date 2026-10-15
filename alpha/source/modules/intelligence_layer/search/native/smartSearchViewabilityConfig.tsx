// Module ID: 17731
// Function ID: 17732
// Name: smartSearchViewabilityConfig
// Dependencies: [9533, 12905, 12903, 2]

// Module 17731 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 9533 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 12903 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 12905 */;
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
