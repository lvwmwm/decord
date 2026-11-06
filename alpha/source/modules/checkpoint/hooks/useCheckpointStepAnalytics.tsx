// Module ID: 13666
// Function ID: 13667
// Name: useCheckpointStepAnalytics
// Dependencies: [19, 13642, 13641, 5751, 2]
// Exports: useCheckpointCloseAnalytics, useCheckpointStepAnalytics

// Module 13666 (useCheckpointStepAnalytics)
import useMountEffect from "useMountEffect" /* 5751 */;
import Tracking from "Tracking" /* 13641 */;
import CheckpointSessionAnalyticsManagerDefault from "CheckpointSessionAnalyticsManager" /* 13642 */;
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
