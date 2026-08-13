// Module ID: 11334
// Function ID: 11335
// Name: createAggregator
// Dependencies: [599, 11335, 11336, 720]

// Module 11334 (createAggregator)

export default function createAggregator(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return (arg0, arg1) => {
    if (callback(599)(arg0)) {
      let tmpResult = tmp(11335);
    } else {
      tmpResult = tmp(11336);
    }
    return tmpResult(arg0, callback, callback(720)(arg1, 2), dependencyMap ? dependencyMap() : {});
  };
};
