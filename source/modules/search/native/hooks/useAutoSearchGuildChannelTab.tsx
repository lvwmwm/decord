// Module ID: 15412
// Function ID: 118466
// Name: useAutoSearchGuildChannelTab
// Dependencies: [31, 11399, 10078, 11406, 22, 11398, 2]
// Exports: useAutoSearchGuildChannelTab

// Module 15412 (useAutoSearchGuildChannelTab)
import result from "result";
import { SEARCH_TEXT_INPUT_DEBOUNCE_TIME as closure_4 } from "SEARCH_TEXT_INPUT_DEBOUNCE_TIME";

const require = arg1;
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/search/native/hooks/useAutoSearchGuildChannelTab.tsx");

export const useAutoSearchGuildChannelTab = function useAutoSearchGuildChannelTab(searchContext, arg1) {
  let closure_0 = searchContext;
  let closure_1 = arg1;
  const items = [searchContext];
  const callback = React.useCallback((searchQueryString) => {
    let obj = searchContext(callback[2]);
    const guildIdFromSearchContext = obj.getGuildIdFromSearchContext(searchContext);
    if (null != guildIdFromSearchContext) {
      obj = { searchContext, searchQueryString, guildId: guildIdFromSearchContext };
      const result = callback(callback[3]).searchGuildChannelTab(obj);
      const obj2 = callback(callback[3]);
    }
  }, items);
  const items1 = [arg1, callback];
  const effect = React.useEffect(() => {
    if (!closure_1) {
      callback("");
    }
  }, items1);
  const items2 = [searchContext, arg1, callback];
  const effect1 = React.useEffect(() => {
    if (!callback) {
      const obj = searchContext(callback[4]);
      const debounceResult = searchContext(callback[4]).debounce(callback, outer1_4);
      return callback(callback[5]).subscribeTextInputValue(searchContext, debounceResult, true);
    }
  }, items2);
  const items3 = [searchContext];
  const effect2 = React.useEffect(() => () => {
    const result = callback(callback[3]).cleanupGuildChannelTab(outer1_0);
  }, items3);
};
