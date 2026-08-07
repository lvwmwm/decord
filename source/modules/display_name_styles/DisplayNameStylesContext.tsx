// Module ID: 4533
// Function ID: 4534
// Name: context
// Dependencies: [19, 2]

// Module 4533 (context)
const context = require("noop").createContext({ overrideSettings: false });
const result = require("set").fileFinishedImporting("modules/display_name_styles/DisplayNameStylesContext.tsx");

export const DisplayNameStylesContext = context;
