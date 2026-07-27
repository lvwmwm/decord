// Module ID: 10571
// Function ID: 82411
// Name: leaveCurrentFrame
// Dependencies: [5658, 10572, 2]
// Exports: leaveCurrentFrame

// Module 10571 (leaveCurrentFrame)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("set").fileFinishedImporting("modules/activities/utils/leaveCurrentFrame.tsx");

export const leaveCurrentFrame = function leaveCurrentFrame() {
  connectedFrame = connectedFrame.getConnectedFrame();
  if (null != connectedFrame) {
    let obj = importDefault(10572)();
    obj = { applicationId: connectedFrame.applicationId };
    obj.leaveFrame(obj);
  }
};
