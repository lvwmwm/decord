// Module ID: 10589
// Function ID: 82617
// Name: getIsTabletActivitySurface
// Dependencies: [0, 0, 4294967295, 0]
// Exports: setOrientationLockState

// Module 10589 (getIsTabletActivitySurface)
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

function getIsTabletActivitySurface() {
  let tmp = __exportStarResult1;
  if (!__exportStarResult1) {
    tmp = __exportStarResult1;
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
__exportStarResult1 = __exportStarResult1.isIpadOS();
__exportStarResult1 = __exportStarResult1.isMetaQuest();
const result = __exportStarResult1.fileFinishedImporting("modules/activities/native/getDefaultOrientationLockState.tsx");

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
