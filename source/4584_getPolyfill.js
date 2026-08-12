// Module ID: 4584
// Function ID: 4585
// Name: getPolyfill
// Dependencies: [4583, 4585]

// Module 4584 (getPolyfill)

export default function getPolyfill() {
  require(4583) /* requirePromise */();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = require(4585) /* allSettled */;
  }
  return allSettled;
};
