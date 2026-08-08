// Module ID: 16107
// Function ID: 16108
// Name: context
// Dependencies: [19, 16081, 2]

// Module 16107 (context)
import importAllResult from "noop";

const context = require("noop").createContext(require("useActivityWebViewLock").activityPanelStateContextDefault);
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelStateContext.tsx");

export default context;
