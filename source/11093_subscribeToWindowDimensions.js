// Module ID: 11093
// Function ID: 86330
// Name: subscribeToWindowDimensions
// Dependencies: [0, 0]
// Exports: default

// Module 11093 (subscribeToWindowDimensions)
import closure_0 from "result";
import result from "result";

result = result.fileFinishedImporting("modules/screen/subscribeToWindowDimensions.native.tsx");

export default function subscribeToWindowDimensions(arg0) {
  let str = arg1;
  let closure_0 = arg0;
  if (arg1 === undefined) {
    str = "main";
  }
  return closure_0.subscribe((arg0) => {
    arg0(arg0.byAppEntry[closure_1].windowDimensions, arg0.byAppEntry[closure_1].windowDimensionsIgnoringKeyboard);
  });
};
