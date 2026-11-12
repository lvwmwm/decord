// Module ID: 17387
// Function ID: 17388
// Name: useTrackOrbsArcadeGameTileViewed
// Dependencies: [2117, 1072, 9810, 504, 10777, 17388, 2]
// Exports: default

// Module 17387 (useTrackOrbsArcadeGameTileViewed)
import Constants from "Constants" /* 1072 */;
import ContentImpressionTrackerConstants from "ContentImpressionTrackerConstants" /* 9810 */;
import reactDefault from "react" /* 10777 */;
import OrbsArcadeAnalytics from "OrbsArcadeAnalytics" /* 17388 */;
import AppStateStore from "AppStateStore" /* 2117 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const AppStates = Constants.AppStates;
let closure_5 = ContentImpressionTrackerConstants.MIN_QUEST_VIEW_TIME_SECONDS;
let result = size.fileFinishedImporting("modules/orbs_arcade/native/useTrackOrbsArcadeGameTileViewed.tsx");

export default function useTrackOrbsArcadeGameTileViewed(arg0, arg1, arg2) {
  let closure_0;
  let closure_1;
  let state;
  _require = arg0;
  importDefault = arg1;
  let obj = require("get initialized");
  const items = [AppStateStore];
  const stateFromStores = obj.useStateFromStores(items, () => state.getState() === constants.ACTIVE);
  let result = null;
  const tmp2 = reactDefault;
  if (arg2) {
    result = null;
    if (stateFromStores) {
      result = 1000 * closure_5;
    }
  }
  tmp2(() => {
    const obj = OrbsArcadeAnalytics;
    return obj.trackOrbsArcadeGameTileViewed(closure_0, closure_1);
  }, result);
};
