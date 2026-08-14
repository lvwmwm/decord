// Module ID: 13644
// Function ID: 13645
// Name: getOwnPropertyDescriptor
// Dependencies: [13645]

// Module 13644 (getOwnPropertyDescriptor)

export default !require("module_13645")(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);
