// Module ID: 13342
// Function ID: 102291
// Name: getOwnPropertyDescriptor
// Dependencies: [13343]

// Module 13342 (getOwnPropertyDescriptor)

export default !require("module_13343")(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);
