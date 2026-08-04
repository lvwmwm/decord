// Module ID: 15986
// Function ID: 15987
// Name: context
// Dependencies: [19, 15960, 2]

// Module 15986 (context)
import importAllResult from "noop";

const context = require("noop").createContext(require("useActivityWebViewLock").activityPanelStateContextDefault);
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelStateContext.tsx");

export default context;
