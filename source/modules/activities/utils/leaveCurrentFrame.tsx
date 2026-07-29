// Module ID: 10617
// Function ID: 10618
// Name: leaveCurrentFrame
// Dependencies: [5686, 10618, 2]
// Exports: leaveCurrentFrame

// Module 10617 (leaveCurrentFrame)
import map from "map";

const result = require("set").fileFinishedImporting("modules/activities/utils/leaveCurrentFrame.tsx");

export const leaveCurrentFrame = function leaveCurrentFrame() {
  connectedFrame = connectedFrame.getConnectedFrame();
  if (null != connectedFrame) {
    let obj = importDefault(10618)();
    obj = { applicationId: null };
    obj[0] = connectedFrame.applicationId;
    obj.leaveFrame(obj);
  }
};
