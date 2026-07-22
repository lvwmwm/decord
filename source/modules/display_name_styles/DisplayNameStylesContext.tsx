// Module ID: 4359
// Function ID: 38668
// Name: context
// Dependencies: []

// Module 4359 (context)
const context = require(dependencyMap[0]).createContext({ overrideSettings: false });
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesContext.tsx");

export const DisplayNameStylesContext = context;
