// Module ID: 9760
// Function ID: 9761
// Dependencies: [9726]
// Exports: addTracingExtensions

// Module 9760
import _mod9726 from "module_9726" /* 9726 */;


export function addTracingExtensions() {
  const obj = _mod9726;
  const result = obj.registerSpanErrorInstrumentation();
}
