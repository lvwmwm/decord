// Module ID: 10629
// Function ID: 82883
// Name: getIsTabletActivitySurface
// Dependencies: [4110, 1553, 686, 2]
// Exports: setOrientationLockState

// Module 10629 (getIsTabletActivitySurface)
import getSystemVersion from "getSystemVersion";
import isMetaQuest from "isMetaQuest";

function getIsTabletActivitySurface() {
  let tmp = getSystemVersion;
  if (!getSystemVersion) {
    tmp = isMetaQuest;
  }
  return tmp;
}
function getDefaultOrientationLockState(application) {
  if (null != application) {
    const embeddedActivityConfig = application.embeddedActivityConfig;
    if (getIsTabletActivitySurface()) {
      let prop;
      if (!tmp2) {
        prop = embeddedActivityConfig.tablet_default_orientation_lock_state;
      }
      let default_orientation_lock_state = prop;
    } else if (!tmp2) {
      default_orientation_lock_state = embeddedActivityConfig.default_orientation_lock_state;
    }
    return default_orientation_lock_state;
  }
}
getSystemVersion = getSystemVersion.isIpadOS();
isMetaQuest = isMetaQuest.isMetaQuest();
const result = require("dispatcher").fileFinishedImporting("modules/activities/native/getDefaultOrientationLockState.tsx");

export { getIsTabletActivitySurface };
export const setOrientationLockState = function setOrientationLockState(id) {
  let tmp = arg1;
  if (null == arg1) {
    tmp = getDefaultOrientationLockState(id);
  }
  if (null != tmp) {
    let obj = importDefault(686);
    obj = { type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE", applicationId: id.id, lockState: tmp };
    obj.dispatch(obj);
  }
};
export { getDefaultOrientationLockState };
