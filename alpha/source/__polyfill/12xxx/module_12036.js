// Module ID: 12036
// Function ID: 12037
// Dependencies: [12002]
// Exports: addTracingExtensions

// Module 12036
import _mod12002 from "module_12002" /* 12002 */;


export const addTracingExtensions = function addTracingExtensions() {
  const obj = _mod12002;
  const result = obj.registerSpanErrorInstrumentation();
};
