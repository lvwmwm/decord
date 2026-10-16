// Module ID: 10856
// Function ID: 10857
// Name: tryLaunchAsFrame
// Dependencies: [5440, 10803, 10804, 10805, 2]
// Exports: tryLaunchAsFrame

// Module 10856 (tryLaunchAsFrame)
import FramesConstants from "FramesConstants" /* 10803 */;
import canLaunchContextlessFrame from "canLaunchContextlessFrame" /* 10804 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10805 */;
import ApplicationStore from "ApplicationStore" /* 5440 */;
import size from "module_2" /* 2 */;

const MAIN_SURFACE = FramesConstants.MAIN_SURFACE;
const result = size.fileFinishedImporting("modules/activities/utils/tryLaunchAsFrame.tsx");

export const tryLaunchAsFrame = function tryLaunchAsFrame(applicationId) {
  let analyticsContext;
  let launch;
  applicationId = applicationId.applicationId;
  ({ launch, analyticsContext } = applicationId);
  const application = ApplicationStore.getApplication(applicationId);
  let tmp2 = null == application;
  if (!tmp2) {
    const obj = canLaunchContextlessFrame;
    tmp2 = !obj.canLaunchContextlessFrame(application);
  }
  let flag = !tmp2;
  if (flag) {
    const obj3 = { applicationId, surface: MAIN_SURFACE, launch, analyticsContext };
    const obj2 = FramesActionCreatorsDefault;
    obj2.launchFrame(obj3);
    flag = true;
  }
  return flag;
};
