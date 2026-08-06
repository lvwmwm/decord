// Module ID: 11201
// Function ID: 11202
// Name: createAggregator
// Dependencies: [599, 11202, 11203, 720]

// Module 11201 (createAggregator)

export default function createAggregator(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return (arg0, arg1) => {
    if (callback(599)(arg0)) {
      let tmpResult = tmp(11202);
    } else {
      tmpResult = tmp(11203);
    }
    return tmpResult(arg0, callback, callback(720)(arg1, 2), dependencyMap ? dependencyMap() : {});
  };
};
