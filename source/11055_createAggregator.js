// Module ID: 11055
// Function ID: 86018
// Name: createAggregator
// Dependencies: [591, 11056, 11057, 697]

// Module 11055 (createAggregator)

export default function createAggregator(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return (arg0, arg1) => {
    if (callback(591)(arg0)) {
      let tmpResult = tmp(11056);
    } else {
      tmpResult = tmp(11057);
    }
    if (dependencyMap) {
      let obj = dependencyMap();
    } else {
      obj = {};
    }
    return tmpResult(arg0, callback, callback(697)(arg1, 2), obj);
  };
};
