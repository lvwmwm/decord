// Module ID: 16116
// Function ID: 16117
// Name: context
// Dependencies: [19, 16090, 2]

// Module 16116 (context)
import importAllResult from "noop";

const context = require("noop").createContext(require("useActivityWebViewLock").activityPanelStateContextDefault);
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelStateContext.tsx");

export default context;
