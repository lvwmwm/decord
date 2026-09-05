// Module ID: 17041
// Function ID: 17042
// Name: context
// Dependencies: [19, 17015, 2]

// Module 17041 (context)
import importAllResult from "noop" /* 19 */;

const context = importAllResult.createContext(require("useActivityWebViewLock").activityPanelStateContextDefault);
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelStateContext.tsx");

export default context;
