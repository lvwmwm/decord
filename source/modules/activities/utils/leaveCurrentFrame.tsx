// Module ID: 10470
// Function ID: 81133
// Name: leaveCurrentFrame
// Dependencies: []
// Exports: leaveCurrentFrame

// Module 10470 (leaveCurrentFrame)
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
