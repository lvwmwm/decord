// Module ID: 16192
// Function ID: 16193
// Name: context
// Dependencies: [19, 16166, 2]

// Module 16192 (context)
import importAllResult from "noop";

const context = require("noop").createContext(require("useActivityWebViewLock").activityPanelStateContextDefault);
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelStateContext.tsx");

export default context;
