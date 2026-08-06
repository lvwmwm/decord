// Module ID: 16006
// Function ID: 16007
// Name: context
// Dependencies: [19, 15980, 2]

// Module 16006 (context)
import importAllResult from "noop";

const context = require("noop").createContext(require("useActivityWebViewLock").activityPanelStateContextDefault);
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelStateContext.tsx");

export default context;
