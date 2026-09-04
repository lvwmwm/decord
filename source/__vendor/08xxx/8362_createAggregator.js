// Module ID: 8362
// Function ID: 8363
// Name: createAggregator
// Dependencies: [596, 8363, 8364, 717]

// Module 8362 (createAggregator)

export default function createAggregator(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return (arg0, arg1) => {
    if (callback(596)(arg0)) {
      let tmpResult = tmp(8363);
    } else {
      tmpResult = tmp(8364);
    }
    return tmpResult(arg0, callback, callback(717)(arg1, 2), dependencyMap ? dependencyMap() : {});
  };
};
