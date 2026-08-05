// Module ID: 13452
// Function ID: 13453
// Name: getOwnPropertyDescriptor
// Dependencies: [13453]

// Module 13452 (getOwnPropertyDescriptor)

export default !require("module_13453")(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);
