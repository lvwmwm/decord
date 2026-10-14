// Module ID: 605
// Function ID: 606
// Name: memoizeCapped
// Dependencies: [606]

// Module 605 (memoizeCapped)
import memoize from "memoize" /* 606 */;


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
