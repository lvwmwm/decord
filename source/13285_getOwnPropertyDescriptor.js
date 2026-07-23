// Module ID: 13285
// Function ID: 101764
// Name: getOwnPropertyDescriptor
// Dependencies: [13233, 13234]

// Module 13285 (getOwnPropertyDescriptor)
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor";

if (getOwnPropertyDescriptor) {
  getOwnPropertyDescriptor = require("module_13234")(() => 42 !== Object.defineProperty(() => {

  }, "prototype", { value: 42, writable: false }).prototype);
}

export default getOwnPropertyDescriptor;
