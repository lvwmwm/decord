// Module ID: 8628
// Function ID: 68362
// Name: context
// Dependencies: [31, 2]
// Exports: useObscuredSurface

// Module 8628 (context)
import importAllResult from "result";

const context = importAllResult.createContext({ obscured: false });
const result = require("set").fileFinishedImporting("modules/safety_common/ObscuredSurfaceContext.tsx");

export const ObscuredSurfaceContext = context;
export const OBSCURED_VALUE = { obscured: true };
export const useObscuredSurface = function useObscuredSurface() {
  return importAllResult.useContext(context);
};
