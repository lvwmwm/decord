// Module ID: 8432
// Function ID: 8433
// Name: createAggregator
// Dependencies: [514, 8433, 8434, 584]

// Module 8432 (createAggregator)

export default function createAggregator(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return (arg0, arg1) => {
    if (callback(514)(arg0)) {
      let tmpResult = tmp(8433);
    } else {
      tmpResult = tmp(8434);
    }
    return tmpResult(arg0, callback, callback(584)(arg1, 2), dependencyMap ? dependencyMap() : {});
  };
};
