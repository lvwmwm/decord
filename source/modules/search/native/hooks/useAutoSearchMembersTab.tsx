// Module ID: 15285
// Function ID: 116222
// Name: useAutoSearchMembersTab
// Dependencies: []
// Exports: useAutoSearchMembersTab

// Module 15285 (useAutoSearchMembersTab)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = arg1(dependencyMap[2]).SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
const SearchTypes = arg1(dependencyMap[3]).SearchTypes;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/search/native/hooks/useAutoSearchMembersTab.tsx");

export const useAutoSearchMembersTab = function useAutoSearchMembersTab(searchContext, arg1) {
  arg1 = searchContext;
  const importDefault = arg1;
  const items = [arg1, searchContext];
  const effect = React.useEffect(() => {
    if (!arg1) {
      const obj = arg0(closure_2[4]);
      const debounceResult = arg0(closure_2[4]).debounce((searchQueryString) => {
        if (!closure_4.isAutocompleteVisible(callback)) {
          let obj = callback(closure_2[5]);
          const guildIdFromSearchContext = obj.getGuildIdFromSearchContext(callback);
          if (null != guildIdFromSearchContext) {
            const channelIds = closure_4.getChannelIds(callback);
            let tmp8 = null;
            if (0 !== channelIds.size) {
              let first = null;
              if (1 === channelIds.size) {
                const _Array = Array;
                first = Array.from(channelIds)[0];
              }
              tmp8 = first;
            }
            obj = { searchContext: callback, searchQueryString, guildId: guildIdFromSearchContext, channelId: tmp8 };
            let tmp13 = null;
            if (callback.type === constants.THREAD) {
              tmp13 = tmp8;
            }
            obj.threadId = tmp13;
            callback2(closure_2[6]).searchGuildMemberTab(obj);
            const obj2 = callback2(closure_2[6]);
          }
        }
      }, closure_5);
      return arg1(closure_2[7]).subscribeTextInputValue(arg0, debounceResult);
    }
  }, items);
  const items1 = [searchContext];
  const effect1 = React.useEffect(() => () => {
    const result = callback(closure_2[6]).cleanupGuildMemberTab(closure_0);
  }, items1);
};
