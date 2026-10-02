// Module ID: 16454
// Function ID: 16455
// Name: useIntelligenceSearchStatus
// Dependencies: [11715, 11739, 7307, 558, 576, 11742, 11716, 11751, 11741, 504, 2]

// Module 16454 (useIntelligenceSearchStatus)
import SearchConstants from "SearchConstants" /* 7307 */;
import SearchUtils from "SearchUtils" /* 11716 */;
import SearchQueryStore from "SearchQueryStore" /* 11715 */;
import IntelligenceSearchStore from "IntelligenceSearchStore" /* 11739 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const SearchTabs = SearchConstants.SearchTabs;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  let guildId;
  let tmp4;
  let tmp7;
  _require = searchContext;
  const tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(8);
  if (cResult[0] !== searchContext) {
    let guildIdFromSearchContext = null;
    const tmpResult = require("IntelligenceSearchUtils");
    if (tmpResult.isSupportedSearchContext(searchContext)) {
      const tmpResult4 = require("SearchUtils");
      guildIdFromSearchContext = tmpResult4.getGuildIdFromSearchContext(searchContext);
    }
    cResult[0] = searchContext;
    cResult[1] = guildIdFromSearchContext;
    tmp4 = guildIdFromSearchContext;
  } else {
    tmp4 = cResult[1];
  }
  dependencyMap = tmp4;
  const tmpResult5 = require("IntelligenceSearchExperiments");
  const isNlpSearchEnabled = tmpResult5.useIsNlpSearchEnabled(tmp4, "search");
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [isNlpSearchEnabled, IntelligenceSearchStore];
    cResult[2] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === tmp4) {
    if (cResult[4] === isNlpSearchEnabled) {
      let tmp10;
      let tmp11;
      if (cResult[5] === searchContext) {
        tmp10 = cResult[6];
        tmp11 = cResult[7];
      }
      const tmpResult6 = require("get initialized");
      return tmpResult6.useStateFromStoresObject(tmp7, tmp10, tmp11);
    }
  }
  const fn = function h() {
    const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(searchContext);
    const obj = SearchUtils;
    const searchTabFetchId = obj.getSearchTabFetchId(searchContext, SearchTabs.MESSAGES, searchResultsQuery);
    if (null != guildId) {
      let NOT_QUALIFIED;
      const tmp6 = isNlpSearchEnabled;
      if (tmp6) {
        let NOT_QUALIFIED2 = IntelligenceSearchStore.getStatus(tmp5, searchTabFetchId);
        if (NOT_QUALIFIED2 == null) {
          NOT_QUALIFIED2 = tmp2(11741).IntelligenceSearchStatus.NOT_QUALIFIED;
        }
        NOT_QUALIFIED = NOT_QUALIFIED2;
      }
      return { status: NOT_QUALIFIED, guildId, requestKey: searchTabFetchId };
    }
    NOT_QUALIFIED = tmp2(11741).IntelligenceSearchStatus.NOT_QUALIFIED;
  };
  const items1 = [searchContext, tmp4, isNlpSearchEnabled];
  cResult[3] = tmp4;
  cResult[4] = isNlpSearchEnabled;
  cResult[5] = searchContext;
  cResult[6] = fn;
  cResult[7] = items1;
  tmp11 = items1;
  tmp10 = fn;
}) : ((searchContext) => {
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
          NOT_QUALIFIED2 = tmp2(11741).IntelligenceSearchStatus.NOT_QUALIFIED;
        }
        NOT_QUALIFIED = NOT_QUALIFIED2;
      }
      return { status: NOT_QUALIFIED, guildId: guildIdFromSearchContext, requestKey: searchTabFetchId };
    }
    NOT_QUALIFIED = tmp2(11741).IntelligenceSearchStatus.NOT_QUALIFIED;
  }, items1);
});
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useIntelligenceSearchStatus.tsx");

export const useIntelligenceSearchStatus = tmp2;
