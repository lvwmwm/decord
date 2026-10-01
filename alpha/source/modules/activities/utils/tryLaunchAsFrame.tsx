// Module ID: 8976
// Function ID: 8977
// Name: tryLaunchAsFrame
// Dependencies: [5072, 8691, 8975, 8952, 2]
// Exports: tryLaunchAsFrame

// Module 8976 (tryLaunchAsFrame)
import FramesActionCreatorsDefault from "FramesActionCreators" /* 8952 */;
import canLaunchFrame from "canLaunchFrame" /* 8975 */;
import ApplicationStore from "ApplicationStore" /* 5072 */;

require = fn;
const MAIN_SURFACE = fn(8691).MAIN_SURFACE;
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
