// Module ID: 9871
// Function ID: 76451
// Name: makeAutocompleterSearchParams
// Dependencies: []
// Exports: useShareSearchResults

// Module 9871 (makeAutocompleterSearchParams)
function makeAutocompleterSearchParams(arg0) {
  let obj = arg1(dependencyMap[6]);
  const quickSwitcherOptions = obj.getQuickSwitcherOptions(arg0);
  const queryMode = quickSwitcherOptions.queryMode;
  let tmp2 = ALLOWED_TYPES;
  let hasItem = null != queryMode;
  if (hasItem) {
    hasItem = ALLOWED_TYPES.includes(queryMode);
  }
  let tmp5 = null;
  if (hasItem) {
    const items = [queryMode];
    tmp2 = items;
    tmp5 = queryMode;
  }
  obj = { query: quickSwitcherOptions.query, queryMode: tmp5, resultTypes: tmp2 };
  return obj;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const ALLOWED_TYPES = arg1(dependencyMap[5]).ALLOWED_TYPES;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/share/useShareSearchResults.tsx");

export { makeAutocompleterSearchParams };
export const useShareSearchResults = function useShareSearchResults(targetDestination) {
  targetDestination = targetDestination.targetDestination;
  const arg1 = targetDestination;
  const selectedDestinations = targetDestination.selectedDestinations;
  const importDefault = selectedDestinations;
  const originDestination = targetDestination.originDestination;
  const dependencyMap = originDestination;
  const channelFilter = targetDestination.channelFilter;
  let callback = channelFilter;
  let flag = targetDestination.includeMissingDMs;
  if (flag === undefined) {
    flag = false;
  }
  const React = flag;
  let closure_5;
  let closure_6;
  let closure_7;
  let ALLOWED_TYPES;
  let makeAutocompleterSearchParams;
  let tmp6;
  let queryMode;
  let ref;
  let ref1;
  let current;
  let stateFromStores1;
  let stateFromStores2;
  let tmp15;
  let obj = arg1(dependencyMap[7]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => search.getId());
  closure_5 = stateFromStores;
  const items1 = [stateFromStores];
  const memo = React.useMemo(() => {
    let obj = {};
    obj = { items: "BG_GRADIENT_RETRO_RAINCLOUD_1", keyboardShouldPersistTaps: 73.12, triggerOnTap: "BG_GRADIENT_HANAMI_1" };
    const items = ["user:" + stateFromStores];
    obj.blacklist = new Set(items);
    obj.searchOptions = obj;
    return obj;
  }, items1);
  const tmp3 = importDefault(dependencyMap[8])(memo);
  const search = tmp3.search;
  closure_6 = search;
  const query = tmp3.query;
  closure_7 = query;
  const results = tmp3.results;
  ALLOWED_TYPES = results;
  const tmp4 = callback(React.useState(makeAutocompleterSearchParams("")), 2);
  const first = tmp4[0];
  makeAutocompleterSearchParams = first;
  tmp6 = tmp4[1];
  const items2 = [tmp6];
  queryMode = first.queryMode;
  callback = React.useCallback((arg0) => tmp6(first(arg0)), items2);
  ref = React.useRef(null);
  ref1 = React.useRef(selectedDestinations);
  current = selectedDestinations;
  if (query === ref.current) {
    current = ref1.current;
  }
  const items3 = [query, selectedDestinations];
  const effect = React.useEffect(() => {
    if (query !== ref.current) {
      ref1.current = selectedDestinations;
    }
    ref.current = query;
  }, items3);
  const items4 = [search, first];
  const layoutEffect = React.useLayoutEffect(() => {
    search({ query: first.query, resultTypes: first.resultTypes });
  }, items4);
  const frecencySettings = arg1(dependencyMap[9]).useFrecencySettings();
  const obj2 = arg1(dependencyMap[9]);
  const items5 = [closure_7];
  stateFromStores1 = arg1(dependencyMap[7]).useStateFromStores(items5, () => query.getFrequentlyWithoutFetchingLatest());
  const obj3 = arg1(dependencyMap[7]);
  const items6 = [closure_5];
  stateFromStores2 = arg1(dependencyMap[7]).useStateFromStores(items6, () => stateFromStores.isConnected());
  tmp15 = "" !== query;
  obj = { results: React.useMemo(() => selectedDestinations(originDestination[10])({ results, hasQuery: tmp15, queryMode, targetDestination, frequentChannels: stateFromStores1, selectedDestinations, pinnedDestinations: current, originDestination, channelFilter, includeMissingDMs: flag, isConnected: stateFromStores2 }), items7), updateSearchText: callback };
  const items7 = [results, tmp15, queryMode, targetDestination, stateFromStores1, selectedDestinations, current, originDestination, channelFilter, flag, stateFromStores2];
  return obj;
};
