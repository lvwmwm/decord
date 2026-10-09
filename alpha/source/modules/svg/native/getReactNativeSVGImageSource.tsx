// Module ID: 13104
// Function ID: 13105
// Name: getReactNativeSVGImageSource
// Dependencies: [1382, 2]
// Exports: default

// Module 13104 (getReactNativeSVGImageSource)
import PlatformUtils from "PlatformUtils" /* 1382 */;
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
