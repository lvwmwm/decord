// Module ID: 11350
// Function ID: 11351
// Name: createAggregator
// Dependencies: [599, 11351, 11352, 720]

// Module 11350 (createAggregator)

export default function createAggregator(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return (arg0, arg1) => {
    if (callback(599)(arg0)) {
      let tmpResult = tmp(11351);
    } else {
      tmpResult = tmp(11352);
    }
    return tmpResult(arg0, callback, callback(720)(arg1, 2), dependencyMap ? dependencyMap() : {});
  };
};
