// Module ID: 11342
// Function ID: 11343
// Name: createAggregator
// Dependencies: [599, 11343, 11344, 720]

// Module 11342 (createAggregator)

export default function createAggregator(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return (arg0, arg1) => {
    if (callback(599)(arg0)) {
      let tmpResult = tmp(11343);
    } else {
      tmpResult = tmp(11344);
    }
    return tmpResult(arg0, callback, callback(720)(arg1, 2), dependencyMap ? dependencyMap() : {});
  };
};
