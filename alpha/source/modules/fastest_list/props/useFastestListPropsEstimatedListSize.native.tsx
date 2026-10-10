// Module ID: 6748
// Function ID: 6749
// Name: useFastestListPropsEstimatedListSize
// Dependencies: [32, 19, 558, 576, 1497, 2]

// Module 6748 (useFastestListPropsEstimatedListSize)
import useWindowDimensions from "useWindowDimensions" /* 1497 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFastestListPropsEstimatedListSize(estimatedListSize) {
  let horizontal;
  let obj = estimatedListSize(horizontal[3]);
  const cResult = obj.c(3);
  estimatedListSize = estimatedListSize.estimatedListSize;
  horizontal = estimatedListSize.horizontal;
  if (cResult[0] === estimatedListSize) {
    let tmp2;
    if (cResult[1] === horizontal) {
      tmp2 = cResult[2];
    }
    return _slicedToArray(react.useState(tmp2), 1)[0];
  }
  const fn = function o() {
    let tmp = estimatedListSize;
    if ("windowSize" === estimatedListSize) {
      const obj = useWindowDimensions;
      size = obj.getWindowDimensions();
      tmp = horizontal ? size.width : size.height;
    }
    return tmp;
  };
  cResult[0] = estimatedListSize;
  cResult[1] = horizontal;
  cResult[2] = fn;
  tmp2 = fn;
}) : (function useFastestListPropsEstimatedListSize(arg0) {
  ({ estimatedListSize: require, horizontal: dependencyMap } = arg0);
  let tmp = _slicedToArray(react.useState(() => {
    let tmp = require;
    if ("windowSize" === require) {
      const obj = useWindowDimensions;
      size = obj.getWindowDimensions();
      tmp = dependencyMap ? size.width : size.height;
    }
    return tmp;
  }), 2);
  return tmp[0];
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/fastest_list/props/useFastestListPropsEstimatedListSize.native.tsx");

export default tmp2;
