// Module ID: 14103
// Function ID: 14104
// Name: react-native
// Dependencies: [17, 2]
// Exports: preloadImage

// Module 14103 (react-native)
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

const Image = react_native.Image;
const result = size.fileFinishedImporting("modules/image/ImagePreload.native.tsx");

export const preloadImage = function preloadImage(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const prefetchResult = Image.prefetch(arg0);
  const nextPromise = prefetchResult.then(() => {
    let tmpResult;
    if (closure_1 != null) {
      tmpResult = tmp(closure_0);
    }
    return tmpResult;
  });
  nextPromise.catch(() => {

  });
};
