// Module ID: 17303
// Function ID: 17304
// Name: useTrackOrbsArcadeGameTileViewed
// Dependencies: [2122, 1072, 9842, 504, 10810, 17304, 2]
// Exports: default

// Module 17303 (useTrackOrbsArcadeGameTileViewed)
import Constants from "Constants" /* 1072 */;
import ContentImpressionTrackerConstants from "ContentImpressionTrackerConstants" /* 9842 */;
import reactDefault from "react" /* 10810 */;
import OrbsArcadeAnalytics from "OrbsArcadeAnalytics" /* 17304 */;
import AppStateStore from "AppStateStore" /* 2122 */;
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
