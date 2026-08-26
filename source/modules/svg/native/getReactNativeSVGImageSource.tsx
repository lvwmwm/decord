// Module ID: 12584
// Function ID: 12585
// Name: getReactNativeSVGImageSource
// Dependencies: [500, 2]
// Exports: default

// Module 12584 (getReactNativeSVGImageSource)
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
