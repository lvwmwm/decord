// Module ID: 18693
// Function ID: 18694
// Name: useSuggestedSearches
// Dependencies: [19, 13872, 13873, 13911, 504, 13895, 13893, 2]
// Exports: useSuggestedSearches

// Module 18693 (useSuggestedSearches)
import SuggestedSearchStore2 from "SuggestedSearchStore" /* 13872 */;
import SmartSearchConstants from "SmartSearchConstants" /* 13873 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13893 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13895 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const SuggestedSearchStore = SuggestedSearchStore2;
let _require, dependencyMap;

const EMPTY_SUGGESTED_SEARCHES = SuggestedSearchStore2.EMPTY_SUGGESTED_SEARCHES;
let closure_6 = SmartSearchConstants.SUGGESTED_SEARCHES_WINDOW_SIZE;
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSuggestedSearches.tsx");

export function useSuggestedSearches(memo1, source) {
  let closure_2;
  let smartSearchQuery;
  let suggestedSearches;
  _require = memo1;
  source = source.source;
  const trackShown = source.trackShown;
  let tmp = undefined !== trackShown && trackShown;
  dependencyMap = tmp;
  let tmp2 = _require;
  let guildId;
  const useIsNlpSearchEnabled = require("SmartSearchExperiments").useIsNlpSearchEnabled;
  const tmp4 = require("SmartSearchExperiments");
  if (memo1 != null) {
    guildId = memo1.guildId;
  }
  const isNlpSearchEnabled = useIsNlpSearchEnabled(guildId, source);
  const items = [suggestedSearches];
  const items1 = [memo1, isNlpSearchEnabled];
  const tmp2Result = tmp2(504);
  suggestedSearches = tmp2Result.useStateFromStoresArray(items, () => {
    if (null != smartSearchQuery) {
      let nextSuggestions;
      const tmp2 = isNlpSearchEnabled;
      if (tmp2) {
        nextSuggestions = SuggestedSearchStore.getNextSuggestions(tmp, closure_6);
      }
      return nextSuggestions;
    }
    nextSuggestions = EMPTY_SUGGESTED_SEARCHES;
  }, items1);
  const items2 = [suggestedSearches];
  const items3 = [memo1, isNlpSearchEnabled];
  const items4 = [suggestedSearches, memo1, source, tmp];
  const tmp2Result2 = tmp2(504);
  const isLoadingSuggestedSearches = tmp2Result2.useStateFromStores(items2, () => {
    let tmp2 = null == smartSearchQuery;
    const tmp = smartSearchQuery;
    if (!tmp2) {
      tmp2 = !isNlpSearchEnabled;
    }
    const result = !tmp2 && SuggestedSearchStore.isLoadingSuggestedSearches(tmp);
    return result;
  }, items3);
  const effect = isNlpSearchEnabled.useEffect(() => {
    const tmp = closure_2 && null != smartSearchQuery && 0 !== suggestedSearches.length;
    if (tmp) {
      const obj2 = { smartSearchQuery, suggestedSearches, suggestionSource: source };
      const obj = SmartSearchAnalyticsManagerDefault;
      const result = obj.trackSuggestedSearchesShownDeduped(obj2, SearchSessionAnalyticsManagerDefault);
    }
  }, items4);
  return { suggestedSearches, isLoadingSuggestedSearches };
}
