// Module ID: 11345
// Function ID: 11346
// Name: TTIFirstContentfulPaint
// Dependencies: [19, 21, 4198, 9, 7174, 11346, 2]
// Exports: TTIFirstContentfulPaint

// Module 11345 (TTIFirstContentfulPaint)
import noop from "noop";
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
      if (rootNavigationRef != null) {
        currentRoute = rootNavigationRef.getCurrentRoute();
      }
      const obj = checkFocusedScreen(outer1_2[2]);
    }
    const firstContentfulPaint = outer1_1(outer1_2[3]).firstContentfulPaint;
    firstContentfulPaint.record(nativeEvent.nativeEvent.timestamp);
    checkFocusedScreen(outer1_2[4]).notifyAboutTTI();
  }, items);
  return jsx(checkFocusedScreen(11346).TTIMeasurementView, { onMeasurement });
};
