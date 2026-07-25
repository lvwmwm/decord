// Module ID: 15781
// Function ID: 121736
// Name: context
// Dependencies: [31, 15755, 2]

// Module 15781 (context)
import importAllResult from "result";

const context = require("result").createContext(require("useActivityWebViewLock").activityPanelStateContextDefault);
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelStateContext.tsx");

export default context;
