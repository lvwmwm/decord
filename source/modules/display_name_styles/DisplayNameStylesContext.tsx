// Module ID: 4425
// Function ID: 4426
// Name: context
// Dependencies: [19, 2]

// Module 4425 (context)
const context = require("noop").createContext({ overrideSettings: false });
const result = require("set").fileFinishedImporting("modules/display_name_styles/DisplayNameStylesContext.tsx");

export const DisplayNameStylesContext = context;
