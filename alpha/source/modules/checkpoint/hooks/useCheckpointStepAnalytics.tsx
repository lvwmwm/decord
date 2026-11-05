// Module ID: 13691
// Function ID: 13692
// Name: useCheckpointStepAnalytics
// Dependencies: [19, 13667, 13666, 5731, 2]
// Exports: useCheckpointCloseAnalytics, useCheckpointStepAnalytics

// Module 13691 (useCheckpointStepAnalytics)
import useMountEffect from "useMountEffect" /* 5731 */;
import Tracking from "Tracking" /* 13666 */;
import CheckpointSessionAnalyticsManagerDefault from "CheckpointSessionAnalyticsManager" /* 13667 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/checkpoint/hooks/useCheckpointStepAnalytics.tsx");

export function useCheckpointStepAnalytics(route) {
  let closure_0 = route;
  const items = [route];
  const effect = react.useEffect(() => {
    const obj = CheckpointSessionAnalyticsManagerDefault;
    obj.setStepName(route);
    const obj2 = Tracking;
    const result = obj2.trackCheckpoint2026StepViewed(route);
  }, items);
}
export function useCheckpointCloseAnalytics() {
  let obj = useMountEffect;
  const unmountEffect = obj.useUnmountEffect(() => {
    const trackCheckpoint2026Closed = Tracking.trackCheckpoint2026Closed;
    Tracking;
    const obj = CheckpointSessionAnalyticsManagerDefault;
    const result = trackCheckpoint2026Closed(obj.getStepName());
  });
}
