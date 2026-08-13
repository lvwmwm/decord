// Module ID: 13641
// Function ID: 13642
// Name: getOwnPropertyDescriptor
// Dependencies: [13642]

// Module 13641 (getOwnPropertyDescriptor)

export default !require("module_13642")(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);
