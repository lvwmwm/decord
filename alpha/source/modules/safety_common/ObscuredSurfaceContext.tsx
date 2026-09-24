// Module ID: 9063
// Function ID: 9064
// Name: ObscuredSurfaceContext
// Dependencies: [19, 2]
// Exports: useObscuredSurface

// Module 9063 (ObscuredSurfaceContext)
import noop from "module_19" /* 19 */;

const context = noop.createContext({ obscured: false });
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_common/ObscuredSurfaceContext.tsx");

export const ObscuredSurfaceContext = context;
export const OBSCURED_VALUE = { obscured: true };
export const useObscuredSurface = function useObscuredSurface() {
  return noop.useContext(context);
};
