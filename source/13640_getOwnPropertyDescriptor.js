// Module ID: 13640
// Function ID: 13641
// Name: getOwnPropertyDescriptor
// Dependencies: [13641]

// Module 13640 (getOwnPropertyDescriptor)

export default !require("module_13641")(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);
