// Module ID: 9392
// Function ID: 9393
// Name: tryLaunchAsFrame
// Dependencies: [4486, 9386, 9391, 9382, 2]
// Exports: tryLaunchAsFrame

// Module 9392 (tryLaunchAsFrame)
import _launchFrameOnNativeDefault from "_launchFrameOnNative" /* 9382 */;
import canLaunchFrame from "canLaunchFrame" /* 9391 */;
import closure_3 from "addApplication" /* 4486 */;
import { MAIN_SURFACE } from "FrameLayoutModes" /* 9386 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/utils/tryLaunchAsFrame.tsx");

export const tryLaunchAsFrame = function tryLaunchAsFrame(applicationId) {
  applicationId = applicationId.applicationId;
  application = application.getApplication(applicationId);
  let tmp2 = null == application;
  if (!tmp2) {
    let obj = canLaunchFrame;
    tmp2 = !obj.canLaunchFrame(application);
  }
  let flag = !tmp2;
  if (!tmp2) {
    obj = { applicationId: null, surface: null };
    obj[0] = applicationId;
    obj[1] = MAIN_SURFACE;
    _launchFrameOnNativeDefault.launchFrame(obj);
    flag = true;
    const obj2 = _launchFrameOnNativeDefault;
  }
  return flag;
};
