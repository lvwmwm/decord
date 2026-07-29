// Module ID: 13365
// Function ID: 13366
// Name: getOwnPropertyDescriptor
// Dependencies: [13366]

// Module 13365 (getOwnPropertyDescriptor)

export default !require("module_13366")(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);
