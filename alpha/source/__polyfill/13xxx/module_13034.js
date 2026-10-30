// Module ID: 13034
// Function ID: 13035
// Dependencies: [13000]
// Exports: addTracingExtensions

// Module 13034
import _mod13000 from "module_13000" /* 13000 */;


export function addTracingExtensions() {
  const obj = _mod13000;
  const result = obj.registerSpanErrorInstrumentation();
}
