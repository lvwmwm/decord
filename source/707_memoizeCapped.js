// Module ID: 707
// Function ID: 8714
// Name: memoizeCapped
// Dependencies: []

// Module 707 (memoizeCapped)

export default function memoizeCapped(arg0) {
  const tmp = require(dependencyMap[0])(arg0, (arg0) => {
    if (500 === cache.size) {
      cache.clear();
    }
    return arg0;
  });
  const require = tmp.cache;
  return tmp;
};
