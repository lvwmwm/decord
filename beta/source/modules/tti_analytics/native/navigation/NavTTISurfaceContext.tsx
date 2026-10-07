// Module ID: 16481
// Function ID: 16482
// Name: NavTTISurfaceContext
// Dependencies: [19, 558, 2]
// Exports: useNavTTISurface

// Module 16481 (NavTTISurfaceContext)
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const context = react.createContext(null);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavTTISurfaceContext.tsx");

export const NavTTISurfaceContext = context;
export const useNavTTISurface = () => react.useContext(context);
