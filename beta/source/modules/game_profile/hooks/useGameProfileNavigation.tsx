// Module ID: 9364
// Function ID: 9365
// Name: useGameProfileNavigation
// Dependencies: [32, 19, 9365, 9340, 2]
// Exports: default

// Module 9364 (useGameProfileNavigation)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9340 */;
import GameProfileNavTypes from "GameProfileNavTypes" /* 9365 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let obj = {};
obj[GameProfileNavTypes.GameProfileNavTab.OVERVIEW] = GameProfileAnalyticUtils.GameProfileTrackActionActions.Overview;
obj[GameProfileNavTypes.GameProfileNavTab.COMMUNITIES] = GameProfileAnalyticUtils.GameProfileTrackActionActions.Communities;
obj[GameProfileNavTypes.GameProfileNavTab.COMMERCE] = GameProfileAnalyticUtils.GameProfileTrackActionActions.GameShop;
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileNavigation.tsx");

export default function useGameProfileNavigation(arg0) {
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
};
