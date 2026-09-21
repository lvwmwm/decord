// Module ID: 598
// Function ID: 599
// Dependencies: [599]

// Module 598
import memoize from "memoize" /* 599 */;


export default function memoizeCapped(arg0) {
  const tmp = memoize(arg0, (arg0) => {
    if (500 === cache.size) {
      cache.clear();
    }
    return arg0;
  });
  const cache = tmp.cache;
  return tmp;
};
