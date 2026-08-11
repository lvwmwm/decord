// Module ID: 13583
// Function ID: 13584
// Name: getOwnPropertyDescriptor
// Dependencies: [13584]

// Module 13583 (getOwnPropertyDescriptor)

export default !require("module_13584")(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);
