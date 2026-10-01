// Module ID: 6583
// Function ID: 6584
// Name: useAnalyticsLocations
// Dependencies: [32, 19, 21, 12, 1331, 2]
// Exports: AnalyticsLocationProvider, default, useLocationStackFromLocationContext

// Module 6583 (useAnalyticsLocations)
import _modDef12 from "module_12" /* 12 */;
import Fragment from "Fragment" /* 21 */;
import _modDef1331 from "module_1331" /* 1331 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let _slicedToArray = _slicedToArray_mod;
const jsx = Fragment.jsx;
let context = react.createContext([]);
const result = size.fileFinishedImporting("modules/app_analytics/useAnalyticsLocations.tsx");

export default function useAnalyticsLocations() {
  let closure_2;
  let first;
  let items = [...arguments];
  first = undefined;
  _slicedToArray = undefined;
  context = undefined;
  [first, _slicedToArray] = context.useState(items);
  context = context.useContext(context);
  const items1 = [first, context];
  const memo = context.useMemo(() => {
    let tmp4 = context;
    if (0 !== first.length) {
      const obj = _modDef12;
      items = [];
      const flattenResult = obj.flatten(tmp3);
      HermesBuiltin.arraySpread(items, flattenResult, HermesBuiltin.arraySpread(items, context, 0));
      tmp4 = items;
    }
    return tmp4;
  }, items1);
  const items2 = [first, context];
  const memo1 = context.useMemo(() => {
    const substr = first.slice(0, first.length - 1);
    let tmp3 = context;
    if (0 !== substr.length) {
      const obj = _modDef12;
      items = [];
      const flattenResult = obj.flatten(substr);
      HermesBuiltin.arraySpread(items, flattenResult, HermesBuiltin.arraySpread(items, context, 0));
      tmp3 = items;
    }
    return tmp3;
  }, items2);
  const items3 = [items, first];
  const effect = context.useEffect(() => {
    const tmp = items;
    if (!_modDef1331(items, first)) {
      closure_2(tmp);
    }
  }, items3);
  let obj = { analyticsLocations: memo, sourceAnalyticsLocations: memo1, parentAnalyticsLocation: memo1[memo1.length - 1], newestAnalyticsLocation: memo[memo.length - 1] };
  return obj;
};
export const LocationContext = context;
export const AnalyticsLocationProvider = function AnalyticsLocationProvider(value) {
  return <context.Provider value={arg0.value}>{arg0.children}</context.Provider>;
};
export const useLocationStackFromLocationContext = function useLocationStackFromLocationContext() {
  context = react.useContext(context);
  if (context == null) {
    context = [];
  }
  return context;
};
