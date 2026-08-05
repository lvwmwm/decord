// Module ID: 10498
// Function ID: 10499
// Name: tryLaunchAsFrame
// Dependencies: [4292, 10481, 10482, 2]
// Exports: tryLaunchAsFrame

// Module 10498 (tryLaunchAsFrame)
import addApplication from "addApplication";

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
    obj = { applicationId: null };
    obj[0] = applicationId;
    importDefault(10482).launchFrame(obj);
    flag = true;
    const obj2 = importDefault(10482);
  }
  return flag;
};
