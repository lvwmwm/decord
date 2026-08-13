// Module ID: 16201
// Function ID: 16202
// Name: context
// Dependencies: [19, 16175, 2]

// Module 16201 (context)
import importAllResult from "noop";

const context = require("noop").createContext(require("useActivityWebViewLock").activityPanelStateContextDefault);
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelStateContext.tsx");

export default context;
