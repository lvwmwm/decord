// Module ID: 8857
// Function ID: 8858
// Name: context
// Dependencies: [19, 2]
// Exports: useObscuredSurface

// Module 8857 (context)
import importAllResult from "noop" /* 19 */;

let c0 = importAllResult;
const context = importAllResult.createContext({ obscured: false });
const result = require("set").fileFinishedImporting("modules/safety_common/ObscuredSurfaceContext.tsx");

export const ObscuredSurfaceContext = context;
export const OBSCURED_VALUE = { obscured: true };
export const useObscuredSurface = function useObscuredSurface() {
  return importAllResult.useContext(context);
};
