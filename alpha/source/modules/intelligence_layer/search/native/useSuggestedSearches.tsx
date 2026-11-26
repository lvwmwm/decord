// Module ID: 18943
// Function ID: 18944
// Name: useSuggestedSearches
// Dependencies: [19, 18944, 13316, 13314, 2]
// Exports: useSuggestedSearches

// Module 18943 (useSuggestedSearches)
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13314 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13316 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSuggestedSearches.tsx");

export function useSuggestedSearches(smartSearchQuery, source) {
  let closure_2;
  _require = smartSearchQuery;
  source = source.source;
  const trackShown = source.trackShown;
  let tmp = undefined !== trackShown && trackShown;
  dependencyMap = tmp;
  let obj = require("search/useSuggestedSearches");
  const suggestedSearches1 = obj.useSuggestedSearches(smartSearchQuery, { source });
  const suggestedSearches = suggestedSearches1.suggestedSearches;
  const items = [suggestedSearches, smartSearchQuery, source, tmp];
  const isLoadingSuggestedSearches = suggestedSearches1.isLoadingSuggestedSearches;
  const effect = suggestedSearches.useEffect(() => {
    const tmp = closure_2 && null != smartSearchQuery && 0 !== suggestedSearches.length;
    if (tmp) {
      const obj2 = { smartSearchQuery, suggestedSearches, suggestionSource: source };
      const obj = SmartSearchAnalyticsManagerDefault;
      const result = obj.trackSuggestedSearchesShownDeduped(obj2, SearchSessionAnalyticsManagerDefault);
    }
  }, items);
  return { suggestedSearches, isLoadingSuggestedSearches };
}
