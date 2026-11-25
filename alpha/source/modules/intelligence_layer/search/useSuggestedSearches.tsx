// Module ID: 18881
// Function ID: 18882
// Name: search/useSuggestedSearches
// Dependencies: [13235, 13236, 13280, 504, 2]
// Exports: useSuggestedSearches

// Module 18881 (search/useSuggestedSearches)
import SuggestedSearchStore2 from "SuggestedSearchStore" /* 13235 */;
import SmartSearchConstants from "SmartSearchConstants" /* 13236 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const SuggestedSearchStore = SuggestedSearchStore2;
let _require;

const EMPTY_SUGGESTED_SEARCHES = SuggestedSearchStore2.EMPTY_SUGGESTED_SEARCHES;
let closure_4 = SmartSearchConstants.SUGGESTED_SEARCHES_WINDOW_SIZE;
let result = size.fileFinishedImporting("modules/intelligence_layer/search/useSuggestedSearches.tsx");

export function useSuggestedSearches(guildId, source) {
  let items;
  let items1;
  let items2;
  let items3;
  let tmpResult;
  let tmpResult2;
  _require = guildId;
  let isNlpSearchEnabled;
  let tmp = _require;
  let tmp2 = isNlpSearchEnabled;
  source = source.source;
  guildId = undefined;
  const useIsNlpSearchEnabled = require("SmartSearchExperiments").useIsNlpSearchEnabled;
  const tmp3 = require("SmartSearchExperiments");
  if (guildId != null) {
    guildId = guildId.guildId;
  }
  isNlpSearchEnabled = useIsNlpSearchEnabled(guildId, source);
  const obj = {
    suggestedSearches: tmpResult.useStateFromStoresArray(items, () => {
      if (null != guildId) {
        let nextSuggestions;
        const tmp2 = isNlpSearchEnabled;
        if (tmp2) {
          nextSuggestions = SuggestedSearchStore.getNextSuggestions(tmp, closure_4);
        }
        return nextSuggestions;
      }
      nextSuggestions = EMPTY_SUGGESTED_SEARCHES;
    }, items1),
    isLoadingSuggestedSearches: tmpResult2.useStateFromStores(items2, () => {
      let tmp2 = null == guildId;
      const tmp = guildId;
      if (!tmp2) {
        tmp2 = !isNlpSearchEnabled;
      }
      const result = !tmp2 && SuggestedSearchStore.isLoadingSuggestedSearches(tmp);
      return result;
    }, items3)
  };
  items = [SuggestedSearchStore];
  items1 = [guildId, isNlpSearchEnabled];
  items2 = [SuggestedSearchStore];
  items3 = [guildId, isNlpSearchEnabled];
  tmpResult = tmp(tmp2[3]);
  tmpResult2 = tmp(tmp2[3]);
  return obj;
}
