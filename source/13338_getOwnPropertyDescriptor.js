// Module ID: 13338
// Function ID: 102091
// Name: getOwnPropertyDescriptor
// Dependencies: [13286, 13287]

// Module 13338 (getOwnPropertyDescriptor)
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor";

if (getOwnPropertyDescriptor) {
  getOwnPropertyDescriptor = require("module_13287")(() => 42 !== Object.defineProperty(() => {

  }, "prototype", { value: 42, writable: false }).prototype);
}

export default getOwnPropertyDescriptor;
