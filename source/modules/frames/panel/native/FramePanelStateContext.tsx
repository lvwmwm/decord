// Module ID: 15953
// Function ID: 15954
// Name: context
// Dependencies: [19, 15927, 2]

// Module 15953 (context)
import importAllResult from "noop";

const context = require("noop").createContext(require("useActivityWebViewLock").activityPanelStateContextDefault);
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelStateContext.tsx");

export default context;
