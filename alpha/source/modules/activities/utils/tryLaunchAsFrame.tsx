// Module ID: 10935
// Function ID: 10936
// Name: tryLaunchAsFrame
// Dependencies: [5445, 10697, 10901, 10727, 2]
// Exports: tryLaunchAsFrame

// Module 10935 (tryLaunchAsFrame)
import FramesConstants from "FramesConstants" /* 10697 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10727 */;
import canLaunchContextlessFrame from "canLaunchContextlessFrame" /* 10901 */;
import ApplicationStore from "ApplicationStore" /* 5445 */;
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
