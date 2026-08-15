// Module ID: 16260
// Function ID: 16261
// Name: context
// Dependencies: [19, 16234, 2]

// Module 16260 (context)
import importAllResult from "noop";

const context = require("noop").createContext(require("useActivityWebViewLock").activityPanelStateContextDefault);
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelStateContext.tsx");

export default context;
