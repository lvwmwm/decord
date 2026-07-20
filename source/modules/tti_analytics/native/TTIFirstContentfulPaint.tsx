// Module ID: 10010
// Function ID: 77383
// Name: TTIFirstContentfulPaint
// Dependencies: []
// Exports: TTIFirstContentfulPaint

// Module 10010 (TTIFirstContentfulPaint)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/tti_analytics/native/TTIFirstContentfulPaint.tsx");

export const TTIFirstContentfulPaint = function TTIFirstContentfulPaint(checkFocusedScreen) {
  checkFocusedScreen = checkFocusedScreen.checkFocusedScreen;
  const arg1 = checkFocusedScreen;
  const items = [checkFocusedScreen];
  const onMeasurement = React.useCallback((nativeEvent) => {
    if (null != checkFocusedScreen) {
      const rootNavigationRef = checkFocusedScreen(closure_2[2]).getRootNavigationRef();
      let currentRoute;
      if (null != rootNavigationRef) {
        currentRoute = rootNavigationRef.getCurrentRoute();
      }
      const obj = checkFocusedScreen(closure_2[2]);
    }
    const firstContentfulPaint = callback(closure_2[3]).firstContentfulPaint;
    firstContentfulPaint.record(nativeEvent.nativeEvent.timestamp);
    checkFocusedScreen(closure_2[4]).notifyAboutTTI();
  }, items);
  return jsx(arg1(dependencyMap[5]).TTIMeasurementView, { onMeasurement });
};
