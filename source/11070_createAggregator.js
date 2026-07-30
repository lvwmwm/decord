// Module ID: 11070
// Function ID: 11071
// Name: createAggregator
// Dependencies: [599, 11071, 11072, 720]

// Module 11070 (createAggregator)

export default function createAggregator(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return (arg0, arg1) => {
    if (callback(599)(arg0)) {
      let tmpResult = tmp(11071);
    } else {
      tmpResult = tmp(11072);
    }
    return tmpResult(arg0, callback, callback(720)(arg1, 2), dependencyMap ? dependencyMap() : {});
  };
};
