// Module ID: 9840
// Function ID: 9841
// Dependencies: [9806]
// Exports: addTracingExtensions

// Module 9840
import _mod9806 from "module_9806" /* 9806 */;


export function addTracingExtensions() {
  const obj = _mod9806;
  const result = obj.registerSpanErrorInstrumentation();
}
