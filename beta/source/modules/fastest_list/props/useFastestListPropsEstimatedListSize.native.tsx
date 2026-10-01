// Module ID: 6481
// Function ID: 6482
// Name: useFastestListPropsEstimatedListSize
// Dependencies: [32, 19, 1479, 2]
// Exports: default

// Module 6481 (useFastestListPropsEstimatedListSize)
import useWindowDimensions from "useWindowDimensions" /* 1479 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

let size = size_mod;
const result = size.fileFinishedImporting("modules/fastest_list/props/useFastestListPropsEstimatedListSize.native.tsx");

export default function useFastestListPropsEstimatedListSize(arg0) {
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
};
