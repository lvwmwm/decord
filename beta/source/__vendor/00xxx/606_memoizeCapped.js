// Module ID: 606
// Function ID: 607
// Name: memoizeCapped
// Dependencies: [607]

// Module 606 (memoizeCapped)
import memoize from "memoize" /* 607 */;


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
