// Module ID: 9237
// Function ID: 72237
// Name: useFastestListPropsEstimatedListSize
// Dependencies: []
// Exports: default

// Module 9237 (useFastestListPropsEstimatedListSize)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/fastest_list/props/useFastestListPropsEstimatedListSize.native.tsx");

export default function useFastestListPropsEstimatedListSize(arg0) {
  ({ estimatedListSize: closure_0, horizontal: closure_1 } = arg0);
  return callback(React.useState(() => {
    if ("windowSize" === callback) {
      const size = callback(closure_1[2]).getWindowDimensions();
      const obj = callback(closure_1[2]);
    } else {
      return callback;
    }
  }), 2)[0];
};
