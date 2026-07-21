// Module ID: 10502
// Function ID: 82029
// Name: tryLaunchAsFrame
// Dependencies: []
// Exports: tryLaunchAsFrame

// Module 10502 (tryLaunchAsFrame)
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/activities/utils/tryLaunchAsFrame.tsx");

export const tryLaunchAsFrame = function tryLaunchAsFrame(applicationId) {
  applicationId = applicationId.applicationId;
  const application = application.getApplication(applicationId);
  let tmp2 = null == application;
  if (!tmp2) {
    let obj = arg1(dependencyMap[1]);
    tmp2 = !obj.canLaunchFrame(application);
  }
  let flag = !tmp2;
  if (!tmp2) {
    obj = { applicationId };
    importDefault(dependencyMap[2]).launchFrame(obj);
    flag = true;
    const obj2 = importDefault(dependencyMap[2]);
  }
  return flag;
};
