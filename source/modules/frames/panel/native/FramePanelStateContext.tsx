// Module ID: 15770
// Function ID: 121567
// Name: context
// Dependencies: [31, 15744, 2]

// Module 15770 (context)
import importAllResult from "result";

const context = require("result").createContext(require("useActivityWebViewLock").activityPanelStateContextDefault);
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelStateContext.tsx");

export default context;
