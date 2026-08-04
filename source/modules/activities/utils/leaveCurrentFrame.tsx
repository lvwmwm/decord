// Module ID: 10514
// Function ID: 10515
// Name: leaveCurrentFrame
// Dependencies: [10506, 10515, 2]
// Exports: leaveCurrentFrame

// Module 10514 (leaveCurrentFrame)
import map from "map";

const result = require("set").fileFinishedImporting("modules/activities/utils/leaveCurrentFrame.tsx");

export const leaveCurrentFrame = function leaveCurrentFrame() {
  connectedFrame = connectedFrame.getConnectedFrame();
  if (null != connectedFrame) {
    let obj = importDefault(10515)();
    obj = { applicationId: null };
    obj[0] = connectedFrame.applicationId;
    obj.leaveFrame(obj);
  }
};
