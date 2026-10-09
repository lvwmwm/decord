// Module ID: 8894
// Function ID: 8895
// Name: useGameProfileNavigation
// Dependencies: [32, 19, 8895, 8859, 558, 576, 2]

// Module 8894 (useGameProfileNavigation)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8859 */;
import GameProfileNavTypes from "GameProfileNavTypes" /* 8895 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let obj = {};
obj[GameProfileNavTypes.GameProfileNavTab.OVERVIEW] = GameProfileAnalyticUtils.GameProfileTrackActionActions.Overview;
obj[GameProfileNavTypes.GameProfileNavTab.COMMUNITIES] = GameProfileAnalyticUtils.GameProfileTrackActionActions.Communities;
obj[GameProfileNavTypes.GameProfileNavTab.COMMERCE] = GameProfileAnalyticUtils.GameProfileTrackActionActions.GameShop;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGameProfileNavigation(arg0) {
  let closure_0;
  let closure_2;
  let selectedTab;
  let tmp5;
  _require = arg0;
  obj = require("react");
  const cResult = obj.c(10);
  [selectedTab, _slicedToArray] = react.useState(require("GameProfileNavTypes").GameProfileNavTab.OVERVIEW);
  const tmp4 = _slicedToArray(react.useState(0), 2);
  [tmp5, react] = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s(arg0) {
      closure_2(arg0);
      react((arg0) => arg0 + 1);
    };
    cResult[0] = fn;
    let first1 = fn;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] === selectedTab) {
    let tmp7;
    if (cResult[2] === arg0) {
      tmp7 = cResult[3];
    }
    if (cResult[4] === tmp7) {
      let tmp8;
      if (cResult[5] === selectedTab) {
        tmp8 = cResult[6];
      }
      if (cResult[7] === tmp8) {
        let tmp9;
        if (cResult[8] === tmp5) {
          tmp9 = cResult[9];
        }
        return tmp9;
      }
      const obj2 = { navigation: tmp8, selectionVersion: tmp5 };
      cResult[7] = tmp8;
      cResult[8] = tmp5;
      cResult[9] = obj2;
      tmp9 = obj2;
    }
    const obj3 = { selectedTab, selectTab: tmp7 };
    cResult[4] = tmp7;
    cResult[5] = selectedTab;
    cResult[6] = obj3;
    tmp8 = obj3;
  }
  class N {
    constructor(arg0) {
      if (arg0 !== first) {
        if (null != obj[arg0]) {
          closure_0(obj[arg0]);
        }
      }
      first1(arg0);
    }
  }
  cResult[1] = selectedTab;
  cResult[2] = arg0;
  cResult[3] = N;
  tmp7 = N;
}) : (function useGameProfileNavigation(arg0) {
  let closure_0;
  let closure_2;
  let items1;
  let selectedTab;
  let tmp4;
  _require = arg0;
  [selectedTab, _slicedToArray] = react.useState(require("GameProfileNavTypes").GameProfileNavTab.OVERVIEW);
  const tmp3 = _slicedToArray(react.useState(0), 2);
  [tmp4, react] = tmp3;
  const callback = react.useCallback((arg0) => {
    closure_2(arg0);
    react((arg0) => arg0 + 1);
  }, []);
  const items = [selectedTab, callback, arg0];
  const callback1 = react.useCallback((arg0) => {
    if (arg0 !== first) {
      if (null != obj[arg0]) {
        closure_0(obj[arg0]);
      }
    }
    callback(arg0);
  }, items);
  obj = { navigation: react.useMemo(() => ({ selectedTab, selectTab: callback1 }), items1), selectionVersion: tmp4 };
  items1 = [selectedTab, callback1];
  return obj;
});
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileNavigation.tsx");

export default tmp2;
