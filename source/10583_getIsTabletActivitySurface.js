// Module ID: 10583
// Function ID: 82594
// Name: getIsTabletActivitySurface
// Dependencies: [0, 0, 4294967295, 0]
// Exports: setOrientationLockState

// Module 10583 (getIsTabletActivitySurface)
import result from "result";
import result from "result";
import result from "result";

function getIsTabletActivitySurface() {
  let tmp = result;
  if (!result) {
    tmp = result;
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
result = result.isIpadOS();
result = result.isMetaQuest();
result = result.fileFinishedImporting("modules/activities/native/getDefaultOrientationLockState.tsx");

export { getIsTabletActivitySurface };
export const setOrientationLockState = function setOrientationLockState(id) {
  let tmp = arg1;
  if (null == arg1) {
    tmp = getDefaultOrientationLockState(id);
  }
  if (null != tmp) {
    let obj = importDefault(dependencyMap[2]);
    obj = { type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE", applicationId: id.id, lockState: tmp };
    obj.dispatch(obj);
  }
};
export { getDefaultOrientationLockState };
