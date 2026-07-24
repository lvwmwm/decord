// Module ID: 10542
// Function ID: 82284
// Name: tryLaunchAsFrame
// Dependencies: [4167, 10511, 10512, 2]
// Exports: tryLaunchAsFrame

// Module 10542 (tryLaunchAsFrame)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_launchFrameOnNative").fileFinishedImporting("modules/activities/utils/tryLaunchAsFrame.tsx");

export const tryLaunchAsFrame = function tryLaunchAsFrame(applicationId) {
  applicationId = applicationId.applicationId;
  application = application.getApplication(applicationId);
  let tmp2 = null == application;
  if (!tmp2) {
    let obj = require(10511) /* canLaunchFrame */;
    tmp2 = !obj.canLaunchFrame(application);
  }
  let flag = !tmp2;
  if (!tmp2) {
    obj = { applicationId };
    importDefault(10512).launchFrame(obj);
    flag = true;
    const obj2 = importDefault(10512);
  }
  return flag;
};
