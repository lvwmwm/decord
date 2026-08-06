// Module ID: 13489
// Function ID: 13490
// Name: getOwnPropertyDescriptor
// Dependencies: [13490]

// Module 13489 (getOwnPropertyDescriptor)

export default !require("module_13490")(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);
