// Module ID: 15985
// Function ID: 15986
// Name: context
// Dependencies: [19, 15959, 2]

// Module 15985 (context)
import importAllResult from "noop";

const context = require("noop").createContext(require("useActivityWebViewLock").activityPanelStateContextDefault);
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelStateContext.tsx");

export default context;
