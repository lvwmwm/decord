// Module ID: 13084
// Function ID: 13085
// Dependencies: [13050]
// Exports: addTracingExtensions

// Module 13084
import _mod13050 from "module_13050" /* 13050 */;


export function addTracingExtensions() {
  const obj = _mod13050;
  const result = obj.registerSpanErrorInstrumentation();
}
