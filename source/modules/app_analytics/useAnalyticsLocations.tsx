// Module ID: 5461
// Function ID: 46656
// Name: mergeLocations
// Dependencies: []
// Exports: AnalyticsLocationProvider, default, useLocationStackFromLocationContext

// Module 5461 (mergeLocations)
function mergeLocations(arg0, arg1) {
  if (0 === arg1.length) {
    return arg0;
  } else {
    const flattenResult = importDefault(dependencyMap[3]).flatten(arg1);
    const items = [];
    HermesBuiltin.arraySpread(flattenResult, HermesBuiltin.arraySpread(arg0, 0));
    return items;
  }
}
let closure_2 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const context = importAllResult.createContext([]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/app_analytics/useAnalyticsLocations.tsx");

export default function useAnalyticsLocations(arg0) {
  const items = [...arguments];
  const importDefault = items;
  const tmp = callback(importAllResult.useState(items), 2);
  const first = tmp[0];
  const dependencyMap = first;
  const callback = tmp[1];
  const context = importAllResult.useContext(context);
  const items1 = [first, context];
  const memo = importAllResult.useMemo(() => callback2(context, first), items1);
  const items2 = [first, context];
  const memo1 = importAllResult.useMemo(() => callback2(context, first.slice(0, first.length - 1)), items2);
  const items3 = [items, first];
  const effect = importAllResult.useEffect(() => {
    if (!items(first[4])(items, first)) {
      callback(items);
    }
  }, items3);
  return { analyticsLocations: memo, sourceAnalyticsLocations: memo1, parentAnalyticsLocation: memo1[memo1.length - 1], newestAnalyticsLocation: memo[memo.length - 1] };
};
export const LocationContext = context;
export const AnalyticsLocationProvider = function AnalyticsLocationProvider(value) {
  return <context.Provider value={arg0.value}>{arg0.children}</context.Provider>;
};
export const useLocationStackFromLocationContext = function useLocationStackFromLocationContext() {
  let context = importAllResult.useContext(context);
  if (null == context) {
    context = [];
  }
  return context;
};
