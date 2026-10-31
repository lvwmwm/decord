// Module ID: 14883
// Function ID: 14884
// Name: getReactNativeSVGImageSource
// Dependencies: [1375, 2]
// Exports: default

// Module 14883 (getReactNativeSVGImageSource)
import PlatformUtils from "PlatformUtils" /* 1375 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/svg/native/getReactNativeSVGImageSource.tsx");

export default function getReactNativeSVGImageSource(arg0) {
  let first = arg0;
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const _Array = Array;
    first = arg0;
    if (Array.isArray(arg0)) {
      first = arg0[0];
    }
  }
  return first;
};
