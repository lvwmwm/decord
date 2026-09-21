// Module ID: 12026
// Function ID: 12027
// Name: TTIFirstContentfulPaint
// Dependencies: [19, 21, 558, 568, 4617, 9, 7908, 12027, 2]

// Module 12026 (TTIFirstContentfulPaint)
import TTITrackerDefault from "TTITracker" /* 9 */;
import RootNavigationRef from "RootNavigationRef" /* 4617 */;
import PostTTIScheduler from "PostTTIScheduler" /* 7908 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/TTIFirstContentfulPaint.tsx");

export const TTIFirstContentfulPaint = ReactCompilerGating.isReactCompilerEnabled() ? ((checkFocusedScreen) => {
  const cResult = checkFocusedScreen(568).c(4);
  checkFocusedScreen = checkFocusedScreen.checkFocusedScreen;
  if (cResult[0] !== checkFocusedScreen) {
    const fn = function u(nativeEvent) {
      if (null != checkFocusedScreen) {
        const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
        let currentRoute;
        if (rootNavigationRef != null) {
          currentRoute = rootNavigationRef.getCurrentRoute();
        }
      }
      const firstContentfulPaint = TTITrackerDefault.firstContentfulPaint;
      firstContentfulPaint.record(nativeEvent.nativeEvent.timestamp);
      PostTTIScheduler.notifyAboutTTI();
    };
    cResult[0] = checkFocusedScreen;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== tmp4) {
    const obj2 = { onMeasurement: tmp4 };
    const tmp7 = jsx(checkFocusedScreen(12027).TTIMeasurementView, { onMeasurement: tmp4 });
    cResult[2] = tmp4;
    cResult[3] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[3];
  }
  return tmp5;
}) : ((checkFocusedScreen) => {
  checkFocusedScreen = checkFocusedScreen.checkFocusedScreen;
  const items = [checkFocusedScreen];
  const onMeasurement = noop.useCallback((nativeEvent) => {
    if (null != checkFocusedScreen) {
      const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
      let currentRoute;
      if (rootNavigationRef != null) {
        currentRoute = rootNavigationRef.getCurrentRoute();
      }
    }
    const firstContentfulPaint = TTITrackerDefault.firstContentfulPaint;
    firstContentfulPaint.record(nativeEvent.nativeEvent.timestamp);
    PostTTIScheduler.notifyAboutTTI();
  }, items);
  return jsx(checkFocusedScreen(12027).TTIMeasurementView, { onMeasurement });
});
