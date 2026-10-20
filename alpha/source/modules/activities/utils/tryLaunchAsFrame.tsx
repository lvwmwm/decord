// Module ID: 11281
// Function ID: 11282
// Name: tryLaunchAsFrame
// Dependencies: [2046, 6727, 11246, 11069, 2]
// Exports: tryLaunchAsFrame

// Module 11281 (tryLaunchAsFrame)
import FramesConstants from "FramesConstants" /* 6727 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11069 */;
import canLaunchContextlessFrame from "canLaunchContextlessFrame" /* 11246 */;
import ApplicationStore from "ApplicationStore" /* 2046 */;
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
