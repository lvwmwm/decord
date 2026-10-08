// Module ID: 11727
// Function ID: 11728
// Name: subscribeToWindowDimensions
// Dependencies: [1497, 2]
// Exports: default

// Module 11727 (subscribeToWindowDimensions)
import DimensionsStore from "DimensionsStore" /* 1497 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/screen/subscribeToWindowDimensions.native.tsx");

export default function subscribeToWindowDimensions(arg0) {
  let closure_0 = arg0;
  let str = arg1;
  if (arg1 === undefined) {
    str = "main";
  }
  return DimensionsStore.subscribe((arg0) => {
    closure_0(arg0.byAppEntry[str].windowDimensions, arg0.byAppEntry[str].windowDimensionsIgnoringKeyboard);
  });
};
