// Module ID: 15376
// Function ID: 15377
// Name: ReactCompilerGating
// Dependencies: [2]
// Exports: isReactCompilerBuild, isReactCompilerEnabled

// Module 15376 (ReactCompilerGating)
import size from "module_2" /* 2 */;

let c0 = false;
const result = size.fileFinishedImporting("modules/react_compiler/ReactCompilerGating.tsx");

export function isReactCompilerEnabled() {
  return false;
}
export function isReactCompilerBuild() {
  return c0;
}
