// Module ID: 13878
// Function ID: 13879
// Name: updateEnabledState
// Dependencies: [1922, 13524, 13879, 4523, 2]

// Module 13878 (updateEnabledState)
import mergeGuildAvatar from "mergeGuildAvatar";
import "initialize";

const require = arg1;
function updateEnabledState() {
  const currentUser = mergeGuildAvatar.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  let result = true === isStaffResult;
  if (!result) {
    result = require(13524) /* apexExperiment */.isZoomedExperimentEnabled();
    const obj2 = require(13524) /* apexExperiment */;
  }
  if (result) {
    if (!c4) {
      try {
        importDefault(13879).enableTouchLogging();
        c4 = true;
        const obj3 = importDefault(13879);
      } catch (err) {
        c4 = false;
      }
    }
  }
  if (!result) {
    if (c4) {
      try {
        importDefault(13879).disableTouchLogging();
        c4 = false;
        const obj4 = importDefault(13879);
      } catch (err) {
      }
    }
  }
}
let c4 = false;
class TouchEventAnalyticsManager extends tmp2 {
}
const prototype = TouchEventAnalyticsManager.prototype;
prototype["_initialize"] = function _initialize() {
  updateEnabledState();
  mergeGuildAvatar.addChangeListener(updateEnabledState);
};
prototype["_terminate"] = function _terminate() {
  mergeGuildAvatar.removeChangeListener(updateEnabledState);
  if (c4) {
    try {
      importDefault(13879).disableTouchLogging();
      c4 = false;
      const obj = importDefault(13879);
    } catch (err) {
    }
  }
};
const touchEventAnalyticsManager = new TouchEventAnalyticsManager();
let result = require("enforcing").fileFinishedImporting("modules/touch_analytics/TouchEventAnalyticsManager.android.tsx");

export default touchEventAnalyticsManager;
