// Module ID: 13005
// Function ID: 13006
// Name: subscribeToWindowDimensions
// Dependencies: [1496, 2]
// Exports: default

// Module 13005 (subscribeToWindowDimensions)
import DimensionsStore from "DimensionsStore" /* 1496 */;
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
