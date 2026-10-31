// Module ID: 18789
// Function ID: 18790
// Name: useSmartSearchMessages
// Dependencies: [19, 13872, 9827, 13874, 18690, 13911, 504, 13876, 2]
// Exports: useSmartSearchMessages

// Module 18789 (useSmartSearchMessages)
import SearchConstants from "SearchConstants" /* 9827 */;
import SmartSearchUtils from "SmartSearchUtils" /* 13874 */;
import SmartSearchTypes from "SmartSearchTypes" /* 13876 */;
import react from "react" /* 19 */;
import SuggestedSearchStore from "SuggestedSearchStore" /* 13872 */;
import size from "module_2" /* 2 */;

const SearchListItemTypes = SearchConstants.SearchListItemTypes;
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSmartSearchMessages.tsx");

export function useSmartSearchMessages(searchContext) {
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
  const obj2 = searchContext(searchQueryString[4]);
  const smartSearchStatus = obj2.useSmartSearchStatus(memo);
  let tmp5 = searchContext(searchQueryString[5]);
  let guildId;
  const useIsNlpSearchEnabled = tmp5.useIsNlpSearchEnabled;
  const tmp3 = searchQueryString;
  if (memo != null) {
    guildId = memo.guildId;
  }
  isNlpSearchEnabled = useIsNlpSearchEnabled(guildId, "fetch_answer");
  const items1 = [isKeywordFirstPageLoading];
  const items2 = [memo];
  const tmp2Result = tmp2(tmp3[6]);
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
              const tmp6Result = tmp6(13874);
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
}
