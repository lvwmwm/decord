// Module ID: 16758
// Function ID: 16759
// Name: TouchEventAnalyticsManager
// Dependencies: [1385, 2122, 16759, 2120, 2]

// Module 16758 (TouchEventAnalyticsManager)
import ZoomedInAnalyticsExperiment from "ZoomedInAnalyticsExperiment" /* 2122 */;
import react_nativeDefault from "react-native" /* 16759 */;
import UserStore from "UserStore" /* 1385 */;
import LifecycleManager from "LifecycleManager" /* 2120 */;
import size from "module_2" /* 2 */;

function updateEnabledState() {
  const currentUser = UserStore.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  let result = true === isStaffResult;
  if (!result) {
    const obj2 = ZoomedInAnalyticsExperiment;
    result = obj2.isZoomedExperimentEnabled();
  }
  if (result) {
    const tmp5 = c4;
    if (!tmp5) {
      try {
        const obj3 = react_nativeDefault;
        obj3.enableTouchLogging();
        c4 = true;
      } catch (err) {
        c4 = false;
      }
    }
  }
  if (!result) {
    const tmp9 = c4;
    if (tmp9) {
      try {
        const obj4 = react_nativeDefault;
        obj4.disableTouchLogging();
      } catch (err) {
      }
      c4 = false;
    }
  }
}
let c4 = false;
class TouchEventAnalyticsManager extends LifecycleManager {
  _initialize() {
    updateEnabledState();
    UserStore.addChangeListener(updateEnabledState);
  }
  _terminate() {
    UserStore.removeChangeListener(updateEnabledState);
    const tmp2 = c4;
    if (tmp2) {
      try {
        const obj = react_nativeDefault;
        obj.disableTouchLogging();
      } catch (err) {
      }
      c4 = false;
    }
  }
}
const prototype = TouchEventAnalyticsManager.prototype;
const touchEventAnalyticsManager = new TouchEventAnalyticsManager();
let result = size.fileFinishedImporting("modules/touch_analytics/TouchEventAnalyticsManager.android.tsx");

export default touchEventAnalyticsManager;
