// Module ID: 18644
// Function ID: 18645
// Name: useSmartSearchRowViewability
// Dependencies: [19, 1999, 558, 576, 5187, 13801, 1504, 5190, 13713, 13711, 1104, 504, 2]

// Module 18644 (useSmartSearchRowViewability)
import useChatLayoutDefault from "useChatLayout" /* 5190 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13711 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13713 */;
import react from "react" /* 19 */;
import AppStateStore from "AppStateStore" /* 1999 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, state;

let ReactCompilerGating = ReactCompilerGating_mod;
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSmartSearchRowNavigationState() {
  let closure_0;
  let tmp9;
  let obj = require("react");
  const cResult = obj.c(6);
  const obj2 = require("NavigationRouteUtils");
  const currentNavigationRouteName = obj2.useCurrentNavigationRouteName();
  const context = react.useContext(require("react").SwipeForMemberListContext);
  const obj4 = require("Link");
  const isFocused = obj4.useIsFocused();
  const isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
  const obj3 = react;
  const tmp = _require;
  if (cResult[0] === currentNavigationRouteName) {
    let tmp7;
    let tmp14;
    let tmp13;
    if (cResult[1] === isChatLockedOpen) {
      tmp7 = cResult[2];
    }
    let tmp11 = isFocused;
    if (null != context) {
      tmp11 = context.isPanelActive && tmp7;
    }
    _require = tmp11;
    if (cResult[3] !== tmp11) {
      class S {
        constructor() {
          obj = closure_1(closure_2[8]);
          result = obj.setIsNavigationFocused(closure_0, closure_1(closure_2[9]));
          return;
        }
      }
      const items = [tmp11];
      cResult[3] = tmp11;
      cResult[4] = S;
      cResult[5] = items;
      tmp14 = items;
      tmp13 = S;
    } else {
      class S {
        constructor() {
          obj = closure_1(closure_2[8]);
          result = obj.setIsNavigationFocused(closure_0, closure_1(closure_2[9]));
          return;
        }
      }
      tmp14 = cResult[5];
    }
    const effect = obj3.useEffect(tmp13, tmp14);
  }
  const tmpResult = tmp(5187);
  let tmp8 = null != tmpResult.coerceChannelRoute({ name: currentNavigationRouteName });
  if (!tmp8) {
    class S {
      constructor() {
        obj = closure_1(closure_2[8]);
        result = obj.setIsNavigationFocused(closure_0, closure_1(closure_2[9]));
        return;
      }
    }
    if (tmp9) {
      class S {
        constructor() {
          obj = closure_1(closure_2[8]);
          result = obj.setIsNavigationFocused(closure_0, closure_1(closure_2[9]));
          return;
        }
      }
      const obj5 = { name: currentNavigationRouteName };
      tmp9 = null != obj6.coerceGuildsRoute(obj5);
    }
    tmp8 = tmp9;
  }
  cResult[0] = currentNavigationRouteName;
  cResult[1] = isChatLockedOpen;
  cResult[2] = tmp8;
  tmp7 = tmp8;
}) : (function useSmartSearchRowNavigationState() {
  let closure_0;
  let obj = require("NavigationRouteUtils");
  const currentNavigationRouteName = obj.useCurrentNavigationRouteName();
  const context = react.useContext(require("react").SwipeForMemberListContext);
  const obj3 = require("Link");
  const isFocused = obj3.useIsFocused();
  let isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
  const obj4 = require("NavigationRouteUtils");
  let tmp6 = null != obj4.coerceChannelRoute({ name: currentNavigationRouteName });
  const obj2 = react;
  const tmp = _require;
  if (!tmp6) {
    if (isChatLockedOpen) {
      const obj5 = { name: currentNavigationRouteName };
      const tmpResult = tmp(5187);
      isChatLockedOpen = null != tmpResult.coerceGuildsRoute(obj5);
    }
    tmp6 = isChatLockedOpen;
  }
  let tmp7 = isFocused;
  if (null != context) {
    tmp7 = context.isPanelActive && tmp6;
  }
  _require = tmp7;
  const items = [tmp7];
  const effect = obj2.useEffect(() => {
    const obj = SmartSearchAnalyticsManagerDefault;
    const result = obj.setIsNavigationFocused(closure_0, SearchSessionAnalyticsManagerDefault);
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSmartSearchRowViewability() {
  let stateFromStores;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp5;
  let tmp6;
  let tmp9;
  let obj = stateFromStores(576);
  const cResult = obj.c(7);
  closure_5();
  const tmp = stateFromStores;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AppStateStore];
    const fn = function c() {
      state = state.getState();
      return state === stateFromStores(dependencyMap[10]).AppStates.ACTIVE;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] !== stateFromStores) {
    const fn2 = function l() {
      const obj = SmartSearchAnalyticsManagerDefault;
      obj.setIsAppActive(stateFromStores, SearchSessionAnalyticsManagerDefault);
    };
    const items1 = [stateFromStores];
    cResult[2] = stateFromStores;
    cResult[3] = fn2;
    cResult[4] = items1;
    tmp10 = items1;
    tmp9 = fn2;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  const effect = react.useEffect(tmp9, tmp10);
  const obj3 = react;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function f() {
      return () => {
        const obj = closure_1_1(closure_1_2[8]);
        obj.setIsRowViewable(false, closure_1_1(closure_1_2[9]));
      };
    };
    const items2 = [];
    cResult[5] = fn3;
    cResult[6] = items2;
    tmp13 = items2;
    tmp12 = fn3;
  } else {
    tmp12 = cResult[5];
    tmp13 = cResult[6];
  }
  const effect1 = obj3.useEffect(tmp12, tmp13);
}) : (function useSmartSearchRowViewability() {
  let stateFromStores;
  closure_5();
  let obj = stateFromStores(504);
  const items = [AppStateStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    state = state.getState();
    return state === stateFromStores(dependencyMap[10]).AppStates.ACTIVE;
  });
  const items1 = [stateFromStores];
  const effect = react.useEffect(() => {
    const obj = SmartSearchAnalyticsManagerDefault;
    obj.setIsAppActive(stateFromStores, SearchSessionAnalyticsManagerDefault);
  }, items1);
  const effect1 = react.useEffect(() => () => {
    const obj = closure_1_1(closure_1_2[8]);
    obj.setIsRowViewable(false, closure_1_1(closure_1_2[9]));
  }, []);
});
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSmartSearchRowViewability.tsx");

export const useSmartSearchRowViewability = tmp2;
