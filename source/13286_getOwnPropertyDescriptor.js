// Module ID: 13286
// Function ID: 101986
// Name: getOwnPropertyDescriptor
// Dependencies: [13287]

// Module 13286 (getOwnPropertyDescriptor)

export default !require("module_13287")(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);
