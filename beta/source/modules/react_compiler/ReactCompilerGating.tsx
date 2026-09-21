// Module ID: 558
// Function ID: 559
// Name: ReactCompilerGating
// Dependencies: [559, 2]
// Exports: isReactCompilerBuild, isReactCompilerEnabled

// Module 558 (ReactCompilerGating)
import NativeStartupFlagsModule from "NativeStartupFlagsModule" /* 559 */;

let closure_0 = true === NativeStartupFlagsModule.reactCompilerEnabled();
const size = fn(2);
const result = size.fileFinishedImporting("modules/react_compiler/ReactCompilerGating.tsx");

export function isReactCompilerEnabled() {
  return closure_0;
}
export function isReactCompilerBuild() {
  return true;
}
