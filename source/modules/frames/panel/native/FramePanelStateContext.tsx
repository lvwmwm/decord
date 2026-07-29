// Module ID: 15867
// Function ID: 15868
// Name: context
// Dependencies: [19, 15841, 2]

// Module 15867 (context)
import importAllResult from "noop";

const context = require("noop").createContext(require("useActivityWebViewLock").activityPanelStateContextDefault);
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelStateContext.tsx");

export default context;
