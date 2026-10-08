// Module ID: 11518
// Function ID: 11519
// Name: TTIFirstContentfulPaint
// Dependencies: [19, 21, 558, 576, 4937, 9, 7344, 11519, 2]

// Module 11518 (TTIFirstContentfulPaint)
import TTITrackerDefault from "TTITracker" /* 9 */;
import Fragment from "Fragment" /* 21 */;
import RootNavigationRef from "RootNavigationRef" /* 4937 */;
import PostTTIScheduler from "PostTTIScheduler" /* 7344 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function TTIFirstContentfulPaint(checkFocusedScreen) {
  let tmp4;
  let tmp5;
  let obj = checkFocusedScreen(576);
  const cResult = obj.c(4);
  const tmp = checkFocusedScreen;
  checkFocusedScreen = checkFocusedScreen.checkFocusedScreen;
  if (cResult[0] !== checkFocusedScreen) {
    const fn = function u(nativeEvent) {
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
    };
    cResult[0] = checkFocusedScreen;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== tmp4) {
    const tmp7 = jsx(tmp(11519).TTIMeasurementView, { onMeasurement: tmp4 });
    cResult[2] = tmp4;
    cResult[3] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[3];
  }
  return tmp5;
}) : (function TTIFirstContentfulPaint(checkFocusedScreen) {
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
  return jsx(checkFocusedScreen(11519).TTIMeasurementView, { onMeasurement });
});
const result = size.fileFinishedImporting("modules/tti_analytics/native/TTIFirstContentfulPaint.tsx");

export const TTIFirstContentfulPaint = tmp2;
