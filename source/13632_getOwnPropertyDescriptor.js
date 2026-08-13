// Module ID: 13632
// Function ID: 13633
// Name: getOwnPropertyDescriptor
// Dependencies: [13633]

// Module 13632 (getOwnPropertyDescriptor)

export default !require("module_13633")(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);
