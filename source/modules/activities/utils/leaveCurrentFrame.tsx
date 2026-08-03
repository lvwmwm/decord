// Module ID: 10665
// Function ID: 10666
// Name: leaveCurrentFrame
// Dependencies: [10657, 10666, 2]
// Exports: leaveCurrentFrame

// Module 10665 (leaveCurrentFrame)
import map from "map";

const result = require("set").fileFinishedImporting("modules/activities/utils/leaveCurrentFrame.tsx");

export const leaveCurrentFrame = function leaveCurrentFrame() {
  connectedFrame = connectedFrame.getConnectedFrame();
  if (null != connectedFrame) {
    let obj = importDefault(10666)();
    obj = { applicationId: null };
    obj[0] = connectedFrame.applicationId;
    obj.leaveFrame(obj);
  }
};
