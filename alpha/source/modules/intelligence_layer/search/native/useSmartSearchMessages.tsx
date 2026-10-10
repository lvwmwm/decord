// Module ID: 17424
// Function ID: 17425
// Name: useSmartSearchMessages
// Dependencies: [19, 12035, 9312, 558, 576, 12037, 17324, 12074, 504, 12039, 2]

// Module 17424 (useSmartSearchMessages)
import SearchConstants from "SearchConstants" /* 9312 */;
import SmartSearchUtils from "SmartSearchUtils" /* 12037 */;
import SmartSearchTypes from "SmartSearchTypes" /* 12039 */;
import react from "react" /* 19 */;
import SuggestedSearchStore from "SuggestedSearchStore" /* 12035 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const SearchListItemTypes = SearchConstants.SearchListItemTypes;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSmartSearchMessages(arg0) {
  let closure_0;
  let hasKeywordResults;
  let obj2;
  let searchContext;
  let searchQueryString;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(13);
  ({ searchContext, searchQueryString, hasKeywordResults } = arg0);
  if (cResult[0] === searchContext) {
    let tmp5;
    if (cResult[1] === searchQueryString) {
      tmp5 = cResult[2];
    }
    _require = tmp5;
    const tmpResult = tmp(17324);
    const smartSearchStatus = tmpResult.useSmartSearchStatus(tmp5);
    let guildId;
    const useIsNlpSearchEnabled = tmp(12074).useIsNlpSearchEnabled;
    tmp(12074);
    if (tmp5 != null) {
      guildId = tmp5.guildId;
    }
    const _Symbol = Symbol;
    const isNlpSearchEnabled = useIsNlpSearchEnabled(guildId, "fetch_answer");
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [SuggestedSearchStore];
      cResult[3] = items;
    }
    if (cResult[4] !== tmp5) {
      const fn = function p() {
        const hasSuggestionsResult = null != closure_0 && SuggestedSearchStore.hasSuggestions(tmp);
        return hasSuggestionsResult;
      };
      const items1 = [tmp5];
      cResult[4] = tmp5;
      cResult[5] = fn;
      cResult[6] = items1;
    }
    tmp(504);
    let tmp20 = null;
    if (null != tmp5) {
      tmp20 = null;
      if (isNlpSearchEnabled) {
        tmp20 = null;
        if (!tmp4) {
          tmp20 = null;
          if (smartSearchStatus !== tmp(12039).SmartSearchStatus.NOT_QUALIFIED) {
            const tmpResult7 = tmp(12037);
            if (!tmpResult7.isSmartSearchEmptyOrErrored(smartSearchStatus)) {
              if (cResult[7] === hasKeywordResults) {
                let tmp21;
                if (cResult[8] === tmp5) {
                  tmp21 = cResult[9];
                }
                tmp20 = tmp21;
              }
              const element = { type: SearchListItemTypes.SMART_SEARCH, props: obj2 };
              obj2 = { smartSearchQuery: tmp5, hasKeywordResults };
              cResult[7] = hasKeywordResults;
              cResult[8] = tmp5;
              cResult[9] = element;
              tmp21 = element;
            } else {
              tmp20 = null;
            }
          }
        }
      }
    }
    if (cResult[10] === tmp20) {
      let tmp23;
      if (cResult[11] === smartSearchStatus) {
        tmp23 = cResult[12];
      }
      return tmp23;
    }
    const obj3 = { item: tmp20, status: smartSearchStatus };
    cResult[10] = tmp20;
    cResult[11] = smartSearchStatus;
    cResult[12] = obj3;
    tmp23 = obj3;
  }
  const tmpResult8 = tmp(12037);
  const smartSearchQuery = tmpResult8.getSmartSearchQuery(searchContext, searchQueryString);
  cResult[0] = searchContext;
  cResult[1] = searchQueryString;
  cResult[2] = smartSearchQuery;
  tmp5 = smartSearchQuery;
}) : (function useSmartSearchMessages(searchContext) {
  let items3;
  searchContext = searchContext.searchContext;
  const searchQueryString = searchContext.searchQueryString;
  const hasKeywordResults = searchContext.hasKeywordResults;
  const isKeywordFirstPageLoading = searchContext.isKeywordFirstPageLoading;
  let isNlpSearchEnabled;
  let stateFromStores;
  let obj = hasKeywordResults;
  const items = [searchContext, searchQueryString];
  const memo = hasKeywordResults.useMemo(() => {
    const obj = SmartSearchUtils;
    return obj.getSmartSearchQuery(searchContext, searchQueryString);
  }, items);
  let tmp2 = searchContext;
  const obj2 = searchContext(searchQueryString[6]);
  const smartSearchStatus = obj2.useSmartSearchStatus(memo);
  let tmp5 = searchContext(searchQueryString[7]);
  let guildId;
  const useIsNlpSearchEnabled = tmp5.useIsNlpSearchEnabled;
  const tmp3 = searchQueryString;
  if (memo != null) {
    guildId = memo.guildId;
  }
  isNlpSearchEnabled = useIsNlpSearchEnabled(guildId, "fetch_answer");
  const items1 = [isKeywordFirstPageLoading];
  const items2 = [memo];
  const tmp2Result = tmp2(tmp3[8]);
  stateFromStores = tmp2Result.useStateFromStores(items1, () => {
    const hasSuggestionsResult = null != memo && SuggestedSearchStore.hasSuggestions(tmp);
    return hasSuggestionsResult;
  }, items2);
  const obj3 = {
    item: obj.useMemo(() => {
      let obj;
      let tmp2 = null;
      if (null != memo) {
        tmp2 = null;
        if (isNlpSearchEnabled) {
          tmp2 = null;
          if (!isKeywordFirstPageLoading) {
            tmp2 = null;
            const tmp5 = smartSearchStatus;
            const tmp6 = require;
            if (smartSearchStatus !== SmartSearchTypes.SmartSearchStatus.NOT_QUALIFIED) {
              const tmp6Result = tmp6(12037);
              if (!tmp6Result.isSmartSearchEmptyOrErrored(tmp5)) {
                const element = { type: SearchListItemTypes.SMART_SEARCH, props: obj };
                tmp2 = element;
                obj = { smartSearchQuery: tmp, hasKeywordResults };
              } else {
                tmp2 = null;
              }
            }
          }
        }
      }
      return tmp2;
    }, items3),
    status: smartSearchStatus
  };
  items3 = [hasKeywordResults, stateFromStores, memo, isKeywordFirstPageLoading, isNlpSearchEnabled, smartSearchStatus];
  return obj3;
});
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSmartSearchMessages.tsx");

export const useSmartSearchMessages = tmp2;
