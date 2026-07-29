// Module ID: 730
// Function ID: 731
// Name: memoizeCapped
// Dependencies: [731]

// Module 730 (memoizeCapped)

export default function memoizeCapped(arg0) {
  const tmp = cache(731)(arg0, (arg0) => {
    if (500 === cache.size) {
      cache.clear();
    }
    return arg0;
  });
  cache = tmp.cache;
  return tmp;
};
