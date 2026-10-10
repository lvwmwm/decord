// Module ID: 8913
// Function ID: 8914
// Name: useGameProfileNavigation
// Dependencies: [32, 19, 8914, 8878, 558, 576, 2]

// Module 8913 (useGameProfileNavigation)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8878 */;
import GameProfileNavTypes from "GameProfileNavTypes" /* 8914 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let obj = {};
obj[GameProfileNavTypes.GameProfileNavTab.OVERVIEW] = GameProfileAnalyticUtils.GameProfileTrackActionActions.Overview;
obj[GameProfileNavTypes.GameProfileNavTab.COMMUNITIES] = GameProfileAnalyticUtils.GameProfileTrackActionActions.Communities;
obj[GameProfileNavTypes.GameProfileNavTab.COMMERCE] = GameProfileAnalyticUtils.GameProfileTrackActionActions.GameShop;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGameProfileNavigation(arg0, arg1) {
  let closure_0;
  let closure_2;
  let selectedTab;
  let tmp7;
  _require = arg0;
  let OVERVIEW = arg1;
  obj = require("react");
  const cResult = obj.c(10);
  const tmp = _require;
  const tmp2 = selectedTab;
  if (undefined === arg1) {
    OVERVIEW = tmp(tmp2[2]).GameProfileNavTab.OVERVIEW;
  }
  [selectedTab, _slicedToArray] = react.useState(OVERVIEW);
  const tmp6 = _slicedToArray(react.useState(0), 2);
  [tmp7, react] = tmp6;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c(arg0) {
      closure_2(arg0);
      react((arg0) => arg0 + 1);
    };
    cResult[0] = fn;
    let first1 = fn;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] === selectedTab) {
    let tmp9;
    if (cResult[2] === arg0) {
      tmp9 = cResult[3];
    }
    if (cResult[4] === tmp9) {
      let tmp10;
      if (cResult[5] === selectedTab) {
        tmp10 = cResult[6];
      }
      if (cResult[7] === tmp10) {
        let tmp11;
        if (cResult[8] === tmp7) {
          tmp11 = cResult[9];
        }
        return tmp11;
      }
      const obj2 = { navigation: tmp10, selectionVersion: tmp7 };
      cResult[7] = tmp10;
      cResult[8] = tmp7;
      cResult[9] = obj2;
      tmp11 = obj2;
    }
    const obj3 = { selectedTab, selectTab: tmp9 };
    cResult[4] = tmp9;
    cResult[5] = selectedTab;
    cResult[6] = obj3;
    tmp10 = obj3;
  }
  class C {
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
  cResult[3] = C;
  tmp9 = C;
}) : (function useGameProfileNavigation(arg0) {
  let _undefined;
  let c3;
  let closure_0;
  let closure_2;
  let items1;
  let selectedTab;
  let tmp6;
  _require = arg0;
  let OVERVIEW = arg1;
  if (arg1 === undefined) {
    OVERVIEW = require("GameProfileNavTypes").GameProfileNavTab.OVERVIEW;
  }
  selectedTab = undefined;
  _slicedToArray = undefined;
  react = undefined;
  [selectedTab, _slicedToArray] = react.useState(OVERVIEW);
  [tmp6, c3] = _slicedToArray(react.useState(0), 2);
  const tmp5 = _slicedToArray(react.useState(0), 2);
  const callback = react.useCallback((arg0) => {
    closure_2(arg0);
    _undefined((arg0) => arg0 + 1);
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
  obj = { navigation: react.useMemo(() => ({ selectedTab, selectTab: callback1 }), items1), selectionVersion: tmp6 };
  items1 = [selectedTab, callback1];
  return obj;
});
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileNavigation.tsx");

export default tmp2;
