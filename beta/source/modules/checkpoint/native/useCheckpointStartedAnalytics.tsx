// Module ID: 12517
// Function ID: 12518
// Name: useCheckpointStartedAnalytics
// Dependencies: [2118, 1071, 5474, 12494, 12493, 2]
// Exports: default

// Module 12517 (useCheckpointStartedAnalytics)
import Constants from "Constants" /* 1071 */;
import useMountEffectDefault from "useMountEffect" /* 5474 */;
import Tracking from "Tracking" /* 12493 */;
import CheckpointSessionAnalyticsManagerDefault from "CheckpointSessionAnalyticsManager" /* 12494 */;
import AppStateStore from "AppStateStore" /* 2118 */;
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
