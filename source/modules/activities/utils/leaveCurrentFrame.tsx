// Module ID: 10527
// Function ID: 10528
// Name: leaveCurrentFrame
// Dependencies: [10509, 10528, 2]
// Exports: leaveCurrentFrame

// Module 10527 (leaveCurrentFrame)
import map from "map";

const result = require("set").fileFinishedImporting("modules/activities/utils/leaveCurrentFrame.tsx");

export const leaveCurrentFrame = function leaveCurrentFrame() {
  mainFrame = mainFrame.getMainFrame();
  if (null != mainFrame) {
    importDefault(10528)().leaveFrame(mainFrame.id);
    const obj = importDefault(10528)();
  }
};
