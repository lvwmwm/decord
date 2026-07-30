// Module ID: 13360
// Function ID: 13361
// Name: getOwnPropertyDescriptor
// Dependencies: [13361]

// Module 13360 (getOwnPropertyDescriptor)

export default !require("module_13361")(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);
