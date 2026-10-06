// Module ID: 360
// Function ID: 361
// Name: shouldUseTurboAnimatedModule
// Dependencies: [27]
// Exports: default

// Module 360 (shouldUseTurboAnimatedModule)
import javaScriptFlagGetterAll from "javaScriptFlagGetter" /* 27 */;


export default function shouldUseTurboAnimatedModule() {
  const obj = javaScriptFlagGetterAll;
  const result = obj.cxxNativeAnimatedEnabled();
  return false;
};
