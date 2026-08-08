// Module ID: 8500
// Function ID: 8501
// Name: context
// Dependencies: [19, 2]

// Module 8500 (context)
import importAllResult from "noop";

const context = require("noop").createContext(() => {

});
const result = require("set").fileFinishedImporting("modules/auth/native/components/WideAuthScrollContext.tsx");

export const WideAuthScrollContext = context;
