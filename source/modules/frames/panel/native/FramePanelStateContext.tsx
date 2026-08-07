// Module ID: 16032
// Function ID: 16033
// Name: context
// Dependencies: [19, 16006, 2]

// Module 16032 (context)
import importAllResult from "noop";

const context = require("noop").createContext(require("useActivityWebViewLock").activityPanelStateContextDefault);
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelStateContext.tsx");

export default context;
