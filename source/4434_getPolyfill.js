// Module ID: 4434
// Function ID: 4435
// Name: getPolyfill
// Dependencies: [4433, 4435]

// Module 4434 (getPolyfill)

export default function getPolyfill() {
  require(4433) /* requirePromise */();
  if (typeof Promise.allSettled === "fileFinishedImporting") {
  } else {
    allSettled = require(4435) /* allSettled */;
  }
  return allSettled;
};
