// Module ID: 13480
// Function ID: 13481
// Name: getOwnPropertyDescriptor
// Dependencies: [13481]

// Module 13480 (getOwnPropertyDescriptor)

export default !require("module_13481")(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);
