// Module ID: 18064
// Function ID: 18065
// Name: smartSearchViewabilityConfig
// Dependencies: [9691, 13182, 13180, 2]

// Module 18064 (smartSearchViewabilityConfig)
import SearchConstants from "SearchConstants" /* 9691 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13180 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13182 */;
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
