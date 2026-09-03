// Module ID: 9448
// Function ID: 9449
// Name: getReactNativeSVGImageSource
// Dependencies: [1234, 2]
// Exports: default

// Module 9448 (getReactNativeSVGImageSource)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/svg/native/getReactNativeSVGImageSource.tsx");

export default function getReactNativeSVGImageSource(arg0) {
  let first = arg0;
  if (obj.isAndroid()) {
    const _Array = Array;
    first = arg0;
    if (Array.isArray(arg0)) {
      first = arg0[0];
    }
  }
  return first;
};
