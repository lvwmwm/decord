// Module ID: 13394
// Function ID: 102396
// Name: getOwnPropertyDescriptor
// Dependencies: [13342, 13343]

// Module 13394 (getOwnPropertyDescriptor)
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor";

if (getOwnPropertyDescriptor) {
  getOwnPropertyDescriptor = require("module_13343")(() => 42 !== Object.defineProperty(() => {

  }, "prototype", { value: 42, writable: false }).prototype);
}

export default getOwnPropertyDescriptor;
