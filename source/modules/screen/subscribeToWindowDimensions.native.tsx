// Module ID: 11100
// Function ID: 86377
// Name: subscribeToWindowDimensions
// Dependencies: [0, 0]
// Exports: default

// Module 11100 (subscribeToWindowDimensions)
import __exportStarResult1 from "__exportStarResult1";

const result = require("__exportStarResult1").fileFinishedImporting("modules/screen/subscribeToWindowDimensions.native.tsx");

export default function subscribeToWindowDimensions(arg0) {
  let str = arg1;
  let __exportStarResult1 = arg0;
  if (arg1 === undefined) {
    str = "main";
  }
  return __exportStarResult1.subscribe((arg0) => {
    arg0(arg0.byAppEntry[closure_1].windowDimensions, arg0.byAppEntry[closure_1].windowDimensionsIgnoringKeyboard);
  });
};
