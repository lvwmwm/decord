// Module ID: 10614
// Function ID: 82574
// Name: tryLaunchAsFrame
// Dependencies: [4202, 10481, 5675, 2]
// Exports: tryLaunchAsFrame

// Module 10614 (tryLaunchAsFrame)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_launchFrameOnNative").fileFinishedImporting("modules/activities/utils/tryLaunchAsFrame.tsx");

export const tryLaunchAsFrame = function tryLaunchAsFrame(applicationId) {
  applicationId = applicationId.applicationId;
  application = application.getApplication(applicationId);
  let tmp2 = null == application;
  if (!tmp2) {
    let obj = require(10481) /* canLaunchFrame */;
    tmp2 = !obj.canLaunchFrame(application);
  }
  let flag = !tmp2;
  if (!tmp2) {
    obj = { applicationId };
    importDefault(5675).launchFrame(obj);
    flag = true;
    const obj2 = importDefault(5675);
  }
  return flag;
};
