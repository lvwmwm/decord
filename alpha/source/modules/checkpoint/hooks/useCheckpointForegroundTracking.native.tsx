// Module ID: 14265
// Function ID: 14266
// Name: useCheckpointForegroundTracking
// Dependencies: [19, 2120, 1072, 504, 14252, 2]
// Exports: default

// Module 14265 (useCheckpointForegroundTracking)
import Constants from "Constants" /* 1072 */;
import CheckpointSessionAnalyticsManagerDefault from "CheckpointSessionAnalyticsManager" /* 14252 */;
import react from "react" /* 19 */;
import AppStateStore from "AppStateStore" /* 2120 */;
import size from "module_2" /* 2 */;

const AppStates = Constants.AppStates;
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useCheckpointForegroundTracking.native.tsx");

export default function useCheckpointForegroundTracking() {
  let state;
  let stateFromStores;
  let obj = stateFromStores(504);
  const items = [AppStateStore];
  stateFromStores = obj.useStateFromStores(items, () => state.getState() === constants.ACTIVE);
  const items1 = [stateFromStores];
  const effect = react.useEffect(() => {
    const obj = CheckpointSessionAnalyticsManagerDefault;
    obj.setForeground(stateFromStores);
  }, items1);
};
