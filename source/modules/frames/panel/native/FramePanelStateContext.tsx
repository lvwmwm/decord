// Module ID: 16210
// Function ID: 16211
// Name: context
// Dependencies: [19, 16184, 2]

// Module 16210 (context)
import importAllResult from "noop";

const context = require("noop").createContext(require("useActivityWebViewLock").activityPanelStateContextDefault);
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelStateContext.tsx");

export default context;
