// Module ID: 12908
// Function ID: 12909
// Name: subscribeToWindowDimensions
// Dependencies: [1495, 2]
// Exports: default

// Module 12908 (subscribeToWindowDimensions)
import DimensionsStore from "DimensionsStore" /* 1495 */;
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
