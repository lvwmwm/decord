// Module ID: 13470
// Function ID: 103693
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1849, 13118, 13471, 4530, 2]

// Module 13470 (_isNativeReflectConstruct)
import apexExperiment from "apexExperiment";
import enforcing from "enforcing";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import tmp2 from "LifecycleManager";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function updateEnabledState() {
  currentUser = currentUser.getCurrentUser();
  let isStaffResult;
  if (null != currentUser) {
    isStaffResult = currentUser.isStaff();
  }
  let result = true === isStaffResult;
  if (!result) {
    result = require(13118) /* apexExperiment */.isZoomedExperimentEnabled();
    const obj2 = require(13118) /* apexExperiment */;
  }
  if (result) {
    if (!c9) {
      importDefault(13471).enableTouchLogging();
      c9 = true;
      const obj3 = importDefault(13471);
    }
  }
  if (!result) {
    if (c9) {
      importDefault(13471).disableTouchLogging();
      c9 = false;
      while (true) {
        let tmp13 = __exception;
        continue;
      }
      const obj4 = importDefault(13471);
    }
  }
}
let c9 = false;
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/touch_analytics/TouchEventAnalyticsManager.android.tsx");

export default tmp2;
