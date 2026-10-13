// Module ID: 12574
// Function ID: 12575
// Name: SearchSessionAnalyticsManager
// Dependencies: [9312, 12575, 12559, 2]

// Module 12574 (SearchSessionAnalyticsManager)
import TrackingConstants from "TrackingConstants" /* 9312 */;
import SearchUtils from "SearchUtils" /* 12559 */;
import AbstractSearchSessionAnalyticsManager from "AbstractSearchSessionAnalyticsManager" /* 12575 */;
import size from "module_2" /* 2 */;

const React2 = TrackingConstants.SEARCH_TAB_TO_ANALYTICS_SEARCH_TAB;
class SearchSessionAnalyticsManager extends AbstractSearchSessionAnalyticsManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.locations = new Map();
    new Map();
    applyArgumentsResult.selectedTabs = new Map();
    new Map();
    return applyArgumentsResult;
  }
  _initialize(searchContext, arg1) {
    const locations = this.locations;
    const obj = SearchUtils;
    const result = locations.set(obj.getSearchContextId(searchContext), arg1);
  }
  _terminate(searchContext) {
    const obj = SearchUtils;
    const searchContextId = obj.getSearchContextId(searchContext);
    const locations = this.locations;
    locations.delete(searchContextId);
    const selectedTabs = this.selectedTabs;
    selectedTabs.delete(searchContextId);
  }
  _transferSession() {

  }
  getLocation(searchContext) {
    const locations = this.locations;
    const obj = SearchUtils;
    return locations.get(obj.getSearchContextId(searchContext));
  }
  getSelectedTab(searchContext) {
    const selectedTabs = this.selectedTabs;
    const obj = SearchUtils;
    return selectedTabs.get(obj.getSearchContextId(searchContext));
  }
  setSelectedTab(searchContext, arg1) {
    const selectedTabs = this.selectedTabs;
    const obj = SearchUtils;
    const result = selectedTabs.set(obj.getSearchContextId(searchContext), closure_2[arg1]);
  }
}
const prototype = SearchSessionAnalyticsManager.prototype;
const searchSessionAnalyticsManager = new SearchSessionAnalyticsManager();
let result = size.fileFinishedImporting("modules/search/managers/native/SearchSessionAnalyticsManager.tsx");

export default searchSessionAnalyticsManager;
