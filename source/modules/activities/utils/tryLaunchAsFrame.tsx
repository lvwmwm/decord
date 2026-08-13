// Module ID: 10584
// Function ID: 10585
// Name: tryLaunchAsFrame
// Dependencies: [4383, 10567, 10569, 10570, 2]
// Exports: tryLaunchAsFrame

// Module 10584 (tryLaunchAsFrame)
import addApplication from "addApplication";
import { MAIN_SURFACE } from "FrameLayoutModes";

const require = arg1;
const result = require("canLaunchFrame").fileFinishedImporting("modules/activities/utils/tryLaunchAsFrame.tsx");

export const tryLaunchAsFrame = function tryLaunchAsFrame(applicationId) {
  applicationId = applicationId.applicationId;
  application = application.getApplication(applicationId);
  let tmp2 = null == application;
  if (!tmp2) {
    let obj = require(10569) /* canLaunchFrame */;
    tmp2 = !obj.canLaunchFrame(application);
  }
  let flag = !tmp2;
  if (!tmp2) {
    obj = { applicationId: null, surface: null };
    obj[0] = applicationId;
    obj[1] = MAIN_SURFACE;
    importDefault(10570).launchFrame(obj);
    flag = true;
    const obj2 = importDefault(10570);
  }
  return flag;
};
