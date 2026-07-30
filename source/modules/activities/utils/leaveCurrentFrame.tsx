// Module ID: 10613
// Function ID: 10614
// Name: leaveCurrentFrame
// Dependencies: [5686, 10614, 2]
// Exports: leaveCurrentFrame

// Module 10613 (leaveCurrentFrame)
import map from "map";

const result = require("set").fileFinishedImporting("modules/activities/utils/leaveCurrentFrame.tsx");

export const leaveCurrentFrame = function leaveCurrentFrame() {
  connectedFrame = connectedFrame.getConnectedFrame();
  if (null != connectedFrame) {
    let obj = importDefault(10614)();
    obj = { applicationId: null };
    obj[0] = connectedFrame.applicationId;
    obj.leaveFrame(obj);
  }
};
