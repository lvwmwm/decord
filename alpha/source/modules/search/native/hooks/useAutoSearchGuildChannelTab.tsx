// Module ID: 19108
// Function ID: 19109
// Name: useAutoSearchGuildChannelTab
// Dependencies: [19, 14133, 14124, 14142, 12, 14117, 2]
// Exports: useAutoSearchGuildChannelTab

// Module 19108 (useAutoSearchGuildChannelTab)
import _mod12 from "module_12" /* 12 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 14117 */;
import SearchUtils from "SearchUtils" /* 14124 */;
import SearchPlatformConstants from "SearchPlatformConstants" /* 14133 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 14142 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_4 = SearchPlatformConstants.SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
let result = size.fileFinishedImporting("modules/search/native/hooks/useAutoSearchGuildChannelTab.tsx");

export function useAutoSearchGuildChannelTab(searchContext, arg1) {
  let closure_0 = searchContext;
  let closure_1 = arg1;
  const items = [searchContext];
  const callback = react.useCallback((searchQueryString) => {
    const obj = SearchUtils;
    const guildIdFromSearchContext = obj.getGuildIdFromSearchContext(searchContext);
    const tmp2 = searchContext;
    if (null != guildIdFromSearchContext) {
      const obj3 = { searchContext: tmp2, searchQueryString, guildId: guildIdFromSearchContext };
      const obj2 = SearchPlatformActionCreatorsDefault;
      const result = obj2.searchGuildChannelTab(obj3);
    }
  }, items);
  const items1 = [arg1, callback];
  const effect = react.useEffect(() => {
    const tmp = closure_1;
    if (!tmp) {
      callback("");
    }
  }, items1);
  const items2 = [searchContext, arg1, callback];
  const effect1 = react.useEffect(() => {
    if (!closure_1) {
      const obj = _mod12;
      const debounceResult = obj.debounce(callback, closure_4);
      const obj2 = SearchPlatformUtilsDefault;
      return obj2.subscribeTextInputValue(searchContext, debounceResult, true);
    }
  }, items2);
  const items3 = [searchContext];
  const effect2 = react.useEffect(() => () => {
    const obj = closure_1(callback[3]);
    const result = obj.cleanupGuildChannelTab(searchContext);
  }, items3);
}
