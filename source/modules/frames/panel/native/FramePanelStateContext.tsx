// Module ID: 15723
// Function ID: 121245
// Name: context
// Dependencies: [31, 15697, 2]

// Module 15723 (context)
import importAllResult from "result";

const context = require("result").createContext(require("useActivityWebViewLock").activityPanelStateContextDefault);
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelStateContext.tsx");

export default context;
