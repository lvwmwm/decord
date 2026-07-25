// Module ID: 13349
// Function ID: 102218
// Name: getOwnPropertyDescriptor
// Dependencies: [13297, 13298]

// Module 13349 (getOwnPropertyDescriptor)
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor";

if (getOwnPropertyDescriptor) {
  getOwnPropertyDescriptor = require("module_13298")(() => 42 !== Object.defineProperty(() => {

  }, "prototype", { value: 42, writable: false }).prototype);
}

export default getOwnPropertyDescriptor;
