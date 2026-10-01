// Module ID: 16452
// Function ID: 16453
// Name: useIntelligenceSearchStatus
// Dependencies: [11822, 11846, 7303, 11849, 11823, 11858, 504, 11848, 2]
// Exports: useIntelligenceSearchStatus

// Module 16452 (useIntelligenceSearchStatus)
import SearchConstants from "SearchConstants" /* 7303 */;
import SearchUtils from "SearchUtils" /* 11823 */;
import SearchQueryStore from "SearchQueryStore" /* 11822 */;
import IntelligenceSearchStore from "IntelligenceSearchStore" /* 11846 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const SearchTabs = SearchConstants.SearchTabs;
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useIntelligenceSearchStatus.tsx");

export const useIntelligenceSearchStatus = function useIntelligenceSearchStatus(searchContext) {
  let guildIdFromSearchContext;
  _require = searchContext;
  const tmp2 = guildIdFromSearchContext;
  let obj = require("IntelligenceSearchUtils");
  guildIdFromSearchContext = null;
  if (obj.isSupportedSearchContext(searchContext)) {
    const tmpResult = require("SearchUtils");
    guildIdFromSearchContext = tmpResult.getGuildIdFromSearchContext(searchContext);
  }
  const tmpResult3 = require("IntelligenceSearchExperiments");
  const isNlpSearchEnabled = tmpResult3.useIsNlpSearchEnabled(guildIdFromSearchContext, "search");
  const items = [isNlpSearchEnabled, IntelligenceSearchStore];
  const items1 = [searchContext, guildIdFromSearchContext, isNlpSearchEnabled];
  const tmpResult4 = require("get initialized");
  return tmpResult4.useStateFromStoresObject(items, () => {
    const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(searchContext);
    const obj = SearchUtils;
    const searchTabFetchId = obj.getSearchTabFetchId(searchContext, SearchTabs.MESSAGES, searchResultsQuery);
    if (null != guildIdFromSearchContext) {
      let NOT_QUALIFIED;
      const tmp6 = isNlpSearchEnabled;
      if (tmp6) {
        let NOT_QUALIFIED2 = IntelligenceSearchStore.getStatus(tmp5, searchTabFetchId);
        if (NOT_QUALIFIED2 == null) {
          NOT_QUALIFIED2 = tmp2(11848).IntelligenceSearchStatus.NOT_QUALIFIED;
        }
        NOT_QUALIFIED = NOT_QUALIFIED2;
      }
      return { status: NOT_QUALIFIED, guildId: guildIdFromSearchContext, requestKey: searchTabFetchId };
    }
    NOT_QUALIFIED = tmp2(11848).IntelligenceSearchStatus.NOT_QUALIFIED;
  }, items1);
};
