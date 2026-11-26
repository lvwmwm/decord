// Module ID: 12647
// Function ID: 12648
// Name: useCheckpointStartedAnalytics
// Dependencies: [2119, 1071, 5604, 12619, 12618, 2]
// Exports: default

// Module 12647 (useCheckpointStartedAnalytics)
import Constants from "Constants" /* 1071 */;
import useMountEffectDefault from "useMountEffect" /* 5604 */;
import Tracking from "Tracking" /* 12618 */;
import CheckpointSessionAnalyticsManagerDefault from "CheckpointSessionAnalyticsManager" /* 12619 */;
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
