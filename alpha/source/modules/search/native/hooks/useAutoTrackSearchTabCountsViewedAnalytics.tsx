// Module ID: 17302
// Function ID: 17303
// Name: useAutoTrackSearchTabCountsViewedAnalytics
// Dependencies: [19, 8209, 12701, 2]
// Exports: useAutoTrackSearchTabCountsViewedAnalytics

// Module 17302 (useAutoTrackSearchTabCountsViewedAnalytics)
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12701 */;
import noop from "module_19" /* 19 */;

const SearchTabs = fn(8209).SearchTabs;
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/hooks/useAutoTrackSearchTabCountsViewedAnalytics.tsx");

export const useAutoTrackSearchTabCountsViewedAnalytics = function useAutoTrackSearchTabCountsViewedAnalytics(searchContext) {
  searchContext = searchContext.searchContext;
  const visibleTabCounts = searchContext.visibleTabCounts;
  const visibleTabs = searchContext.visibleTabs;
  closure_3 = visibleTabs.useRef(visibleTabs);
  const items = [visibleTabs];
  const effect = visibleTabs.useEffect(() => {
    closure_3.current = visibleTabs;
  }, items);
  const items1 = [searchContext, visibleTabCounts];
  const effect1 = visibleTabs.useEffect(() => {
    if (null != visibleTabCounts) {
      const _Object = Object;
      const keys = Object.keys(tmp);
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
        const obj2 = { searchContext, searchResultTotalCount: reduced, numMemberTabReturnedResults: null, numChannelTabReturnedResults: null, numPeopleTabReturnedResults: null, numMessageTabReturnedResults: null, numMediaTabReturnedResults: null, numFileTabReturnedResults: null, numLinkTabReturnedResults: null };
        const MEMBERS = SearchTabs.MEMBERS;
        let tmp4 = null;
        if (null != tmp) {
          let current = ref.current;
          let tmp3 = null;
          if (current.includes(MEMBERS)) {
            tmp3 = tmp[MEMBERS];
          }
          tmp4 = tmp3;
        }
        obj2.numMemberTabReturnedResults = tmp4;
        const GUILD_CHANNELS = tmp29.GUILD_CHANNELS;
        let tmp5 = null;
        if (null != tmp) {
          const current2 = ref.current;
          let tmp7 = null;
          if (current2.includes(GUILD_CHANNELS)) {
            tmp7 = tmp[GUILD_CHANNELS];
          }
          tmp5 = tmp7;
        }
        obj2.numChannelTabReturnedResults = tmp5;
        const PEOPLE = tmp29.PEOPLE;
        let tmp8 = null;
        if (null != tmp) {
          const current3 = ref.current;
          let tmp10 = null;
          if (current3.includes(PEOPLE)) {
            tmp10 = tmp[PEOPLE];
          }
          tmp8 = tmp10;
        }
        obj2.numPeopleTabReturnedResults = tmp8;
        const MESSAGES = tmp29.MESSAGES;
        let tmp11 = null;
        if (null != tmp) {
          const current4 = ref.current;
          let tmp13 = null;
          if (current4.includes(MESSAGES)) {
            tmp13 = tmp[MESSAGES];
          }
          tmp11 = tmp13;
        }
        obj2.numMessageTabReturnedResults = tmp11;
        const MEDIA = tmp29.MEDIA;
        let tmp14 = null;
        if (null != tmp) {
          const current5 = ref.current;
          let tmp16 = null;
          if (current5.includes(MEDIA)) {
            tmp16 = tmp[MEDIA];
          }
          tmp14 = tmp16;
        }
        obj2.numMediaTabReturnedResults = tmp14;
        const FILES = tmp29.FILES;
        let tmp17 = null;
        if (null != tmp) {
          const current6 = ref.current;
          let tmp19 = null;
          if (current6.includes(FILES)) {
            tmp19 = tmp[FILES];
          }
          tmp17 = tmp19;
        }
        obj2.numFileTabReturnedResults = tmp17;
        const LINKS = tmp29.LINKS;
        let tmp20 = null;
        if (null != tmp) {
          const current7 = ref.current;
          let tmp22 = null;
          if (current7.includes(LINKS)) {
            tmp22 = tmp[LINKS];
          }
          tmp20 = tmp22;
        }
        obj2.numLinkTabReturnedResults = tmp20;
        const result = search_tracking_TrackingDefault.trackSearchResultReturned(obj2);
      }
    }
  }, items1);
};
