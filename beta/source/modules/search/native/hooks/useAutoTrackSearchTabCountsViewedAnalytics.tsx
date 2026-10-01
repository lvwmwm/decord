// Module ID: 16550
// Function ID: 16551
// Name: useAutoTrackSearchTabCountsViewedAnalytics
// Dependencies: [19, 7303, 11841, 2]
// Exports: useAutoTrackSearchTabCountsViewedAnalytics

// Module 16550 (useAutoTrackSearchTabCountsViewedAnalytics)
import SearchConstants from "SearchConstants" /* 7303 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 11841 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const SearchTabs = SearchConstants.SearchTabs;
let result = size.fileFinishedImporting("modules/search/native/hooks/useAutoTrackSearchTabCountsViewedAnalytics.tsx");

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
    let tmp11;
    let tmp14;
    let tmp17;
    let tmp20;
    let tmp4;
    let tmp5;
    let tmp8;
    const tmp = visibleTabCounts;
    if (null != visibleTabCounts) {
      const _Object = Object;
      const keys = Object.keys(tmp);
      let num = 0;
      const reduced = keys.reduce((acc, item) => {
        let num = null;
        if (null != visibleTabCounts) {
          const current = ref.current;
          let tmp4 = null;
          if (current.includes(item)) {
            tmp4 = tmp[item];
          }
          num = tmp4;
        }
        if (num == null) {
          num = 0;
        }
        return acc + num;
      }, 0);
      if (reduced > 0) {
        const MEMBERS = SearchTabs.MEMBERS;
        const obj = { searchContext, searchResultTotalCount: reduced, numMemberTabReturnedResults: tmp4, numChannelTabReturnedResults: tmp5, numPeopleTabReturnedResults: tmp8, numMessageTabReturnedResults: tmp11, numMediaTabReturnedResults: tmp14, numFileTabReturnedResults: tmp17, numLinkTabReturnedResults: tmp20 };
        tmp4 = null;
        const trackSearchResultReturned = search_tracking_TrackingDefault.trackSearchResultReturned;
        if (null != tmp) {
          let current = ref.current;
          let tmp3 = null;
          if (current.includes(MEMBERS)) {
            tmp3 = tmp[MEMBERS];
          }
          tmp4 = tmp3;
        }
        const GUILD_CHANNELS = tmp30.GUILD_CHANNELS;
        tmp5 = null;
        if (null != tmp) {
          const current2 = ref.current;
          let tmp7 = null;
          if (current2.includes(GUILD_CHANNELS)) {
            tmp7 = tmp[GUILD_CHANNELS];
          }
          tmp5 = tmp7;
        }
        const PEOPLE = tmp30.PEOPLE;
        tmp8 = null;
        if (null != tmp) {
          const current3 = ref.current;
          let tmp10 = null;
          if (current3.includes(PEOPLE)) {
            tmp10 = tmp[PEOPLE];
          }
          tmp8 = tmp10;
        }
        const MESSAGES = tmp30.MESSAGES;
        tmp11 = null;
        if (null != tmp) {
          const current4 = ref.current;
          let tmp13 = null;
          if (current4.includes(MESSAGES)) {
            tmp13 = tmp[MESSAGES];
          }
          tmp11 = tmp13;
        }
        const MEDIA = tmp30.MEDIA;
        tmp14 = null;
        if (null != tmp) {
          const current5 = ref.current;
          let tmp16 = null;
          if (current5.includes(MEDIA)) {
            tmp16 = tmp[MEDIA];
          }
          tmp14 = tmp16;
        }
        const FILES = tmp30.FILES;
        tmp17 = null;
        if (null != tmp) {
          const current6 = ref.current;
          let tmp19 = null;
          if (current6.includes(FILES)) {
            tmp19 = tmp[FILES];
          }
          tmp17 = tmp19;
        }
        const LINKS = tmp30.LINKS;
        tmp20 = null;
        if (null != tmp) {
          const current7 = ref.current;
          let tmp22 = null;
          if (current7.includes(LINKS)) {
            tmp22 = tmp[LINKS];
          }
          tmp20 = tmp22;
        }
        const result = trackSearchResultReturned(obj);
      }
    }
  }, items1);
};
