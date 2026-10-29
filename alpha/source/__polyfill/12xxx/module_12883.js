// Module ID: 12883
// Function ID: 12884
// Dependencies: [12849]
// Exports: addTracingExtensions

// Module 12883
import _mod12849 from "module_12849" /* 12849 */;


export function addTracingExtensions() {
  const obj = _mod12849;
  const result = obj.registerSpanErrorInstrumentation();
}
