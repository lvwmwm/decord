// Module ID: 8922
// Function ID: 8923
// Name: getIFrameAllowAttributes
// Dependencies: [2]
// Exports: default

// Module 8922 (getIFrameAllowAttributes)
import size from "module_2" /* 2 */;

let closure_0 = ["autoplay", "encrypted-media"];
let closure_1 = ["accelerometer", "gyroscope"];
const result = size.fileFinishedImporting("modules/activities/utils/getIFrameAllowAttributes.tsx");

export default function getIFrameAllowAttributes(allowMotionSensors) {
  let obj = closure_0;
  if (true === allowMotionSensors.allowMotionSensors) {
    const items = [];
    HermesBuiltin.arraySpread(items, closure_1, HermesBuiltin.arraySpread(items, closure_0, 0));
    obj = items;
  }
  return obj.join("; ");
};
