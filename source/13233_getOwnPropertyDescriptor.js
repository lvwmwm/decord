// Module ID: 13233
// Function ID: 101659
// Name: getOwnPropertyDescriptor
// Dependencies: [13234]

// Module 13233 (getOwnPropertyDescriptor)

export default !require("module_13234")(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);
