// Module ID: 13696
// Function ID: 13697
// Name: getOwnPropertyDescriptor
// Dependencies: [13644, 13645]

// Module 13696 (getOwnPropertyDescriptor)

export default require("getOwnPropertyDescriptor") && require("module_13645")(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);
