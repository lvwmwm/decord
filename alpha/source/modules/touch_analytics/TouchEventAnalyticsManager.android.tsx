// Module ID: 14634
// Function ID: 14635
// Name: TouchEventAnalyticsManager
// Dependencies: [1389, 2003, 14635, 2001, 2]

// Module 14634 (TouchEventAnalyticsManager)
import ZoomedInAnalyticsExperiment from "ZoomedInAnalyticsExperiment" /* 2003 */;
import react_nativeDefault from "react-native" /* 14635 */;
import UserStore from "UserStore" /* 1389 */;
import LifecycleManager from "LifecycleManager" /* 2001 */;
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
