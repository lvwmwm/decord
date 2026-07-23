// Module ID: 10487
// Function ID: 81230
// Name: leaveCurrentFrame
// Dependencies: [10479, 10488, 2]
// Exports: leaveCurrentFrame

// Module 10487 (leaveCurrentFrame)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("set").fileFinishedImporting("modules/activities/utils/leaveCurrentFrame.tsx");

export const leaveCurrentFrame = function leaveCurrentFrame() {
  connectedFrame = connectedFrame.getConnectedFrame();
  if (null != connectedFrame) {
    let obj = importDefault(10488)();
    obj = { applicationId: connectedFrame.applicationId };
    obj.leaveFrame(obj);
  }
};
