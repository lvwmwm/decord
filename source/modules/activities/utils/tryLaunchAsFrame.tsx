// Module ID: 9452
// Function ID: 9453
// Name: tryLaunchAsFrame
// Dependencies: [4522, 9440, 9435, 9436, 2]
// Exports: tryLaunchAsFrame

// Module 9452 (tryLaunchAsFrame)
import canLaunchFrame from "canLaunchFrame" /* 9435 */;
import _launchFrameOnNativeDefault from "_launchFrameOnNative" /* 9436 */;
import closure_3 from "addApplication" /* 4522 */;
import { MAIN_SURFACE } from "FrameLayoutModes" /* 9440 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/utils/tryLaunchAsFrame.tsx");

export const tryLaunchAsFrame = function tryLaunchAsFrame(applicationId) {
  applicationId = applicationId.applicationId;
  ({ customId, referrerId } = applicationId);
  application = application.getApplication(applicationId);
  let tmp2 = null == application;
  if (!tmp2) {
    let obj = canLaunchFrame;
    tmp2 = !obj.canLaunchFrame(application);
  }
  let flag = !tmp2;
  if (!tmp2) {
    obj = { applicationId: null, surface: null, customId: null, referrerId: null };
    obj[0] = applicationId;
    obj[1] = MAIN_SURFACE;
    obj[2] = customId;
    obj[3] = referrerId;
    _launchFrameOnNativeDefault.launchFrame(obj);
    flag = true;
    const obj2 = _launchFrameOnNativeDefault;
  }
  return flag;
};
