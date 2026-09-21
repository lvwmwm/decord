// Module ID: 9591
// Function ID: 9592
// Name: tryLaunchAsFrame
// Dependencies: [4985, 9312, 9590, 9567, 2]
// Exports: tryLaunchAsFrame

// Module 9591 (tryLaunchAsFrame)
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9567 */;
import canLaunchFrame from "canLaunchFrame" /* 9590 */;
import ApplicationStore from "ApplicationStore" /* 4985 */;

require = fn;
const MAIN_SURFACE = fn(9312).MAIN_SURFACE;
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
