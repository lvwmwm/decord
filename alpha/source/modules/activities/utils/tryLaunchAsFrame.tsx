// Module ID: 10629
// Function ID: 10630
// Name: tryLaunchAsFrame
// Dependencies: [5436, 10613, 10617, 10618, 2]
// Exports: tryLaunchAsFrame

// Module 10629 (tryLaunchAsFrame)
import FramesConstants from "FramesConstants" /* 10613 */;
import canLaunchContextlessFrame from "canLaunchContextlessFrame" /* 10617 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10618 */;
import ApplicationStore from "ApplicationStore" /* 5436 */;
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
