// Module ID: 11074
// Function ID: 11075
// Name: createAggregator
// Dependencies: [599, 11075, 11076, 720]

// Module 11074 (createAggregator)

export default function createAggregator(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return (arg0, arg1) => {
    if (callback(599)(arg0)) {
      let tmpResult = tmp(11075);
    } else {
      tmpResult = tmp(11076);
    }
    return tmpResult(arg0, callback, callback(720)(arg1, 2), dependencyMap ? dependencyMap() : {});
  };
};
