// Module ID: 594
// Function ID: 595
// Name: memoizeCapped
// Dependencies: [595]

// Module 594 (memoizeCapped)
import memoize from "memoize" /* 595 */;


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
