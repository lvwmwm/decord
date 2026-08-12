// Module ID: 16190
// Function ID: 16191
// Name: context
// Dependencies: [19, 16164, 2]

// Module 16190 (context)
import importAllResult from "noop";

const context = require("noop").createContext(require("useActivityWebViewLock").activityPanelStateContextDefault);
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelStateContext.tsx");

export default context;
