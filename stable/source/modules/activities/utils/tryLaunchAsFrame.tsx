// Module ID: 9653
// Function ID: 9654
// Name: tryLaunchAsFrame
// Dependencies: [4864, 9641, 9636, 9637, 2]
// Exports: tryLaunchAsFrame

// Module 9653 (tryLaunchAsFrame)
import canLaunchFrame from "canLaunchFrame" /* 9636 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9637 */;
import ApplicationStore from "ApplicationStore" /* 4864 */;

require = fn;
const MAIN_SURFACE = fn(9641).MAIN_SURFACE;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/tryLaunchAsFrame.tsx");

export const tryLaunchAsFrame = function tryLaunchAsFrame(applicationId) {
  applicationId = applicationId.applicationId;
  ({ customId, referrerId, analyticsContext } = applicationId);
  const application = ApplicationStore.getApplication(applicationId);
  let tmp2 = null == application;
  if (!tmp2) {
    tmp2 = !canLaunchFrame.canLaunchFrame(application);
  }
  let flag = !tmp2;
  if (!tmp2) {
    const obj3 = { applicationId, surface: MAIN_SURFACE, customId, referrerId, analyticsContext };
    FramesActionCreatorsDefault.launchFrame(obj3);
    flag = true;
  }
  return flag;
};
