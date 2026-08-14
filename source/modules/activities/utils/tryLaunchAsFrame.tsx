// Module ID: 10600
// Function ID: 10601
// Name: tryLaunchAsFrame
// Dependencies: [4383, 10583, 10585, 10586, 2]
// Exports: tryLaunchAsFrame

// Module 10600 (tryLaunchAsFrame)
import addApplication from "addApplication";
import { MAIN_SURFACE } from "FrameLayoutModes";

const require = arg1;
const result = require("canLaunchFrame").fileFinishedImporting("modules/activities/utils/tryLaunchAsFrame.tsx");

export const tryLaunchAsFrame = function tryLaunchAsFrame(applicationId) {
  applicationId = applicationId.applicationId;
  application = application.getApplication(applicationId);
  let tmp2 = null == application;
  if (!tmp2) {
    let obj = require(10585) /* canLaunchFrame */;
    tmp2 = !obj.canLaunchFrame(application);
  }
  let flag = !tmp2;
  if (!tmp2) {
    obj = { applicationId: null, surface: null };
    obj[0] = applicationId;
    obj[1] = MAIN_SURFACE;
    importDefault(10586).launchFrame(obj);
    flag = true;
    const obj2 = importDefault(10586);
  }
  return flag;
};
