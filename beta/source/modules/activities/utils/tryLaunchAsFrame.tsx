// Module ID: 9623
// Function ID: 9624
// Name: tryLaunchAsFrame
// Dependencies: [5017, 9344, 9622, 9599, 2]
// Exports: tryLaunchAsFrame

// Module 9623 (tryLaunchAsFrame)
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9599 */;
import canLaunchFrame from "canLaunchFrame" /* 9622 */;
import ApplicationStore from "ApplicationStore" /* 5017 */;

require = fn;
const MAIN_SURFACE = fn(9344).MAIN_SURFACE;
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
