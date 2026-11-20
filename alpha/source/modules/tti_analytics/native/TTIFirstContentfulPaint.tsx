// Module ID: 10312
// Function ID: 10313
// Name: TTIFirstContentfulPaint
// Dependencies: [19, 21, 4971, 9, 8247, 10313, 2]
// Exports: TTIFirstContentfulPaint

// Module 10312 (TTIFirstContentfulPaint)
import TTITrackerDefault from "TTITracker" /* 9 */;
import Fragment from "Fragment" /* 21 */;
import RootNavigationRef from "RootNavigationRef" /* 4971 */;
import PostTTIScheduler from "PostTTIScheduler" /* 8247 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/tti_analytics/native/TTIFirstContentfulPaint.tsx");

export function TTIFirstContentfulPaint(checkFocusedScreen) {
  checkFocusedScreen = checkFocusedScreen.checkFocusedScreen;
  const items = [checkFocusedScreen];
  const onMeasurement = react.useCallback((nativeEvent) => {
    if (null != checkFocusedScreen) {
      const obj = RootNavigationRef;
      const rootNavigationRef = obj.getRootNavigationRef();
      let currentRoute;
      if (rootNavigationRef != null) {
        currentRoute = rootNavigationRef.getCurrentRoute();
      }
    }
    const firstContentfulPaint = TTITrackerDefault.firstContentfulPaint;
    firstContentfulPaint.record(nativeEvent.nativeEvent.timestamp);
    const obj3 = PostTTIScheduler;
    obj3.notifyAboutTTI();
  }, items);
  return jsx(checkFocusedScreen(10313).TTIMeasurementView, { onMeasurement });
}
