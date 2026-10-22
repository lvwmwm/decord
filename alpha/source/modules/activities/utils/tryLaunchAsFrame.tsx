// Module ID: 11351
// Function ID: 11352
// Name: tryLaunchAsFrame
// Dependencies: [2045, 6761, 11318, 11352, 10743, 2]
// Exports: tryLaunchAsFrame

// Module 11351 (tryLaunchAsFrame)
import FramesConstants from "FramesConstants" /* 6761 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10743 */;
import canLaunchContextlessFrame from "canLaunchContextlessFrame" /* 11318 */;
import openFrameInAppChannelDefault from "openFrameInAppChannel" /* 11352 */;
import ApplicationStore from "ApplicationStore" /* 2045 */;
import size from "module_2" /* 2 */;

const MAIN_SURFACE = FramesConstants.MAIN_SURFACE;
const result = size.fileFinishedImporting("modules/activities/utils/tryLaunchAsFrame.tsx");

export const tryLaunchAsFrame = function tryLaunchAsFrame(arg0) {
  let analyticsContext;
  let application;
  let applicationId;
  let launch;
  let preferAppChannel;
  ({ applicationId, application } = arg0);
  if (application === undefined) {
    application = ApplicationStore.getApplication(applicationId);
  }
  ({ analyticsContext, preferAppChannel, launch } = arg0);
  if (preferAppChannel === undefined) {
    preferAppChannel = false;
  }
  let tmp2 = null == application;
  if (!tmp2) {
    const obj = canLaunchContextlessFrame;
    tmp2 = !obj.canLaunchContextlessFrame(application);
  }
  let flag = !tmp2;
  if (flag) {
    if (preferAppChannel) {
      if (null != application.conjureProjectId) {
        const obj3 = { applicationId, analyticsContext };
        openFrameInAppChannelDefault(obj3);
        flag = true;
      }
    }
    const obj4 = { applicationId, surface: MAIN_SURFACE, launch, analyticsContext };
    const obj2 = FramesActionCreatorsDefault;
    obj2.launchFrame(obj4);
    flag = true;
  }
  return flag;
};
