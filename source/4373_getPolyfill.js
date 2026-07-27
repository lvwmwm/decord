// Module ID: 4373
// Function ID: 38803
// Name: getPolyfill
// Dependencies: [4372, 4374]

// Module 4373 (getPolyfill)

export default function getPolyfill() {
  require(4372) /* requirePromise */();
  if ("function" === typeof Promise.allSettled) {
  } else {
    allSettled = require(4374) /* allSettled */;
  }
  return allSettled;
};
