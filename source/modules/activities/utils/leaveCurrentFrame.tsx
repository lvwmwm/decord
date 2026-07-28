// Module ID: 10609
// Function ID: 82532
// Name: leaveCurrentFrame
// Dependencies: [5668, 10610, 2]
// Exports: leaveCurrentFrame

// Module 10609 (leaveCurrentFrame)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("set").fileFinishedImporting("modules/activities/utils/leaveCurrentFrame.tsx");

export const leaveCurrentFrame = function leaveCurrentFrame() {
  connectedFrame = connectedFrame.getConnectedFrame();
  if (null != connectedFrame) {
    let obj = importDefault(10610)();
    obj = { applicationId: connectedFrame.applicationId };
    obj.leaveFrame(obj);
  }
};
