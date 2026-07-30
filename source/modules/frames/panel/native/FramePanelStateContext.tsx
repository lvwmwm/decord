// Module ID: 15861
// Function ID: 15862
// Name: context
// Dependencies: [19, 15835, 2]

// Module 15861 (context)
import importAllResult from "noop";

const context = require("noop").createContext(require("useActivityWebViewLock").activityPanelStateContextDefault);
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelStateContext.tsx");

export default context;
