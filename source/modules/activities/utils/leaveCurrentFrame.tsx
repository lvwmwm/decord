// Module ID: 10477
// Function ID: 81180
// Name: leaveCurrentFrame
// Dependencies: []
// Exports: leaveCurrentFrame

// Module 10477 (leaveCurrentFrame)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/activities/utils/leaveCurrentFrame.tsx");

export const leaveCurrentFrame = function leaveCurrentFrame() {
  const connectedFrame = connectedFrame.getConnectedFrame();
  if (null != connectedFrame) {
    let obj = importDefault(dependencyMap[1])();
    obj = { applicationId: connectedFrame.applicationId };
    obj.leaveFrame(obj);
  }
};
