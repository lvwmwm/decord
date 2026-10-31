// Module ID: 18796
// Function ID: 18797
// Name: useAutoSearchMembersTab
// Dependencies: [19, 13885, 13887, 1072, 12, 13878, 13896, 13871, 2]
// Exports: useAutoSearchMembersTab

// Module 18796 (useAutoSearchMembersTab)
import _mod12 from "module_12" /* 12 */;
import Constants from "Constants" /* 1072 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 13871 */;
import SearchPlatformConstants from "SearchPlatformConstants" /* 13887 */;
import react from "react" /* 19 */;
import SearchQueryStore from "SearchQueryStore" /* 13885 */;
import size from "module_2" /* 2 */;

let closure_5 = SearchPlatformConstants.SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
const SearchTypes = Constants.SearchTypes;
let result = size.fileFinishedImporting("modules/search/native/hooks/useAutoSearchMembersTab.tsx");

export function useAutoSearchMembersTab(searchContext, arg1) {
  let autocompleteVisible;
  let closure_0 = searchContext;
  let closure_1 = arg1;
  const items = [arg1, searchContext];
  const effect = react.useEffect(() => {
    if (!closure_1) {
      const tmp = require;
      let obj = _mod12;
      const tmp3 = closure_5;
      const debounceResult = obj.debounce((searchQueryString) => {
        let tmp13;
        const obj = autocompleteVisible;
        if (!autocompleteVisible.isAutocompleteVisible(searchContext)) {
          const obj2 = searchContext(dependencyMap[5]);
          const guildIdFromSearchContext = obj2.getGuildIdFromSearchContext(tmp);
          if (null != guildIdFromSearchContext) {
            const channelIds = obj.getChannelIds(tmp);
            let tmp8 = null;
            if (0 !== channelIds.size) {
              let first = null;
              if (1 === channelIds.size) {
                const _Array = Array;
                first = Array.from(channelIds)[0];
              }
              tmp8 = first;
            }
            const obj3 = { searchContext, searchQueryString, guildId: guildIdFromSearchContext, channelId: tmp8, threadId: tmp13 };
            tmp13 = null;
            const searchGuildMemberTab = closure_1(tmp3[6]).searchGuildMemberTab;
            closure_1(dependencyMap[6]);
            if (searchContext.type === constants.THREAD) {
              tmp13 = tmp8;
            }
            searchGuildMemberTab(obj3);
          }
        }
      }, closure_5);
      let obj2 = SearchPlatformUtilsDefault;
      return obj2.subscribeTextInputValue(searchContext, debounceResult);
    }
  }, items);
  const items1 = [searchContext];
  const effect1 = react.useEffect(() => () => {
    const obj = closure_1(dependencyMap[6]);
    const result = obj.cleanupGuildMemberTab(searchContext);
  }, items1);
}
