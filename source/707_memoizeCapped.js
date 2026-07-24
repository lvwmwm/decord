// Module ID: 707
// Function ID: 8720
// Name: memoizeCapped
// Dependencies: [708]

// Module 707 (memoizeCapped)

export default function memoizeCapped(arg0) {
  const tmp = cache(708)(arg0, (arg0) => {
    if (500 === cache.size) {
      cache.clear();
    }
    return arg0;
  });
  cache = tmp.cache;
  return tmp;
};
