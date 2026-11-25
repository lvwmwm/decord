// Module ID: 12509
// Function ID: 12510
// Name: useCheckpointForegroundTracking
// Dependencies: [19, 2118, 1071, 504, 12494, 2]
// Exports: default

// Module 12509 (useCheckpointForegroundTracking)
import Constants from "Constants" /* 1071 */;
import CheckpointSessionAnalyticsManagerDefault from "CheckpointSessionAnalyticsManager" /* 12494 */;
import react from "react" /* 19 */;
import AppStateStore from "AppStateStore" /* 2118 */;
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
