// Module ID: 13447
// Function ID: 13448
// Name: getOwnPropertyDescriptor
// Dependencies: [13448]

// Module 13447 (getOwnPropertyDescriptor)

export default !require("module_13448")(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);
