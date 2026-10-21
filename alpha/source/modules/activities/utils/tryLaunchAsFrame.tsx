// Module ID: 11325
// Function ID: 11326
// Name: tryLaunchAsFrame
// Dependencies: [2045, 6755, 11290, 10724, 2]
// Exports: tryLaunchAsFrame

// Module 11325 (tryLaunchAsFrame)
import FramesConstants from "FramesConstants" /* 6755 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10724 */;
import canLaunchContextlessFrame from "canLaunchContextlessFrame" /* 11290 */;
import ApplicationStore from "ApplicationStore" /* 2045 */;
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
