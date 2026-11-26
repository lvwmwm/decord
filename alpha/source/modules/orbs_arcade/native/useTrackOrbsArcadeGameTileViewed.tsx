// Module ID: 16637
// Function ID: 16638
// Name: useTrackOrbsArcadeGameTileViewed
// Dependencies: [2119, 1071, 9860, 504, 13855, 16638, 2]
// Exports: default

// Module 16637 (useTrackOrbsArcadeGameTileViewed)
import Constants from "Constants" /* 1071 */;
import ContentImpressionTrackerConstants from "ContentImpressionTrackerConstants" /* 9860 */;
import reactDefault from "react" /* 13855 */;
import OrbsArcadeAnalytics from "OrbsArcadeAnalytics" /* 16638 */;
import AppStateStore from "AppStateStore" /* 2119 */;
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
