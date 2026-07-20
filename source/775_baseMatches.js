// Module ID: 775
// Function ID: 8848
// Name: baseMatches
// Dependencies: []

// Module 775 (baseMatches)

export default function baseMatches(arg0) {
  const require = arg0;
  const arr = require(dependencyMap[0])(arg0);
  const dependencyMap = arr;
  if (1 == arr.length) {
    if (arr[0][2]) {
      let fn = require(dependencyMap[1])(arr[0][0], arr[0][1]);
    }
    return fn;
  }
  fn = (arg0) => {
    let tmp = arg0 === arg0;
    if (!tmp) {
      tmp = arg0(arr[2])(arg0, arg0, arr);
    }
    return tmp;
  };
};
