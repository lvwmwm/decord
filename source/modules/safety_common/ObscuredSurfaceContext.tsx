// Module ID: 9245
// Function ID: 9246
// Name: context
// Dependencies: [19, 2]
// Exports: useObscuredSurface

// Module 9245 (context)
import importAllResult from "noop";

let c0 = importAllResult;
const context = importAllResult.createContext({ obscured: false });
const result = require("set").fileFinishedImporting("modules/safety_common/ObscuredSurfaceContext.tsx");

export const ObscuredSurfaceContext = context;
export const OBSCURED_VALUE = { obscured: true };
export const useObscuredSurface = function useObscuredSurface() {
  return importAllResult.useContext(context);
};
