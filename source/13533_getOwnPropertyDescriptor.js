// Module ID: 13533
// Function ID: 13534
// Name: getOwnPropertyDescriptor
// Dependencies: [13481, 13482]

// Module 13533 (getOwnPropertyDescriptor)

export default require("getOwnPropertyDescriptor") && require("module_13482")(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);
