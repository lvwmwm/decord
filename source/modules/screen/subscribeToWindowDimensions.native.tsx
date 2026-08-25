// Module ID: 11555
// Function ID: 11556
// Name: subscribeToWindowDimensions
// Dependencies: [1495, 2]
// Exports: default

// Module 11555 (subscribeToWindowDimensions)
import closure_0 from "getDimensionsStoreStateForEntry" /* 1495 */;

const result = require("set").fileFinishedImporting("modules/screen/subscribeToWindowDimensions.native.tsx");

export default function subscribeToWindowDimensions(arg0) {
  closure_0 = arg0;
  let str = arg1;
  if (arg1 === undefined) {
    str = "main";
  }
  return closure_0.subscribe((arg0) => {
    callback(arg0.byAppEntry[str].windowDimensions, arg0.byAppEntry[str].windowDimensionsIgnoringKeyboard);
  });
};
