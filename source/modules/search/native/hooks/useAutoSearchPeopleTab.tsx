// Module ID: 15461
// Function ID: 118801
// Name: useAutoSearchPeopleTab
// Dependencies: [31, 10109, 11427, 8860, 11434, 22, 11426, 2]
// Exports: useAutoSearchPeopleTab

// Module 15461 (useAutoSearchPeopleTab)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SEARCH_TEXT_INPUT_DEBOUNCE_TIME as closure_5 } from "SEARCH_TEXT_INPUT_DEBOUNCE_TIME";

const require = arg1;
const result = require("SEARCH_TEXT_INPUT_DEBOUNCE_TIME").fileFinishedImporting("modules/search/native/hooks/useAutoSearchPeopleTab.tsx");

export const useAutoSearchPeopleTab = function useAutoSearchPeopleTab(searchContext, arg1) {
  let closure_0 = searchContext;
  let closure_1 = arg1;
  const items = [arg1, searchContext];
  const effect = React.useEffect(() => {
    if (!callback) {
      const userAffinitiesV2 = searchContext(outer1_2[3]).fetchUserAffinitiesV2();
      const obj = searchContext(outer1_2[3]);
      callback(outer1_2[4]).searchPeopleTab(searchContext, "");
      const obj2 = callback(outer1_2[4]);
    }
  }, items);
  const items1 = [searchContext, arg1];
  const effect1 = React.useEffect(() => {
    if (!callback) {
      let obj = searchContext(outer1_2[5]);
      const debounceResult = searchContext(outer1_2[5]).debounce((searchQueryString) => {
        if (!outer2_4.isAutocompleteVisible(outer1_0)) {
          callback(outer2_2[4]).searchPeopleTab(outer1_0, searchQueryString);
          const obj = callback(outer2_2[4]);
        }
      }, outer1_5);
      return callback(outer1_2[6]).subscribeTextInputValue(searchContext, debounceResult);
    }
  }, items1);
  const items2 = [searchContext];
  const effect2 = React.useEffect(() => () => {
    callback(outer2_2[4]).cleanupPeopleTab(outer1_0);
  }, items2);
};
