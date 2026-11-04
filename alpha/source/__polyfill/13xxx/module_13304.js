// Module ID: 13304
// Function ID: 13305
// Dependencies: [13270]
// Exports: addTracingExtensions

// Module 13304
import _mod13270 from "module_13270" /* 13270 */;


export function addTracingExtensions() {
  const obj = _mod13270;
  const result = obj.registerSpanErrorInstrumentation();
}
