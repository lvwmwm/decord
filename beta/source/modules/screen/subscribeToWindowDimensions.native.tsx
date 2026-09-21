// Module ID: 12164
// Function ID: 12165
// Name: subscribeToWindowDimensions
// Dependencies: [1483, 2]
// Exports: default

// Module 12164 (subscribeToWindowDimensions)
import DimensionsStore from "DimensionsStore" /* 1483 */;

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
