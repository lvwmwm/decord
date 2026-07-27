// Module ID: 15793
// Function ID: 121783
// Name: context
// Dependencies: [31, 15767, 2]

// Module 15793 (context)
import importAllResult from "result";

const context = require("result").createContext(require("useActivityWebViewLock").activityPanelStateContextDefault);
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelStateContext.tsx");

export default context;
