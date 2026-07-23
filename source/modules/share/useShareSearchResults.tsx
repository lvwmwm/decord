// Module ID: 9884
// Function ID: 76532
// Name: makeAutocompleterSearchParams
// Dependencies: [57, 31, 4808, 1194, 5042, 7107, 9885, 566, 9888, 9584, 7089, 2]
// Exports: useShareSearchResults

// Module 9884 (makeAutocompleterSearchParams)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { ALLOWED_TYPES } from "ALLOWED_TYPES";

const require = arg1;
function makeAutocompleterSearchParams(arg0) {
  let obj = require(9885) /* getQuickSwitcherOptions */;
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
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/share/useShareSearchResults.tsx");

export { makeAutocompleterSearchParams };
export const useShareSearchResults = function useShareSearchResults(targetDestination) {
  targetDestination = targetDestination.targetDestination;
  const selectedDestinations = targetDestination.selectedDestinations;
  const originDestination = targetDestination.originDestination;
  const channelFilter = targetDestination.channelFilter;
  let flag = targetDestination.includeMissingDMs;
  if (flag === undefined) {
    flag = false;
  }
  let stateFromStores;
  let search;
  let query;
  let results;
  let first;
  let c10;
  let queryMode;
  let ref;
  let ref1;
  let current;
  let stateFromStores1;
  let stateFromStores2;
  let c17;
  let obj = targetDestination(originDestination[7]);
  let items = [search];
  stateFromStores = obj.useStateFromStores(items, () => search.getId());
  const items1 = [stateFromStores];
  const memo = flag.useMemo(() => {
    let obj = {};
    obj = { blacklist: null, frecencyBoosters: true, userFilters: null };
    const items = ["user:" + stateFromStores];
    obj.blacklist = new Set(items);
    obj.searchOptions = obj;
    return obj;
  }, items1);
  const tmp3 = selectedDestinations(originDestination[8])(memo);
  search = tmp3.search;
  query = tmp3.query;
  results = tmp3.results;
  const tmp4 = channelFilter(flag.useState(first("")), 2);
  first = tmp4[0];
  c10 = tmp6;
  const items2 = [tmp4[1]];
  queryMode = first.queryMode;
  const callback = flag.useCallback((arg0) => _undefined(first(arg0)), items2);
  ref = flag.useRef(null);
  ref1 = flag.useRef(selectedDestinations);
  current = selectedDestinations;
  if (query === ref.current) {
    current = ref1.current;
  }
  const items3 = [query, selectedDestinations];
  const effect = flag.useEffect(() => {
    if (query !== ref.current) {
      ref1.current = selectedDestinations;
    }
    ref.current = query;
  }, items3);
  const items4 = [search, first];
  const layoutEffect = flag.useLayoutEffect(() => {
    search({ query: first.query, resultTypes: first.resultTypes });
  }, items4);
  const frecencySettings = targetDestination(originDestination[9]).useFrecencySettings();
  const obj2 = targetDestination(originDestination[9]);
  const items5 = [query];
  stateFromStores1 = targetDestination(originDestination[7]).useStateFromStores(items5, () => query.getFrequentlyWithoutFetchingLatest());
  const obj3 = targetDestination(originDestination[7]);
  const items6 = [stateFromStores];
  stateFromStores2 = targetDestination(originDestination[7]).useStateFromStores(items6, () => stateFromStores.isConnected());
  c17 = tmp15;
  obj = { results: flag.useMemo(() => selectedDestinations(originDestination[10])({ results, hasQuery: c17, queryMode, targetDestination, frequentChannels: stateFromStores1, selectedDestinations, pinnedDestinations: current, originDestination, channelFilter, includeMissingDMs: flag, isConnected: stateFromStores2 }), items7), updateSearchText: callback };
  items7 = [results, "" !== query, queryMode, targetDestination, stateFromStores1, selectedDestinations, current, originDestination, channelFilter, flag, stateFromStores2];
  return obj;
};
