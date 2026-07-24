// Module ID: 8615
// Function ID: 68328
// Name: retryMeasurements
// Dependencies: [5, 22, 2]
// Exports: getMeasurements

// Module 8615 (retryMeasurements)
import asyncGeneratorStep from "asyncGeneratorStep";

function retryMeasurements() {
  return _retryMeasurements(...arguments);
}
function _retryMeasurements() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("set").fileFinishedImporting("design/components/Tooltip/native/MeasurementUtils.native.tsx");

export const getMeasurements = function getMeasurements(surfaceRef, arg1) {
  let flag = arg1;
  let closure_0 = surfaceRef;
  if (arg1 === undefined) {
    flag = false;
  }
  return new Promise((arg0, arg1) => {
    let obj = null;
    if (flag) {
      obj = { x: 0, y: 0, width: 0, height: 0 };
    }
    outer1_3(closure_0, arg0, arg1, obj);
  });
};
