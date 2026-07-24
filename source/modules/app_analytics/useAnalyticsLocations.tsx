// Module ID: 5462
// Function ID: 46672
// Name: mergeLocations
// Dependencies: [57, 31, 33, 22, 636, 2]
// Exports: AnalyticsLocationProvider, default, useLocationStackFromLocationContext

// Module 5462 (mergeLocations)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { jsx } from "jsxProd";

function mergeLocations(arg0, arg1) {
  if (0 === arg1.length) {
    return arg0;
  } else {
    const flattenResult = importDefault(22).flatten(arg1);
    const items = [];
    HermesBuiltin.arraySpread(flattenResult, HermesBuiltin.arraySpread(arg0, 0));
    return items;
  }
}
let context = importAllResult.createContext([]);
const result = require("jsxProd").fileFinishedImporting("modules/app_analytics/useAnalyticsLocations.tsx");

export default function useAnalyticsLocations(arg0) {
  const items = [...arguments];
  const tmp = callback(context.useState(items), 2);
  const first = tmp[0];
  callback = tmp[1];
  context = context.useContext(context);
  const items1 = [first, context];
  const memo = context.useMemo(() => outer1_6(context, first), items1);
  const items2 = [first, context];
  const memo1 = context.useMemo(() => outer1_6(context, first.slice(0, first.length - 1)), items2);
  const items3 = [items, first];
  const effect = context.useEffect(() => {
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
  context = importAllResult.useContext(context);
  if (null == context) {
    context = [];
  }
  return context;
};
