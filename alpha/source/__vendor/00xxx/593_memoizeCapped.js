// Module ID: 593
// Function ID: 594
// Name: memoizeCapped
// Dependencies: [594]

// Module 593 (memoizeCapped)
import memoize from "memoize" /* 594 */;


export default function memoizeCapped(arg0) {
  const tmp = memoize(arg0, (arg0) => {
    const obj = cache;
    if (500 === cache.size) {
      obj.clear();
    }
    return arg0;
  });
  const cache = tmp.cache;
  return tmp;
};
