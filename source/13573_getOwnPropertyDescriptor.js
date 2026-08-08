// Module ID: 13573
// Function ID: 13574
// Name: getOwnPropertyDescriptor
// Dependencies: [13574]

// Module 13573 (getOwnPropertyDescriptor)

export default !require("module_13574")(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);
