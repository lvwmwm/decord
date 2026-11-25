// Module ID: 18842
// Function ID: 18843
// Name: useAutoSearchPeopleTab
// Dependencies: [19, 13214, 13216, 9651, 13225, 12, 13200, 2]
// Exports: useAutoSearchPeopleTab

// Module 18842 (useAutoSearchPeopleTab)
import _mod12 from "module_12" /* 12 */;
import UserAffinitiesActionCreators from "UserAffinitiesActionCreators" /* 9651 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 13200 */;
import SearchPlatformConstants from "SearchPlatformConstants" /* 13216 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 13225 */;
import react from "react" /* 19 */;
import SearchQueryStore from "SearchQueryStore" /* 13214 */;
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
