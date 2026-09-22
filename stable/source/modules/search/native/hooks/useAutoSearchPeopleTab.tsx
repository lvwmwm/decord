// Module ID: 16836
// Function ID: 16837
// Name: useAutoSearchPeopleTab
// Dependencies: [19, 12472, 12486, 9978, 12494, 12, 12471, 2]
// Exports: useAutoSearchPeopleTab

// Module 16836 (useAutoSearchPeopleTab)
import _mod12 from "module_12" /* 12 */;
import UserAffinitiesActionCreators from "UserAffinitiesActionCreators" /* 9978 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 12471 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 12494 */;
import noop from "module_19" /* 19 */;
import SearchQueryStore from "SearchQueryStore" /* 12472 */;

require = fn;
let closure_5 = fn(12486).SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/hooks/useAutoSearchPeopleTab.tsx");

export const useAutoSearchPeopleTab = function useAutoSearchPeopleTab(searchContext, arg1) {
  closure_0 = searchContext;
  closure_1 = arg1;
  const items = [arg1, searchContext];
  const effect = noop.useEffect(() => {
    if (!closure_1) {
      const userAffinitiesV2 = UserAffinitiesActionCreators.fetchUserAffinitiesV2();
      SearchPlatformActionCreatorsDefault.searchPeopleTab(closure_0, "");
    }
  }, items);
  const items1 = [searchContext, arg1];
  const effect1 = noop.useEffect(() => {
    if (!closure_1) {
      const debounceResult = _mod12.debounce((searchQueryString) => {
        if (!autocompleteVisible.isAutocompleteVisible(searchContext)) {
          closure_1(12494).searchPeopleTab(searchContext, searchQueryString);
          const obj = closure_1(12494);
        }
      }, closure_5);
      return SearchPlatformUtilsDefault.subscribeTextInputValue(closure_0, debounceResult);
    }
  }, items1);
  const items2 = [searchContext];
  const effect2 = noop.useEffect(() => () => {
    closure_1(12494).cleanupPeopleTab(searchContext);
  }, items2);
};
