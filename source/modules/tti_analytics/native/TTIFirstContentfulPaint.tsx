// Module ID: 10026
// Function ID: 77408
// Name: TTIFirstContentfulPaint
// Dependencies: [31, 33, 4017, 14, 5934, 10027, 2]
// Exports: TTIFirstContentfulPaint

// Module 10026 (TTIFirstContentfulPaint)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getRootNavigationRef").fileFinishedImporting("modules/tti_analytics/native/TTIFirstContentfulPaint.tsx");

export const TTIFirstContentfulPaint = function TTIFirstContentfulPaint(checkFocusedScreen) {
  checkFocusedScreen = checkFocusedScreen.checkFocusedScreen;
  const items = [checkFocusedScreen];
  const onMeasurement = React.useCallback((nativeEvent) => {
    if (null != checkFocusedScreen) {
      const rootNavigationRef = checkFocusedScreen(outer1_2[2]).getRootNavigationRef();
      let currentRoute;
      if (null != rootNavigationRef) {
        currentRoute = rootNavigationRef.getCurrentRoute();
      }
      const obj = checkFocusedScreen(outer1_2[2]);
    }
    const firstContentfulPaint = outer1_1(outer1_2[3]).firstContentfulPaint;
    firstContentfulPaint.record(nativeEvent.nativeEvent.timestamp);
    checkFocusedScreen(outer1_2[4]).notifyAboutTTI();
  }, items);
  return jsx(checkFocusedScreen(10027).TTIMeasurementView, { onMeasurement });
};
