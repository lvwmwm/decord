// Module ID: 12655
// Function ID: 12656
// Name: useCheckpointStartedAnalytics
// Dependencies: [2119, 1071, 5604, 12627, 12626, 2]
// Exports: default

// Module 12655 (useCheckpointStartedAnalytics)
import Constants from "Constants" /* 1071 */;
import useMountEffectDefault from "useMountEffect" /* 5604 */;
import Tracking from "Tracking" /* 12626 */;
import CheckpointSessionAnalyticsManagerDefault from "CheckpointSessionAnalyticsManager" /* 12627 */;
import AppStateStore from "AppStateStore" /* 2119 */;
import size from "module_2" /* 2 */;

const AppStates = Constants.AppStates;
let result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointStartedAnalytics.tsx");

export default function useCheckpointStartedAnalytics(arg0) {
  let closure_0 = arg0;
  useMountEffectDefault(() => {
    const obj = CheckpointSessionAnalyticsManagerDefault;
    const obj2 = { isForeground: AppStateStore.getState() === AppStates.ACTIVE };
    obj.initialize(obj2);
    const obj3 = Tracking;
    const result = obj3.trackCheckpoint2026Started(closure_0);
  });
};
