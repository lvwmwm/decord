// Module ID: 15832
// Function ID: 121939
// Name: context
// Dependencies: [31, 15806, 2]

// Module 15832 (context)
import importAllResult from "result";

const context = require("result").createContext(require("useActivityWebViewLock").activityPanelStateContextDefault);
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelStateContext.tsx");

export default context;
