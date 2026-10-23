// Module ID: 11374
// Function ID: 11375
// Name: tryLaunchAsFrame
// Dependencies: [2045, 6774, 11341, 11375, 10765, 2]
// Exports: tryLaunchAsFrame

// Module 11374 (tryLaunchAsFrame)
import FramesConstants from "FramesConstants" /* 6774 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10765 */;
import canLaunchContextlessFrame from "canLaunchContextlessFrame" /* 11341 */;
import openFrameInAppChannelDefault from "openFrameInAppChannel" /* 11375 */;
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
