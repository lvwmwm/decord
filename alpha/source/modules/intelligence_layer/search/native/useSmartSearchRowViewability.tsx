// Module ID: 17157
// Function ID: 17158
// Name: useSmartSearchRowViewability
// Dependencies: [19, 1998, 558, 576, 1105, 504, 12077, 12075, 2]

// Module 17157 (useSmartSearchRowViewability)
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 12075 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 12077 */;
import react from "react" /* 19 */;
import AppStateStore from "AppStateStore" /* 1998 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let state;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSmartSearchRowViewability() {
  let stateFromStores;
  let tmp11;
  let tmp12;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let obj = stateFromStores(576);
  const cResult = obj.c(7);
  const tmp = stateFromStores;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AppStateStore];
    const fn = function o() {
      state = state.getState();
      return state === stateFromStores(dependencyMap[4]).AppStates.ACTIVE;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    class S {
      constructor() {
        const obj = SmartSearchAnalyticsManagerDefault;
        obj.setIsAppActive(stateFromStores, SearchSessionAnalyticsManagerDefault);
      }
    }
    const items1 = [stateFromStores];
    cResult[2] = stateFromStores;
    cResult[3] = S;
    cResult[4] = items1;
    tmp9 = items1;
    tmp8 = S;
  } else {
    class S {
      constructor() {
        const obj = SmartSearchAnalyticsManagerDefault;
        obj.setIsAppActive(stateFromStores, SearchSessionAnalyticsManagerDefault);
      }
    }
    tmp9 = cResult[4];
  }
  const effect = react.useEffect(tmp8, tmp9);
  const obj3 = react;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        const obj = SmartSearchAnalyticsManagerDefault;
        obj.setIsAppActive(stateFromStores, SearchSessionAnalyticsManagerDefault);
      }
    }
    const items2 = [];
    cResult[5] = tmp13;
    cResult[6] = items2;
    tmp12 = items2;
    tmp11 = tmp13;
  } else {
    class S {
      constructor() {
        const obj = SmartSearchAnalyticsManagerDefault;
        obj.setIsAppActive(stateFromStores, SearchSessionAnalyticsManagerDefault);
      }
    }
    tmp12 = cResult[6];
  }
  const effect1 = obj3.useEffect(tmp11, tmp12);
}) : (function useSmartSearchRowViewability() {
  let stateFromStores;
  let obj = stateFromStores(504);
  const items = [AppStateStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    state = state.getState();
    return state === stateFromStores(dependencyMap[4]).AppStates.ACTIVE;
  });
  const items1 = [stateFromStores];
  const effect = react.useEffect(() => {
    const obj = SmartSearchAnalyticsManagerDefault;
    obj.setIsAppActive(stateFromStores, SearchSessionAnalyticsManagerDefault);
  }, items1);
  const effect1 = react.useEffect(() => () => {
    const obj = closure_1_1(closure_1_2[6]);
    obj.setIsRowViewable(false, closure_1_1(closure_1_2[7]));
  }, []);
});
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSmartSearchRowViewability.tsx");

export const useSmartSearchRowViewability = tmp2;
