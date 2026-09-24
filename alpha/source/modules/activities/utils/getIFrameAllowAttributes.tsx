// Module ID: 9818
// Function ID: 9819
// Name: getIFrameAllowAttributes
// Dependencies: [2]
// Exports: default

// Module 9818 (getIFrameAllowAttributes)
import size from "module_2" /* 2 */;

let closure_0 = ["autoplay", "encrypted-media"];
let closure_1 = ["accelerometer", "gyroscope"];
const result = size.fileFinishedImporting("modules/activities/utils/getIFrameAllowAttributes.tsx");

export default function getIFrameAllowAttributes(allowMotionSensors) {
  let obj = closure_0;
  if (true === allowMotionSensors.allowMotionSensors) {
    const items = [];
    HermesBuiltin.arraySpread(closure_1, HermesBuiltin.arraySpread(tmp, 0));
    obj = items;
  }
  return obj.join("; ");
};
