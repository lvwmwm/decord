// Module ID: 10543
// Function ID: 10544
// Name: tryLaunchAsFrame
// Dependencies: [4339, 10526, 10528, 10529, 2]
// Exports: tryLaunchAsFrame

// Module 10543 (tryLaunchAsFrame)
import addApplication from "addApplication";
import { MAIN_SURFACE } from "FrameLayoutModes";

const require = arg1;
const result = require("canLaunchFrame").fileFinishedImporting("modules/activities/utils/tryLaunchAsFrame.tsx");

export const tryLaunchAsFrame = function tryLaunchAsFrame(applicationId) {
  applicationId = applicationId.applicationId;
  application = application.getApplication(applicationId);
  let tmp2 = null == application;
  if (!tmp2) {
    let obj = require(10528) /* canLaunchFrame */;
    tmp2 = !obj.canLaunchFrame(application);
  }
  let flag = !tmp2;
  if (!tmp2) {
    obj = { applicationId: null, surface: null };
    obj[0] = applicationId;
    obj[1] = MAIN_SURFACE;
    importDefault(10529).launchFrame(obj);
    flag = true;
    const obj2 = importDefault(10529);
  }
  return flag;
};
