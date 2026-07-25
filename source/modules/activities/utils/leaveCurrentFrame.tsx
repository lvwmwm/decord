// Module ID: 10570
// Function ID: 82406
// Name: leaveCurrentFrame
// Dependencies: [5658, 10571, 2]
// Exports: leaveCurrentFrame

// Module 10570 (leaveCurrentFrame)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("set").fileFinishedImporting("modules/activities/utils/leaveCurrentFrame.tsx");

export const leaveCurrentFrame = function leaveCurrentFrame() {
  connectedFrame = connectedFrame.getConnectedFrame();
  if (null != connectedFrame) {
    let obj = importDefault(10571)();
    obj = { applicationId: connectedFrame.applicationId };
    obj.leaveFrame(obj);
  }
};
