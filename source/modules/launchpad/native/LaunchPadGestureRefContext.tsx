// Module ID: 15040
// Function ID: 15041
// Name: context
// Dependencies: [19, 2]

// Module 15040 (context)
import importAllResult from "noop";

const context = require("noop").createContext({ current: "r" });
const result = require("set").fileFinishedImporting("modules/launchpad/native/LaunchPadGestureRefContext.tsx");

export default context;
