// Module ID: 10637
// Function ID: 10638
// Name: tryLaunchAsFrame
// Dependencies: [4226, 10505, 5693, 2]
// Exports: tryLaunchAsFrame

// Module 10637 (tryLaunchAsFrame)
import addApplication from "addApplication";

const require = arg1;
const result = require("_launchFrameOnNative").fileFinishedImporting("modules/activities/utils/tryLaunchAsFrame.tsx");

export const tryLaunchAsFrame = function tryLaunchAsFrame(applicationId) {
  applicationId = applicationId.applicationId;
  application = application.getApplication(applicationId);
  let tmp2 = null == application;
  if (!tmp2) {
    let obj = require(10505) /* canLaunchFrame */;
    tmp2 = !obj.canLaunchFrame(application);
  }
  let flag = !tmp2;
  if (!tmp2) {
    obj = { applicationId: null };
    obj[0] = applicationId;
    importDefault(5693).launchFrame(obj);
    flag = true;
    const obj2 = importDefault(5693);
  }
  return flag;
};
