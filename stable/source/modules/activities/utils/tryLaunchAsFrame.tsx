// Module ID: 8779
// Function ID: 8780
// Name: tryLaunchAsFrame
// Dependencies: [5064, 8497, 8778, 8755, 2]
// Exports: tryLaunchAsFrame

// Module 8779 (tryLaunchAsFrame)
import FramesConstants from "FramesConstants" /* 8497 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 8755 */;
import canLaunchFrame from "canLaunchFrame" /* 8778 */;
import ApplicationStore from "ApplicationStore" /* 5064 */;
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
