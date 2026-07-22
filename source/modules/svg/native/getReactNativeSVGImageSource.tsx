// Module ID: 11942
// Function ID: 92345
// Name: getReactNativeSVGImageSource
// Dependencies: []
// Exports: default

// Module 11942 (getReactNativeSVGImageSource)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/svg/native/getReactNativeSVGImageSource.tsx");

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
