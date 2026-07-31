// Module ID: 9225
// Function ID: 9226
// Name: context
// Dependencies: [19, 2]

// Module 9225 (context)
import importAllResult from "noop";

const context = require("noop").createContext(() => {

});
const result = require("set").fileFinishedImporting("modules/auth/native/components/WideAuthScrollContext.tsx");

export const WideAuthScrollContext = context;
