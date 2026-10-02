// Module ID: 8162
// Function ID: 8163
// Name: ObscuredSurfaceContext
// Dependencies: [19, 558, 2]
// Exports: useObscuredSurface

// Module 8162 (ObscuredSurfaceContext)
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const context = react.createContext({ obscured: false });
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/safety_common/ObscuredSurfaceContext.tsx");

export const ObscuredSurfaceContext = context;
export const OBSCURED_VALUE = { obscured: true };
export const useObscuredSurface = () => react.useContext(context);
