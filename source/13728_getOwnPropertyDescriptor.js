// Module ID: 13728
// Function ID: 13729
// Name: getOwnPropertyDescriptor
// Dependencies: [13676, 13677]

// Module 13728 (getOwnPropertyDescriptor)

export default require("getOwnPropertyDescriptor") && require("module_13677")(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);
