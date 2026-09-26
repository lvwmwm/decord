// Module ID: 8784
// Function ID: 8785
// Name: tryLaunchAsFrame
// Dependencies: [5063, 8500, 8783, 8760, 2]
// Exports: tryLaunchAsFrame

// Module 8784 (tryLaunchAsFrame)
import FramesActionCreatorsDefault from "FramesActionCreators" /* 8760 */;
import canLaunchFrame from "canLaunchFrame" /* 8783 */;
import ApplicationStore from "ApplicationStore" /* 5063 */;

require = fn;
const MAIN_SURFACE = fn(8500).MAIN_SURFACE;
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
