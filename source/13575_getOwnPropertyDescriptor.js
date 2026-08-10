// Module ID: 13575
// Function ID: 13576
// Name: getOwnPropertyDescriptor
// Dependencies: [13576]

// Module 13575 (getOwnPropertyDescriptor)

export default !require("module_13576")(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);
