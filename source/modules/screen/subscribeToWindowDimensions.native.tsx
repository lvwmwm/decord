// Module ID: 11137
// Function ID: 86616
// Name: subscribeToWindowDimensions
// Dependencies: [1451, 2]
// Exports: default

// Module 11137 (subscribeToWindowDimensions)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const result = require("set").fileFinishedImporting("modules/screen/subscribeToWindowDimensions.native.tsx");

export default function subscribeToWindowDimensions(arg0) {
  let str = arg1;
  let _createForOfIteratorHelperLoose = arg0;
  if (arg1 === undefined) {
    str = "main";
  }
  return _createForOfIteratorHelperLoose.subscribe((arg0) => {
    callback(arg0.byAppEntry[str].windowDimensions, arg0.byAppEntry[str].windowDimensionsIgnoringKeyboard);
  });
};
