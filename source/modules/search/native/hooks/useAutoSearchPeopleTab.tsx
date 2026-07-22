// Module ID: 15297
// Function ID: 116305
// Name: useAutoSearchPeopleTab
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0]
// Exports: useAutoSearchPeopleTab

// Module 15297 (useAutoSearchPeopleTab)
import __exportStarResult1 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import { SEARCH_TEXT_INPUT_DEBOUNCE_TIME as closure_5 } from "__exportStarResult1";

const result = require("__exportStarResult1").fileFinishedImporting("modules/search/native/hooks/useAutoSearchPeopleTab.tsx");

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
