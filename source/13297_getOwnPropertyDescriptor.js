// Module ID: 13297
// Function ID: 102113
// Name: getOwnPropertyDescriptor
// Dependencies: [13298]

// Module 13297 (getOwnPropertyDescriptor)

export default !require("module_13298")(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);
