// Module ID: 13436
// Function ID: 13437
// Name: getOwnPropertyDescriptor
// Dependencies: [13384, 13385]

// Module 13436 (getOwnPropertyDescriptor)

export default require("getOwnPropertyDescriptor") && require("module_13385")(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);
