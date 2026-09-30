// Module ID: 16675
// Function ID: 16676
// Name: useSuggestedSearches
// Dependencies: [12061, 12050, 12062, 504, 2]
// Exports: useSuggestedSearches

// Module 16675 (useSuggestedSearches)
import SuggestedSearchStore from "SuggestedSearchStore" /* 12061 */;

const require = globalThis.__r;

const require = fn;
const EMPTY_SUGGESTED_SEARCHES = fn(12061).EMPTY_SUGGESTED_SEARCHES;
let closure_4 = fn(12050).SUGGESTED_SEARCHES_WINDOW_SIZE;
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSuggestedSearches.tsx");

export const useSuggestedSearches = function useSuggestedSearches(memo1, guild_suggestions) {
  _require = memo1;
  let guildId;
  if (memo1 != null) {
    guildId = memo1.guildId;
  }
  isNlpSearchEnabled = require("SmartSearchExperiments").useIsNlpSearchEnabled(guildId, guild_suggestions);
  const obj2 = { suggestedSearches: null, isLoadingSuggestedSearches: null };
  const obj = require("SmartSearchExperiments");
  const items = [SuggestedSearchStore];
  const items1 = [memo1, isNlpSearchEnabled];
  obj2.suggestedSearches = require("initialize").useStateFromStoresArray(items, () => {
    if (null != closure_0) {
      if (isNlpSearchEnabled) {
        return SuggestedSearchStore.getNextSuggestions(tmp.guildId, tmp.channelIds, closure_4);
      }
    }
    return EMPTY_SUGGESTED_SEARCHES;
  }, items1);
  const tmpResult = require("initialize");
  const items2 = [SuggestedSearchStore];
  const items3 = [memo1, isNlpSearchEnabled];
  obj2.isLoadingSuggestedSearches = require("initialize").useStateFromStores(items2, () => {
    if (null != closure_0) {
      if (isNlpSearchEnabled) {
        return SuggestedSearchStore.isLoadingSuggestedSearches(tmp.guildId, tmp.channelIds);
      }
    }
    return false;
  }, items3);
  return obj2;
};
