// Module ID: 15462
// Function ID: 118808
// Name: useAutoTrackSearchTabCountsViewedAnalytics
// Dependencies: [31, 9141, 10108, 2]
// Exports: useAutoTrackSearchTabCountsViewedAnalytics

// Module 15462 (useAutoTrackSearchTabCountsViewedAnalytics)
import result from "result";
import { SearchTabs } from "SearchAutocompleteSelectAnalyticsActions";

let result = require("toAnalyticsSearchFilterType").fileFinishedImporting("modules/search/native/hooks/useAutoTrackSearchTabCountsViewedAnalytics.tsx");

export const useAutoTrackSearchTabCountsViewedAnalytics = function useAutoTrackSearchTabCountsViewedAnalytics(searchContext) {
  searchContext = searchContext.searchContext;
  const visibleTabCounts = searchContext.visibleTabCounts;
  const visibleTabs = searchContext.visibleTabs;
  let closure_3 = visibleTabs.useRef(visibleTabs);
  const items = [visibleTabs];
  const effect = visibleTabs.useEffect(() => {
    closure_3.current = visibleTabs;
  }, items);
  const items1 = [searchContext, visibleTabCounts];
  const effect1 = visibleTabs.useEffect(() => {
    function getSearchTabCount(FILES) {
      let tmp = null;
      if (null != outer1_1) {
        const current = outer1_3.current;
        let tmp3 = null;
        if (current.includes(FILES)) {
          tmp3 = outer1_1[FILES];
        }
        tmp = tmp3;
      }
      return tmp;
    }
    if (null != visibleTabCounts) {
      const _Object = Object;
      const keys = Object.keys(visibleTabCounts);
      const reduced = keys.reduce((arg0, FILES) => {
        const tmp = getSearchTabCount(FILES);
        let num = 0;
        if (null != tmp) {
          num = tmp;
        }
        return arg0 + num;
      }, 0);
      if (reduced > 0) {
        let obj = searchContext(visibleTabCounts[2]);
        obj = { searchContext: getSearchTabCount, searchResultTotalCount: reduced, numMemberTabReturnedResults: getSearchTabCount(constants.MEMBERS), numChannelTabReturnedResults: getSearchTabCount(constants.GUILD_CHANNELS), numPeopleTabReturnedResults: getSearchTabCount(constants.PEOPLE), numMessageTabReturnedResults: getSearchTabCount(constants.MESSAGES), numMediaTabReturnedResults: getSearchTabCount(constants.MEDIA), numFileTabReturnedResults: getSearchTabCount(constants.FILES), numLinkTabReturnedResults: getSearchTabCount(constants.LINKS) };
        const result = obj.trackSearchResultReturned(obj);
      }
    }
  }, items1);
};
