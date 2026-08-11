// Module ID: 16133
// Function ID: 16134
// Name: context
// Dependencies: [19, 16107, 2]

// Module 16133 (context)
import importAllResult from "noop";

const context = require("noop").createContext(require("useActivityWebViewLock").activityPanelStateContextDefault);
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelStateContext.tsx");

export default context;
