// Module ID: 13625
// Function ID: 13626
// Name: getOwnPropertyDescriptor
// Dependencies: [13573, 13574]

// Module 13625 (getOwnPropertyDescriptor)

export default require("getOwnPropertyDescriptor") && require("module_13574")(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);
