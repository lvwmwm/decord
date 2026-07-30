// Module ID: 13412
// Function ID: 13413
// Name: getOwnPropertyDescriptor
// Dependencies: [13360, 13361]

// Module 13412 (getOwnPropertyDescriptor)

export default require("getOwnPropertyDescriptor") && require("module_13361")(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);
