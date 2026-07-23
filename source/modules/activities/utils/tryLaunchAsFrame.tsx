// Module ID: 10513
// Function ID: 82092
// Name: tryLaunchAsFrame
// Dependencies: [4167, 10482, 10483, 2]
// Exports: tryLaunchAsFrame

// Module 10513 (tryLaunchAsFrame)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_launchFrameOnNative").fileFinishedImporting("modules/activities/utils/tryLaunchAsFrame.tsx");

export const tryLaunchAsFrame = function tryLaunchAsFrame(applicationId) {
  applicationId = applicationId.applicationId;
  application = application.getApplication(applicationId);
  let tmp2 = null == application;
  if (!tmp2) {
    let obj = require(10482) /* canLaunchFrame */;
    tmp2 = !obj.canLaunchFrame(application);
  }
  let flag = !tmp2;
  if (!tmp2) {
    obj = { applicationId };
    importDefault(10483).launchFrame(obj);
    flag = true;
    const obj2 = importDefault(10483);
  }
  return flag;
};
