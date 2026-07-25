// Module ID: 11011
// Function ID: 85638
// Name: createAggregator
// Dependencies: [591, 11012, 11013, 697]

// Module 11011 (createAggregator)

export default function createAggregator(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return (arg0, arg1) => {
    if (callback(591)(arg0)) {
      let tmpResult = tmp(11012);
    } else {
      tmpResult = tmp(11013);
    }
    if (dependencyMap) {
      let obj = dependencyMap();
    } else {
      obj = {};
    }
    return tmpResult(arg0, callback, callback(697)(arg1, 2), obj);
  };
};
