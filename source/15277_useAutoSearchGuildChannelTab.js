// Module ID: 15277
// Function ID: 116191
// Name: useAutoSearchGuildChannelTab
// Dependencies: []
// Exports: useAutoSearchGuildChannelTab

// Module 15277 (useAutoSearchGuildChannelTab)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = arg1(dependencyMap[1]).SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/search/native/hooks/useAutoSearchGuildChannelTab.tsx");

export const useAutoSearchGuildChannelTab = function useAutoSearchGuildChannelTab(searchContext, arg1) {
  arg1 = searchContext;
  const importDefault = arg1;
  const items = [searchContext];
  const callback = React.useCallback((searchQueryString) => {
    let obj = searchQueryString(callback[2]);
    const guildIdFromSearchContext = obj.getGuildIdFromSearchContext(searchQueryString);
    if (null != guildIdFromSearchContext) {
      obj = { searchContext: searchQueryString, searchQueryString, guildId: guildIdFromSearchContext };
      const result = arg1(callback[3]).searchGuildChannelTab(obj);
      const obj2 = arg1(callback[3]);
    }
  }, items);
  const dependencyMap = callback;
  const items1 = [arg1, callback];
  const effect = React.useEffect(() => {
    if (!arg1) {
      callback("");
    }
  }, items1);
  const items2 = [searchContext, arg1, callback];
  const effect1 = React.useEffect(() => {
    if (!arg1) {
      const obj = arg0(callback[4]);
      const debounceResult = arg0(callback[4]).debounce(callback, closure_4);
      return arg1(callback[5]).subscribeTextInputValue(arg0, debounceResult, true);
    }
  }, items2);
  const items3 = [searchContext];
  const effect2 = React.useEffect(() => () => {
    const result = callback(closure_2[3]).cleanupGuildChannelTab(closure_0);
  }, items3);
};
