// Module ID: 11719
// Function ID: 11720
// Name: subscribeToWindowDimensions
// Dependencies: [1480, 2]
// Exports: default

// Module 11719 (subscribeToWindowDimensions)
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
