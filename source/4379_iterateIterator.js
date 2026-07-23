// Module ID: 4379
// Function ID: 38807
// Name: iterateIterator
// Dependencies: []

// Module 4379 (iterateIterator)

export default function iterateIterator(next) {
  if (next) {
    if ("function" === typeof next.next) {
      let tmp2;
      if (arguments.length > 1) {
        const tmp = arguments[1];
        tmp2 = tmp;
        if ("function" !== typeof tmp) {
          const prototype = TypeError.prototype;
          const tmp8 = new TypeError("`callback`, if provided, must be a function");
          throw tmp8;
        }
      }
      let items = tmp2;
      if (!tmp2) {
        items = [];
      }
      let iter = next.next();
      if (iter) {
        if (!iter.done) {
          while (true) {
            if (tmp2) {
              let tmp2Result = tmp2(iter.value);
            } else {
              let arr = items.push(iter.value);
            }
            let iter2 = next.next();
            if (!iter2) {
              break;
            } else {
              iter = iter2;
              if (iter2.done) {
                break;
              }
            }
          }
        }
      }
      return tmp2 ? undefined : items;
    }
  }
  throw new TypeError("iterator must be an object with a `next` method");
};
