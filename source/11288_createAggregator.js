// Module ID: 11288
// Function ID: 11289
// Name: createAggregator
// Dependencies: [599, 11289, 11290, 720]

// Module 11288 (createAggregator)

export default function createAggregator(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return (arg0, arg1) => {
    if (callback(599)(arg0)) {
      let tmpResult = tmp(11289);
    } else {
      tmpResult = tmp(11290);
    }
    return tmpResult(arg0, callback, callback(720)(arg1, 2), dependencyMap ? dependencyMap() : {});
  };
};
