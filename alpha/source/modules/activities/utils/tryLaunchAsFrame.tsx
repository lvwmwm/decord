// Module ID: 10780
// Function ID: 10781
// Name: tryLaunchAsFrame
// Dependencies: [5437, 10767, 10768, 10769, 2]
// Exports: tryLaunchAsFrame

// Module 10780 (tryLaunchAsFrame)
import FramesConstants from "FramesConstants" /* 10767 */;
import canLaunchContextlessFrame from "canLaunchContextlessFrame" /* 10768 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10769 */;
import ApplicationStore from "ApplicationStore" /* 5437 */;
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
