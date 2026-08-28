// Module ID: 16552
// Function ID: 16553
// Name: context
// Dependencies: [19, 16526, 2]

// Module 16552 (context)
import importAllResult from "noop" /* 19 */;

const context = importAllResult.createContext(require("useActivityWebViewLock").activityPanelStateContextDefault);
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelStateContext.tsx");

export default context;
