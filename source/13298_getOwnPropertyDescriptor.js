// Module ID: 13298
// Function ID: 102118
// Name: getOwnPropertyDescriptor
// Dependencies: [13299]

// Module 13298 (getOwnPropertyDescriptor)

export default !require("module_13299")(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);
