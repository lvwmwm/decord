// Module ID: 13676
// Function ID: 13677
// Name: getOwnPropertyDescriptor
// Dependencies: [13677]

// Module 13676 (getOwnPropertyDescriptor)

export default !require("module_13677")(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);
