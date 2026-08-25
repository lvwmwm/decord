// Module ID: 11444
// Function ID: 11445
// Name: createAggregator
// Dependencies: [599, 11445, 11446, 720]

// Module 11444 (createAggregator)

export default function createAggregator(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return (arg0, arg1) => {
    if (callback(599)(arg0)) {
      let tmpResult = tmp(11445);
    } else {
      tmpResult = tmp(11446);
    }
    return tmpResult(arg0, callback, callback(720)(arg1, 2), dependencyMap ? dependencyMap() : {});
  };
};
