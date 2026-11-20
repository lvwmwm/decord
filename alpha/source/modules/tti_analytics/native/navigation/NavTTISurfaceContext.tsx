// Module ID: 10306
// Function ID: 10307
// Name: NavTTISurfaceContext
// Dependencies: [19, 2]
// Exports: useNavTTISurface

// Module 10306 (NavTTISurfaceContext)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const context = react.createContext(null);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavTTISurfaceContext.tsx");

export const NavTTISurfaceContext = context;
export function useNavTTISurface() {
  return react.useContext(context);
}
