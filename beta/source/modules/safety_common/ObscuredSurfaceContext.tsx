// Module ID: 8983
// Function ID: 8984
// Name: ObscuredSurfaceContext
// Dependencies: [19, 2]
// Exports: useObscuredSurface

// Module 8983 (ObscuredSurfaceContext)
import noop from "module_19" /* 19 */;

const context = noop.createContext({ obscured: false });
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_common/ObscuredSurfaceContext.tsx");

export const ObscuredSurfaceContext = context;
export const OBSCURED_VALUE = { obscured: true };
export const useObscuredSurface = function useObscuredSurface() {
  return noop.useContext(context);
};
