// Module ID: 13384
// Function ID: 13385
// Name: getOwnPropertyDescriptor
// Dependencies: [13385]

// Module 13384 (getOwnPropertyDescriptor)

export default !require("module_13385")(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);
