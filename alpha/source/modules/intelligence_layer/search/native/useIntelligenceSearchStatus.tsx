// Module ID: 17204
// Function ID: 17205
// Name: useIntelligenceSearchStatus
// Dependencies: [12682, 12706, 8209, 12709, 12683, 12718, 504, 12708, 2]
// Exports: useIntelligenceSearchStatus

// Module 17204 (useIntelligenceSearchStatus)
import SearchUtils from "SearchUtils" /* 12683 */;
import SearchQueryStore from "SearchQueryStore" /* 12682 */;
import IntelligenceSearchStore from "IntelligenceSearchStore" /* 12706 */;

const require = globalThis.__r;

require = fn;
const SearchTabs = fn(8209).SearchTabs;
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useIntelligenceSearchStatus.tsx");

export const useIntelligenceSearchStatus = function useIntelligenceSearchStatus(searchContext) {
  _require = searchContext;
  let guildIdFromSearchContext = null;
  if (obj.isSupportedSearchContext(searchContext)) {
    guildIdFromSearchContext = tmp(tmp2[4]).getGuildIdFromSearchContext(searchContext);
    const tmpResult = tmp(tmp2[4]);
  }
  obj = require("IntelligenceSearchUtils");
  const isNlpSearchEnabled = require("IntelligenceSearchExperiments").useIsNlpSearchEnabled(guildIdFromSearchContext, "search");
  const tmpResult3 = require("IntelligenceSearchExperiments");
  const items = [isNlpSearchEnabled, IntelligenceSearchStore];
  const items1 = [searchContext, guildIdFromSearchContext, isNlpSearchEnabled];
  return require("initialize").useStateFromStoresObject(items, () => {
    const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(closure_0);
    const searchTabFetchId = SearchUtils.getSearchTabFetchId(closure_0, SearchTabs.MESSAGES, searchResultsQuery);
    if (null != guildIdFromSearchContext) {
      if (isNlpSearchEnabled) {
        let NOT_QUALIFIED2 = IntelligenceSearchStore.getStatus(tmp5, searchTabFetchId);
        if (NOT_QUALIFIED2 == null) {
          NOT_QUALIFIED2 = tmp2(12708).IntelligenceSearchStatus.NOT_QUALIFIED;
        }
        let NOT_QUALIFIED = NOT_QUALIFIED2;
      }
      const obj2 = { status: NOT_QUALIFIED, guildId: tmp5, requestKey: searchTabFetchId };
      return obj2;
    }
    NOT_QUALIFIED = tmp2(12708).IntelligenceSearchStatus.NOT_QUALIFIED;
  }, items1);
};
