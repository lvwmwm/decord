// Module ID: 15966
// Function ID: 15967
// Name: context
// Dependencies: [19, 15940, 2]

// Module 15966 (context)
import importAllResult from "noop";

const context = require("noop").createContext(require("useActivityWebViewLock").activityPanelStateContextDefault);
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelStateContext.tsx");

export default context;
