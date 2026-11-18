// Module ID: 12428
// Function ID: 12429
// Name: useCheckpointStepAnalytics
// Dependencies: [19, 12416, 12415, 5384, 2]
// Exports: useCheckpointCloseAnalytics, useCheckpointStepAnalytics

// Module 12428 (useCheckpointStepAnalytics)
import useMountEffect from "useMountEffect" /* 5384 */;
import Tracking from "Tracking" /* 12415 */;
import CheckpointSessionAnalyticsManagerDefault from "CheckpointSessionAnalyticsManager" /* 12416 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/checkpoint/hooks/useCheckpointStepAnalytics.tsx");

export function useCheckpointStepAnalytics(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  const effect = react.useEffect(() => {
    const obj = CheckpointSessionAnalyticsManagerDefault;
    obj.setStepName(closure_0);
    const obj2 = Tracking;
    const result = obj2.trackCheckpoint2026StepViewed(closure_0);
  }, items);
}
export function useCheckpointCloseAnalytics() {
  let obj = useMountEffect;
  const unmountEffect = obj.useUnmountEffect(() => {
    const obj = CheckpointSessionAnalyticsManagerDefault;
    obj.stop();
    const trackCheckpoint2026Closed = Tracking.trackCheckpoint2026Closed;
    Tracking;
    const obj2 = CheckpointSessionAnalyticsManagerDefault;
    const result = trackCheckpoint2026Closed(obj2.getStepName());
  });
}
