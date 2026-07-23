// Module ID: 4363
// Function ID: 38700
// Name: context
// Dependencies: [31, 2]

// Module 4363 (context)
const context = require("result").createContext({ overrideSettings: false });
const result = require("set").fileFinishedImporting("modules/display_name_styles/DisplayNameStylesContext.tsx");

export const DisplayNameStylesContext = context;
