// Module ID: 11256
// Function ID: 11257
// Name: tryLaunchAsFrame
// Dependencies: [5540, 6296, 11220, 11042, 2]
// Exports: tryLaunchAsFrame

// Module 11256 (tryLaunchAsFrame)
import FramesConstants from "FramesConstants" /* 6296 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11042 */;
import canLaunchContextlessFrame from "canLaunchContextlessFrame" /* 11220 */;
import ApplicationStore from "ApplicationStore" /* 5540 */;
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
