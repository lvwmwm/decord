// Module ID: 8784
// Function ID: 8785
// Name: tryLaunchAsFrame
// Dependencies: [5063, 8500, 8783, 8760, 2]
// Exports: tryLaunchAsFrame

// Module 8784 (tryLaunchAsFrame)
import FramesConstants from "FramesConstants" /* 8500 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 8760 */;
import canLaunchFrame from "canLaunchFrame" /* 8783 */;
import ApplicationStore from "ApplicationStore" /* 5063 */;
import size from "module_2" /* 2 */;

const MAIN_SURFACE = FramesConstants.MAIN_SURFACE;
const result = size.fileFinishedImporting("modules/activities/utils/tryLaunchAsFrame.tsx");

export const tryLaunchAsFrame = function tryLaunchAsFrame(applicationId) {
  let analyticsContext;
  let customId;
  let referrerId;
  applicationId = applicationId.applicationId;
  ({ customId, referrerId, analyticsContext } = applicationId);
  const application = ApplicationStore.getApplication(applicationId);
  let tmp2 = null == application;
  if (!tmp2) {
    const obj = canLaunchFrame;
    tmp2 = !obj.canLaunchFrame(application);
  }
  let flag = !tmp2;
  if (flag) {
    const obj3 = { applicationId, surface: MAIN_SURFACE, customId, referrerId, analyticsContext };
    const obj2 = FramesActionCreatorsDefault;
    obj2.launchFrame(obj3);
    flag = true;
  }
  return flag;
};
