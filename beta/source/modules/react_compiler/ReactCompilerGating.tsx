// Module ID: 16308
// Function ID: 16309
// Name: ReactCompilerGating
// Dependencies: [2]
// Exports: isReactCompilerBuild, isReactCompilerEnabled

// Module 16308 (ReactCompilerGating)
import size from "module_2" /* 2 */;

let c0 = false;
const result = size.fileFinishedImporting("modules/react_compiler/ReactCompilerGating.tsx");

export function isReactCompilerEnabled() {
  return false;
}
export function isReactCompilerBuild() {
  return c0;
}
