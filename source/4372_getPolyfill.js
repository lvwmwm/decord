// Module ID: 4372
// Function ID: 38790
// Name: getPolyfill
// Dependencies: [4371, 4373]

// Module 4372 (getPolyfill)

export default function getPolyfill() {
  require(4371) /* requirePromise */();
  if ("function" === typeof Promise.allSettled) {
  } else {
    allSettled = require(4373) /* allSettled */;
  }
  return allSettled;
};
