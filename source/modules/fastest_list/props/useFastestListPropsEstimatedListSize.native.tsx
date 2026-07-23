// Module ID: 9249
// Function ID: 72314
// Name: useFastestListPropsEstimatedListSize
// Dependencies: [57, 31, 1450, 2]
// Exports: default

// Module 9249 (useFastestListPropsEstimatedListSize)
import _slicedToArray from "_slicedToArray";
import result from "result";

const require = arg1;
const result = require("useWindowDimensions").fileFinishedImporting("modules/fastest_list/props/useFastestListPropsEstimatedListSize.native.tsx");

export default function useFastestListPropsEstimatedListSize(arg0) {
  let dependencyMap;
  let require;
  ({ estimatedListSize: require, horizontal: dependencyMap } = arg0);
  return callback(React.useState(() => {
    if ("windowSize" === closure_0) {
      const size = outer1_0(outer1_1[2]).getWindowDimensions();
      const obj = outer1_0(outer1_1[2]);
    } else {
      return closure_0;
    }
  }), 2)[0];
};
