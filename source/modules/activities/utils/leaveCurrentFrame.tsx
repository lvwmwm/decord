// Module ID: 10516
// Function ID: 81422
// Name: leaveCurrentFrame
// Dependencies: [10508, 10517, 2]
// Exports: leaveCurrentFrame

// Module 10516 (leaveCurrentFrame)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("set").fileFinishedImporting("modules/activities/utils/leaveCurrentFrame.tsx");

export const leaveCurrentFrame = function leaveCurrentFrame() {
  connectedFrame = connectedFrame.getConnectedFrame();
  if (null != connectedFrame) {
    let obj = importDefault(10517)();
    obj = { applicationId: connectedFrame.applicationId };
    obj.leaveFrame(obj);
  }
};
