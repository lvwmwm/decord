// Module ID: 13597
// Function ID: 13598
// Name: updateEnabledState
// Dependencies: [1874, 13243, 13598, 4368, 2]

// Module 13597 (updateEnabledState)
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
    result = require(13243) /* apexExperiment */.isZoomedExperimentEnabled();
    const obj2 = require(13243) /* apexExperiment */;
  }
  if (result) {
    if (!c4) {
      try {
        importDefault(13598).enableTouchLogging();
        c4 = true;
        const obj3 = importDefault(13598);
      } catch (err) {
        c4 = false;
      }
    }
  }
  if (!result) {
    if (c4) {
      try {
        importDefault(13598).disableTouchLogging();
        c4 = false;
        const obj4 = importDefault(13598);
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
      importDefault(13598).disableTouchLogging();
      c4 = false;
      const obj = importDefault(13598);
    } catch (err) {
    }
  }
};
const touchEventAnalyticsManager = new TouchEventAnalyticsManager();
let result = require("enforcing").fileFinishedImporting("modules/touch_analytics/TouchEventAnalyticsManager.android.tsx");

export default touchEventAnalyticsManager;
