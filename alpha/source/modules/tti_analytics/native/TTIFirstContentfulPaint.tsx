// Module ID: 11110
// Function ID: 11111
// Name: TTIFirstContentfulPaint
// Dependencies: [19, 21, 5487, 9, 8783, 11111, 2]
// Exports: TTIFirstContentfulPaint

// Module 11110 (TTIFirstContentfulPaint)
import TTITrackerDefault from "TTITracker" /* 9 */;
import Fragment from "Fragment" /* 21 */;
import RootNavigationRef from "RootNavigationRef" /* 5487 */;
import PostTTIScheduler from "PostTTIScheduler" /* 8783 */;
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
  return jsx(checkFocusedScreen(11111).TTIMeasurementView, { onMeasurement });
}
