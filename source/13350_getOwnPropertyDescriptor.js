// Module ID: 13350
// Function ID: 102223
// Name: getOwnPropertyDescriptor
// Dependencies: [13298, 13299]

// Module 13350 (getOwnPropertyDescriptor)
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor";

if (getOwnPropertyDescriptor) {
  getOwnPropertyDescriptor = require("module_13299")(() => 42 !== Object.defineProperty(() => {

  }, "prototype", { value: 42, writable: false }).prototype);
}

export default getOwnPropertyDescriptor;
