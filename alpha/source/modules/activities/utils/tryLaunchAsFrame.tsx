// Module ID: 10855
// Function ID: 10856
// Name: tryLaunchAsFrame
// Dependencies: [5440, 10802, 10803, 10804, 2]
// Exports: tryLaunchAsFrame

// Module 10855 (tryLaunchAsFrame)
import FramesConstants from "FramesConstants" /* 10802 */;
import canLaunchContextlessFrame from "canLaunchContextlessFrame" /* 10803 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10804 */;
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
