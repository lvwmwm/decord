// Module ID: 13503
// Function ID: 13504
// Name: getOwnPropertyDescriptor
// Dependencies: [13504]

// Module 13503 (getOwnPropertyDescriptor)

export default !require("module_13504")(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);
