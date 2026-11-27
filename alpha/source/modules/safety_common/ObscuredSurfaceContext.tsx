// Module ID: 8790
// Function ID: 8791
// Name: ObscuredSurfaceContext
// Dependencies: [19, 2]
// Exports: useObscuredSurface

// Module 8790 (ObscuredSurfaceContext)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const context = react.createContext({ obscured: false });
const result = size.fileFinishedImporting("modules/safety_common/ObscuredSurfaceContext.tsx");

export const ObscuredSurfaceContext = context;
export const OBSCURED_VALUE = { obscured: true };
export function useObscuredSurface() {
  return react.useContext(context);
}
