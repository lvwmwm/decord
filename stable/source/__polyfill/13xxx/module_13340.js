// Module ID: 13340
// Function ID: 13341
// Dependencies: [13306]
// Exports: addTracingExtensions

// Module 13340
import _mod13306 from "module_13306" /* 13306 */;


export function addTracingExtensions() {
  const obj = _mod13306;
  const result = obj.registerSpanErrorInstrumentation();
}
