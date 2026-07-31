// Module ID: 15889
// Function ID: 15890
// Name: context
// Dependencies: [19, 15863, 2]

// Module 15889 (context)
import importAllResult from "noop";

const context = require("noop").createContext(require("useActivityWebViewLock").activityPanelStateContextDefault);
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelStateContext.tsx");

export default context;
