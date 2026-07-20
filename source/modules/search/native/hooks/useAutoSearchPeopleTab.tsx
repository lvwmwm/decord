// Module ID: 15279
// Function ID: 116204
// Name: useAutoSearchPeopleTab
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0]
// Exports: useAutoSearchPeopleTab

// Module 15279 (useAutoSearchPeopleTab)
import closure_3 from "result";
import closure_4 from "result";
import { SEARCH_TEXT_INPUT_DEBOUNCE_TIME as closure_5 } from "result";
import result from "result";

result = result.fileFinishedImporting("modules/search/native/hooks/useAutoSearchPeopleTab.tsx");

export const useAutoSearchPeopleTab = function useAutoSearchPeopleTab(searchContext, arg1) {
  arg1 = searchContext;
  const importDefault = arg1;
  const items = [arg1, searchContext];
  const effect = React.useEffect(() => {
    if (!arg1) {
      const userAffinitiesV2 = arg0(closure_2[3]).fetchUserAffinitiesV2();
      const obj = arg0(closure_2[3]);
      arg1(closure_2[4]).searchPeopleTab(arg0, "");
      const obj2 = arg1(closure_2[4]);
    }
  }, items);
  const items1 = [searchContext, arg1];
  const effect1 = React.useEffect(() => {
    if (!arg1) {
      const obj = arg0(closure_2[5]);
      const debounceResult = arg0(closure_2[5]).debounce((searchQueryString) => {
        if (!autocompleteVisible.isAutocompleteVisible(closure_0)) {
          callback(closure_2[4]).searchPeopleTab(closure_0, searchQueryString);
          const obj = callback(closure_2[4]);
        }
      }, closure_5);
      return arg1(closure_2[6]).subscribeTextInputValue(arg0, debounceResult);
    }
  }, items1);
  const items2 = [searchContext];
  const effect2 = React.useEffect(() => () => {
    callback(closure_2[4]).cleanupPeopleTab(closure_0);
  }, items2);
};
