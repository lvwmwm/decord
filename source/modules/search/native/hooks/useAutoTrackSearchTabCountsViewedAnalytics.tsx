// Module ID: 15287
// Function ID: 116235
// Name: useAutoTrackSearchTabCountsViewedAnalytics
// Dependencies: []
// Exports: useAutoTrackSearchTabCountsViewedAnalytics

// Module 15287 (useAutoTrackSearchTabCountsViewedAnalytics)
let closure_2 = importAll(dependencyMap[0]);
const SearchTabs = arg1(dependencyMap[1]).SearchTabs;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/search/native/hooks/useAutoTrackSearchTabCountsViewedAnalytics.tsx");

export const useAutoTrackSearchTabCountsViewedAnalytics = function useAutoTrackSearchTabCountsViewedAnalytics(searchContext) {
  searchContext = searchContext.searchContext;
  const importDefault = searchContext;
  const visibleTabCounts = searchContext.visibleTabCounts;
  const dependencyMap = visibleTabCounts;
  const visibleTabs = searchContext.visibleTabs;
  const React = visibleTabs;
  let closure_3 = React.useRef(visibleTabs);
  const items = [visibleTabs];
  const effect = React.useEffect(() => {
    closure_3.current = visibleTabs;
  }, items);
  const items1 = [searchContext, visibleTabCounts];
  const effect1 = React.useEffect(() => {
    function getSearchTabCount(FILES) {
      let tmp = null;
      if (null != closure_1) {
        const current = ref.current;
        let tmp3 = null;
        if (current.includes(FILES)) {
          tmp3 = closure_1[FILES];
        }
        tmp = tmp3;
      }
      return tmp;
    }
    const searchContext = getSearchTabCount;
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
        obj = { searchContext, searchResultTotalCount: reduced, numMemberTabReturnedResults: getSearchTabCount(constants.MEMBERS), numChannelTabReturnedResults: getSearchTabCount(constants.GUILD_CHANNELS), numPeopleTabReturnedResults: getSearchTabCount(constants.PEOPLE), numMessageTabReturnedResults: getSearchTabCount(constants.MESSAGES), numMediaTabReturnedResults: getSearchTabCount(constants.MEDIA), numFileTabReturnedResults: getSearchTabCount(constants.FILES), numLinkTabReturnedResults: getSearchTabCount(constants.LINKS) };
        const result = obj.trackSearchResultReturned(obj);
      }
    }
  }, items1);
};
