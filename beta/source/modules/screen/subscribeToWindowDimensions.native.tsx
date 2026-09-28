// Module ID: 11516
// Function ID: 11517
// Name: subscribeToWindowDimensions
// Dependencies: [1480, 2]
// Exports: default

// Module 11516 (subscribeToWindowDimensions)
import DimensionsStore from "DimensionsStore" /* 1480 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/screen/subscribeToWindowDimensions.native.tsx");

export default function subscribeToWindowDimensions(arg0) {
  closure_0 = arg0;
  if (arg1 === undefined) {
    const str = "main";
  }
  return DimensionsStore.subscribe((arg0) => {
    closure_0(arg0.byAppEntry[str].windowDimensions, arg0.byAppEntry[str].windowDimensionsIgnoringKeyboard);
  });
};
