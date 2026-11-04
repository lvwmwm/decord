// Module ID: 19079
// Function ID: 19080
// Name: useAutoSearchPeopleTab
// Dependencies: [19, 14118, 14120, 9296, 14129, 12, 14104, 2]
// Exports: useAutoSearchPeopleTab

// Module 19079 (useAutoSearchPeopleTab)
import _mod12 from "module_12" /* 12 */;
import UserAffinitiesActionCreators from "UserAffinitiesActionCreators" /* 9296 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 14104 */;
import SearchPlatformConstants from "SearchPlatformConstants" /* 14120 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 14129 */;
import react from "react" /* 19 */;
import SearchQueryStore from "SearchQueryStore" /* 14118 */;
import size from "module_2" /* 2 */;

let closure_5 = SearchPlatformConstants.SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
const result = size.fileFinishedImporting("modules/search/native/hooks/useAutoSearchPeopleTab.tsx");

export function useAutoSearchPeopleTab(searchContext, arg1) {
  let autocompleteVisible;
  let closure_0 = searchContext;
  let closure_1 = arg1;
  const items = [arg1, searchContext];
  const effect = react.useEffect(() => {
    const tmp = closure_1;
    if (!tmp) {
      const obj = UserAffinitiesActionCreators;
      const userAffinitiesV2 = obj.fetchUserAffinitiesV2();
      const obj2 = SearchPlatformActionCreatorsDefault;
      obj2.searchPeopleTab(searchContext, "");
    }
  }, items);
  const items1 = [searchContext, arg1];
  const effect1 = react.useEffect(() => {
    if (!closure_1) {
      let tmp = require;
      let obj = _mod12;
      const debounceResult = obj.debounce((searchQueryString) => {
        const tmp = searchContext;
        if (!autocompleteVisible.isAutocompleteVisible(searchContext)) {
          const obj = closure_1(dependencyMap[4]);
          obj.searchPeopleTab(tmp, searchQueryString);
        }
      }, closure_5);
      const obj2 = SearchPlatformUtilsDefault;
      return obj2.subscribeTextInputValue(searchContext, debounceResult);
    }
  }, items1);
  const items2 = [searchContext];
  const effect2 = react.useEffect(() => () => {
    const obj = closure_1(dependencyMap[4]);
    obj.cleanupPeopleTab(searchContext);
  }, items2);
}
