// Module ID: 10575
// Function ID: 82448
// Name: tryLaunchAsFrame
// Dependencies: [4168, 10442, 5665, 2]
// Exports: tryLaunchAsFrame

// Module 10575 (tryLaunchAsFrame)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_launchFrameOnNative").fileFinishedImporting("modules/activities/utils/tryLaunchAsFrame.tsx");

export const tryLaunchAsFrame = function tryLaunchAsFrame(applicationId) {
  applicationId = applicationId.applicationId;
  application = application.getApplication(applicationId);
  let tmp2 = null == application;
  if (!tmp2) {
    let obj = require(10442) /* canLaunchFrame */;
    tmp2 = !obj.canLaunchFrame(application);
  }
  let flag = !tmp2;
  if (!tmp2) {
    obj = { applicationId };
    importDefault(5665).launchFrame(obj);
    flag = true;
    const obj2 = importDefault(5665);
  }
  return flag;
};
